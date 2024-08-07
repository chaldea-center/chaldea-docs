<template>
  <div class="apk-release">
    <div class="toggle">
      <template v-for="r in ['jp', 'na', 'tw', 'kr']" :key="r">
        <input type="radio" :id="r" :value="r" v-model="region" />
        <label :for="r"> {{ r.toUpperCase() }}</label>
      </template>
    </div>
    <div>
      Google Play:
      <a
        target="_blank"
        :href="
          'https://play.google.com/store/apps/details?id=' + all_pkgs[region]
        "
        >{{ all_pkgs[region] }}</a
      >
    </div>
    <p v-if="loading">Loading...</p>
    <p class="error-hint" v-if="msg">Error: {{ msg }}</p>
    <table v-if="files.length">
      <thead>
        <tr style="text-wrap: nowrap">
          <th>{{ t.format }}</th>
          <th>{{ t.version }}</th>
          <th>{{ t.link }}</th>
          <th>{{ t.link }}</th>
          <th>{{ t.size }}</th>
          <th>{{ t.modified }}</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="file in filter(region)" :key="file.name">
          <tr>
            <td>{{ file.fileName.split('.').toReversed()[0] }}</td>
            <td>{{ file.versionName }}</td>
            <td>
              <a :href="file.link" target="_blank" rel="noreferrer">{{
                t.download
              }}</a>
            </td>
            <td>
              <a :href="file.link_proxy" target="_blank" rel="noreferrer">{{
                t.proxy
              }}</a>
            </td>
            <td>{{ (file.size / 1024 / 1024).toFixed(0) }} MB</td>
            <td>
              {{ new Date(file.uploadTimestamp).toLocaleString() }}
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

declare global {
  interface Window {
    apk_files: ApkFile[] | null
  }
}

interface FileManifest {
  fileName: string
  size: number
  uploadTimestamp: number
  contentType: string
  contentSHA1: string
  contentMD5: string
}

interface ApkFile extends FileManifest {
  version: number
  versionName: string
  link: string
  link_proxy: string
}

interface Il18n {
  format: string
  version: string
  link: string
  download: string
  size: string
  modified: string
  proxy: string
}

interface IState {
  loading: boolean
  msg: string
  files: ApkFile[]
  region: string
  all_pkgs: Record<string, string>
  t: Il18n
}

export default defineComponent({
  props: { language: String },
  data(): IState {
    return {
      loading: false,
      msg: '',
      files: [],
      region: 'jp',
      all_pkgs: {
        jp: 'com.aniplex.fategrandorder',
        na: 'com.aniplex.fategrandorder.en',
        tw: 'com.xiaomeng.fategrandorder',
        kr: 'com.netmarble.fgok',
      },
      t: this.language?.startsWith('zh')
        ? {
            format: '格式',
            version: '版本',
            link: '链接',
            download: '下载',
            size: '大小',
            modified: '修改时间',
            proxy: '代理',
          }
        : {
            format: 'Format',
            version: 'Version',
            link: 'Link',
            download: 'Download',
            size: 'Size',
            modified: 'Modified',
            proxy: 'Proxy',
          },
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    filter(region: string) {
      const pkg_name = this.all_pkgs[region]
      let files: ApkFile[] = [...this.files]
      files = files.filter((file) => file.fileName.startsWith(pkg_name + '.v'))
      files.sort((a, b) =>
        b.version != a.version
          ? b.version - a.version
          : a.versionName.localeCompare(b.versionName)
      )
      files = files.slice(0, 4)
      return files
    },
    getData() {
      this.loading = true
      const local_cache = window.apk_files || []
      if (local_cache && local_cache.length > 0) {
        this.loading = false
        this.files = new Array(...local_cache)
        this.msg = ''
        return
      }

      fetch('https://static.atlasacademy.io/apk/manifest.json')
        .then((response) => response.json())
        .then((manifests: FileManifest[]) => {
          let data: ApkFile[] = []
          for (let file of manifests) {
            if (!file.fileName.endsWith('apk')) continue
            const match = file.fileName.match(
              /v(\d+)\.(\d+)\.(\d+)(\..+)?(?=\.x?apk)/
            )
            data.push({
              ...file,
              version:
                match == null
                  ? 0
                  : (parseInt(match[1]) * 100 + parseInt(match[2])) * 100 +
                    parseInt(match[3]),
              versionName:
                match == null
                  ? ''
                  : match[0].replace('.armeabi_v7a', ' @32').substring(1),
              link: 'https://static.atlasacademy.io/apk/' + file.fileName,
              link_proxy:
                'https://worker-cn.chaldea.center/proxy/apk/' + file.fileName,
            })
          }

          this.files = data
          window.apk_files = new Array(...data)
          this.loading = false
          this.msg = ''
        })
        .catch((error) => {
          this.loading = false
          this.msg = error
        })
    },
  },
})
</script>

<style>
/* .details {
    margin: 0.2em 0;
    padding: 0.2em 0;
  } */
.apk-release .error-hint {
  color: red;
}

.apk-release td {
  white-space: nowrap;
}

.apk-release input[type='radio'] {
  position: absolute;
  visibility: hidden;
  display: none;
}

.apk-release label {
  display: inline-block;
  cursor: pointer;
  padding: 5px 20px;
}

.apk-release input[type='radio']:checked + label {
  color: white;
  background: var(--vp-button-brand-bg);
}

.apk-release label + input[type='radio'] + label {
  border-left: solid 1.2px var(--vp-c-border);
}

.apk-release .toggle {
  border: solid 1.2px var(--vp-c-border);
  display: inline-block;
  margin: 10px 0 0 0;
  border-radius: 5px;
  overflow: hidden;
}
</style>
