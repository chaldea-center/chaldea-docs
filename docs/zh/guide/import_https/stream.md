# Stream-iOS

总结: iOS 平台，无需电脑，可用于国服 CN 和台服 TW。

> 国服目前可 Android 和 iOS 互登

App Store 链接: [https://apps.apple.com/app/stream/id1312141691](https://apps.apple.com/app/stream/id1312141691)

自 2021 年 9 月大版本更新之后，BGO 一度不走系统代理，而 Stream 软件实则为代理模式而非 VPN 模式，因此此方法被一度删除，目前新版本似乎已恢复，支持系统代理。

懒得重写了，Stream 配置教程可上网搜索，如：

- [https://www.jianshu.com/p/8a0fe2500f24](https://www.jianshu.com/p/8a0fe2500f24)

## 大致流程

1. App Store 下载[Stream](https://apps.apple.com/app/stream/id1312141691)，国区可下载
2. 配置默认浏览器为 Safari
3. 打开 Stream，点击“开始抓包”，首次开启需要添加 VPN 配置
4. 进入“HTTPS 抓包”，点击“安装 CA 证书”，跳转到**Safari**下载证书。必需使用自带的 Safari! Safari! Safari! 一路确定和安装。安装可在`设置-通用-VPN&设置管理` 中出现 `Stream Generated CA xxxx`
5. 信任证书：`设置-通用-关于本机-证书信任设置`：开启 `Stream Generated CA xxxx`
6. 返回 Stream-HTTPS 抓包，应显示 `CA证书已经安装且信任`
7. 开始抓包、登陆 BGO 至出现地球仪页面
8. 点击“请求数”可显示当前抓包结果，也可结束抓包后进入抓包历史查看。
9. 找到以下请求(可使用搜索):

   `https://line3-s2-ios-fate.bilibiligame.net/rongame_beta/rgfate/60_1001/ac.php?_userId=xxx&_key=toplogin`

   注意 line3-s2-ios-/line3-s2-bili-可能会变，以找到结尾的`_key=toplogin`为准

10. 选择上述请求，点击“响应-查看响应”。对于国服是 ey 开头一长串字母。(如果页面内容一片空白可能只是未正确显示导致字体颜色是白色)
11. 点击分享-拷贝，在 Chaldea 中选择从剪切板导入即可。或另存为文件，在 Chaldea 中选择从文件导入。
12. 后处理：对于主力机，建议第 5 步关闭信任证书即可，也前往第 4 步删除。删除/不信任后，下次抓包需重新设置。

## 部分示例截图

1. 目标请求网址
   ![目标请求](/images/import_https/stream-1.webp)

2. 响应体内容
   ![响应体](/images/import_https/stream-2.webp)
