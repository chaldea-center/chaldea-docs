import type { DefaultTheme } from 'vitepress'

export const sidebarEn: DefaultTheme.Sidebar = {
  '/guide/': [
    {
      text: 'Chaldea',
      base: '/guide/',
      items: [
        { text: 'About Chaldea', link: '/' },
        { text: 'Help Translation', link: 'translation' },
        { text: 'Donation', link: 'donation' },
        { text: 'Installation', link: 'installation' },
        { text: 'Releases', link: 'releases' },
        { text: 'FGO APK', link: 'fgo_apk' },
        { text: 'Feedback', link: 'feedback' },
        { text: 'FAQ', link: 'faq' },
      ],
    },
    {
      text: 'Manual',
      base: '/guide/',
      items: [
        { text: 'Import Data', link: 'import_data' },
        {
          text: 'Import HTTPS Response',
          collapsed: true,
          base: '/guide/import_https/',
          items: [
            { text: 'About HTTPS Sniffing', link: '/' },
            { text: 'Login via Transfer File (JP/NA)', link: 'authfile_login' },
            { text: 'Stream-iOS', link: 'stream' },
            { text: 'mitmproxy', link: 'mitmproxy' },
            { text: 'Charles', link: 'charles' },
            { text: 'HttpCanary-Android', link: 'httpcanary' },
            { text: 'Transfer Data', link: 'transfer_data' },
            { text: 'Gacha Statistics', link: 'gacha_stat' },
          ],
        },
        { text: 'Servant Planning', link: 'servant_plan' },
        { text: 'Event Planning', link: 'events' },
        { text: 'Items', link: 'items' },
        { text: 'Free Quest Solver', link: 'free_calculator' },
        { text: 'SQ Planning', link: 'sq_plan' },
        { text: 'Master Mission', link: 'master_mission' },
        { text: 'Summon/Gacha', link: 'summon' },
        { text: 'Statistics', link: 'game_statistics' },
        { text: 'Buff Filter', link: 'buff_filter' },
        { text: 'Search and Filters', link: 'search_filter' },
        { text: 'App Settings', link: 'app_setting' },
        { text: 'Fate/Freedom Order', link: 'freedom_order' },
        { text: 'LOSTROOM', link: 'lostroom' },
      ],
    },
    {
      text: 'Misc',
      base: '/guide/',
      items: [
        { text: 'References', link: 'references' },
        { text: 'Privacy', link: 'privacy2' },
        { text: 'Privacy Policy', link: 'privacy' },
      ],
    },
  ],
  '/laplace/': [
    {
      text: 'Laplace',
      base: '/laplace/',
      items: [
        { text: 'Laplace - 3T Simulator', link: '/' },
        { text: 'Team Setup', link: 'team' },
        { text: 'Battle Simulation', link: 'battle' },
        { text: 'NP Damage Ranking', link: 'np_dmg_ranking' },
        { text: 'FAQ', link: 'faq' },
        { text: 'Bugs', link: 'bugs' },
      ],
    },
  ],
}
