# v2 大版本更新

## 关于 v1 版本

最后一个版本为 v1.7.0，将不再提供更新，数据也不再更新.

v2已发布，v1的用户注册、服务器备份、素材技能识别等在线服务均将于2022/5/31停止。

v1 与 v2 数据兼容性不好，当升级大版本时，目前仅提供基础的素材和从者练度信息的迁移，其他本地设置或资料将被忽略。
若需手动导入 v1 版本数据，请从**主页**进入**导入**子页面，选择相应导入选项。

**注意事项**:

- 去除银芙芙规划，仅保留金芙芙规划
- 未来活动的规划分的更细了，由于数据源不同，和旧数据完全不兼容，因此导入 v1 数据时无活动信息
- 服务器备份储存方式和位置迁移，请重新注册。
- Android用户必须先卸载再安装v2

## 关于 v2 版本

本次大版本更新带来了渐进式 Web 应用(PWA)的支持。

目前提供两个网址可供访问:

- [https://cn.chaldea.center](https://cn.chaldea.center)
- [https://chaldea.center](https://chaldea.center)

如果在国内访问，请使用 [https://cn.chaldea.center](https://cn.chaldea.center)，否则出现加载过慢、字体无法显示等问题。
同时在设置中选择Chaldea服务器为**国内**

::: warning
但是 web 版性能很很很很很很差，尤其在移动端的浏览器，时不时崩溃重启。。。
:::

预览版可从 github 下载，提供Android/Windows/Linux最新的预览版:

- [https://github.com/chaldea-center/chaldea/releases/canary](https://github.com/chaldea-center/chaldea/releases/canary)
- [https://hub.fastgit.xyz/chaldea-center/chaldea/releases/tag/canary](https://hub.fastgit.xyz/chaldea-center/chaldea/releases/tag/canary)~~被qiang了~~

该预览版随代码更新自动更新，因此版本号可能不会变化，覆盖安装即可。另 Android 预览版(`cc.narumi.chaldea.preview`)可与正式版(`cc.narumi.chaldea`)共存，两者具有不同的包名。

## Web 渲染模式

目前 Web 端存在两种渲染方式，各有优缺点。可在设置最下方手动选择渲染模式，更改渲染方式将于下次启动/刷新页面生效。

### HTML 渲染

使用 HTML，CSS，Canvas 和 SVG 元素来渲染。

- 优点: 应用的大小相对较小。可使用系统字体，无需下载网络字体。
- 缺点: 页面布局可能不准确，如字体大小计算不正确, 不同设备页面布局不同。

### CanvasKit 渲染

将 Skia 编译成 WebAssembly 格式，并使用 WebGL 渲染。

- 优点: 应用在移动和桌面端保持一致，有更好的性能，以及降低不同浏览器渲染效果不一致的风险。
- 缺点: 应用的大小较大，尤其是第一次加载。其次使用 Google 字体，渲染时下载字体，即使不存在网络问题，从页面显示到字体渲染仍需长达数秒的间隔，此时字体均显示为一个框。

### auto/自动

此时应用根据设备参数自动选择 HTML 渲染或 CanvasKit 渲染。

## 帮助翻译/多语言支持

### 游戏数据

目前以日服(JP)数据为基础，并增加国服(CN)、台服(TW)、美服(NA)和韩服(KR)已实装的部分翻译，并增加了部分 Mooncell、AtlasAcademy 和 Fandom 的翻译。为了更好的展示各个区服未实装的资料，欢迎贡献翻译！

所需翻译的文件位于[https://github.com/chaldea-center/chaldea-data/tree/main/mappings](https://github.com/chaldea-center/chaldea-data/tree/main/mappings)

```json
{
  "jp_key": {
    "JP": null, // keep null if key is jp
    "CN": "Simplified Chinese",
    "TW": "Traditional Chinese",
    "NA": "English",
    "KR": "Korean"
  }
}
```

更多详情请见[Help Translation](/translation.md)

### UI 文本

应用 UI 的文本同样支持以上五种语言，并可扩展至其他语种。急需任何语言的翻译，包括简中繁中。

所需翻译的文件位于[https://github.com/chaldea-center/chaldea/tree/main/lib/l10n](https://github.com/chaldea-center/chaldea/tree/main/lib/l10n)

- `intl_ar.arb` - Arabic, 阿拉伯语(RTL)
- `intl_en.arb` - English, 英语
- `intl_es.arb` - Spanish/Español, 西班牙语
- `intl_ja.arb` - Japanese, 日语
- `intl_ko.arb` - Korean, 韩语
- `intl_zh.arb` - Chinese, 简体中文
- `intl_zh_Hant.arb` - Traditional Chinese, 繁体中文

### 如何提供翻译

您可以通过以下方式帮助翻译：

- 通过 Github Pull Request
- 加入下方 QQ 频道或 Discord 频道，直接提供翻译好的文本。

## 反馈

有任何问题可通过以下方式反馈：

- Email: [chaldea@narumi.cc](mailto:chaldea.narumi.cc)
- QQ 频道: [QQ 频道-Chaldea](https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&inviteCode=1bVHFW&from=181074&biz=ka&shareSource=5)
- Discord: [https://discord.gg/5M6w5faqjP](https://discord.gg/5M6w5faqjP)
- Github: [https://github.com/chaldea-center/chaldea/issues](https://github.com/chaldea-center/chaldea/issues)
