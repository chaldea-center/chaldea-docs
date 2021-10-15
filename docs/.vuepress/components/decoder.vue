<template>
  <div>
    <label>
      Input
      <textarea v-model="vin" rows="10" placeholder="Input text or load file" />
    </label>
    <p>
      <label id="loadBtn">
        Or Load File
        <input type="file" @change="decodeFile" />
      </label>
    </p>
    <label>
      Output
      <textarea
        v-model="vout"
        rows="5"
        placeholder="Copy or save to file"
        readonly
      />
    </label>
    <p>
      <button @click="decode">Decode</button>
      <button @click="encode">Encode</button>
      <button @click="downloadOutput">Save</button>
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
