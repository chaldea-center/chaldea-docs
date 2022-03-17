# V2 Release Note

本次更新带来了渐进式Web应用(PWA)的支持，原APP核心功能已适配过半，目前仍处于测试阶段。同时数据结构也经过大幅度变更，因此与V1的数据是不兼容的。

目前提供两个网址可供访问: 
- [https://cn.chaldea.center](https://cn.chaldea.center)
- [https://chaldea.center](https://chaldea.center)

由于国内对googleapis.com的访问限制，将可能出现字体无法加载的情况。因此增加cn.chaldea.center作为国内访问入口。


## 从V1迁移

从**主页**进入**导入**子页面，目前提供了从V1导入、抓包导入、FGOSim(webcrow)网站导入。
从V1导入旧版数据时，仅导入从者数据和素材数据，原先的一个或多个账号将会作为新账号添加到已有账号之后，请前往账号页切换所需账号。
::: warning
**设置-用户数据-导入** 仅支持当前版本的应用数据导入，无法导入V1数据。
:::

## 注意事项

- 去除银芙芙规划，仅保留金芙芙规划
- 未来活动的规划分的更细了，由于数据源不同，和旧数据完全不兼容，因此导入V1数据无活动信息
- 搜索功能由于性能/设计等问题暂时禁用
- 服务器备份暂未启用


## Web渲染模式

目前Web端存在两种渲染方式，各有优缺点。可在设置最下方手动选择渲染模式，更改渲染方式将于下次启动/刷新页面生效。默认使用canvaskit渲染。

### HTML渲染
使用 HTML，CSS，Canvas 和 SVG 元素来渲染。
- 优点: 应用的大小相对较小。可使用系统字体，无需下载网络字体。
- 缺点: 页面布局可能不准确，如字体大小计算不正确, 不同设备页面布局不同。

### CanvasKit渲染
将 Skia 编译成 WebAssembly 格式，并使用 WebGL 渲染。
- 优点: 应用在移动和桌面端保持一致，有更好的性能，以及降低不同浏览器渲染效果不一致的风险。
- 缺点: 应用的大小较大，尤其是第一次加载。其次使用Google字体，渲染时下载字体，即使不存在网络问题，从页面显示到字体渲染仍需长达数秒的间隔，此时字体均显示为一个框。

### auto/自动
此时应用根据设备参数自动选择HTML渲染或CanvasKit渲染。


## 帮助翻译/多语言支持

### 游戏数据

目前以日服(JP)数据为基础，并增加国服(CN)、台服(TW)、美服(NA)和韩服(KR)已实装的部分翻译，并增加了部分Mooncell、AtlasAcademy和Fandom的翻译。为了更好的展示各个区服未实装的资料，欢迎贡献翻译！

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

### UI文本

应用UI的文本同样支持以上五种语言，并可扩展至其他语种。急需任何语言的翻译，包括简中繁中。

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
- 通过Github Pull Request
- 加入下方QQ频道或Discord频道，直接提供翻译好的文本。


## 反馈

有任何问题可通过以下方式反馈：

* Email: [chaldea@narumi.cc](mailto:chaldea.narumi.cc)
* QQ频道: [QQ频道-Chaldea](https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&inviteCode=1bVHFW&from=181074&biz=ka&shareSource=5)
* Discord: [https://discord.gg/5M6w5faqjP](https://discord.gg/5M6w5faqjP)
* Github: [https://github.com/chaldea-center/chaldea/issues](https://github.com/chaldea-center/chaldea/issues)

