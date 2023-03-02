# mitmproxy抓包

原作者: [vx13@github](https://github.com/vx13)

本文详细介绍借助mitmproxy实现https抓包的步骤，仅在Windows上测试MuMu模拟器，其他平台理论可行。

## 所需软件或工具

- 脚本: [蓝奏云网盘](https://wwe.lanzoui.com/b01uoc3qh), 密码chaldea, 下载并解压`mitmproxy抓包.zip`，压缩包中已包含Windows版mitmproxy/dump.exe可执行文件
- mitmproxy: 同样提供Windows、macOS以及Linux版，开源软件。若需要可从官网更新新版或下载其他系统版本:
   - 下载地址: [https://www.mitmproxy.org/](https://www.mitmproxy.org/)
- Android only:
  - Android版本需**小于等于6**，现在手机基本见不到旧版本的安卓了，模拟器使用Android 6较多，可在`设置-关于`中查看Android版本
  - BetterFGO客户端: 获取方式见下方，仅用于日服和美服

> 对于iOS/Android上的部分设置与Charles版教程类似，如有疑惑可前往带截图的Charles教程做参考。

## 设置服务器地址与本机地址

> 2022.01.04国服更新2.36.0支持iOS/Android互登，目标域名更改为`line3-s2-xxx-fate.bilibiligame.net`，但仍有可能依旧为`line1`。
> 若没有抓到可尝试更改`line3`/`line1`。

编辑`fgoproxy.ini`：
1. 将`server=***`的地址替换为对应服务器地址
   - 国服b服:   `https://line3-s2-bili-fate.bilibiligame.net`
   - 国服iOS服: `https://line3-s2-ios-fate.bilibiligame.net`
   - 国服渠道服: 未测试
   - 台服: `https://line3-s1-all.fate-go.com.tw`
   - 日服: `https://game.fate-go.jp`
   - 美服: `https://game.fate-go.us`
2. 设置电脑的本机地址`ip`为：
   - Android: 同下一步的网关/DNS/电脑ip 
   - iOS: 局域网下的电脑ip


## Android模拟器流程

### 设置网络

1. 启动MuMu模拟器

2. 在模拟器中，依次点击“系统应用->设置->WLAN”，长按“已连接”，至弹出窗口，选择“修改网络”，

   进行下列设置并保存：

   * IP设置=静态
   * IP地址=10.0.2.15
   * 网关=10.0.2.2
   * 网络前缀长度=24
   * DNS 1=10.0.2.2
   * DNS 2=（留空）

注意，若使用其他模拟器，可以尝试将上述的**10.0.2.\***替换成以下值

|  模拟器    |      IP       |   DNS/网关    |
| --------- | ------------- | ------------ |
| Google    | 10.0.2.15     | 10.0.2.2     |
| 夜神       | 172.17.100.15 | 172.17.100.2 | 
| 逍遥       | 10.0.3.15     | 10.0.3.2     |
> 除MuMu外的模拟器未验证，若抓包失败，不确保可用性。

### 安装证书

1. 编辑fgoproxy.ini文件，将[mode]/install_cert后面的数字改为1；

2. 双击“运行.cmd”，出现黑色窗口，若遇到防火墙弹窗，点击“允许通过”；

3. 回到模拟器首页，启动模拟器中“浏览器”，点击浏览器上方地址栏，输入“mitm.it”，回车，打开证书安装页面；

4. 在证书安装页面，点击Android下的Get mitmproxy-ca-cert.cer，下载证书；

   :warning:若显示 traffic is not passing through mitmproxy 等英文，请检查“设置网络”步骤。

5. 点击模拟器左上角下载图标，并选择下载完成的文件，开始安装证书，证书名称可以任意填写，随后点击确定；

6. 若模拟器左上角出现警告图标，点击提示“网络可能会受到监控”，则证书安装成功。

### 抓取数据

1. 打开fgoproxy.ini文件，确认（或修改）[mode]/install_cert后面的数字为0；
2. 双击“运行.cmd”，出现黑色窗口，若遇到防火墙弹窗，点击“允许通过”；
3. 启动MuMu模拟器，登录fgo游戏；
4. 在文件夹下可找到以“区服_日期_时间.json”命名的登录数据，此时可关闭黑色窗口，并在Chaldea中导入该数据。

### 删除证书

1. 启动MuMu模拟器；
2. 点击模拟器右上角叹号图标，点击弹出消息，点击“查看信任的凭据”；
3. 选择“mitmproxy”，将弹出页面拉到底，点击页面右下“删除”按钮，点击“确定”以删除证书。

### 还原网络

1. 启动MuMu模拟器；

2. 在模拟器中，依次点击“系统应用->设置->WLAN”，长按“已连接”，至弹出窗口，选择“修改网络”，

   进行下列设置并保存：

   * IP设置=DHCP


## iOS设备流程

> 测试不充分，仍有待检验！

### 设置网络
1. 与电脑处于同一局域网/路由器下，如IP均为192.168.1.*
2. 打开“设置-WiFi-已连接WiFi末尾的详情按钮-配置DNS-手动”
3. 删除默认DNS服务器，输入电脑IP，保存

### 安装证书

1. 编辑fgoproxy.ini文件，将[mode]/install_cert后面的数字改为1；

2. 双击“运行.cmd”，出现黑色cmd窗口，若遇到防火墙弹窗，点击“允许通过”；

3. 打开Safari浏览器，Safari，Safari，不能使用其他浏览器！点击浏览器上方地址栏，输入“mitm.it”，回车，打开证书安装页面；

4. 在证书安装页面，点击iOS下的Get mitmproxy-ca-cert.pem，下载证书；

   :warning:若显示 traffic is not passing through mitmproxy 等英文，请检查“设置网络”步骤。

5. 下载完证书后，前往“设置-已下载的描述文件”或“设置-通用-描述文件”，选择刚下载的证书安装。

6. 前往“设置-通用-关于本机-证书信任设置”，打开证书信任开关。（iOS 10.4以下无需此步骤）


### 抓取数据

1. 打开fgoproxy.ini文件，确认（或修改）[mode]/install_cert后面的数字为0；
2. 双击“运行.cmd”，出现黑色窗口，若遇到防火墙弹窗，点击“允许通过”；
3. iOS设备登录fgo游戏；
4. 在文件夹下可找到以“区服_日期_时间.json”命名的登录数据，此时可关闭黑色窗口，并在Chaldea中导入该数据。

### 删除证书

1. 打开“设置-通用-关于本机-证书信任设置”关闭信任开关（下次使用直接打开即可），或打开“设置-通用-描述文件”删除证书（下次使用需重新安装）

### 还原网络

1. 打开“设置-WiFi-已连接WiFi末尾详情按钮-配置DNS-自动”，选择自动后保存


## 注意事项

1. 若出现mitm.it一直加载打不开，或FGO连不上等，可尝试在黑色cmd窗口中输入任意字符，有可能cmd卡住了
