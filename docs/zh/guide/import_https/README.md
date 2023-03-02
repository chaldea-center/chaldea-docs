# 抓包简介

## 目录

- 本页：抓包介绍
- [BetterFGO 客户端 apk](./bfgo.md): 日服/美服所需， 目前已不可用
- [迁移数据](./transfer_data.md): 日服/美服多客户端共存
- [Stream-iOS](./stream.md): 国服/台服 iOS 抓包教程
- [HttpCanary-Android](./httpcanary.md): Android 抓包教程
- [Charles 版教程-PC](./charles.md): Android/iOS 配合 Charles(PC)教程
- [mitmproxy 版教程-PC](./mitmproxy.md): Android/iOS 配合 mitmproxy(PC)教程
- [Quantumult X-iOS](./quantumultx.md): 国服&台服 iOS 抓包（付费 app）

::: warning
日服/美服/韩服有证书绑定(cert-pinning)，会拒绝抓包软件的证书，**“必须”** 使用第三方 apk！

~~日服/美服第三方 apk 可使用本文介绍的 Rayshift.io 制作的 BetterFGO 版本。~~ 不再支持，详见[BetterFGO](./bfgo.md)
:::

国服和台服没有证书绑定，支持 Android 和 iOS 的官方安装包的抓包。

## 简介

通过抓取用户登陆时的 https 请求的响应内容可以将用户所有的数据导入到 Chaldea 应用中，包括从者信息(灵基再临、圣杯、羁绊、主动技能、附加技能、灵衣、从者硬币)、素材数量以及概念礼装图鉴的情况。第一次使用需要配置抓包软件、代理软件等步骤多一些，成功后第二次就比较简洁。

该方法核心即为 HTTPS 抓包，因此任何能够获取 https 的响应体(Response body)的方法或软件均可，如**Stream(iOS)**、**Charles**、**Fiddler**、**mitmproxy**、**Surge(iOS)** 或 **HttpCanary(Android)** 等。你可以打开搜索引擎搜索以下几个关键词以获取其他相关教程: `Charles https 抓包 手机/模拟器`。

注意最终导出的数据务必仅包括响应体(body)，不包括响应头(headers)等信息，且与文末的格式相同，即 ey 开头的 base64 编码或 json 格式。

::: danger 免责声明
使用前请确保已经了解并愿意承担其中的风险，Chaldea(本应用)不涉及账号密码及 https 解密等处理，抓包过程均由第三方软件或客户端实现。
:::

此处原理的介绍非常简洁，主要目的是为了理解为什么要这么做以及这些操作中存在的风险，详细原理和风险可咨询度娘。了解后如果不信任本方法，请勿使用。

::: danger 提醒
对于主力机或安装有敏感信息软件（如支付类、金融类）的设备/模拟器，强烈建议在使用完毕后关闭信任或删除证书以保障设备安全。
:::

## 中间人攻击

FGO 在成功登陆后，服务器会返回一个包含账号所有信息的 https 响应。不同于 http 的明文通信，https 是经过加密的，解密往往需要借助抓包工具/网络调试软件，甚至需要修改客户端软件。目前抓包工具(Fiddler/Charles)实现 https 解密的方法大都通过在客户端设备中安装 CA 证书，并在服务器和客户端之间充当第三人分别于服务器和客户端进行通讯，也即**中间人攻击 MITM**。

Fiddler/Charles~~以及更底层的 wireshark 等~~为目前主流的网络调试/抓包工具，使用风险可能有:

- 下载安装了 pj 版并且经人恶意修改植入木马等的 Fiddler/Charles，~~跟本应用无关~~。建议使用正版。
- 软件安装的 CA 证书可能被其他恶意软件利用。建议在使用完毕后关闭或删除 CA 证书，尤其是主力机或存在敏感数据的设备(如安装有支付宝等涉及财产密码等软件)。

## 证书绑定

目前国服和台服通过上述抓包软件即可实现 https 的解密。但日服/美服/韩服还有进一步的安保措施: **证书绑定(cert pinning)**。通过在客户端中预置证书，在通信前对比从"服务器"传过来的证书(抓包工具提供的 CA 证书)和预置证书是否一致有效，无效则拒绝连接，此时登陆 FGO 时会直接提示前往应用商店更新版本。

由于目前 FGO 的证书信息是写进代码里的，有自己的验证步骤，常用因此若需跳过证书验证，需要修改安装包，~~如有其他方法欢迎告知~~。
~~此处使用[rayshift.io](https://rayshift.io/)制作的 BetterFGO 客户端(简称 bfgo，仅 Android apk)，包含日服和美服。具体请见[获取 BetterFGO](./bfgo.md)~~ 不再支持
