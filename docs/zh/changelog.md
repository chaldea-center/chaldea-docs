# 更新记录

## 1.6.4

- 御主任务：支持搜索，特性按照拼音/Romaji 排序
- 改善加载和升级数据时的体验
- 开启 iOS 120Hz ProMotion 支持（测试）
- 圣晶石规划：漏了每月呼符

## 1.6.3

此版本仅修复 Android 端错误

- 修复无法安装在 Android 12 设备上的错误
- 修复 Free 本规划报错

## 1.6.2

- 支持将羁绊和御主 EXP 作为特殊素材进行 Free 本规划
- 设置-游戏设置: 增加缓存所有图标功能
- 限时活动可分别收取每部分素材
- 敌人一览添加阵营和特性筛选
- 素材详情页新增已消耗详情
- 轮播图: 由于 bug 暂时禁用 Windows 上的美服轮播

## 1.6.1

- 新增 Linux 版本
- 支持导入国服、台服、日服和美服的抓包数据
- macOS: 系统版本最低要求 10.12.2
- bug fix

## 1.6.0

- 启用新的构建号(build number)和版本号命名策略
- 修复自由本规划时设定值被意外修改的 bug

## 1.5.9

- 修复 Free 本规划需求数匹配错误
- 修复其他 bug

## 1.5.8

- 修复 null-safety(NNBD)的重大 bug

## 1.5.7

- 新增 Buff 效果筛选
- Free 本掉落数据支持 6 周年版本新数据和旧数据选择
- 新增从者和礼装成长曲线
- 活动详情添加主线和 Free 本配置
- 抽卡算法更新，五星出率从原先 1.44%优化为接近官方出率的 1.04%

## 1.5.6

- 新增附加技能(append skill)规划
- 首页可自定义显示账号名称
- bug fix

## 1.5.5

- 新增圣晶石规划
- 新增附加技能的截图识别
- 新增敌人一览，关卡配置显示敌人头像

## 1.5.4

- 修复主线记录规划
- [BREAK CHANGE] Windows: 用户数据储存位置从 AppData 切换到 exe 所在文件夹
- 新增福袋期望估算
- 优化卡池页面与筛选

## 1.5.3

- 修复素材交换券不能更改的 bug
- 新增从者硬币基础功能

## 1.5.2

- 芙芙规划支持 3 星芙芙
- 新增梦火/羁绊规划
- 新增从者-指令纹章记录
- 统计页细分为素材需求和素材消耗
- Free 本规划的效率页支持按羁绊效率排序
- 修复弹出菜单不可点击的 bug
- 显示设置: 支持从者详情页面的标签页自定义排序
- 显示设置: 新增从者优先级备注

## 1.5.1

- 支持导入 fgosimulator 的从者和素材数据: http://fgosimulator.webcrow.jp/Material/
- 修复附加技能未能保存的 bug
- 手机端开启自动旋转设置

## 1.5.0

- 新增附加技能规划
- 支持圣杯规划最大等级为 120 级
- 优化搜索功能并支持更多页面

## 1.4.9

- add servant sprites tab
- add Campaign events
- display setting: remember or reset favorite and filter settings
- string search and filters works together
- fix startup crash

## 1.4.8

- fix unavailable characters related bug
- show CN/JP servant info(e.g. skills) when EN version is not available

## 1.4.7

- allow long press to save illustrations and voice files
- enable scale/pan gestures in full-screen image viewer
- add search CV/illustrator/costume list page
- compress screenshots before uploading to avoid 413 error
- fix some null safety bugs, scrollbar bugs
- enable markdown support for help messages

## 1.4.6

- NEW: add ★️4 fou-kun planning
- TabBarView for skill/item recognizer
- add debug tab for skill recognizer
- refresh carousel slides after settings changed
- limit carousel height
- bug fix

## 1.4.5

- [FEATURE] recognize skill screenshots
- standalone costume list
- support deleting chaldea user
- remove orientation setting on iPad
- add next/previous buttons in item list page

## 1.4.4

- add servant bond detail and sorting in import https body page
- support import https body from clipboard
- fix wrong conversion of costume id to servant plan value
- use a RichText as ErrorWidget to avoid extra bugs
- add share app

## 1.4.3

- fix HiveBox closed when app inactive(on mobile)

## 1.4.2

- consistent null-safety with mcparser
- fix patching data
- add welfare servant in limit event page
- add foukun(rarity 4) as regular item
- improve render behaviour of PieChart
- improve localizations

## 1.4.1

- [FEATURE] Dark Mode
- add NA/TW server tracking
- add English text of servant voice
- servant filter: NP-Charge

## 1.4.0

- [BREAKING CHANGE] Exchange ticket now use monthJp as index, days per month depends on GameServer
- English localization almost supported(data from fandom)
  - servant, craft essence, command code, event, mystic code, quest
  - not support: summon
- fix scrollbar issue
- servant statistics: fix empty PieChartData

## 1.3.12

- fix android app auto-update
- fix windows userdata link
- add bug page

## 1.3.11

- NEW: servant statistics, craft favorites, CV and illustrator list
- log to file
- l10n
- fix patch fails

## 1.3.10

- svt plan tab (actions in popup menu):
  - reset plan
  - switch slider/dropdown mode
- set initial frame center align and remember window position
  - only windows implemented

## 1.3.9

- rewrite `SplitRoute`, now support animation and swipe back gesture
- fix MediaQuery in root widget
- show curPlanNo on Switch Plan IconButton
- add license page

## 1.3.8

- support auto update for app and dataset
- add chaldea server as default download source

## 1.3.7

- sync user data with server on multiple device
- fix FFO render speed issue

## 1.3.6

- Fate/Freedom Order
  - free assembly and random gacha

## 1.3.5

- bug fix
- auto backup userdata to /backup and external storage in Android if possible
- ignore errors in UserData.from and return null
- cannot download icon because of filename is treated as url
- fix Podfile and android storage permission

## 1.3.4

- master mission enhancement
- NEW: experience card cost calculation

## 1.3.3

- bug fix

## 1.3.2

- support duplicated servants
- CN server: import decrypted HTTPS response body to resolve data of servants and items

## 1.3.1

- decrease app size by removing most icons from assets, downloaded to icon folder when used

## 1.3.0

- [BREAKING CHANGE] null safety migration, upgrade to flutter 2
- downgrade `flutter_audio_desktop 0.1.0` to version `0.0.8`, which will cause stuck in Windows with `file_picker_cross` together

## 1.2.1

- [NEW FEATURE] add weekly mission(master mission) planning
- add event progress setting
  - used for events' outdated check
  - the progress setting of drop calculator and master mission is individual
- remove gitee download source, now only support github releases
- fix text input bugs

## 1.2.0

- add summon/gacha module and summon simulator
- fix drop calculator textfield not updated issue

## 1.1.12

- fix item statistic not updated in some pages
- fix QP and grail statistics

## 1.1.11

- [NEW FEATURE] recognition of item screenshots
- add free quest query in drop calculator

## 1.1.10

- Happy Lunar New Year
- support servant priority
- drop calculator support blacklist

## 1.1.9

- feedback improvement

## 1.1.8

- add free quest efficiency comparison

## 1.1.7

- add mystic codes, servant voices and servant quests(interlude and rank up quests)
- support English and Japanese UI

## 1.1.6

- fix startup crash on iOS 12 or older caused by `flutter_qjs`

## 1.1.5

- support update dataset inside app

## 1.1.4

- support and upload iOS and Mac App Store
- fix grail/crystal not included in item statistics

## 1.1.3

- preparation for macOS version

## 1.1.2

- import servant and item data from Guda

## 1.1.1

- fix focus issue of mouse cursor
- support `Tab` to move to next focusNode

## 1.1.0

- support Windows

## 1.0.0

- first publish for Android
