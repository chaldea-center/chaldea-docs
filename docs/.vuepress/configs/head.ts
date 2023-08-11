import type { HeadConfig } from '@vuepress/core'

export const head: HeadConfig[] = [
  ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
  ],
  ['link', { rel: 'manifest', href: '/site.webmanifest' }],

  [
    'meta',
    {
      name: 'keywords',
      content:
        'Chaldea,Chaldea Center,Chaldea App,Laplace,迦勒底,素材规划,Material Planning,Planner,模拟器,组队,Battle Simulator,3T Simulator,companion,FGO,fate,Fate/Grand Order,命运-冠位指定,型月,typemoon,周回,free',
    },
  ],
  [
    'script',
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
    'script',
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-PPD5M5TR2R',
      async: true,
    },
  ],
  [
    'script',
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
    'script',
    {},
    `var _hmt = _hmt || [];
      (function() {
        if(_need_redirect) return;
        if(_hmt.id) return;  // avoid dup injection
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
]
