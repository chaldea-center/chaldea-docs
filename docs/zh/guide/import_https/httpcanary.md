# HttpCanary-Android

::: warning
不知为什么，有时失败。部分数据请求失败导致无法到发送登陆请求这一步。

建议开启白名单模式(whitelist)，仅目标网址的域名（`game.fate-go.jp`, `line*-fate.bilibiligame.net`）进行抓包解密。

还是不行就用[Charles](./charles.md)方法吧。

如果有好心的专业人士了解详情，还请点拨点拨。
:::

总结：适用于 Android，无需电脑(或仅需第一次 adb 安装证书)，国服/台服/日服/美服均可。

::: tip
日服美服必需使用第三方 apk，请查看[简介-证书绑定](./README.md#证书绑定)及[BetterFGO](./bfgo.md)
:::

## Android 版本

根据安卓版本不同，证书安装步骤有些许不同。

1. <=6: 无需 root，安装至用户证书即可（蓝 MuMu 模拟器即可！）
2. 7-10: 需 root，使用 HttpCanary 自带的安装证书功能安装至用户证书，adb 移动至系统证书或 Magisk+JustTrustMe 模块实现
3. 11+: 在 HttpCanary 中导出 pem 证书，在系统设置中手动安装，再 adb 或 Magisk 移动证书至系统证书。或导出.0 证书，直接复制到系统证书。
4. 12+: 似乎更麻烦了，自行研究 ╮(╯▽╰)╭
5. 也有使用各种虚拟机等机制将 HttpCanary 及 FGO 应用安装在虚拟机内再抓包的，无需 root，请自行研究

## adb

1. 打开手机开发者选项和调试模式，USB 连接电脑
2. 下载 adb, 将 adb 路径添加至 Path 环境变量中(可选):
   - 谷歌官方: [https://developer.android.com/studio/releases/platform-tools](https://developer.android.com/studio/releases/platform-tools)
   - [https://adbshell.com/downloads](https://adbshell.com/downloads)
3. 打开 CMD/PowerShell, 确保 adb 或./adb 可用，执行以下命令
4. USB 连接手机（adb 会自动连接?），或模拟器 `adb connect 127.0.0.1:xxxx`

   不同模拟器的端口 xxxx 不同，百度之或参考下方。真机连接后应该会自动识别无需手动连接。注意请只连接一个 Android 设备，否则各命令需要指定目标设备。
   `adb devices`可查看已连接设备。

5. 执行以下命令
   ```
   adb shell
   su
   mount -o rw,remount /
   cp -f /data/data/com.guoshi.httpcanary/cache/HttpCanary.pem /system/etc/security/cacerts/87bc3517.0
   chmod 644 /system/etc/security/cacerts/87bc3517.0
   touch /data/data/com.guoshi.httpcanary/cache/HttpCanary.jks
   chmod 600 /data/data/com.guoshi.httpcanary/cache/HttpCanary.jks
   ```
6. 打开 HttpCanary，开始抓包，保存目标请求的响应。

### 常见模拟器端口

摘自互联网，不同模拟器有多种版本，也可能不同，仅供参考 ╮(╯▽╰)╭

- 网易 MuMu 7555
- 夜神 62001
- 逍遥 21503
- 蓝叠 5555 (ps:新蓝叠似乎根本没有证书/网络相关设置入口
- 雷电 5555
- 天天 5037
- 腾讯手游助手 5555

## Magisk 框架+JustTrustMe 类模块

关于 Magisk 安装可参考[Sekibetu 教程](https://sekibetu.com/sniff01.html)

目前（应该）只需能移动用户证书至系统证书的模块即可，cert-pinning 目前无要求（已使用第三方 apk）

1. 安装 Magisk
2. Magisk 内安装[JustTrustMe](https://github.com/SekiBetu/JustTrustMe/releases)或[MagiskTrustUserCerts](https://github.com/NVISOsecurity/MagiskTrustUserCerts/releases)模块
3. HttpCanary 安装证书至用户证书
4. 重启手机，模块会自动安装证书至系统证书
5. (Android 11+?) 创建文件并赋予 600 权限(如 adb 的最后一步)让 HttpCanary 识别证书已安装

   `/data/data/com.guoshi.httpcanary/cache/HttpCanary.jks`

6. 开始抓包

## 目标请求

仅需 FGO 登录时的请求，其网址为:

- 国服: 其中`line3-s2-ios-fate`随账号所在服务器(iOS/b 服/渠道服)以及所在地理位置等有所不同，最重要的是`_key=toplogin`

```:no-line-numbers
https://line3-s2-ios-fate.bilibiligame.net/rongame_beta//rgfate/60_1001/ac.php?_userId=xxxx&_key=toplogin
```

- 台服: 与国服类似，域名格式`https://line3-s1-all.fate-go.com.tw`，由于无台服账号，待确认
- 日服:

```:no-line-numbers
https://game.fate-go.jp/login/top?_userId=xxxx
```

- 美服:

```:no-line-numbers
https://game.fate-go.us/login/top?_userId=xxxx
```

## emmmm

总之网上多搜搜 ╮(╯▽╰)╭ 我也没有 root 的手机，也没试过那么多种安卓版本。

蓝 Mumu 模拟器(Android 6)无论 HttpCanary 还是 Charles 都只要安装用户证书就可以开始抓包，不想折腾的就用这个吧。
