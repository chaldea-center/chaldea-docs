import type { DefaultTheme } from 'vitepress'

export const navbarZh: DefaultTheme.NavItem[] = [
  {
    text: 'Chaldeas',
    link: '/zh/guide/',
    activeMatch: '/zh/guide/.*',
  },
  {
    text: 'Laplace',
    link: '/zh/laplace/',
    activeMatch: '/zh/laplace/.*',
  },
  {
    text: '支持我们',
    link: '/zh/guide/donation',
  },
  {
    text: 'Discord',
    link: 'https://discord.gg/5M6w5faqjP',
  },
]
