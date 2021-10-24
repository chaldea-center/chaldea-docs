import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { path } from '@vuepress/utils'
import { DocsearchOptions } from '@vuepress/plugin-docsearch'
import { SitemapOptions } from 'vuepress-plugin-sitemap2'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: 'Chaldea',
  description: 'Chaldea - A cross-platform material planning tool for Fate/Grand Order',
  // dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'keywords', content: 'Chaldea,迦勒底,素材规划,Material Planning,Planner,FGO,fate,Fate/Grand Order,命运-冠位指定,型月,typemoon,周回,free' }],
    [
      'script',
      {},
      `
      if (window.location.href.startsWith("https://chaldea-center.github.io")) {
        window.location.href = window.location.href.replace("https://chaldea-center.github.io", "https://docs.chaldea.center");
      }
      `
    ],
    [
      'script',
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-PPD5M5TR2R",
        async: true,
      }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-PPD5M5TR2R');`
    ],
    [
      'script',
      {},
      `var _hmt = _hmt || [];
      (function() {
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
      })();`
    ]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Chaldea',
      description: 'Chaldea - A cross-platform material planning tool for Fate/Grand Order',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Chaldea',
      description: 'Chaldea - 一款跨平台的FGO素材规划软件',
    },
  },
  themeConfig: {
    logo: '/logo.png',
    repo: 'chaldea-center/chaldea',
    docsRepo: 'chaldea-center/chaldea-docs',
    docsDir: 'docs',
    editLink: true,
    lastUpdated: false,
    locales: {
      '/': {
        selectLanguageText: 'Language/语言',
        sidebar: {
          '/': [
            {
              text: 'Chaldea',
              children: [
                '/introduction.md',
                '/installation.md',
                '/feedback.md',
                '/servant_plan.md',
                '/events.md',
                '/items.md',
                '/free_calculator.md',
                '/sq_plan.md',
                '/master_mission.md',
                '/import_data.md',
                '/import_https.md',
                '/summon.md',
                '/game_statistics.md',
                '/buff_filter.md',
                '/search_filter.md',
                '/app_setting.md',
                '/freedom_order.md',
                '/lostroom.md',
                '/donation.md',
                '/faq.md',
                '/changelog.md',
                '/references.md',
                '/privacy.md',
              ]
            }
          ]
        }
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        selectLanguageText: 'Language/语言',
        selectLanguageAriaLabel: '选择语言',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换深色模式',
        toggleSidebar: '切换侧边栏',

        sidebar: {
          '/zh/': [
            {
              text: 'Chaldea',
              children: [
                '/zh/introduction.md',
                '/zh/installation.md',
                '/zh/feedback.md',
                '/zh/servant_plan.md',
                '/zh/events.md',
                '/zh/items.md',
                '/zh/free_calculator.md',
                '/zh/sq_plan.md',
                '/zh/master_mission.md',
                '/zh/import_data.md',
                '/zh/import_https.md',
                '/zh/summon.md',
                '/zh/game_statistics.md',
                '/zh/buff_filter.md',
                '/zh/search_filter.md',
                '/zh/app_setting.md',
                '/zh/freedom_order.md',
                '/zh/lostroom.md',
                '/zh/donation.md',
                '/zh/faq.md',
                '/zh/changelog.md',
                '/zh/references.md',
                '/zh/privacy.md',
              ]
            }
          ]
        }
      }
    }
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': { placeholder: 'Search' },
          '/zh/': { placeholder: '搜索' }
        }
      }
    ],
    // [
    //   '@vuepress/plugin-docsearch',
    //   <DocsearchOptions>{
    //     apiKey: null,
    //     indexName: null,
    //     locales: {
    //       '/': { placeholder: 'Search' },
    //       '/zh/': { placeholder: '搜索' }
    //     }
    //   }
    // ],
    [
      'vuepress-plugin-sitemap2',
      <SitemapOptions>{
        hostname: 'https://docs.chaldea.center'
      }
    ],
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, './components')
      },
    ],
    // [  // no effect
    //   '@vuepress/plugin-google-analytics',
    //   {
    //     id: 'G-PPD5M5TR2R',
    //   },
    // ],
    // [
    //   "vuepress-plugin-seo2",
    //   <SeoOptions>{
    //     author: 'narumi',
    //     twitterID: 'narumi147',
    //   }
    // ],
  ],
})
