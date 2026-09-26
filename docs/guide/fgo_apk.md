# FGO APK

- For **Chaldea** apk/exe, please visit [Installation](./install.md)

::: warning IMPORTANT 2024.07.19
Google Play Store won't provide APK format anymore (JP/NA/KR), please go to Google Play Store to update game. If can't, the alternative install options are:

- 【Official】Google Play Store
- 【Equivalent official】XAPK downloaded from [APK Combo](https://apkcombo.com/fgo-jp/com.aniplex.fategrandorder/download/apk)/[ApkPure](https://apkpure.com)/this page, install with an XAPK installer such as Chaldea App (see below) or [APKCombo Installer](https://apkcombo.com/how-to-install)
- 【3rd party】modified clients. Disclaimer: make sure you understand and accept the risks before using 3rd-party APKs, at your own risk!
  :::

## XAPK Installation

XAPK wraps the official install resources (which cannot be installed directly); after installation it is equivalent to the official Play Store version. XAPKs from APKCombo/ApkPure contain both 32-bit and 64-bit, while the XAPKs on this page are split. Some devices need to turn off system optimizations, e.g. MIUI optimization.

Since v2.6.2, the **non-GooglePlay version** of Chaldea App (see [Installation](./install.md)) has a built-in "XAPK Install" feature; the Google Play version lacks the install permission due to Play Store policy.

Open the APK page in Chaldea App, tap the install button on the right of the corresponding version to download and install it directly, or tap the "XAPK Install" entry in the page and select a local XAPK file to install.

XAPKs from other sources are also supported, but only those **without OBB**; currently FGO XAPKs contain no OBB.

## Download

- Visit [bilibili](https://game.bilibili.com/fgo/) for CN version download
- JP/NA apk is divided into 64-bit and 32-bit versions.
  - `arm64-v8a/64-bit`: for most modern devices
  - `armeabi_v7a/32-bit`: for some old emulator/phone/special devices
  - `combined`: includes both 64-bit and 32-bit versions
- **Proxy** link is for China mainland if direct link is unavailable
- Source: [@Cereal](https://fgo.bigcereal.com)

<ApkRelease/>

<!-- ### [Rayshift](https://rayshift.io) APK Mod

- [BetterFGO JP latest](https://rayshift.io/betterfgo/download/jp)
- [BetterFGO NA latest](https://rayshift.io/betterfgo/download/na) -->

<script setup>
import ApkRelease from '../components/ApkRelease.vue'
</script>
