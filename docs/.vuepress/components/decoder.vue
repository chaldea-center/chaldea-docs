<template>
  <div>
    <span>
      <label for="file-chooser" class="file-btn"> 加载文件 </label>
      <input type="file" id="file-chooser" @change="decodeFile" />
    </span>
    <label>
      或输入/粘贴文本
      <textarea v-model="vin" rows="10" placeholder="请输入文本或加载文件" />
    </label>

    <label>
      输出结果
      <textarea
        v-model="vout"
        rows="10"
        placeholder="复制结果或保存至文件"
        readonly
      />
    </label>
    <span>
      <button @click="decode">解码</button>
      <button @click="encode">编码</button>
      <button @click="format">格式化JSON</button>
      <button @click="downloadOutput">结果另存为</button>
    </span>
    <p class="error-hint">{{ errorHint }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vin: "",
      vout: "",
      errorHint: "",
    };
  },
  methods: {
    encode() {
      try {
        this.errorHint = null;
        this.vout = window.btoa(unescape(encodeURIComponent(this.vin)));
      } catch (error) {
        this.errorHint = error;
      }
    },
    decode() {
      try {
        this.errorHint = null;
        this.vout = unescape(
          decodeURIComponent(escape(window.atob(decodeURIComponent(this.vin))))
        );
      } catch (error) {
        this.errorHint = error;
      }
    },
    format() {
      try {
        this.errorHint = null;
        this.vout = JSON.stringify(JSON.parse(this.vout), null, 2);
      } catch (error) {
        this.errorHint = error;
      }
    },
    decodeFile(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      const $this = this;
      this.errorHint = null;
      reader.onload = (event) => {
        $this.vin = event.target.result;
        $this.decode(event.target.result);
      };
      reader.onerror = () => {
        this.errorHint = "failed reading file";
      };
      reader.readAsText(file, "utf-8");
    },
    downloadOutput() {
      let downLink = document.createElement("a");
      downLink.download = "result.json";
      let blob = new Blob([this.vout]);
      downLink.href = URL.createObjectURL(blob);
      document.body.appendChild(downLink);
      downLink.click();
      document.body.removeChild(downLink);
    },
  },
};
</script>

<style>
textarea {
  width: 100%;
  padding: 8px 12px;
  margin: 8px 0;
  box-sizing: border-box;
  resize: vertical;
}

button,
.file-btn {
  background-color: #04aa6d;
  border: none;
  color: white;
  padding: 6px 12px;
  margin: 2px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

input[type="file"] {
  display: none;
}

.error-hint {
  color: red;
}
</style>
