# 下载与安装

### 系统要求

| 平台                  | 最低要求                    |
| :-------------------- | :-------------------------- |
| Android               | Android 7.0 (API level 24)  |
| iOS                   | iOS 15.0                    |
| Windows               | Windows 10, x64             |
| macOS                 | macOS 12.0                  |
| Linux                 | Debian 10, x64 <sup>1</sup> |
| Web(海外)<sup>3</sup> | <https://chaldea.center>    |
| Web(国内)             | <https://cn.chaldea.center> |

> <sup>1</sup> 仅 Debian 发行版的 Linux 得到测试与支持。虽然可能能运行在其他发行版上，但我们目前无法保证完全兼容，也无法为这些平台出现的问题提供技术支持
>
> <sup>2</sup> **移动端网页**的性能、兼容性较差，不建议使用。自2.5.0起，web版要求在较新版本的浏览器上运行：Chrome/Edge/Firefox 最新 2 个版本、Safari 15.6 及以上。 详见[WeakRef](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef/WeakRef#browser_compatibility) 和 [globalThis](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis#browser_compatibility)

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

## 升级 {#upgrade}

**本章主要针对 Windows / Linux 桌面版**，自动升级、手动升级与回滚详见下文小节。macOS 和 Android 的升级比较简单：

- **macOS**：通过 App Store 更新。
- **Android**：通过应用商店更新，或下载新 APK 覆盖安装，无需卸载旧版。

桌面版的用户数据保存在程序目录下的 `userdata` 文件夹中，升级和卸载都不会触碰该目录；手动备份只需复制该文件夹。

### 应用内自动升级 {#auto-upgrade}

应用启动时会自动检查新版本，也可在「设置 → 关于 → 检查更新」手动检查。点击「更新」后，应用将自动完成：下载 → 完整性校验 → 备份旧版本 → 替换文件 → 重启。

- 升级前旧版本程序文件会自动备份到程序目录下的 `_backups/chaldea-backup-<版本号>/`（默认保留最近 3 个）。
- 下载完成后会暂停并请求确认安装，选择「稍后」可继续使用当前版本，已下载的安装包会保留，无需重新下载。
- 自动升级不会修改 `userdata` 中的用户数据。为防意外（如断电、磁盘故障），建议升级前将 `userdata` 文件夹复制到其他位置备份。

### 手动升级 {#manual-upgrade}

1. 从发布页下载对应平台的新版压缩包。
2. 删除（或移走）旧程序目录中除 `userdata` 和 `_backups` 外的全部文件。
3. 将新压缩包解压到同一程序目录。
4. 运行主程序并确认版本号已更新。Linux 下若提示 `Permission denied`，请在终端执行 `chmod +x chaldea` 添加可执行权限。

### 回滚 {#rollback}

- **自动回滚**：升级过程中断（如断电、磁盘错误）时，升级脚本会自动恢复旧版本并重新启动，无需人工处理。
- **手动恢复**：进入 `_backups` 文件夹，打开想要恢复的 `chaldea-backup-<版本号>` 文件夹：
  - Windows：右键 `restore.ps1`，选择「使用 PowerShell 运行」；
  - Linux：在终端执行 `sh restore.sh`。

  脚本会将该版本恢复到程序目录并启动。恢复只覆盖程序文件，`userdata` 不受影响。

## 注意事项

### Android

对于 v2，所有 Android 版本均合并到一个安装包中，因此下载时无需分辨 arm64-v8a、armeabi-v7a、x86_64

### Windows

::: tip
Windows 压缩包，请解压后再运行，并储存于非系统目录。`Program Files`、`C:\` 等系统目录需要管理员权限，将导致程序无法保存数据和自动升级。
:::

#### Error: `VCRUNTIME140_1.dll was not found`

近期版本的压缩包已内置 `vcruntime140.dll` 等运行库，正常解压后一般不会出现该错误。若仍提示缺失，请安装[Microsoft Visual C++ redistributable package](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads)

### macOS

::: tip
macOS 现在仅提供应用商店版本
:::

### Linux

如果应用启动失败，请尝试从 Terminal 中启动`./chaldea`并检查可能输出的报错信息。

自 v2.3.0 起，桌面应用支持在系统托盘显示（默认关闭，可在应用内显示设置中开启），在 Linux 系统中需要`libappindicator`相关库。如果系统未内置或未安装，则应用启动时可能会失败而无错误提示。若开启托盘后应用崩溃，可在显示设置中关闭「系统托盘」；若已无法进入应用，则删除`userdata/user/settings.json`中的`"showSystemTray": true`设置项（不了解 json 格式可直接删除整个文件）以重置该设置。

以 Debian 系列为例（如 Ubuntu），可以通过以下命令安装上述库：

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
