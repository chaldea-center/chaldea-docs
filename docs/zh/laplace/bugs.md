# Version 2.3.3

## Bugs

- 部分检查目标或自身的buff的特性的buff不会生效。例：纹章77（天帝的贵妃）检测目标具有灼烧buff。
- 当一个从者有复数的宝具类型变更buff时，首个buff会错误地覆盖之后的buff。
- 当一个从者有复数的改变职阶相性的buff且数值更改皆为强制性（overwriteForce）时，之后的buff会错误地覆盖首个buff。例：迦摩三技能&莱妮斯宝具 vs
  AE阶敌人。
- 七周年之后选项开启也不会让不生效的首卡提供染色。例：首卡从者被眩晕。

## 未实现
- damageNpCounter - 安哥拉曼纽宝具
- counterFunction - 巴泽特宝具
- 敌方 / 高难度关卡相关的functions & buffs。例：doNotGainNp