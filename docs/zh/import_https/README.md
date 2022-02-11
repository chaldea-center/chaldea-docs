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

## 中间人攻击
FGO在成功登陆后，服务器会返回一个包含账号所有信息的https响应。不同于http的明文通信，https是经过加密的，解密往往需要借助抓包工具/网络调试软件，甚至需要修改客户端软件。目前抓包工具(Fiddler/Charles)实现https解密的方法大都通过在客户端设备中安装CA证书，并在服务器和客户端之间充当第三人分别于服务器和客户端进行通讯，也即**中间人攻击MITM**。

Fiddler/Charles~~以及更底层的wireshark等~~为目前主流的网络调试/抓包工具，使用风险可能有:
- 下载安装了pj版的Fiddler/Charles，且经人恶意修改并植入木马等 ~~跟本应用无关~~。建议使用正版。
- 软件安装的CA证书可能被其他恶意软件利用。建议在使用完毕后关闭或删除CA证书，尤其是主力机或存在敏感数据的设备(如安装有支付宝等涉及财产密码等软件)。

## 证书绑定
目前国服和台服通过上述抓包软件即可实现https的解密。但日服/美服/韩服还有进一步的安保措施: **证书绑定(cert pinning)**。通过在客户端中预置证书，在通信前对比从"服务器"传过来的证书(抓包工具提供的CA证书)和预置证书是否一致有效，无效则拒绝连接，此时登陆FGO时会直接提示前往应用商店更新版本。

若需跳过证书验证，需要修改安装包，如有其他方法欢迎告知。修改安装包仅支持apk，即仅Android平台。
此处使用[rayshift.io](https://rayshift.io/)制作的BetterFGO客户端(简称bfgo，仅Android apk)，包含日服和美服。由于rayshift不建议apk随意流出，请有需要的单独向他们申请apk下载，注意不要随意传播。获取方式见后面。


## 获取日服美服安装包
对于日服和美服，需要使用修改过的apk安装包，仅适用于Android。对于rayshift的BetterFGO，尽管我们认为不会被封，但总归是修改客户端的行为，我们无法提供任何保证也无法承担任何责任。如果不信任，请勿使用，如需使用，请合理使用，不要传播、不要官方跳脸、不要恶意搞人。

bfgo客户端(包名`io.rayshift.betterfgo(.en)`)和原客户端(包名`com.aniplex.fategrandorder(.en)`)可以同时存在，通过迁移数据无需引继即可在两个客户端之间切换。bfgo无法使用Google Play，建议仅抓包时使用bfgo客户端，也切勿在战斗中切换客户端。

> **From Rayshift**
> 
> Disclaimer: While I believe this app will not get you banned, I take no responsibility for anything that might happen. I have been using this for over a year myself without issues.


### 获取方式

1. 科xue上网
2. 加入rayshift的Discord频道(游戏聊天应用与社区): [https://discord.gg/8JeHHvh](https://discord.gg/8JeHHvh)
3. 在`ANNOUNCEMENT-roles`频道，点击`BetterFGO`的~~yls~~ emoji认领权限
   ```:no-line-numbers
    > YAGPDB.xyz
    Role Menu: Public Beta Testing
    React to give yourself a role.

    :kanou: : BetterFGO 
   ```
4. 在`betterfgo-cli`频道中查看并下载日服或美服的安装包

### 迁移数据
无需引继，仅需第一次迁移即可实现类似BGO的多设备登陆。支持在iOS和Android之间任意迁移。
仅适用于日服和美服使用引继码方式。

#### 导出存档

**导出Android存档**:
Android系统的FGO**存档目录**为: `/sdcard/Android/data/<package>/files/data/`，d713等子文件夹为资源文件，可忽略。

`/sdcard/`即为打开文件管理的默认根目录, 对于内部储存此处`/sdcard/`=`/storage/emulated/0/`

`<package>`包名如下
- 日服: `com.aniplex.fategrandorder`
- 美服: `com.aniplex.fategrandorder.en`
- 日服BetterFGO: `io.rayshift.betterfgo`
- 美服BetterFGO: `io.rayshift.betterfgo.en`

**导出iOS存档**:
iOS采用备份还原的方式导出或还原存档，首先需要通过**iMazing**软件备份“整个iPhone”至电脑（往往会有几到几十GB），然后从备份中导出某个应用存档。
若存档已过期，则需重新备份整个手机再导出存档，若上次备份的存档仍有效，则可以从上次备份导出存到，后续导出选项有这一项。

iMazing的使用图文教程网上很多，就不细说。备份较大，若希望删除备份，在iMazing对应设备中查看选项设置，会显示备份位置，可手动删除对应备份文件夹（默认路径可能为隐藏文件夹）。

0. 安装[iMazing](https://imazing.com/zh)软件（支持Windows和macOS，试用版就够用）。数据线连接iPhone与电脑，若手机有弹窗点击信任此电脑，iMazing将显示所连接的手机。
1. 在iMazing中选择`管理应用`，(可能需要登录苹果账号)，显示应用列表，有两个标签页(设备Device和资料库Library)，在设备这一页找到Fate/GO。
2. 右键`导出应用数据`，选择保存目录，下面有两选项：`备份并导出`和`尝试从上一次备份导出`。初次使用无差别，否则见此处第一部分描述。
3. 导出成功后，在目标文件夹下生成`Fate GO.imazingapp`(Windows)或`Fate/GO.imazingapp`(macOS)，注意字符`/`在Windows中是非法文件夹，若需要从mac复制文件到Windows，建议先修改文件名（~~仅仅是个人各种试错经历~~）。
4. imazingapp类型文件相当于zip压缩包，可使用WinRAR打开，若需替换文件，建议直接在WinRAR中替换。
5. 压缩包内`Container/Documents`即为存档目录。

iOS与Android存档目录下文件对应关系如下，还原到不同系统时记得修改文件名。

| iOS                | Android    | 备注          |
| ------------------ | ---------- | ------------ |
| authsave(2).dat*   | 54cc790    | 引继主文件，唯一指定登陆凭据               |
| friendcodesave.dat | e1a9f8     | 用户id，若不更新，登录页将仍旧显示旧的id，虽然实际登陆是新的 |
| signupsave.dat     | 644b05     | 可能是用户名啥的                         |
| user**save.dat     | 未知        | 一些页面或战斗的配置，删除此文件           |
| /                  | 其他文件    | 删除Android存档下所有其他文件，防止验证冲突 |

> 在iOS中可能同时存在`authsave.dat`和`authsave2.dat`两个文件，内容一样，复制一份即可

#### 还原存档

**还原至Android存档**:

删除data存档目录下所有其他文件，子目录可保留，然后复制上述`54cc790`等3个文件。万事大吉。在Android<->Android时即为简单的复制粘贴。

**还原至iOS存档**:

iOS需在设置中关闭**查找我的手机**功能才能使用还原功能。还原结束可重新开启。

1. WinRAR打开imazingapp文件后，将重命名的`authsave.dat`等4个文件直接拖进去覆盖。(虽为zip压缩，但未尝试过先解压重新压缩能够可行)
2. 回到iMazing的管理应用的应用列表，右键`还原应用存档`，手机将重启。
3. 重启后会需要id验证、安全隐私设置。**有一项从何处恢复数据的选项，选择不要恢复！** 万事大吉。
