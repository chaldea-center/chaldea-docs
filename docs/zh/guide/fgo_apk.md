# FGO APK

- Chaldea app 的 apk/exe 请查看[下载与安装](./install.md)

::: warning 重要 2024.07.19
Google 应用商店已不再提供 APK 独立安装包(JP/NA/KR)，请前往 Google Play 商店更新游戏。如无法更新，可选择的安装途径有:

- 【官方】 Google Play商店
- 【等效官方】[APK Combo](https://apkcombo.com/fgo-jp/com.aniplex.fategrandorder/download/apk)/[APK Pure](https://apkpure.com/cn/fate-grand-order/com.aniplex.fategrandorder/download)/本页 下载的XAPK，需使用XAPK安装器安装，如本应用（见下文）、[APKCombo Installer](https://apkcombo.com/zh/how-to-install)。
- 【第三方】部分第三方修改的客户端。免责声明：使用第三方APK前请确保已经了解并愿意承担其中的风险，后果自负！
  :::

<!-- ## 重签名APK

将apkcombo的XAPK重新打包成一个单独的APK（不再区分32位/64位），并重新签名，应用包名也修改成`cc.chaldea.fgoxx`。除此之外无其他修改。

目前网盘中提供了日服/韩服的apkcombo xapk包和重签名的apk包。

- 下载地址: <https://disk.chaldea.center/s/9eua>

::: tip 注意事项

- 未研究**设备兼容性**或**bug**或“**风险**”，欢迎反馈。请在知晓的前提下使用。后果自负。
- 和官方应用共存，建议通过[拷贝账号文件(引继文件)](./import_https/transfer_data.md)的方法迁移数据，不建议使用引继码
  ::: -->

## XAPK 安装

xapk 格式是在官方安装资源（不能直接安装）基础上封装的，安装后等效于 Google Play 商店的官方版本。ApkCombo/ApkPure 等网站下载的 xapk 包含 32 位和 64 位，本页提供的 xapk 源进行了拆分。部分机型需关闭系统优化，如 MIUI 需关闭 MIUI 优化。

从 v2.6.2 起，**非 Google Play 版本**的 Chaldea App（见[下载与安装](./install.md)）内置「XAPK 安装」功能；Google Play 版因商店政策不含安装权限，不支持此功能。

进入 Chaldea App 的 APK 页面，点击对应版本右侧的安装按钮，即可下载并安装该版本；也可点击页面中的「XAPK 安装」入口，自行选择本地 XAPK 文件进行安装。

本功能也支持安装其他来源的 XAPK，但仅支持**不含 OBB** 的 XAPK；目前 FGO XAPK 均不含 OBB 内容。

## 下载

- 国服(CN)apk 请前往[bilibili 官网](https://game.bilibili.com/fgo/)下载
- 部分有分为32位和64位版本:
  - `armeabi_v7a/32-bit`, 32 位版多为旧模拟器或旧安卓或特殊设备使用
  - `arm64_v8a/64-bit`, 未标注即为 64 位，适用于绝大多数机型
  - `combined`, 包含 32 位和 64 位两个版本
- 其中 **Proxy/代理** 为国内代理路线，若直连无法下载，可使用代理路线
- 来源: [@Cereal](https://fgo.bigcereal.com)

<ApkRelease language="zh" />

<!-- ## [Rayshift](https://rayshift.io) 第三方客户端

包含一些优化，同时也会收集一些信息，如掉落统计等。详见其[discord](https://discord.gg/8JeHHvh)。下载后注意版本号是否最新。

- [BFGO 日服](https://rayshift.io/betterfgo/download/jp)
- [BFGO 美服](https://rayshift.io/betterfgo/download/na) -->

<script setup>
import ApkRelease from '../../components/ApkRelease.vue'
</script>
