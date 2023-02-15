<template>
  <div>
    <p v-if="loading">Loading...</p>
    <p class="error-hint" v-if="msg">Error: {{ msg }}</p>
    <template v-for="release in releases">
      <h3 :id="release.name" tabindex="-1">
        <a class="header-anchor" :href="'#' + release.name" aria-hidden="true"
          >#</a
        >
        {{ release.tag_name }}
      </h3>
      <details
        class="custom-container details"
        style="margin: 0.2em 0; padding: 0.8em"
      >
        <summary>
          Release Note ({{ new Date(release.published_at).toDateString() }})
        </summary>
        <pre style="padding: 0.5rem 1.2rem; margin: 0.5rem 0 0 0">{{
          release.body.trim()
        }}</pre>
      </details>
      <table>
        <tbody>
          <template v-for="asset in release.assets">
            <tr v-if="!asset.name.endsWith('.sha1')">
              <td>{{ asset.name }}</td>
              <td>
                <a
                  :href="asset.browser_download_url"
                  target="_blank"
                  rel="noreferrer"
                  >Github</a
                >
              </td>
              <td>
                <a
                  :href="proxy(asset.browser_download_url)"
                  target="_blank"
                  rel="noreferrer"
                  >Proxy</a
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

<script>
export default {
  data() {
    return {
      loading: false,
      msg: "",
      allReleases: [],
      releases: [],
    };
  },
  created() {
    this.filter();
  },
  mounted() {
    this.getData();
  },
  methods: {
    filter() {
      let releases = this.allReleases.filter(
        (r) => !r.prerelease && r.tag_name.startsWith("v2")
      );
      releases = releases.sort(
        (a, b) =>
          new Date(b.published_at).getTime() -
          new Date(a.published_at).getTime()
      );
      this.releases = releases;
    },
    getData() {
      this.loading = true;
      const local_cache = window.github_releases || [];
      if (local_cache && local_cache.length > 0) {
        this.loading = false;
        this.allReleases = new Array(...local_cache);
        this.msg = "";
        this.filter();
        return;
      }

      fetch(
        this.proxy(
          "https://api.github.com/repos/chaldea-center/chaldea/releases"
        )
      )
        .then((response) => response.json())
        .then((data) => {
          this.loading = false;
          this.allReleases = data;
          window.github_releases = new Array(...data);
          this.msg = "";
          this.filter();
        })
        .catch((error) => {
          this.loading = false;
          this.msg = error;
        });
    },
    proxy(url) {
      if (url.startsWith("http")) {
        url = url.split("://", 2)[1];
      }
      return "https://worker-cn.chaldea.center/proxy/github/" + url;
    },
  },
};
</script>

<style>
/* .details {
  margin: 0.2em 0;
  padding: 0.2em 0;
} */
.error-hint {
  color: red;
}
</style>
