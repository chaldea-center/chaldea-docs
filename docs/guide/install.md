# Install

### System Requirement

| Platform        | Minimum Version             |
| :-------------- | :-------------------------- |
| Android         | Android 6.0 (API level 23)  |
| iOS             | iOS 12.0                    |
| Windows         | Windows 10, x64             |
| macOS           | macOS 10.14                 |
| Linux           | Debian 10, x64 <sup>1</sup> |
| Web<sup>2</sup> | <https://chaldea.center>    |
| Web(China)      | <https://cn.chaldea.center> |

> <sup>1</sup> Only **Debian** based Linux distributions are supported and tested. While it may work on other Linux distributions, we cannot guarantee full compatibility nor offer technical support for issues arising from those platforms at this time.
>
> <sup>2</sup> **Mobile browser** is not recommended due to bad performance and compatibility. Starting from 2.5.0, newer browser version is required, see [WeakRef](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef/WeakRef#browser_compatibility) and [globalThis](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis#browser_compatibility)

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

## Notes

### Android

All android ABIs(arm64-v8a, armeabi-v7a, x86_64) are merged into one apk in v2.x.

::: warning
If you are using v1.x, you have to UNINSTALL old version first! All data will be swiped,
so make sure to backup to local before upgrading. V1 server backup is incompatible with v2.
:::

### Windows

::: tip
Please run the app after decompression. And save to non-system folder, e.g. `Program File` is not recommended, you may need admin permission, and some functions may not work properly.
:::

**Error: `VCRUNTIME140_1.dll was not found`**

If there is such an error message on startup, please install [Microsoft Visual C++ redistributable package](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads) and restart again.

### macOS

::: tip
The macOS version is only available on Mac App Store.
:::

### Linux

If app cannot be started, try to run it from terminal `./chaldea` and check the possible error.

Since v2.3.0, desktop app can be shown in system tray, and `libappindicator` is required in linux system.
If it doesn't exist in your system, please install it before launching chaldea app, otherwise startup will fail silently.

Due to some errors, the feature is disabled but the lib is still required.

For Debian based Linux, you can install it through the following command:

```sh
# Debian based
sudo apt install libappindicator3-1
# Ubuntu 22.04 or higher
sudo apt-get install libayatana-appindicator3-dev
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
