import { defineUserConfig, WebpackChainConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
// import type { SeoOptions } from 'vuepress-plugin-seo2'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: 'Chaldea',
  description: 'Chaldea - A cross-platform material planning tool for Fate/Grand Order',
  // dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'keywords', content: 'Chaldea,迦勒底,素材规划,Material Planning,FGO,fate,Fate/Grand Order,命运-冠位指定,型月,typemoon,周回,free' }],
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
    docsRepo: 'chaldea-center/chaldea-doc',
    editLink: true,
    locales: {
      '/': {
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
                '/summon.md',
                '/game_statistics.md',
                '/buff_filter.md',
                '/search_filter.md',
                '/app_setting.md',
                '/freedom_order.md',
                '/lostroom.md',
                '/donate.md',
                '/faq.md',
                '/references.md',
                '/privacy.md',
              ]
            }
          ]
        }
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
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
        toggleDarkMode: '切换夜间模式',
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
                '/zh/summon.md',
                '/zh/game_statistics.md',
                '/zh/buff_filter.md',
                '/zh/search_filter.md',
                '/zh/app_setting.md',
                '/zh/freedom_order.md',
                '/zh/lostroom.md',
                '/zh/donate.md',
                '/zh/faq.md',
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
    ['@vuepress/plugin-search'],
    // [
    //   "vuepress-plugin-seo2",
    //   <SeoOptions>{
    //     author: 'narumi',
    //     twitterID: 'narumi147',
    //   }
    // ]
  ],
})
