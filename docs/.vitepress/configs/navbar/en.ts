import type { DefaultTheme } from 'vitepress'

export const navbarEn: DefaultTheme.NavItem[] = [
  {
    text: 'Chaldeas',
    link: '/guide/',
    activeMatch: '/guide/.*',
  },
  {
    text: 'Laplace',
    link: '/laplace/',
    activeMatch: '/laplace/.*',
  },
  {
    text: 'Donate',
    link: '/guide/donation',
  },
  {
    text: 'Discord',
    link: 'https://discord.gg/5M6w5faqjP',
  },
]
