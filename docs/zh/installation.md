# 下载与安装

### 系统要求

| 平台     | 最低要求                       |
| :------ | :---------------------------- |
| Android | Android 6.0 (API level 23)  |
| iOS     | iOS 10.0                      |
| Windows | Windows 7 SP1 (64-bit), x86-64 based |
| macOS   | macOS 10.11 (macOS 10.14 in future)    |

## 下载

### Google Play

[Get it on Google Play](https://play.google.com/store/apps/details?id=cc.narumi.chaldea)

### App Store

[Download on the App Store](https://apps.apple.com/us/app/chaldea/id1548713491?itsct=apps_box&itscg=30200)

::: tip
包括iOS App Store和Mac App Store
:::


### GitHub Release

包含Android、Windows和macOS安装包

[Releases](https://github.com/chaldea-center/chaldea/releases)

[cnpmjs镜像](https://github.com.cnpmjs.org/chaldea-center/chaldea/releases)

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

::: tip
macOS安装包与应用商店的版本具有不同的签名，可能存在细微的差别
:::

## 自动更新
详见[APP自动更新](./app_setting.md#app自动更新)
