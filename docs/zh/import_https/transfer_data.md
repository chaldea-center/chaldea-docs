# 迁移数据

无需来回引继，仅需第一次迁移即可实现类似BGO的多设备(iOS, Android, 模拟器)、多客户端(FGO,BetterFGO)登陆。支持在iOS和Android之间任意迁移。
仅适用于使用引继码方式的日服和美服。

## 导出存档

### 存档目录

- Android: `/storage/emulated/0/Android/data/<package>/files/data/`
- iOS: `Fate_GO.imazingapp/Container/Documents/`

对于Android-Android, iOS-iOS迁移，只需上述文件夹中的文件(不包括子文件夹)全部复制到目标文件夹覆盖原文件即可。

在Android和iOS存档中，同一文件的文件名不同，需要更改为目标系统中的文件名后再覆盖。除下述已知的几个重要文件之外，建议删除其他文件避免验证冲突。

### 导出Android存档

Android系统的FGO**存档目录**为: `/storage/emulated/0/Android/data/<package>/files/data/`，d713等子文件夹为资源文件，可忽略。


不同安装包的`<package>`包名如下，需至少打开应用一次以生成该文件夹
- 日服: `com.aniplex.fategrandorder`
- 美服: `com.aniplex.fategrandorder.en`
- 日服BetterFGO: `io.rayshift.betterfgo`
- 美服BetterFGO: `io.rayshift.betterfgo.en`

### 导出iOS存档

iOS采用备份还原的方式导出或还原存档，首先需要通过**iMazing**软件备份“整个iPhone”至电脑（往往会有几到几十GB），然后从备份中导出某个应用存档。
若存档已过期，则需重新备份整个手机再导出存档，若上次备份的存档仍有效，则可以从上次备份导出存到，后续导出选项有这一项。

iMazing的使用图文教程网上很多，就不细说。备份较大，若希望删除备份，在iMazing对应设备中查看选项设置，会显示备份位置，可手动删除对应备份文件夹（默认路径可能为隐藏文件夹）。

0. 安装[iMazing](https://imazing.com/zh)软件（支持Windows和macOS，试用版就够用）。数据线连接iPhone与电脑，若手机有弹窗点击信任此电脑，iMazing将显示所连接的手机。
1. 在iMazing中选择`管理应用`，(可能需要登录苹果账号)，显示应用列表，有两个标签页(设备Device和资料库Library)，在设备这一页找到Fate/GO。
2. 右键`导出应用数据`，选择保存目录，下面有两选项：`备份并导出`和`尝试从上一次备份导出`。初次使用无差别，否则见此处第一部分描述。
3. 导出成功后，在目标文件夹下生成`Fate GO.imazingapp`(Windows)或`Fate/GO.imazingapp`(macOS)，注意字符`/`在Windows中是非法文件名，若需要从mac复制文件到Windows，建议先修改文件名。
4. imazingapp类型文件相当于zip压缩包，可使用WinRAR打开，若需替换文件，建议直接在WinRAR中替换。
5. 压缩包内`Container/Documents`即为存档目录。

iOS与Android存档目录下文件对应关系如下，还原到不同系统时记得修改文件名。注意此处显示的文件名并非完整文件名。

| iOS (*.dat)    | Android    | 备注          |
| -------------- | ---------- | ------------ |
| authsave*      | 54cc79     | 登陆凭据      |
| friendcode<br>save | e1a9f8 | 用户id        |
| signupsave     | 644b05     | 用户名？       |

> 在iOS中可能同时存在`authsave.dat`和`authsave2.dat`两个文件，内容一样，复制一份即可

登陆凭据是唯一指定通行证，其他均可删除。复制时可只复制主文件或上述三个都行。

## 还原存档

### 还原至Android存档

删除data存档目录下所有其他文件，子目录可保留，然后复制上述`54cc790`等3个文件。万事大吉。

### 还原至iOS存档

iOS需在设置中关闭**查找我的手机**功能才能使用还原功能。还原结束可重新开启。

1. WinRAR打开imazingapp文件后，将重命名的`authsave.dat`等4个文件直接拖进去覆盖。(虽为zip压缩，但未尝试过先解压再重新压缩是否可行)
2. 回到iMazing的管理应用的应用列表，右键`还原应用存档`，手机将重启。
3. 重启后会需要id验证、安全隐私设置。**有一项从何处恢复数据的选项，选择不要恢复！** 万事大吉。

## 其他

为了降低还原iOS过程中可能带来的风险，比如一不小心出错或bug之类的导致的意外，建议先将账号引继到iOS设备中，然后从iOS迁移FGO存档到Android设备。由于在Android中只需复制粘贴即可，因此这样对双方系统的侵入性最低，不会有什么风险。
