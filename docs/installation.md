# Installation

### System Requirement

| Platform | Minimum Version               |
| :------- | :---------------------------- |
| Android  | Android 6.0 (API level 23)    |
| iOS      | iOS 10.0                      |
| Windows  | Windows 7 SP1 (64-bit), x86-64 based |
| macOS    | macOS 10.12.2                 |
| Linux    | Debian 10 & above             |
| Web      | [https://chaldea.center](https://chaldea.center)<br>[https://cn.chaldea.center](https://cn.chaldea.center)|

For more details about Web version, see [V2 Release Note](./v2_release.md)

## Download

### Google Play

[<img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' width="137.5"/>](https://play.google.com/store/apps/details?id=cc.narumi.chaldea)
[<img alt='Get it on F-droid' src='https://fdroid.gitlab.io/artwork/badge/get-it-on.png' width="137.5px"/>](https://f-droid.org/packages/cc.narumi.chaldea.fdroid/)

[Get it on Google Play](https://play.google.com/store/apps/details?id=cc.narumi.chaldea)

For v1.x, check [Attentions](#attentions)

### App Store

[<img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-US?size=250x83&amp;releaseDate=1610841600&h=cb0adac232fdd6b88894f78b2f349b6e" alt="Download on the App Store" width="120">](https://apps.apple.com/us/app/chaldea/id1548713491?itsct=apps_box&itscg=30200)

[Download on the App Store](https://apps.apple.com/us/app/chaldea/id1548713491?itsct=apps_box&itscg=30200)

::: tip
Including iOS App Store and Mac App Store
:::


### GitHub Release

Contains Android, Windows and Linux binary assets.

[Releases](https://github.com/chaldea-center/chaldea/releases)

If the latest version doesn't contain the platform you want, please check the previous versions.

## Attentions

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

#### Error: `VCRUNTIME140_1.dll was not found`

If there is such an error message on startup, please install [Microsoft Visual C++ redistributable package](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads) and restart again.

### macOS

Don't run multiple Chaldea instances, because the data is shared. Otherwise, data may be overridden unexpectedly. 

::: tip
The macOS version is only available on Mac App Store.
:::

## Auto-upgrade

See [APP auto-upgrade](./app_setting.md#app-auto-upgrade)