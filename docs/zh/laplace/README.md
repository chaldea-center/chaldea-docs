# Laplace

<a href="#">事象記録電脳魔・ラプラス</a>

Laplace 主要负责战斗模拟的功能。目前仍处于测试阶段，欢迎测试反馈！

- 可以在主界面主动选择下方 Laplace 按钮进入
- 也可以点击关卡具体配置旁的计算器按钮进入

## 使用方式

太长不看：选人，选礼装，点技能出卡就完事了。目前主要还是周回，高难可以试着用自定义技能发动模拟。

### 编队配置

![编队界面](https://data-cn.chaldea.center/image/simulation_preview.jpg)

<figcaption style="text-align:center">编队界面</figcaption>

![从者编辑界面](https://data-cn.chaldea.center/image/svt_options.jpg)

<figcaption style="text-align:center">从者编辑界面</figcaption>

- 如果勾选优先使用玩家数据且选中的是规划中的从者，会自动使用当前规划的灵基阶段、技能等级、宝具等级等设置
- 宝具、技能强化默认为日服进度，可更改。后期将默认设置为根据账号设置的区服
- 提供禁用或自定义(数据库中已有的)技能、宝具等选项

### 战斗模拟

![战斗模拟示例](https://data-cn.chaldea.center/image/battle_simulation.jpg)

<figcaption style="text-align:center">战斗模拟示例</figcaption>

- 总体操作方式和 [FGO Teamup](https://www.fgo-teamup.com) 一致，后端和 [FGO Simulator](https://github.com/SharpnelXu/FGOSimulator) 差不多，但使用了 Atlas Academy DB 的数据结构
- 战斗中点击从者、敌方单位头像可以查看详细信息
- 提供手动随机数模式（下方骰子图标），激活后可自行决定每个概率、随机数的判定
- 关卡信息、战斗记录在右上角
- 支持自定义技能，暂时可用该功能尝试模拟简单的高难。需要技能 ID，具体可以去 AADB 查找。该功能从战斗模拟界面右上角进入

## 注意事项

- 目前无法模拟敌方行动
- 我方从者技能、buff 除巴姐小安宝具以外理论上全部实现
- 有大量敌方技能、buff 未实现，可以通过战斗记录的 DEBUG 记录确认

## TODO

- 更易用的日志功能查看历史回合的出卡及伤害等详情
- 自定义技能效果，目前仅可从已有技能中选择
- 更多详细 TODO 可见[Github](https://github.com/chaldea-center/chaldea/blob/main/TODO.md)

## Bug 反馈

- 可以在主界面 Laplace 下或设置页找到反馈界面
- NGA 中回复: [Laplace帖](https://nga.178.com/read.php?tid=35805016) [Chaldea主帖](https://nga.178.com/read.php?tid=24926789)

## 参考资料

- [FGO Simulator](https://github.com/SharpnelXu/FGOSimulator)
- [FGO Teamup](https://www.fgo-teamup.com)
- [Atlas Academy](https://apps.atlasacademy.io/fgo-docs/)
- [Mooncell](https://fgo.wiki)
