import { defineUserConfig } from '@vuepress/cli'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { defaultTheme } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { seoPlugin } from 'vuepress-plugin-seo2'
import { sitemapPlugin } from 'vuepress-plugin-sitemap2'
import {
  head,
  navbarEn,
  navbarZh,
  sidebarEn,
  sidebarZh,
} from './configs/index.js'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Chaldea',
  description: 'Chaldea - Yet Another Planner for Fate/Grand Order',
  // dest: 'dist',
  head: head,
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Chaldea',
      description: 'Chaldea - Yet Another Planner for Fate/Grand Order',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Chaldea',
      description: 'Chaldea - 一款跨平台的FGO素材规划软件',
    },
  },
  theme: defaultTheme({
    logo: '/logo.png',
    repo: 'chaldea-center/chaldea',
    docsRepo: 'chaldea-center/chaldea-docs',
    docsDir: 'docs',
    editLink: true,
    lastUpdated: false,
    selectLanguageText: 'Language/语言',
    locales: {
      '/': {
        navbar: navbarEn,
        sidebar: sidebarEn,
      },
      '/zh/': {
        selectLanguageName: '简体中文',
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
        toggleColorMode: '切换深色模式',
        toggleSidebar: '切换侧边栏',

        navbar: navbarZh,
        sidebar: sidebarZh,
      },
    },
  }),
  plugins: [
    docsearchPlugin({
      appId: 'BH4D9OD16A',
      apiKey: '8cb8481c0034b89290985b41f425004d',
      indexName: 'chaldea-center',
      locales: {
        '/': { placeholder: 'Search' },
        '/zh/': { placeholder: '搜索' },
      },
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),

    // googleAnalyticsPlugin({
    //   // no effects
    //   id: 'G-PPD5M5TR2R',
    // }),

    seoPlugin({
      hostname: 'https://docs.chaldea.center',
      // isArticle: () => false,
      fallBackImage: 'https://docs.chaldea.center/logo.png',
      customHead: (head) => {
        for (let index = head.length - 1; index >= 0; index--) {
          if (head[index][1]?.['name'] == 'twitter:card') {
            head.splice(index, 1)
          }
        }
        head.push([
          'meta',
          {
            property: 'og:description',
            content: 'Chaldea - Yet Another Planner for FGO',
          },
        ])
      },
    }),
    sitemapPlugin({
      hostname: 'https://docs.chaldea.center',
      changefreq: 'monthly',
    }),
  ],
})
