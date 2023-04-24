# Bugs

以下信息截至 v2.3.3

## 已知 bug

- 部分检查目标或自身的 buff 的特性的 buff 不会生效。例：纹章 77（天帝的贵妃）检测目标具有灼烧 buff。
- 当一个从者有复数的宝具类型变更 buff 时，首个 buff 会错误地覆盖之后的 buff。
- 当一个从者有复数的改变职阶相性的 buff 且数值更改皆为强制性（overwriteForce）时，之后的 buff 会错误地覆盖首个 buff。例：迦摩三技能&莱妮斯宝具 vs
  AE 阶敌人。
- 七周年之后选项开启后，无效的首卡(如封印/眩晕)实际能提供染色，但目前模拟器为未染色。

## 未实现

- damageNpCounter - 安哥拉曼纽宝具
- counterFunction - 巴泽特宝具
- 敌方 / 高难度关卡相关的 functions & buffs。例：doNotGainNp
