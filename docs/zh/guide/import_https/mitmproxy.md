# mitmproxy 抓包

::: tip
2022.01.04 国服更新 2.36.0 支持 iOS/Android 互登。Android操作麻烦，若可使用iOS设备推荐[Stream](./stream.md)方法。
:::

主要步骤有就设置代理和安装证书两步，mitmproxy和Charles均可适用（除软件自身设置外）。以下以Windows平台+Android模拟器(雷电5模拟器)为例。

## 模拟器选择

除蓝叠等少数系统设置严重阉割的模拟器外应均可适用。部分模拟器可能WiFi的代理设置无法生效(若雷电5的Android7版本)，或部分app也会无视代理，故本教程统一使用Drony进行全局代理。

Android版本选择:

1. Android 6: 如Mumu6，支持国服，用户证书即可，无需adb，但日服要求Android 7+故无法安装
2. Android 7-11: 需借助adb将证书安装至系统证书
3. Android 12: 似乎存在更麻烦的情况，未测试

## 所需软件或工具

下载链接: <https://disk.chaldea.center/s/4zfd> 点击打包下载

下载后解压至(举例)`D:\fgotools`文件夹，**建议完整路径不要包含非英文字符和空格**。

包含以下文件:

- 抓包脚本
- mitmproxy (Windows平台的10.2.1版本)
  - 若需更新或下载macOS/Linux版本，请访问官网<https://www.mitmproxy.org/>
- adb: 存放于`fgotools\platform-tools`文件夹
  - 仅在Android版本>=7时需要，若系统已root且已安装Magisk等框架，可搜索JustTrustMe等相应插件用于复制证书即可。
  - 部分模拟器可能存在adb版本差异较大导致命令运行失败，可尝试下载其他版本或使用模拟器自带adb，请自行搜索如何下载/使用。
- Drony 1.3.154
  - 该apk经过测试可用。网上下载的版本五花八门，即使版本号相同也极有可能已遭多次修改无法正常使用。

## 设置mitmptoxy

一般无需修改，仅确认端口用于后续步骤使用。

`start.cmd`文件内容:

```bat
mitmdump.exe -p 8888 -s fgoaddon.py
```

其中`8888`即为代理端口。除非出现以下错误说明端口已占用，修改上述数字至其他数字保存后再重试。

```
[Errno 10048] HTTP(S) proxy failed to listen on *:8888 with
[Errno 10048] error while attempting to bind on address ('::', 8888, 0, 0):
通常每个套接字地址(协议/ 网络地址/端口)只允许使用一次。
only one usage of each socket address (protocol/network address/port) is normally permitted
```

## 设置代理

![Android Configuration](/images/import_https/android-1.webp)

<figcaption style="text-align:center">Android配置（无视左侧两张wifi设置）</figcaption>

1. 获取电脑的`IP地址(主机名)`，有两种方法:
   1. 模拟器中打开`系统设置-WiFi-设置/信息-IP地址`或`系统设置-关于平板电脑-状态信息-IP地址`
      - 模拟器地址为172.16.1.15，则电脑的ip位172.16.1.2。其他模拟器同理仅更改最后一位为2
   2. 打开cmd或PowerShell，输入`ipconfig`选择合适的IPv4地址(可能存在多个，请依此尝试)
2. 安装 Drony，只有英文和繁体，根据系统语言显示，参考上图
3. 打开后显示日志页和设置页，左右滑动切换到设置页
4. 网络-无线网络-选择连接的 WiFi-网络细节设置
   - WiFi 名: `代理类型/Proxy type`选`手动/Manual`
   - WiFi 名-手动代理/Manual Proxy: `主机名`和`端口`同上一步，`代理类型/Proxy type`选`普通/Plain`
   - WiFi 名-过滤器/Filter: 过滤默认值选择`本地代理链全部/Local Proxy Chain All`
   - 返回
5. 过滤器-默认值: 选择`引导全部/Direct All`
6. 左滑回到日志页，点击底部开关，开启后在通知栏可以看到 ⅤΡΝ 连接提示，第一次使用会申请创建 ⅤΡΝ 的权限。在 Charles 中会弹出提示，并允许接收来自此设备的请求。

后续使用/关闭仅需点击开关即可，无需其他操作。若WiFi变化(如在手机上使用)，需重新设置上述步骤。

## 安装证书

1. 确保Drony为开启状态
2. 浏览器打开`http://mitm.it`，点击`Android - Get-mitmproxy-ca-cert.cer`下载并安装
   - 若显示 traffic is not passing through mitmproxy 等英文，请检查“设置代理”步骤。
   - 需设置PIN、密码、手势等至少一项安全措施
   - 名字填写mitmproxy(随意)
   - 用途为`VPN和应用`
3. 可在`系统设置-安全-信任的凭据-用户`处找到刚安装的证书

::: info
mitmproxy证书默认有效期10年，Charles证书默认有效期1年，过期后需删除重新安装。
:::

Android 7及以上版本系统将不信任用户证书，需要将用户证书移动至系统证书。

- Android 6及以下无需操作，直接调到下一节，Mumu6为Android 6，但已停止更新
- Magisk框架等可安装JustTrustMe等插件实现
- 日服安装包要求Android 7+，否则日服安装包直接安装失败

1. 打开PowerShell或CMD（打开adb所在目录platform-tools，窗口菜单里找到`在PowerShell中打开`，若未找到直接搜索并打开）

   确保命令行窗口显示platform-tools文件夹:

   ```
   D:\fgotools\platform-tools\>
   ```

   若不是，请执行:

   ```ps
   cd D:\fgotools\platform-tools\
   ```

2. 输入`adb devices`

   显示

   ```
   List of devices attached
   127.0.0.1:5557  device
   emulator-5556   offline
   ```

   其中`127.0.0.1:5557`或`emulator-5556`为模拟器名称，一般取前者，逐个试即可。若此处只显示一行，则略过且下一步无需指定`-s 127.0.0.1:5557`

3. 输入`adb -s 127.0.0.1:5557 shell`

   若显示`aosp:/ #`表示成功

4. 输入
   ```sh
   mount -o rw,remount,rw /system
   cp /data/misc/user/0/cacerts-added/*  /system/etc/security/cacerts/
   mount -o ro,remount,ro /system
   ```
5. 打开`系统设置-安全-信任的凭据-系统`标签页可找到mitmproxy证书
6. 重启模拟器或手机！

## 开始抓包

1. 双击`start.cmd`启动抓包
2. 打开FGO登录直到出现地球仪或公告页面
3. 检查目录下生成的`toplogin**.json`的文件，导入Chaldea即可

## 结束及清理

1. 关闭Drony及其他窗口
2. 若以后不再使用，可在`系统设置-安全-信任的凭据`中删除mitmproxy证书

## 再次抓包

1. 打开Drony，点击开启
2. 打开`start.cmd`
3. 开始抓包

## FAQ

- [FAQ](./index.md#常见问题-faq)
- 若出现 mitm.it 一直加载打不开，或 FGO 连不上等，可尝试在黑色 cmd 窗口中输入任意字符，有可能 cmd 卡住了
