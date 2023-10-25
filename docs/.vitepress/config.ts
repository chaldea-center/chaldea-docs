import { defineConfig, HeadConfig } from 'vitepress'
import { head } from './configs'
import { navbarEn, navbarZh } from './configs'
import { sidebarEn, sidebarZh } from './configs'
import { getPageText } from './configs/utils'
import { promises } from 'fs'
import path from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Chaldea',
  description: 'Chaldea - Yet Another Planner & Battle Simulator for FGO',
  cleanUrls: true,
  markdown: {
    container: {
      // tipLabel: '提示',
      // infoLabel: '',
      // warningLabel: '注意',
      // dangerLabel: '警告',
    },
  },
  lastUpdated: true,
  locales: {
    root: {
      label: 'English',
      title: 'Chaldea',
      description:
        'Chaldea - Yet Another Planner & Battle Simulator for FGO',
      themeConfig: {
        nav: navbarEn,
        sidebar: sidebarEn,
        lastUpdated: {
          text: 'Last Updated',
          formatOptions: {
            dateStyle: 'long',
          },
        },
      },
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: 'Chaldea',
      description: 'Chaldea - FGO素材规划＆战斗模拟',
      themeConfig: {
        nav: navbarZh,
        sidebar: sidebarZh,
        darkModeSwitchLabel: '深色模式',
        sidebarMenuLabel: '目录',
        returnToTopLabel: '返回顶部',
        langMenuLabel: '切换语言',
        lastUpdated: {
          text: '更新时间',
          formatOptions: {
            dateStyle: 'long',
            forceLocale: true,
          },
        },
        notFound: {
          linkLabel: '返回首页',
          linkText: '返回首页',
          title: '灵子转移失败',
        },
        docFooter: {
          prev: '上一页',
          next: '下一页',
        },
      },
    },
  },
  head: head,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    editLink: {
      pattern: 'https://github.com/chaldea-center/chaldea/edit/main/docs/:path',
      text: 'Edit on GitHub',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chaldea-center/chaldea' },
    ],
    footer: {
      message:
        'Powered by <a href="https://vitepress.dev/" target="_blank">Vitepress</a>',
      copyright: 'Copyright © 2021-present narumi | MIT License',
    },
    search: {
      provider: 'algolia',
      options: {
        appId: 'V0OM19W4NK',
        apiKey: '997566b47d81157dd2edae04d90f099b',
        indexName: 'chaldea-center',
        locales: {
          zh: {
            placeholder: '搜索',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消',
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除',
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接',
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者',
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈',
                },
              },
            },
          },
        },
      },
    },
  },
  sitemap: {
    hostname: 'https://docs.chaldea.center',
  },
  transformHead: async (ctx) => {
    const isHome = ctx.pageData.frontmatter.layout === 'home'

    let url = path.join(
      ctx.siteConfig.sitemap?.hostname ?? 'https://docs.chaldea.center/',
      ctx.pageData.relativePath,
    )
    url = url
      .replace(/\.md$/, '.html')
      .replace(/\/index\.html$/, '/')
      .replace(/\.html$/, '')

    let description = ''
    if (isHome) {
      description = ctx.siteData.description
    } else {
      if (ctx.pageData.description) {
        description = ctx.pageData.description
      } else {
        const fp = path.join(ctx.siteConfig.srcDir, ctx.pageData.filePath)
        const content = await promises.readFile(fp, { encoding: 'utf-8' })
        description = getPageText(content)
      }
    }
    if (description.length > 180) {
      description = description.substring(0, 179) + '...'
    }

    const heads: HeadConfig[] = []
    heads.push(
      ['meta', { name: 'og:site_name', content: ctx.siteData.title }],
      ['meta', { name: 'og:type', content: 'article' }],
      [
        'meta',
        {
          name: 'og:title',
          content: isHome ? ctx.siteData.description : ctx.title,
        },
      ],
      [
        'meta',
        { name: 'og:image', content: 'https://docs.chaldea.center/logo.png' },
      ],
      [
        'meta',
        {
          name: 'og:url',
          content: url,
        },
      ],
      [
        'meta',
        {
          name: 'og:description',
          content: description,
        },
      ],
    )

    return heads
  },
  transformPageData: async (pageData, ctx) => {
    const isHome = pageData.frontmatter.layout === 'home'
    if (
      isHome &&
      (!pageData.title || pageData.title === ctx.siteConfig.site.title)
    ) {
      pageData.title = pageData.description || ctx.siteConfig.site.description
      pageData.titleTemplate = ':title'
    }
  },
})
