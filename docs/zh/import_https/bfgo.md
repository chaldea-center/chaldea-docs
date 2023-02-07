# BetterFGO@rayshift.io


## 获取日服美服安装包
对于日服和美服，需要使用修改过的apk安装包，仅适用于Android，原先iOS或Android上FGO存档可通过[迁移数据](./transfer_data.md)的方法在不使用引继码下实现多设备/多客户端登陆。

::: warning 公告
由于某些人（@K8SAY）近期“肆意”使用该客户端进行篡改战斗数据，并在b站上 **“公开”** 上传 **大量** 未实装/敌方从者在我方队伍的“体验”视频，上传虚假的战斗信息、掉落信息污染统计数据。（经证实，仅部分使用该客户端）

听我说谢谢你。

为防止后续相关不负责任行为影响，原作者将禁用抓包功能。

注：友站AtlasAcademy的关卡配置和掉落信息均来自BFGO客户端统计，且目前Mooncell的关卡信息也开始大量引用此信息源(仅关卡信息非其他常规资料)。
（除非官方下场，目前除污染数据、不能手动抓包、wki的编辑写关卡配置变麻烦外，暂时不会对关卡数据和掉落收集有影响）
:::

::: tip
感觉有几点没说明白，希望不要再闹大了。~~我这就是个破app的文档，择日删除本页~~
- BFGO最大的意义(我认为)在于关卡的敌方配置和掉落信息统计，此部分目前暂时不受影响，错误统计数据也在逐步剔除中。
- 抓包 ≠ 解包，目前wiki站等均为自己解包，并非依靠BFGO，请勿传播MC等攻略站只能停更、所有解包数据来自BFGO等不实消息
- 抓包主要用于：部分关卡有特殊机制/随机因素仍需人工抓包测试。BFGO为部分编辑提供了稳定方便的渠道进行抓包，因此禁止抓包或许会影响到完善关卡机制~~和本app的数据导入~~
- 总之希望有些人能认识到自己错在（公开发布大量不合适视频致他人于风险之中），也请大家不要传播跑偏的消息
:::

::: tip
无论是抓包还是游戏解包还是改数据，在技术上没有那么难~~更何况还是fgo~~，
网上也有诸多大佬制作现成的工具让我等外行凑热闹，但都不是什么适合放在阳光下大肆宣传的东西。
官方早先曾发过五服公告禁止解包，我也在文档中多次使用过类似“违反用户条例”、“官方不允许”、“合理使用”等词语，
都是希望大家**不要滥用**以免影响个人或其他作者或整个玩家社区。一旦官方下场发布反制措施，
只会增加玩家、工具/攻略站的负担和麻烦。
:::

以上仅个人观点及想法~~所以比较暴躁~~，不代表任何wiki/rayshift/atlas等意志。


::: details BetterFGO不再可用于抓包
对于rayshift的BetterFGO，尽管我们认为不会被封，但总归是修改客户端的行为，我们无法提供任何保证也无法承担任何责任。_**如果不信任，请勿使用，如需使用，请合理使用。**_

bfgo客户端(包名`io.rayshift.betterfgo(.en)`)和原客户端(包名`com.aniplex.fategrandorder(.en)`)可以同时存在，通过[迁移数据](./transfer_data.md)无需引继即可在两个客户端之间切换。bfgo无法使用Google Play，建议仅抓包时使用bfgo客户端，也切勿在战斗中切换客户端。

> Disclaimer from Rayshift.io
> 
> While I believe this app will not get you banned, I take no responsibility for anything that might happen. I have been using this for over a year myself without issues.

现在可以直接通过以下链接下载
- 日服: [https://rayshift.io/betterfgo/download/jp](https://rayshift.io/betterfgo/download/jp)
- 美服: [https://rayshift.io/betterfgo/download/na](https://rayshift.io/betterfgo/download/na)

若需从Rayshift下载或了解更多信息:
1. 学会上网
2. 加入rayshift的Discord频道: [https://discord.gg/8JeHHvh](https://discord.gg/8JeHHvh)
3. 在`ANNOUNCEMENT-roles`频道，点击`BetterFGO`的~~yls~~ emoji认领权限
   ```:no-line-numbers
    > YAGPDB.xyz
    Role Menu: Public Beta Testing
    React to give yourself a role.

    :kanou: : BetterFGO 
   ```
4. 在`betterfgo-cli`频道中查看并下载日服或美服的安装包
:::

### 迁移数据

最后通过[迁移数据](./transfer_data.md)将iOS或Android官方客户端的存档迁移至BFGO存档。
