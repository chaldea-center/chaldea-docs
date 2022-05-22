# 抓包简介

通过抓取用户登陆时的https请求的响应内容可以将用户所有的数据导入到Chaldea应用中，包括从者信息(灵基再临、圣杯、羁绊、主动技能、附加技能、灵衣、从者硬币)、素材数量以及概念礼装图鉴的情况。第一次使用需要配置抓包软件、代理软件等步骤多一些，成功后第二次就比较简洁。

该方法核心即为HTTPS抓包，因此任何能够获取https的响应体(Response body)的方法或软件均可，如**Charles**、**Fiddler**、**mitmproxy**、**Surge(iOS)** 或 **抓包精灵(Android)** 等。你可以打开搜索引擎搜索以下几个关键词以获取其他相关教程: `Charles https 抓包 手机/模拟器 全局代理`。

注意最终导出的数据务必仅包括响应体(body)，不包括响应头(headers)等信息，且与文末的格式相同，即ey开头的base64编码或json格式。


视频教程：>_<

::: danger 免责声明
使用前请确保已经了解并愿意承担其中的风险，Chaldea(本应用)不涉及账号密码及https解密等处理，抓包过程均由第三方软件或客户端实现。
:::

此处原理的介绍非常简洁，主要目的是为了理解为什么要这么做以及这些操作中存在的风险，详细原理和风险可咨询度娘。了解后如果不信任本方法，请勿使用。

::: danger 提醒
对于主力机或安装有敏感信息软件（如支付类、金融类）的设备/模拟器，强烈建议在使用完毕后删除证书以保障设备安全。
:::

- [Charles版教程](./charles.md)
- [mitmproxy版教程](./mitmproxy.md)

> Fiddler由于未知原因，2021年9月国服大版本更新后抓包存在问题，本教程不再使用Fiddler

## 中间人攻击
FGO在成功登陆后，服务器会返回一个包含账号所有信息的https响应。不同于http的明文通信，https是经过加密的，解密往往需要借助抓包工具/网络调试软件，甚至需要修改客户端软件。目前抓包工具(Fiddler/Charles)实现https解密的方法大都通过在客户端设备中安装CA证书，并在服务器和客户端之间充当第三人分别于服务器和客户端进行通讯，也即**中间人攻击MITM**。

Fiddler/Charles~~以及更底层的wireshark等~~为目前主流的网络调试/抓包工具，使用风险可能有:
- 下载安装了pj版并且经人恶意修改植入木马等的Fiddler/Charles，~~跟本应用无关~~。建议使用正版。
- 软件安装的CA证书可能被其他恶意软件利用。建议在使用完毕后关闭或删除CA证书，尤其是主力机或存在敏感数据的设备(如安装有支付宝等涉及财产密码等软件)。

## 证书绑定
目前国服和台服通过上述抓包软件即可实现https的解密。但日服/美服/韩服还有进一步的安保措施: **证书绑定(cert pinning)**。通过在客户端中预置证书，在通信前对比从"服务器"传过来的证书(抓包工具提供的CA证书)和预置证书是否一致有效，无效则拒绝连接，此时登陆FGO时会直接提示前往应用商店更新版本。

若需跳过证书验证，需要修改安装包，如有其他方法欢迎告知。修改安装包仅支持apk，即仅Android平台。
此处使用[rayshift.io](https://rayshift.io/)制作的BetterFGO客户端(简称bfgo，仅Android apk)，包含日服和美服。由于rayshift不建议apk随意流出，请有需要的单独向他们申请apk下载，注意不要随意传播。获取方式见后面。


## 获取日服美服安装包
对于日服和美服，需要使用修改过的apk安装包，仅适用于Android，原先iOS或Android上FGO存档可通过[迁移数据](./transfer_data.md)的方法在不使用引继码下实现多设备/多客户端登陆。

对于rayshift的BetterFGO，尽管我们认为不会被封，但总归是修改客户端的行为，我们无法提供任何保证也无法承担任何责任。如果不信任，请勿使用，如需使用，请合理使用，不要传播、不要官方跳脸、不要恶意搞人。

bfgo客户端(包名`io.rayshift.betterfgo(.en)`)和原客户端(包名`com.aniplex.fategrandorder(.en)`)可以同时存在，通过[迁移数据](./transfer_data.md)无需引继即可在两个客户端之间切换。bfgo无法使用Google Play，建议仅抓包时使用bfgo客户端，也切勿在战斗中切换客户端。

::: danger Disclaimer from Rayshift.io
Disclaimer: While I believe this app will not get you banned, I take no responsibility for anything that might happen. I have been using this for over a year myself without issues.
:::

现在可以直接通过以下链接下载
- 日服: [https://rayshift.io/betterfgo/download/jp](https://rayshift.io/betterfgo/download/jp)
- 美服: [https://rayshift.io/betterfgo/download/na](https://rayshift.io/betterfgo/download/na)

若需从Rayshift下载或了解更多信息:
1. 学会上网
2. 加入rayshift的Discord频道(qq频道原型): [https://discord.gg/8JeHHvh](https://discord.gg/8JeHHvh)
3. 在`ANNOUNCEMENT-roles`频道，点击`BetterFGO`的~~yls~~ emoji认领权限
   ```:no-line-numbers
    > YAGPDB.xyz
    Role Menu: Public Beta Testing
    React to give yourself a role.

    :kanou: : BetterFGO 
   ```
4. 在`betterfgo-cli`频道中查看并下载日服或美服的安装包
5. 通过[迁移数据](./transfer_data.md)将iOS或Android原存档迁移至BFGO存档。
