# V2 Release Note

本次更新带来了渐进式Web应用(PWA)的支持，原APP核心功能已适配过半，目前仍处于测试阶段。

目前提供两个网址可供访问: 
- [https://cn.chaldea.center](https://cn.chaldea.center)
- [https://chaldea.center](https://chaldea.center)

由于国内对googleapis.com的访问限制，将可能出现字体无法加载的情况。因此增加cn.chaldea.center作为国内访问入口。

## Web渲染模式

目前存在两种渲染方式，各有优缺点。可在设置最下方手动选择渲染模式，默认为自动(auto)模式，此时应用根据设备情况自动选择HTML渲染或CanvasKit渲染。
更改渲染方式将于下次启动/刷新页面生效。

### HTML渲染
使用 HTML，CSS，Canvas 和 SVG 元素来渲染。
- 优点: 应用的大小相对较小。可使用系统字体，无需下载网络字体。
- 缺点: 页面布局可能不准确，如字体大小计算不正确, 不同设备页面布局不同。

### CanvasKit渲染
将 Skia 编译成 WebAssembly 格式，并使用 WebGL 渲染。
- 优点: 应用在移动和桌面端保持一致，有更好的性能，以及降低不同浏览器渲染效果不一致的风险。
- 缺点: 应用的大小较大，尤其是第一次加载。其次使用Google字体，渲染时下载字体，即使不存在网络问题，从页面显示到字体渲染仍需长达数秒的间隔，此时字体均显示为一个框。

## 反馈

有任何问题可通过以下方式反馈：

* Email: [chaldea@narumi.cc](mailto:chaldea.narumi.cc)
* QQ频道: [QQ频道-Chaldea](https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&inviteCode=1bVHFW&from=181074&biz=ka&shareSource=5)
* Discord: [https://discord.gg/5M6w5faqjP](https://discord.gg/5M6w5faqjP)
* Github: [https://github.com/chaldea-center/chaldea/issues](https://github.com/chaldea-center/chaldea/issues)

