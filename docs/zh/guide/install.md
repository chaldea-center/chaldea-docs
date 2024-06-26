# 下载与安装

### 系统要求

| 平台                  | 最低要求                    |
| :-------------------- | :-------------------------- |
| Android               | Android 6.0 (API level 23)  |
| iOS                   | iOS 12.0                    |
| Windows               | Windows 10, x64             |
| macOS                 | macOS 10.14                 |
| Linux                 | Debian 10, x64 <sup>1</sup> |
| Web(海外)<sup>3</sup> | <https://chaldea.center>    |
| Web(国内)             | <https://cn.chaldea.center> |

> <sup>1</sup> 仅 Debian 发行版的 Linux 得到测试与支持。虽然可能能运行在其他发行版上，但我们目前无法保证完全兼容，也无法为这些平台出现的问题提供技术支持
>
> <sup>2</sup> **移动端网页**的性能、兼容性较差，不建议使用。自2.5.0起，web版要求在较新版本的浏览器上运行。 详见[WeakRef](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef/WeakRef#browser_compatibility) 和 [globalThis](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis#browser_compatibility)

更多关于系统版本要求可查看[Flutter 文档](https://docs.flutter.dev/reference/supported-platforms)

::: tip
由于数据储存位置共享，请勿同时运行多个实例或网页，否则会导致数据相互覆盖。
:::

::: tip
若遇到安装/启动问题，请先检查[安装注意事项](#注意事项)。
:::

## 下载

### Google Play

[<img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' width="137.5"/>](https://play.google.com/store/apps/details?id=cc.narumi.chaldea)
[<img alt='Get it on F-droid' src='https://fdroid.gitlab.io/artwork/badge/get-it-on.png' width="137.5"/>](https://f-droid.org/packages/cc.narumi.chaldea.fdroid/)

[Get it on Google Play](https://play.google.com/store/apps/details?id=cc.narumi.chaldea)

### App Store

[<img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-US?size=250x83&amp;releaseDate=1610841600&h=cb0adac232fdd6b88894f78b2f349b6e" alt="Download on the App Store" width="120">](https://apps.apple.com/us/app/chaldea/id1548713491?itsct=apps_box&itscg=30200)

[Download on the App Store](https://apps.apple.com/us/app/chaldea/id1548713491?itsct=apps_box&itscg=30200)

::: tip
包括 iOS App Store 和 Mac App Store
:::

### GitHub Release

包含 Android、Windows 和 Linux 安装包。若最新版不包含所需平台，请检查更早的发布版本。

- [Github Releases](https://github.com/chaldea-center/chaldea/releases)
- [历史版本](#releases) 可选代理下载

## 注意事项

### Android

对于 v2，所有 Android 版本均合并到一个安装包中，因此下载时无需分辨 arm64-v8a、armeabi-v7a、x86_64

::: warning
如果你正在使用 v1.x，升级 v2 前必须要先**卸载**旧版本才能安装新版本，因此务必先备份数据到本地！v1 与 v2 的服务器备份也不相同！
:::

### Windows

::: tip
Windows 压缩包，请解压后再运行，并储存于非系统目录，`Program File`等系统目录内将导致程序无法运行。
:::

#### Error: `VCRUNTIME140_1.dll was not found`

若启动时报该错误，先安装[Microsoft Visual C++ redistributable package](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads)

### macOS

::: tip
macOS 现在仅提供应用商店版本
:::

### Linux

如果应用启动失败，请尝试从 Terminal 中启动`./chaldea`并检查可能输出的报错信息。

自 v2.3.0 起，桌面应用支持在系统托盘显示，在 Linux 系统中需要使用`libappindicator`相关库。如果系统未内置或未安装，则应用启动时可能会失败而无错误提示。但目前由于存在问题已禁用该功能（仍需安装相关库）。

以 Deibian 系列为例（如 Ubuntu），可以通过以下命令安装上述库：

```sh
sudo apt-get install libayatana-appindicator3-dev
# or
sudo apt-get install appindicator3-0.1 libappindicator3-dev
```

## 历史版本 {#releases}

> FGO 游戏安装包请查看[FGO APK](./fgo_apk.md)

以下列出了 Chaldea app 的 Android、Linux 和 Windows 客户端下载地址，包括 beta 版。

国内用户若无法直连**Github**下载，请选择 **代理(Proxy)** 链接进行下载。

所有历史发布版本请见[Github Releases](https://github.com/chaldea-center/chaldea/releases)

注意: `beta`版即预览版，随最新版代码一起更新。一般情况下下载 v2.x 最新正式版即可。

最新稳定版下载地址:

- Android: <https://worker-cn.chaldea.center/releases/latest/android>
- Windows: <https://worker-cn.chaldea.center/releases/latest/windows>
- Linux: <https://worker-cn.chaldea.center/releases/latest/linux>

<AppRelease lang="zh"/>

<script setup>
import AppRelease from '../../components/AppRelease.vue'
</script>
