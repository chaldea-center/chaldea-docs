# 下载与安装

### 系统要求

| 平台      | 最低要求                                      |
| :-------- | :-------------------------------------------- |
| Android   | Android 6.0 (API level 23)                    |
| iOS       | iOS 11.0                                      |
| Windows   | Windows 8 (64-bit), x86-64 based <sup>1</sup> |
| macOS     | macOS 10.14                                   |
| Linux     | Debian 10, 64-bit <sup>2</sup>                |
| Web(海外) | <https://chaldea.center>                      |
| Web(国内) | <https://cn.chaldea.center>                   |

> <sup>1</sup> Windows 7 SP1 理论可运行，但可能存在无法启动的未知错误
>
> <sup>2</sup> 仅 Debian 发行版的 Linux 得到测试与支持。虽然可能能运行在其他发行版上，但我们目前无法保证完全兼容，也无法为这些平台出现的问题提供技术支持

更多关于系统版本要求可查看[Flutter 文档](https://docs.flutter.dev/reference/supported-platforms)

关于 v2 和 Web 版详见[V2 Release](./v2_release.md)

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

v1.x 用户请阅读[注意事项](#安装注意事项)

### App Store

[<img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-US?size=250x83&amp;releaseDate=1610841600&h=cb0adac232fdd6b88894f78b2f349b6e" alt="Download on the App Store" width="120">](https://apps.apple.com/us/app/chaldea/id1548713491?itsct=apps_box&itscg=30200)

[Download on the App Store](https://apps.apple.com/us/app/chaldea/id1548713491?itsct=apps_box&itscg=30200)

::: tip
包括 iOS App Store 和 Mac App Store
:::

### GitHub Release

包含 Android、Windows 和 Linux 安装包。若最新版不包含所需平台，请检查更早的发布版本。

- [Github Releases](https://github.com/chaldea-center/chaldea/releases)
- [历史版本](./releases.md) 可选代理下载

蓝奏云网盘，~~随缘上传，更新不及时~~ 不再上传，请通过历史版本下载。

- <https://wws.lanzoui.com/b01tuahmf> 密码:chaldea

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

自 v2.3.0 起，桌面应用支持在系统托盘显示，在 Linux 系统中需要使用`libappindicator`相关库。如果系统未内置或未安装，则应用启动时可能会失败而无错误提示。

以 Deibian 系列为例（如 Ubuntu），可以通过以下命令安装上述库：

```sh
# Debian based
sudo apt install libappindicator3-1
# Ubuntu 22.04 或更高
sudo apt-get install libayatana-appindicator3-dev
```
