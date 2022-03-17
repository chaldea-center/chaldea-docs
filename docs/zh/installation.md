# 下载与安装

### 系统要求

| 平台     | 最低要求                       |
| :------ | :---------------------------- |
| Android | Android 6.0 (API level 23)    |
| iOS     | iOS 10.0                      |
| Windows | Windows 7 SP1 (64-bit), x86-64 based |
| macOS   | macOS 10.12.2 (macOS 10.14 in future)  |
| Linux   | Debian 10 & above             |
| Web     | [https://chaldea.center](https://chaldea.center)<br>[https://cn.chaldea.center](https://cn.chaldea.center)|

关于Web版详见[V2 Release](./v2_release.md)

## 下载

### Google Play

[<img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' width="137.5"/>](https://play.google.com/store/apps/details?id=cc.narumi.chaldea)

[Get it on Google Play](https://play.google.com/store/apps/details?id=cc.narumi.chaldea)

### App Store

[<img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-US?size=250x83&amp;releaseDate=1610841600&h=cb0adac232fdd6b88894f78b2f349b6e" alt="Download on the App Store" width="120">](https://apps.apple.com/us/app/chaldea/id1548713491?itsct=apps_box&itscg=30200)

[Download on the App Store](https://apps.apple.com/us/app/chaldea/id1548713491?itsct=apps_box&itscg=30200)

::: tip
包括iOS App Store和Mac App Store
:::


### GitHub Release

包含Android、Windows、macOS和Linux安装包。若最新版不包含所需平台，请检查更早的发布版本。

Github访问存在障碍的情况下，请选择镜像网站访问：
- [Github Releases](https://github.com/chaldea-center/chaldea/releases)
- [fastgit镜像](https://hub.fastgit.xyz/chaldea-center/chaldea/releases) ~~也被qiang了~~
- [cnpmjs镜像](https://github.com.cnpmjs.org/chaldea-center/chaldea/releases) ~~被Github限制了~~

蓝奏云网盘，最后的底线，更新可能不及时。
- [https://wws.lanzoui.com/b01tuahmf](https://wws.lanzoui.com/b01tuahmf) 密码:chaldea

## 安装注意事项

### Android

Android分为3个版本：

| ABI         | 构建号(build) | 描述                 |
| :---------- | ----- | :------------------------- |
| arm64-v8a   | 2xxx  | 推荐，几乎绝大多数机型均可安装  |
| armeabi-v7a | 1xxx  | 兼容旧机型                   |
| x86_64      | 4xxx  | 64位处理器的平板、模拟器       |

> 不支持x86安装包，32位安卓模拟器如需安装请打开**兼容模式**，并安装**armeabi-v7a**包。但是为什么不直接安装桌面端？

::: warning
同一个应用发布版本(v1.6.0, build 600)，不同ABI其构建号不同(1600,2600,4600)。安装时务必保证构建号是不小于已安装构建号，否则将先卸载当前版本导致数据丢失。如需更换ABI，务必备份数据。
:::

### Windows

::: tip
Windows压缩包，请解压后再运行，并储存于非系统目录，`Program File`等系统目录内将导致程序无法运行。
:::

#### Error: `VCRUNTIME140_1.dll was not found`

若启动时报该错误，先安装[Microsoft Visual C++ redistributable package](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads)

### macOS

由于数据储存位置共享，请勿同时运行多个实例，否则会导致数据相互覆盖。

::: tip
macOS安装包与应用商店的版本具有不同的签名，可能存在细微的差别
:::

## 自动更新
详见[APP自动更新](./app_setting.md#app自动更新)
