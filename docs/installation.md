# Installation

### System Requirement

| Platform | Minimum Version               |
| :------- | :---------------------------- |
| Android  | Android 6.0 (API level 23)    |
| iOS      | iOS 10.0                      |
| Windows  | Windows 7 SP1 (64-bit), x86-64 based |
| macOS    | macOS 10.12.2 (macOS 10.14 in future)  |
| Linux    | Debian 10 & above             |

## Download

### Google Play

[<img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' width="137.5"/>](https://play.google.com/store/apps/details?id=cc.narumi.chaldea)

[Get it on Google Play](https://play.google.com/store/apps/details?id=cc.narumi.chaldea)

### App Store

[<img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-US?size=250x83&amp;releaseDate=1610841600&h=cb0adac232fdd6b88894f78b2f349b6e" alt="Download on the App Store" width="120">](https://apps.apple.com/us/app/chaldea/id1548713491?itsct=apps_box&itscg=30200)

[Download on the App Store](https://apps.apple.com/us/app/chaldea/id1548713491?itsct=apps_box&itscg=30200)

::: tip
Including iOS App Store and Mac App Store
:::


### GitHub Release

Contains Android, Windows, macOS and Linux binary assets.

[Releases](https://github.com/chaldea-center/chaldea/releases)

If the latest version doesn't contain the platform you want, please check the previous versions.

## Attentions

### Android

There are 3 ABI versions for Android:

| ABI         | build | Description                        |
| :---------- | ----- | :--------------------------------- |
| arm64-v8a   | 2xxx  | Recommended, support most devices  |
| armeabi-v7a | 1xxx  | Compatible with old models         |
| x86_64      | 4xxx  | Tablet and emulator with 64-bit processor  |

> The x86 installer is not supported. If you need to install in 32-bit Android emulator, please switch on the **compatibility mode** and install the **armeabi-v7a** version. But why not install the desktop version directly? 

::: warning
For the same app release(v1.6.0, build 600), different ABI version has different build number(1600/2600/4600). 
Make sure you are installing the bigger build number than the installed one. Otherwise, the previous version will be uninstalled first, which will swipe all your data. Backup is expected if changing the ABI version.
:::

### Windows

::: tip
Please run the app after decompression. And save to non-system folder, e.g. `Program File` is not recommended, you may need admin permission, and some functions may not work properly.
:::

#### Error: `VCRUNTIME140_1.dll was not found`

If there is such an error message on startup, please install [Microsoft Visual C++ redistributable package](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads) and restart again.

### macOS

::: tip
The macOS installer on Github release and on Mac App Store have different app signature and may have slight difference in app.
:::

## Auto-upgrade
See [APP auto-upgrade](./app_setting.md#app-auto-upgrade)