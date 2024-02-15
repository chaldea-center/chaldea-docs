# 抓包简介

## 目录

- 本页：抓包介绍
- [模拟登陆](./authfile_login.md): ~~日服~~&美服 ，读取 54cc 账号文件实现账号登录并获取数据，最快捷但风险自理
- [Stream-iOS](./stream.md): 国服/台服 iOS 抓包教程
- [mitmproxy 版教程-PC](./mitmproxy.md): Android 配合 mitmproxy(PC)教程
- [Charles 版教程-PC](./charles.md): Android/iOS 配合 Charles(PC)教程
- [HttpCanary-Android](./httpcanary.md): Android 抓包教程
- [Quantumult X-iOS](./quantumultx.md): 国服&台服 iOS 抓包（付费 app）
- [迁移数据](./transfer_data.md): 日服/美服多客户端共存

## 如何选择？

- 日服官方客户端(2.80.5及以后版本)
  - ~~模拟登陆~~ 2.87.0(2024.2.14)后更改了验证方式，**为了账号安全，请勿使用！**
  - [mitmproxy](./mitmproxy.md)/[Charles](./charles.md) + Android, iOS不可用
- 国服/台服(注意国服iOS和Android已经可以互登):
  - iOS: [Stream](./stream.md)! 5分钟搞定！
  - Android: 优先[mitmproxy](./mitmproxy.md)，次选[Charles](./charles.md)
- 美服:
  - 模拟登陆

**以上方法并不保证适用于未来的客户端更新。**

## 服务器地址

::: tip
目前只有**旧mitmproxy教程**需要明确指定服务器地址。当前教程使用drony情况下无需明确服务器。

对于国服，此处iOS/Android/渠道服指的是账号所在区服，而非登陆用的设备系统。
即Android服账号在iOS设备上登录，仍为iOS服地址。

国服台服存在多个可用地址，但客户端实际使用哪个会因区服、地理位置、网络状态等因人而异。
:::

- 日服: `https://game.fate-go.jp`
- 美服: `https://game.fate-go.us`
- 台服:
  - `https://line3-s1-all.fate-go.com.tw`
  - `https://line1-s1-all.fate-go.com.tw`
- 国服iOS:
  - `https://le1-ios-fate.bilibiligame.net`
  - `https://line3-s2-ios-fate.bilibiligame.net`
  - `https://line1-s2-ios-fate.bilibiligame.net`
  - `https://line2-s2-ios-fate.bilibiligame.net`
- 国服Android:
  - `https://le1-bili-fate.bilibiligame.net`
  - `https://line3-s2-bili-fate.bilibiligame.net`
  - `https://line1-s2-bili-fate.bilibiligame.net`
  - `https://line2-s2-bili-fate.bilibiligame.net`
- 国服渠道服:
  - `https://line3-s1-uo-fate.bilibiligame.net`
  - `https://line1-s1-uo-fate.bilibiligame.net`
  - `https://line2-s1-uo-fate.bilibiligame.net`

[点我查看国服当前可用服务器地址](https://worker-cn.chaldea.center/misc/bili-fgo-server)

若有变更请反馈。

## 常见问题/FAQ

1. 以前使用过、安装过证书的记得检查证书过期时间，如Charles证书只有1年有效期。过期需要删除证书&**重新生成证书**&重新安装。
2. 抓包得到的数据中不包含用户名密码等信息，仅包含账号内各种游戏资源信息，Chaldea应用无法也不会去获取账密。
3. 其中日服/美服的引继文件则包含完整的登录用信息，请勿与他人分享。
4. 不提供除文档错误/bug外的技术支持，请善用搜索引擎&社区提问。

## 简介

::: warning
日服/美服/韩服有证书绑定(cert-pinning)，会拒绝抓包软件的证书。日服在2.80.5之前必须使用第三方修改的apk才能抓包，2.80.5以后支持官方安装包在Android平台抓包(需root安装证书至系统证书)。美服/韩服官方安装包尚不支持。

当然如果你有办法自行修改apk，这些方法自然都可行，~~既然技术那么高超了更没有必要看这个文档了~~
:::

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

> 鉴于目前日服美服韩服都没有第三方安装包，所以证书绑定这块解除不了了。

目前国服和台服通过上述抓包软件即可实现 https 的解密。但日服/美服/韩服还有进一步的安保措施: **证书绑定(cert pinning)**。通过在客户端中预置证书，在通信前对比从"服务器"传过来的证书(抓包工具提供的 CA 证书)和预置证书是否一致有效，无效则拒绝连接，此时登陆 FGO 时会直接提示前往应用商店更新版本。

由于目前 FGO 的证书信息是写进代码里的，有自己的验证步骤，常用因此若需跳过证书验证，需要修改安装包，~~如有其他方法欢迎告知~~。
