# Installation

### System Requirement

| Platform | Minimum Version              |
| :------- | :---------------------------- |
| Android  | Android 6.0 \(API level 23\)  |
| iOS      | iOS 10.0                      |
| Windows  | Windows 7 SP1 \(64-bit\), x86-64 based |
| macOS    | macOS 10.11 (macOS 10.14 in future)    |

## Download

### Google Play

[Get it on Google Play](https://play.google.com/store/apps/details?id=cc.narumi.chaldea)

### App Store

[Download on the App Store](https://apps.apple.com/us/app/chaldea/id1548713491?itsct=apps_box&itscg=30200)

::: tip
Including iOS App Store and Mac App Store
:::


### GitHub Release

Contains Android, Windows and macOS installer.

[Releases](https://github.com/chaldea-center/chaldea/releases)


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
Please run the app after decompression. Save to non-system folder, e.g. inside `Program File`, you may need admin permission, and some functions may not work properly.
:::

#### Error: `VCRUNTIME140_1.dll was not found`

If there is such an error message on startup, please install [Microsoft Visual C++ redistributable package](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads) and restart again.

### macOS

::: tip
The macOS installer on Github release and on Mac App Store have different app signature and may have slight difference in app.
:::

## Auto-upgrade
See [APP auto-upgrade](./app_setting.md#app-auto-upgrade)