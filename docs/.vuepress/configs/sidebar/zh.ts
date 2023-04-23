import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: 'Chaldea',
      children: [
        '/zh/guide/README.md',
        '/zh/guide/v2_release.md',
        '/zh/guide/translation.md',
        '/zh/guide/installation.md',
        '/zh/guide/releases.md',
        '/zh/guide/fgo_apk.md',
        '/zh/guide/feedback.md',
        '/zh/guide/servant_plan.md',
        '/zh/guide/events.md',
        '/zh/guide/items.md',
        '/zh/guide/free_calculator.md',
        '/zh/guide/sq_plan.md',
        '/zh/guide/master_mission.md',
        '/zh/guide/import_data.md',
        {
          text: '导入抓包',
          collapsible: true,
          children: [
            '/zh/guide/import_https/README.md',
            '/zh/guide/import_https/bfgo.md',
            '/zh/guide/import_https/transfer_data.md',
            '/zh/guide/import_https/stream.md',
            '/zh/guide/import_https/httpcanary.md',
            '/zh/guide/import_https/charles.md',
            '/zh/guide/import_https/mitmproxy.md',
            '/zh/guide/import_https/quantumultx.md',
            '/zh/guide/import_https/auto_login.md',
            '/zh/guide/import_https/decoder.md',
          ],
        },
        '/zh/guide/summon.md',
        '/zh/guide/game_statistics.md',
        '/zh/guide/buff_filter.md',
        '/zh/guide/search_filter.md',
        '/zh/guide/app_setting.md',
        '/zh/guide/freedom_order.md',
        '/zh/guide/lostroom.md',
        '/zh/guide/donation.md',
        '/zh/guide/faq.md',
        '/zh/guide/references.md',
        '/zh/guide/privacy2.md',
        '/zh/guide/privacy.md',
      ],
    },
  ],
  '/zh/laplace/': [
    {
      text: 'Laplace',
      children: ['/zh/laplace/', '/zh/laplace/bugs.md'],
    },
  ],
}
