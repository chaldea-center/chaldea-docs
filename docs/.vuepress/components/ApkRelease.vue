<template>
  <div>
    <div class="toggle">
      <template v-for="r in ['jp', 'na', 'tw', 'kr']">
        <input type="radio" :id="r" :value="r" v-model="region" />
        <label :for="r"> {{ r.toUpperCase() }}</label>
      </template>
    </div>
    <div>{{ all_pkgs[region] }}</div>
    <p v-if="loading">Loading...</p>
    <p class="error-hint" v-if="msg">Error: {{ msg }}</p>
    <table v-if="files.length">
      <thead>
        <tr>
          <th>Version</th>
          <th>Link1</th>
          <th>Link2</th>
          <th>Size</th>
          <th>Modified</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="file in filter(region)">
          <tr>
            <td>{{ file.versionName }}</td>
            <td>
              <a :href="file.link" target="_blank" rel="noreferrer">Download</a>
            </td>
            <td>
              <a :href="file.link_proxy" target="_blank" rel="noreferrer"
                >Proxy</a
              >
            </td>
            <td>{{ (file.size / 1024 / 1024).toFixed(0) }} MB</td>
            <td>
              {{ file.modified == null ? "?" : file.modified.toLocaleString() }}
            </td>
          </tr>
        </template>
      </tbody>
    </table>

    <template v-for="file in files"> </template>
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const base_url = "https://worker-cn.chaldea.center/proxy/apk/";
const regions = ["jp", "na", "tw", "kr"];
declare global {
  interface Window {
    apk_files: ApkFile[] | null;
  }
}

interface ApkFile {
  href: string;
  name: string;
  version: number;
  versionName: string;
  size: number;
  modified: Date | null;
  link: string;
  link_proxy: string;
}

interface IState {
  loading: boolean;
  msg: string;
  files: ApkFile[];
  region: string;
  all_pkgs: Record<string, string>;
}

export default defineComponent({
  data(): IState {
    return {
      loading: false,
      msg: "",
      files: [],
      region: "jp",
      all_pkgs: {
        jp: "com.aniplex.fategrandorder",
        na: "com.aniplex.fategrandorder.en",
        tw: "com.xiaomeng.fategrandorder",
        kr: "com.netmarble.fgok",
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    filter(region: string) {
      const pkg_name = this.all_pkgs[region];
      let files: ApkFile[] = [...this.files];
      files = files.filter((file) => file.name.startsWith(pkg_name + ".v"));
      files.sort((a, b) =>
        b.version != a.version
          ? b.version - a.version
          : b.versionName.localeCompare(b.versionName)
      );
      return files;
    },
    getData() {
      this.loading = true;
      const local_cache = window.apk_files || [];
      if (local_cache && local_cache.length > 0) {
        this.loading = false;
        this.files = new Array(...local_cache);
        this.msg = "";
        return;
      }

      fetch(base_url)
        .then((response) => response.text())
        .then((text) => {
          let data: ApkFile[] = [];
          const parser = new DOMParser();
          const doc = parser.parseFromString(text, "text/html");
          for (const ele of doc.getElementsByClassName("file")) {
            if (ele.childElementCount < 5) continue;
            const href = ele.children[1]
                .getElementsByTagName("a")[0]
                .getAttribute("href"),
              size = ele.children[2].getAttribute("data-order"),
              date = ele.children[3]
                .getElementsByTagName("time")[0]
                .getAttribute("datetime");
            if (!href) continue;
            const name = href.split("/").at(-1) || href;
            const match = name.match(/v(\d+)\.(\d+)\.(\d+)(\..+)?(?=\.apk)/);
            data.push({
              href: href,
              name: name,
              version:
                match == null
                  ? 0
                  : (parseInt(match[1]) * 100 + parseInt(match[2])) * 100 +
                    parseInt(match[3]),
              versionName:
                match == null
                  ? ""
                  : match[0].replace(".armeabi_v7a", " @32").substring(1),
              size: size == null ? 0 : parseFloat(size),
              modified: date == null ? null : new Date(date),
              link: "https://fgo.square.ovh/apk/" + name,
              link_proxy: "https://worker-cn.chaldea.center/proxy/apk/" + name,
            });
          }
          this.files = data;
          window.apk_files = new Array(...data);
          this.loading = false;
          this.msg = "";
        })
        .catch((error) => {
          this.loading = false;
          this.msg = error;
        });
    },
  },
});
</script>

<style lang="scss">
/* .details {
    margin: 0.2em 0;
    padding: 0.2em 0;
  } */
.error-hint {
  color: red;
}

td {
  white-space: nowrap;
}

input[type="radio"] {
  position: absolute;
  visibility: hidden;
  display: none;
}

label {
  color: var(--c-text-accent);
  display: inline-block;
  cursor: pointer;
  //   font-weight: bold;
  padding: 5px 20px;
}

input[type="radio"]:checked + label {
  color: white;
  background: var(--c-text-accent);
}

label + input[type="radio"] + label {
  border-left: solid 1.2px var(--c-text-accent);
}

.toggle {
  border: solid 1.2px var(--c-text-accent);
  display: inline-block;
  margin: 10px 0 0 0;
  border-radius: 5px;
  overflow: hidden;
}
</style>
