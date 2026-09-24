# Install

### System Requirement

| Platform        | Minimum Version             |
| :-------------- | :-------------------------- |
| Android         | Android 7.0 (API level 24)  |
| iOS             | iOS 15.0                    |
| Windows         | Windows 10, x64             |
| macOS           | macOS 12.0                  |
| Linux           | Debian 10, x64 <sup>1</sup> |
| Web<sup>2</sup> | <https://chaldea.center>    |
| Web(China)      | <https://cn.chaldea.center> |

> <sup>1</sup> Only **Debian** based Linux distributions are supported and tested. While it may work on other Linux distributions, we cannot guarantee full compatibility nor offer technical support for issues arising from those platforms at this time.
>
> <sup>2</sup> **Mobile browser** is not recommended due to bad performance and compatibility. Starting from 2.5.0, newer browser version is required: the latest 2 versions of Chrome/Edge/Firefox, and Safari 15.6+. See [WeakRef](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef/WeakRef#browser_compatibility) and [globalThis](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis#browser_compatibility)

Check [Flutter docs](https://docs.flutter.dev/reference/supported-platforms) for more about supported platforms.

::: tip
Don't run multiple instances or web pages together, otherwise data will be overridden by each other.
:::

::: tip
If you encounter installation/startup problems, please check [Notes](#notes) first.
:::

## Download

### Google Play

[<img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' width="137.5"/>](https://play.google.com/store/apps/details?id=cc.narumi.chaldea)
[<img alt='Get it on F-droid' src='https://fdroid.gitlab.io/artwork/badge/get-it-on.png' width="137.5"/>](https://f-droid.org/packages/cc.narumi.chaldea.fdroid/)

[Get it on Google Play](https://play.google.com/store/apps/details?id=cc.narumi.chaldea)

### App Store

[<img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-US?size=250x83&amp;releaseDate=1610841600&h=cb0adac232fdd6b88894f78b2f349b6e" alt="Download on the App Store" width="120">](https://apps.apple.com/us/app/chaldea/id1548713491?itsct=apps_box&itscg=30200)

[Download on the App Store](https://apps.apple.com/us/app/chaldea/id1548713491?itsct=apps_box&itscg=30200)

::: tip
Including iOS App Store and Mac App Store
:::

### GitHub Release

Contains Android, Windows and Linux binary assets.

- [Github Releases](https://github.com/chaldea-center/chaldea/releases)
- [Releases](#releases)

If the latest version doesn't contain the platform you want, please check the previous versions.

## Upgrade {#upgrade}

**This chapter mainly targets the Windows / Linux desktop version** — see the subsections below for auto upgrade, manual upgrade and rollback. macOS and Android upgrades are simple:

- **macOS**: updated via the App Store.
- **Android**: updated via the app store, or by installing the new APK over the old one — no uninstallation needed.

For the desktop version, user data lives in the `userdata` folder next to the executable. Upgrades and uninstallation never touch it; to back up your data manually, just copy the `userdata` folder.

### In-App Auto Upgrade {#auto-upgrade}

The app checks for new versions automatically on launch; you can also check manually in Settings → About → Check Update. Click "Update" and the app will handle everything: download → integrity check → back up the old version → replace files → restart.

- The previous version's program files are automatically backed up to `_backups/chaldea-backup-<version>/` next to the executable (the most recent 3 backups are kept by default).
- When the download finishes, the app pauses and asks for confirmation. Choose "Later" to keep using the current version — the downloaded installer is kept, so continuing the upgrade later won't download it again.
- The auto upgrade never modifies user data in `userdata`. Still, in case of extreme accidents (power loss, disk failure), consider copying the `userdata` folder elsewhere before upgrading.

### Manual Upgrade {#manual-upgrade}

1. Download the new archive for your platform from the release page.
2. Delete (or move away) everything in the app folder EXCEPT `userdata` and `_backups`.
3. Extract the new archive into the same app folder.
4. Run the app and confirm the version number has changed. On Linux, if you get `Permission denied`, run `chmod +x chaldea` in a terminal.

### Rollback {#rollback}

- **Automatic rollback**: if an upgrade is interrupted (power loss, disk error, etc.), the updater script restores the previous version and relaunches it automatically.
- **Manual restore**: open the `_backups` folder and enter the `chaldea-backup-<version>` folder you want to restore:
  - Windows: right-click `restore.ps1` and choose "Run with PowerShell";
  - Linux: run `sh restore.sh` in a terminal.

  The script restores that version into the app folder and launches it. Restoring only overwrites program files — `userdata` is not affected.

## Notes

### Android

All android ABIs(arm64-v8a, armeabi-v7a, x86_64) are merged into one apk in v2.x.

### Windows

::: tip
Please run the app after decompression. And save to non-system folder: system folders like `Program Files` or `C:\` require admin permission, which breaks data saving and auto-upgrade.
:::

**Error: `VCRUNTIME140_1.dll was not found`**

Recent releases bundle the VC runtime DLLs (`vcruntime140.dll`, etc.), so this error should not appear after a normal extraction. If it still does, please install [Microsoft Visual C++ redistributable package](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads) and restart again.

### macOS

::: tip
The macOS version is only available on Mac App Store.
:::

### Linux

If app cannot be started, try to run it from terminal `./chaldea` and check the possible error.

Since v2.3.0, desktop app can be shown in system tray (disabled by default, can be enabled in the in-app display settings), and `libappindicator` is required in linux system.
If it doesn't exist in your system, please install it before launching chaldea app, otherwise startup will fail silently.
If the app crashes after enabling the tray, turn off "System Tray" in the display settings; if the app can no longer be opened, remove the `"showSystemTray": true` entry from `userdata/user/settings.json` (or simply delete the whole file if you are not familiar with json) to reset the setting.

For Debian based Linux, you can install it through the following command:

```sh
sudo apt-get install libayatana-appindicator3-dev
# or
sudo apt-get install appindicator3-0.1 libappindicator3-dev
```

## Releases

> For FGO game apk, please visit [FGO APK](./fgo_apk.md).

This section lists recent **Chaldea** stable and beta download links for Android, Linux and Windows.

If you have trouble downloading from the **Github** link, please use the **Proxy** link.

More releases can be found at [Github Releases](https://github.com/chaldea-center/chaldea/releases)

Tips: `beta` version is the latest preview version, updated when source code got updated.

To download the latest stable version:

- Android: <https://worker.chaldea.center/releases/latest/android>
- Windows: <https://worker.chaldea.center/releases/latest/windows>
- Linux: <https://worker.chaldea.center/releases/latest/linux>

<AppRelease/>

<script setup>
import AppRelease from '../components/AppRelease.vue'
</script>
