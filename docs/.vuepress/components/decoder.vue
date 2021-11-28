<template>
  <div>
     <span>
      <label id="loadBtn">
        加载文件
        <input type="file" @change="decodeFile" />
      </label>
      <br/>
    </span>
    <label>
      或输入/粘贴文本
      <textarea v-model="vin" rows="10" placeholder="请输入文本或加载文件" />
    </label>
  
    <label>
      输出结果
      <textarea
        v-model="vout"
        rows="5"
        placeholder="复制结果或保存至文件"
        readonly
      />
    </label>
    <p>
      <button @click="decode">解码</button>
      <button @click="encode">编码</button>
      <button @click="downloadOutput">结果另存为</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vin: "",
      vout: "",
    };
  },
  methods: {
    encode(s) {
      this.vout = window.btoa(unescape(encodeURIComponent(s || this.vin)));
    },
    decode(s) {
      try {
        this.vout = unescape(
          decodeURIComponent(
            escape(window.atob(decodeURIComponent(s || this.vin)))
          )
        );
      } catch (error) {
        this.vout = `Error:\n${error}`;
      }
    },
    decodeFile(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      const $this = this;
      reader.onload = (event) => {
        $this.vin = event.target.result;
        $this.decode(event.target.result);
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
  margin: 6px 0;
}
button {
  margin: 0.2em;
}
</style>
