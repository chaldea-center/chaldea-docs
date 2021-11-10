# 导入抓包

通过抓包的方法可以将用户所有的数据导入到Chaldea应用中，包括从者信息(灵基再临、圣杯、羁绊、主动技能、附加技能、灵衣、从者硬币)、素材数量以及概念礼装图鉴的情况。第一次使用需要配置抓包软件、代理软件等步骤多一些，成功后第二次就比较简洁。

本文的教程只是一个示例，该方法核心即为HTTPS抓包，因此任何能够获取https的响应体(Response body)的方法或软件均可，如**Surge**或**抓包精灵**等。你可以打开搜索引擎搜索以下几个关键词以获取其他相关教程: `Charles https 抓包 手机/模拟器 全局代理`。

注意最终导出的数据务必仅包括响应体(body)，不包括响应头(headers)等信息，且与文末的格式相同，即ey开头的base64编码或json格式。


视频教程：>_<

::: danger 免责声明
使用前请确保已经了解并愿意承担其中的风险，Chaldea(本应用)不涉及账号密码及https解密等处理，抓包过程均由第三方软件或客户端实现。
:::

## 简要原理

此处原理的介绍非常简洁，主要目的是为了理解为什么要这么做以及这些操作中存在的风险，详细原理和风险可咨询度娘。了解后如果不信任本方法，请勿使用。

### 中间人攻击
FGO在成功登陆后，服务器会返回一个包含账号所有信息的https响应。不同于http的明文通信，https是经过加密的，解密往往需要借助抓包工具/网络调试软件，甚至需要修改客户端软件。目前抓包工具(Fiddler/Charles)实现https解密的方法大都通过在客户端设备中安装CA证书，并在服务器和客户端之间充当第三人分别于服务器和客户端进行通讯，也即**中间人攻击MITM**。

Fiddler/Charles~~以及更底层的wireshark等~~为目前主流的网络调试/抓包工具，使用风险可能有:
- 下载安装了pj版的Fiddler/Charles，且经人恶意修改并植入木马等 ~~脱离了本问题~~。建议使用正版。
- 软件安装的CA证书可能被其他恶意软件利用。建议在使用完毕后关闭或删除CA证书，尤其是主力机。

### 证书绑定
目前国服和台服通过上述抓包软件即可实现https的解密。但日服/美服/韩服还有进一步的安保措施: **证书绑定(cert pinning)**。通过在客户端中预置证书，在通信前对比从"服务器"传过来的证书(抓包工具提供的CA证书)和预置证书是否一致有效，无效则拒绝连接，此时登陆FGO时会直接提示前往应用商店更新版本。

若需跳过证书验证，需要修改安装包，如有其他方法欢迎告知。修改安装包仅支持apk，即仅Android平台。
此处使用[rayshift.io](https://rayshift.io/)制作的BetterFGO客户端(简称bfgo，仅Android apk)，包含日服和美服。由于rayshift不建议apk随意流出，请有需要的单独向他们申请apk下载，注意不要随意传播。获取方式见后面。

## 所需软件或工具
- Charles: 提供Windows、macOS以及Linux版，官方正版试用版存在单次使用30分钟的限制且时不时跳出来一个提示，与本例中足矣
   - 下载地址: [https://www.charlesproxy.com/download/](https://www.charlesproxy.com/download/)
- 全局http代理软件:
  - iOS: `Potatso Lite`, 免费应用; `shadowrocket`付费应用。需非国区账号下载，其他可用软件欢迎补充。
  - Android: `Drony v1.3.x`, 免费应用, [下载地址(密码:chaldea)](https://wws.lanzoui.com/b01uoc3qh)
- Android only:
  - Android版本需小于等于6，现在手机基本见不到旧版本的安卓了，模拟器使用Android 6较多，可在`设置-关于`中查看Android版本
  - BetterFGO客户端: 获取方式见下方，仅用于日服和美服

## 获取日服美服安装包
对于日服和美服，需要使用修改过的apk安装包，仅适用于Android。对于rayshift的BetterFGO，尽管我们认为不会被封，但总归是修改客户端的行为，我们无法提供任何保证也无法承担任何责任。如果不信任，请勿使用，如需使用，请合理使用，不要传播、不要官方跳脸、不要恶意搞人。

bfgo客户端(包名`io.rayshift.betterfgo(.en)`)和原客户端(包名`com.aniplex.fategrandorder(.en)`)可以同时存在，通过迁移数据无需引继即可在两个客户端之间切换。bfgo无法使用Google Play，建议仅抓包时使用bfgo客户端，也切勿在战斗中切换客户端。


**安装包获取方式:**

0. 科学上网，注意使用英文交流
1. 加入rayshift的Discord频道(游戏聊天应用与社区): [https://discord.gg/8JeHHvh](https://discord.gg/8JeHHvh)
2. 联系版主(Admin或Moderator)申请BetterFGO角色: e.g. "Can I get the BetterFGO role?"
3. 在betterfgo-cli中查看并下载日服或美服的安装包

**迁移数据**(无需引继，仅需第一次迁移即可实现类似BGO的多设备登陆)

0. 应用数据储存于`/sdcard/Android/data/<package>/files/data/`, `/sdcard/`即为打开文件管理的默认根目录, 对于内部储存此处`/sdcard/`=`/storage/emulated/0/`
1. 启动bfgo一次，自动新建`/sdcard/Android/data/io.rayshift.betterfgo/files/data/`
2. 拷贝`/sdcard/Android/data/com.aniplex.fategrandorder/`下所有文件到`/sdcard/Android/data/io.rayshift.betterfgo/`，其中`<package>/files/data/d713`包含了图片语音等资源文件，比较大可自行选择拷贝全部或启动时下载。


## 配置Charles

![Charles UI](/images/import_https/charles-1.webp)
<figcaption style="text-align:center">Charles界面</figcaption>


![Charles Configuration](/images/import_https/charles-2.webp)
<figcaption style="text-align:center">Charles配置</figcaption>

:::details
[https://zhile.io/2017/07/07/charles-proxy-usage-and-license.html](https://zhile.io/2017/07/07/charles-proxy-usage-and-license.html)
:::
0. 确保手机与电脑处于同一局域网，或模拟器与Charles在同一电脑，关闭电脑上其他一切ⅤΡΝ等代理软件
1. `Help-Local IP Address`, 记录显示的本机IPv4地址，例如`192.168.0.5`
2. `Proxy-Proxy Settings`, 记录或修改端口，默认`8888`
3. `Help-SSL Proxying-Install Charles Root Certificate on a Mobile device or Remote Browser`, 无操作，提示设置手机代理(`192.168.0.5:8888`)以及证书下载地址`chls.pro/ssl`，详见下一步
4. `Proxy-SSL Proxying Settings`，在左侧`include`中点击添加`Add`，分别在host和port中输入`*`，代表解密所有https流量
5. 点击OK，Charles设置完毕，确保Charles最右下角显示`Recording`小字
6. 在iOS/Android完成设置代理，第一次连接上Charles时，会提示有个远程连接`Connection from 1.2.3.4`，确保此处的IP是你手机/模拟器的IP，选择接受`Allow`，否则可能为网络中其他木马爬虫，点击拒绝`Deny`


## 配置iOS
![iOS Configuration](/images/import_https/ios-1.webp)
<figcaption style="text-align:center">iOS配置</figcaption>

> 截图仅用于指示设置项所在位置，若与下面文字步骤不一致，以文字步骤为准。

### iOS手机证书
以iOS14为例，不同iOS版本设置可能显示在不同地方，仔细找找。
1. 连接wifi，确保与电脑处于同一个局域网(如同一路由器或连接电脑的热点等)
2. `设置-WiFi-已连接WiFi右侧的按钮-配置代理-手动`，填入配置Charles中第3步显示的代理主机host`192.168.0.5`和端口port`8888`(举例)，储存
3. 打开**Safari**！Safari！一定要是Safari，不能使用其他浏览器。打开网址`chls.pro/ssl`，提示下载配置描述文件，选择允许
4. 打开`设置`，顶部应该显示`已下载描述文件`，若没有，可在`通用-描述文件-已下载描述文件`中寻找，一路安装`Charles Proxy CA ****`
5. 打开`设置-通用-关于本机-证书信任设置`，打开Charles的证书信任开关（iOS 10.2及以下没有这一步）
6. 打开浏览器，进入`https://baidu.com`，检查Charles列表大部分https开头网址前面是蓝色的图标或闪电图标，如为白色的锁图标，说明未解密，请删除上述描述文件再重试
7. 证书安装完毕可关闭WiFi代理，后续使用全局代理即可


### iOS设置全局http代理
1. 外区账号下载安装`Potatso Lite`
2. 点击右上角新建-手动输入: 类型-`HTTP`(注意不是https), 服务器和端口填写同上一步。
3. 确保设置中的智能路由/Smart Routing为关闭状态。其他代理软件可能需要设置为**代理**模式(shadowrocket)或**全局**模式。不能是**PAC**，否则国内流量都将不走代理。
4. 选中刚新建的代理，点击按钮连接，第一次使用会申请创建ⅤΡΝ的权限。在Charles中会弹出提示，并允许接收来自此设备的请求。


## 配置Android
![Android Configuration](/images/import_https/android-1.webp)
<figcaption style="text-align:center">Android配置</figcaption>

> 截图仅用于指示设置项所在位置，若与下面文字步骤不一致，以文字步骤为准。

### Android手机证书

以MuMu模拟器(Android 6.0.1)为例，不同模拟器/手机的设置布局可能存在差别

0. 使用Android 6及以下的手机或模拟器
1. 如使用手机则确保和电脑处于同一局域网(如同一路由器或连接电脑的热点等)
2. 打开`设置-WiFi-长按或其他方式查看已连接WiFi详情-修改网络`，代理选择`手动`，填入配置Charles中第3步显示的代理主机host`192.168.0.5`和端口port`8888`(举例)，储存
3. 浏览器打开`chls.pro/ssl`,下载pem/crt证书文件，安装证书有两种方法
    - 直接打开文件安装，有时可能会失败
    - 在`设置-安全-从SD卡安装证书`，选择刚下载的证书文件，取个名，默认凭据用途为ⅤΡΝ和应用
4. 你可以在`设置-安全-信任的凭据-用户`中找到`Charles Proxy CA ****`
5. 打开浏览器，进入`https://baidu.com`，检查Charles列表大部分(并非所有)https开头网址前面是蓝色的图标或闪电图标，如均为白色的锁图标，说明未解密，请删除上述证书再重试
6. 按理说证书安装成功后只需使用后续全局代理即可，可关闭WiFi代理设置

> Android这一步系统代理下载证书理应也可以用下面的全局代理替代

### Android设置全局http代理
1. 下载安装Drony，只有英文和繁体，根据系统语言显示，参考上图
2. 打开后显示日志页和设置页，左右滑动切换到设置页
3. 网络-无线网络-选择连接的WiFi-网络细节设置
    - WiFi名: `代理类型/Proxy type`选`手动/Manual`
    - WiFi名-手动代理/Manual Proxy: `主机名`和`端口`同上一步，`代理类型/Proxy type`选`普通/Plain`
    - WiFi名-过滤器/Filter: 过滤默认值选择`本地代理链全部/Local Proxy Chain All`
    - 返回
4. 过滤器-默认值: 选择`引导全部/Direct All`
5. 左滑回到日志页，点击底部开关，开启后在通知栏可以看到ⅤΡΝ连接提示，第一次使用会申请创建ⅤΡΝ的权限。在Charles中会弹出提示，并允许接收来自此设备的请求。


## 抓包与导入

![Save Response](/images/import_https/charles-3.webp)
<figcaption style="text-align:center">目标网址与保存内容</figcaption>

### FGO抓包
1. 重新启动并登陆FGO国服、台服、BetterFGO日服/美服，直到看到地球仪或公告栏为止
2. 找到Charles的列表中以下url，**如果找不到就关闭FGO重新打开多试几次**
    - 国服: 其中`line1-s2-ios-fate`随账号所在服务器(iOS/b服/渠道服)以及所在地理位置等有所不同，最重要的是`_key=toplogin`
    ```:no-line-numbers
    https://line1-s2-ios-fate.bilibiligame.net/rongame_beta//rgfate/60_1001/ac.php?_userId=xxxx&_key=toplogin
    ``` 
    - 台服: 与国服类似，域名格式`https://line3-s1-all.fate-go.com.tw`，由于无台服账号，待确认
    - 日服:
    ```:no-line-numbers
    https://game.fate-go.jp/login/top?_userId=xxxx
    ``` 
    - 美服: 与日服类似，域名为`https://game.fate-go.us`，由于无美服账号，待确认
3. 选中上述url右键`Save Response`，(注意是`Response`，不要和Request搞混了)，另存为fgo.txt(名字随意)
4. 检查: 任意文本编辑器打开保存的txt文件，对于国服和台服，内容为`ey`开头的一大串字母数字符号组成的base64编码；对于日服和美服，为`{`开头的可读性极高的json格式。默认应为utf8编码，打开后仅查看，请勿编辑保存导致编码格式改变。

### 导入到Chaldea
1. 在`导入-HTTPS抓包`中，点击右上角导入刚才保存的txt文件，将自动解析数据
2. 所有数据被分为: 素材、从者、灵基保管室中的从者、礼装图鉴，根据自己需求勾选需要导入的部分
3. 筛选
    - **锁定**: 默认仅显示和导入锁定的从者
    - **允许2号机**: 同一从者可以存在多张卡，默认只选择主动技能练度最高的一个，存在重复的从者会显示其获取日期作为提示
    - 点击单个从者可单独隐藏该从者，不导入
4. 点击导入可更新当前账号信息
5. 点击**羁绊详情**可查看并排序每个从者的羁绊等级、羁绊累计值、下一级所需羁绊值，方便挖矿

注意: 导入的信息属于抓包那一时刻的数据，并非登陆凭据也无法自动更新，因此下次需要更新数据需要重新抓包

## 结束及下一次抓包
清理工作:
- 确保关闭全局代理，关闭WiFi设置中的手动代理。否则关闭Charles后无法联网
- 删除或关闭证书信任: 如果删除，则下一次抓包前需重新安装证书；也可以保留，如iOS关闭信任设置即可无需删除描述文件

下一次抓包:
- 打开Potatso/Drony的全局代理，其他设置不变，只需要打开代理软件的开关即可
    - Android: 如果更换了WiFi，则Drony中的设置需要重新设置一遍
- 检查证书: 如果上次已删除或关闭信任证书，则重新安装或信任证书。
- 打开Charles和FGO抓包


## Xopsed
- VitualXposed框架+JustTrustMe 绕过证书验证: (第一次接触xposed)个人测试失败了，有经验的欢迎尝试讨论。如果可行的话无需使用修改版客户端。

## FAQ
- 在抓包时FGO可能经常提示连接失败之类的提示，多点几次重试，仍然不行请确保运行WiFi代理与全局代理软件均打开
- 韩服目前没法子
- 测试ing,有任何问题(包括文档)及时反馈


## 解码小工具
对于国服与台服，原始数据经Base64编码+url编码，不可读，APP内可自动转化。若希望查看原始数据，可自行解码或使用本工具解码得到可读性较高的json格式。

操作流程：点击`Load File`选择上述保存的fgo.txt，此时`input`里为原文本，`output`里为解码后json文本，点击保存(`Save`)另存为fgo.json。可自行检查文件内容，其中只包含游戏相关信息，而无账号密码等隐私，可以放心使用。

此外，也可在输入框里自行输入内容测试解码(decode)和编码(encode)

> Decode: input -> url decode -> base64 decode -> output<br />
> 
> Encode: input -> base64encode -> output
    

<decoder></decoder>
