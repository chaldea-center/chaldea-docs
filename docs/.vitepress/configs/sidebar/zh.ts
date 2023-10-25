import type { DefaultTheme } from 'vitepress'

export const sidebarZh: DefaultTheme.Sidebar = {
  '/zh/guide/': [
    {
      text: 'Chaldea',
      base: '/zh/guide/',
      items: [
        { text: '关于Chaldea', link: '/' },
        { text: '贡献翻译', link: 'translation' },
        { text: '支持与捐赠', link: 'donation' },
        { text: '下载与安装', link: 'installation' },
        { text: '历史版本', link: 'releases' },
        { text: 'FGO APK', link: 'fgo_apk' },
        { text: '反馈与建议', link: 'feedback' },
        { text: 'FAQ', link: 'faq' },
      ],
    },
    {
      text: '使用指南',
      base: '/zh/guide/',
      items: [
        { text: '导入数据', link: 'import_data' },
        {
          text: '导入抓包',
          collapsed: true,
          base: '/zh/guide/import_https/',
          items: [
            { text: '抓包简介', link: '/' },
            { text: '模拟登陆(JP/NA)', link: 'authfile_login' },
            { text: 'Stream-iOS', link: 'stream' },
            { text: 'mitmproxy', link: 'mitmproxy' },
            { text: 'Charles', link: 'charles' },
            { text: 'HttpCanary-Android', link: 'httpcanary' },
            { text: 'Quantumult X', link: 'quantumultx' },
            { text: '解码小工具', link: 'decoder' },
            { text: '迁移数据', link: 'transfer_data' },
            { text: '抽卡统计', link: 'gacha_stat' },
          ],
        },
        { text: '从者练度规划', link: 'servant_plan' },
        { text: '活动规划', link: 'events' },
        { text: '素材', link: 'items' },
        { text: 'Free本规划', link: 'free_calculator' },
        { text: '攒石规划', link: 'sq_plan' },
        { text: '御主任务', link: 'master_mission' },
        { text: '卡池', link: 'summon' },
        { text: '统计', link: 'game_statistics' },
        { text: '效果检索', link: 'buff_filter' },
        { text: '搜索与筛选', link: 'search_filter' },
        { text: '应用设置', link: 'app_setting' },
        { text: 'Fate/Freedom Order', link: 'freedom_order' },
        { text: 'LOSTROOM', link: 'lostroom' },
      ],
    },
    {
      text: '其他',
      base: '/zh/guide/',
      items: [
        { text: '参考资料', link: 'references' },
        { text: '隐私策略', link: 'privacy2' },
        { text: 'Privacy Policy', link: 'privacy' },
      ],
    },
  ],
  '/zh/laplace/': [
    {
      text: 'Laplace',
      base: '/zh/laplace/',
      items: [
        { text: 'Laplace - 3T模拟器', link: '/' },
        { text: '编队配置', link: 'team' },
        { text: '战斗模拟', link: 'battle' },
        { text: '宝具伤害排行', link: 'np_dmg_ranking' },
        { text: '常见问题', link: 'faq' },
        { text: 'Bugs', link: 'bugs' },
      ],
    },
  ],
}
