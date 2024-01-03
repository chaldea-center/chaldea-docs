<template>
  <div>
    <p v-if="loading">Loading...</p>
    <p style="color: red" v-if="msg">Error: {{ msg }}</p>
    <template v-for="release in releases" :key="release.id">
      <h3 :id="release.name" tabindex="-1">
        <a
          class="header-anchor"
          :href="'#' + release.name"
          aria-hidden="true"
        ></a
        >{{ release.tag_name }}
      </h3>
      <details class="details custom-block">
        <summary>
          Release Note ({{ new Date(release.created_at).toLocaleDateString() }})
        </summary>
        <p><pre style="font: var(--font-family)">{{ release.body.trim() }}</pre></p>
      </details>
      <table>
        <tbody>
          <template v-for="asset in release.assets" :key="asset.id">
            <tr v-if="!asset.name.endsWith('.sha1')">
              <td>{{ asset.name }}</td>
              <td style="text-wrap: nowrap;">
                <a
                  :href="asset.browser_download_url"
                  target="_blank"
                  rel="noreferrer"
                  >Github</a
                >
              </td>
              <td style="text-wrap: nowrap;">
                <a
                  :href="proxy(asset.browser_download_url)"
                  target="_blank"
                  rel="noreferrer"
                  >{{ lang == 'zh' ? '代理' : 'Proxy' }}</a
                >
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </template>
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

declare global {
  interface Window {
    github_releases: GithubRelease[] | null
  }
}

interface GithubAsset {
  id: number
  name: string
  content_type: string
  size: number
  browser_download_url: string
}
interface GithubRelease {
  id: number
  tag_name: string
  name: string
  draft: boolean
  prerelease: boolean
  created_at: string
  published_at: string
  assets: GithubAsset[]
  body: string
}

interface IState {
  loading: boolean
  msg: string
  all_releases: GithubRelease[]
  releases: GithubRelease[]
}

export default defineComponent({
  props: {
    lang: String,
  },
  data(): IState {
    return {
      loading: false,
      msg: '',
      all_releases: [],
      releases: [],
    }
  },
  created() {
    this.filter()
  },
  mounted() {
    this.getData()
  },
  methods: {
    filter() {
      console.log(this.all_releases.length)
      let releases = this.all_releases.filter(
        (r) =>
          (!r.prerelease && r.tag_name.startsWith('v2')) ||
          r.tag_name == 'beta',
      )
      releases = releases.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      )
      this.releases = releases.slice(0, 10)
    },
    getData() {
      this.loading = true
      const local_cache = window.github_releases || []
      if (local_cache && local_cache.length > 0) {
        this.loading = false
        this.all_releases = new Array(...local_cache)
        this.msg = ''
        this.filter()
        return
      }

      fetch(
        this.proxy(
          'https://api.github.com/repos/chaldea-center/chaldea/releases',
        ),
      )
        .then((response) => response.json())
        .then((data) => {
          this.loading = false
          this.all_releases = data
          window.github_releases = new Array(...data)
          this.msg = ''
          this.filter()
        })
        .catch((error) => {
          this.loading = false
          this.msg = error
        })
    },
    proxy(url: string) {
      if (url.startsWith('http')) {
        url = url.split('://', 2)[1]
      }
      return 'https://worker-cn.chaldea.center/proxy/github/' + url
    },
  },
})
</script>
