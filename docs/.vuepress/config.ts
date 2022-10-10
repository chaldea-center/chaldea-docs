import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "@vuepress/cli";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { defaultTheme } from "@vuepress/theme-default";
import { path } from "@vuepress/utils";

import { seoPlugin } from "vuepress-plugin-seo2";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";

export default defineUserConfig({
  lang: "en-US",
  title: "Chaldea",
  description: "Chaldea - Yet Another Material Planner for Fate/Grand Order",
  // dest: 'dist',
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "Chaldea,Chaldea Center,Chaldea App,迦勒底,素材规划,Material Planning,Planner,FGO,fate,Fate/Grand Order,命运-冠位指定,型月,typemoon,周回,free",
      },
    ],
    [
      "script",
      {},
      `
      var _url = new URL(window.location.href);
      // var _need_redirect = _url.hostname === "chaldea-center.github.io" || _url.hostname === "chaldea.center";
      var _need_redirect = _url.hostname === "chaldea-center.github.io";
      if (_need_redirect) {
        _url.hostname = "docs.chaldea.center";
        window.location.href = _url.toString();
      }
      `,
    ],
    [
      "script",
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-PPD5M5TR2R",
        async: true,
      },
    ],
    [
      "script",
      {},
      `
      if(!_need_redirect){
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-PPD5M5TR2R');
      }`,
    ],
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        if(_need_redirect) return;
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?bb56c04bd266194546d3e8b96ba9d6c2";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);

        _hmt.push(['_requirePlugin', 'UrlChangeTracker', {
          shouldTrackUrlChange: function (newPath, oldPath) {
            newPath = newPath.split(/[?#]/i)[0];
            oldPath = oldPath.split(/[?#]/i)[0];
            return newPath != oldPath;
          }}
        ]);
      })();`,
    ],
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: "Chaldea",
      description:
        "Chaldea - Yet Another Material Planner for Fate/Grand Order",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Chaldea",
      description: "Chaldea - 一款跨平台的FGO素材规划软件",
    },
  },
  theme: defaultTheme({
    logo: "/logo.png",
    repo: "chaldea-center/chaldea",
    docsRepo: "chaldea-center/chaldea-docs",
    docsDir: "docs",
    editLink: true,
    lastUpdated: false,
    navbar: [
      {
        text: "Discord",
        link: "https://discord.gg/5M6w5faqjP",
      },
    ],
    selectLanguageText: "Language/语言",
    locales: {
      "/": {
        sidebar: {
          "/": [
            {
              text: "Chaldea",
              children: [
                "/introduction.md",
                "/v2_release.md",
                "/translation.md",
                "/installation.md",
                "/bug.md",
                "/feedback.md",
                "/servant_plan.md",
                "/events.md",
                "/items.md",
                "/free_calculator.md",
                "/sq_plan.md",
                "/master_mission.md",
                "/import_data.md",
                {
                  text: "Import HTTPS Response",
                  collapsible: true,
                  children: [
                    "/import_https/README.md",
                    "/import_https/bfgo.md",
                    "/import_https/transfer_data.md",
                    "/import_https/stream.md",
                    "/import_https/httpcanary.md",
                    "/import_https/charles.md",
                    "/import_https/mitmproxy.md",
                  ],
                },
                "/summon.md",
                "/game_statistics.md",
                "/buff_filter.md",
                "/search_filter.md",
                "/app_setting.md",
                "/freedom_order.md",
                "/lostroom.md",
                "/donation.md",
                "/faq.md",
                "/references.md",
                "/privacy2.md",
                "/privacy.md",
                "/changelog.md",
              ],
            },
          ],
        },
      },
      "/zh/": {
        selectLanguageName: "简体中文",
        selectLanguageAriaLabel: "选择语言",
        // custom containers
        tip: "提示",
        warning: "注意",
        danger: "警告",
        notFound: [
          "这里什么都没有",
          "我们怎么到这来了？",
          "这是一个 404 页面",
          "看起来我们进入了错误的链接",
        ],
        backToHome: "返回首页",

        // a11y
        openInNewWindow: "在新窗口打开",
        toggleDarkMode: "切换深色模式",
        toggleSidebar: "切换侧边栏",

        sidebar: {
          "/zh/": [
            {
              text: "Chaldea",
              children: [
                "/zh/introduction.md",
                "/zh/v2_release.md",
                "/zh/translation.md",
                "/zh/installation.md",
                "/zh/bug.md",
                "/zh/feedback.md",
                "/zh/servant_plan.md",
                "/zh/events.md",
                "/zh/items.md",
                "/zh/free_calculator.md",
                "/zh/sq_plan.md",
                "/zh/master_mission.md",
                "/zh/import_data.md",
                {
                  text: "导入抓包",
                  collapsible: true,
                  children: [
                    "/zh/import_https/README.md",
                    "/zh/import_https/bfgo.md",
                    "/zh/import_https/transfer_data.md",
                    "/zh/import_https/stream.md",
                    "/zh/import_https/httpcanary.md",
                    "/zh/import_https/charles.md",
                    "/zh/import_https/mitmproxy.md",
                    "/zh/import_https/quantumultx.md",
                    "/zh/import_https/decoder.md",
                  ],
                },
                "/zh/summon.md",
                "/zh/game_statistics.md",
                "/zh/buff_filter.md",
                "/zh/search_filter.md",
                "/zh/app_setting.md",
                "/zh/freedom_order.md",
                "/zh/lostroom.md",
                "/zh/donation.md",
                "/zh/faq.md",
                "/zh/references.md",
                "/zh/privacy2.md",
                "/zh/privacy.md",
                "/zh/changelog.md",
              ],
            },
          ],
        },
      },
    },
  }),
  plugins: [
    docsearchPlugin({
      appId: "BH4D9OD16A",
      apiKey: "8cb8481c0034b89290985b41f425004d",
      indexName: "chaldea-center",
      locales: {
        "/": { placeholder: "Search" },
        "/zh/": { placeholder: "搜索" },
      },
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),

    // googleAnalyticsPlugin({
    //   // no effects
    //   id: 'G-PPD5M5TR2R',
    // }),

    seoPlugin({
      hostname: "https://docs.chaldea.center",
      // isArticle: () => false,
      fallBackImage: "https://docs.chaldea.center/logo.png",
      customHead: (head) => {
        for (let index = head.length - 1; index >= 0; index--) {
          if (head[index][1]?.["name"] == "twitter:card") {
            head.splice(index, 1);
          }
        }
        head.push([
          "meta",
          {
            property: "og:description",
            content: "Chaldea - Yet Another Planning Tool for FGO",
          },
        ]);
      },
    }),
    sitemapPlugin({
      hostname: "https://docs.chaldea.center",
      changefreq: "monthly",
    }),
  ],
});
