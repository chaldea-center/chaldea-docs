# Quantumult X 抓包

> 本文作者：[恶梦 akumu](https://weibo.com/akumu/)

本文介绍通过 iOS 上的**Quantumult X**抓包软件而无需 PC 辅助的抓包方法。

> 由于**Quantumult X**为付费应用，且需到非国区商店购买下载，因此推荐已使用该软件的用户通过此方法抓包。

操作步骤如下：

1. 打开 Quantumult X，点击右下角的圆点进入设置界面  
   ![](https://s3.bmp.ovh/imgs/2022/04/04/a51cee4d92a018ce.png)
   ![](https://s3.bmp.ovh/imgs/2022/04/04/d9196c9323abb5ad.png)
2. 进行 MitM 设置（如已经生成并安装证书请忽略）
   1. 点击“生成证书”。
   2. 点击“配置证书”。
   3. 打开 iPhone/iPad 的“设置”，选择“已下载的配置文件”后安装配置文件。
   4. 进入 iPhone/iPad 的“设置——通用——关于本机”，在最下方找到“证书信任设置”，在“针对根证书启用完全信任”处找到刚才安装的证书并打开开关。
   5. iOS 证书配置在不同方案中均类似，如还有疑问可参考[Charles 教程](./charles.md#iOS手机证书)
3. 回到 Quantumult X 设置界面，在 MitM 处点击`添加主机名`并填入需要进行域名解析的网址：`*.bilibiligame.net` 后点击确定，然后打开 MitM 功能开关。  
   ![](https://s3.bmp.ovh/imgs/2022/04/04/85968e0d765a4cfc.png)
4. 回到 Quantumult X 设置界面，在`工具&分析`处选择`HTTP 数据抓取`，然后选择右上角左边的按钮开启 HTTP 数据抓取功能。  
   ![](https://s3.bmp.ovh/imgs/2022/04/04/f024f31e6eb0bbd5.png)
5. 回到 Quantumult X 主界面并打开右上角的开关，添加 VPN 设置，确认 VPN 已开启后进入国服 FGO，登录账号并进入主界面。
6. 回到 Quantumult X 设置界面，在`工具&分析`处选择`HTTP 数据抓取`，此时下方会有个文件夹，点开文件夹后里面可以看到已抓取的数据。  
   ![](https://s3.bmp.ovh/imgs/2022/04/04/e0dea411bc342254.png)  
    找到末尾为“key=\_toplogin”的数据，点进去之后滑动到最下面找到`响应体`，选择`文本查看`，点击右上角的分享按钮后点击`拷贝`。  
    ![](https://s3.bmp.ovh/imgs/2022/04/04/4232d14f31a709f1.png)
7. 打开 Chaldea，选择首页右下角的`导入`，然后选择`HTTPS 抓包`，再点击右上角的导入按钮，选择`从剪切板`，即可完成导入。

> 因 Quantumult X 的特性是开关打开以后自动接管设备的全部流量，并根据规则决定这些流量是否需要走代理，所以作为 HTTPS 抓包工具使用时无需连接任何节点，只需要将开关打开，模式选择全部直连即可.
