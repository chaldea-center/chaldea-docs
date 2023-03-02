# 效果检索

技能效果分为两类，一类是一次性发动的`FuncType`，如 NP 增加、HP 回复、获得暴击星等，包括宝具特攻，绊增加等礼装效果。

另一类`BuffType`是在从者状态栏显示为 Buff/Debuff 的效果，如无敌、Arts 卡性能提升、每回合回 NP 等。(添加 buff 对应的 FuncType 为`addState`和`addStateShort`以及爱尔奎特的场地 buff`addFieldBuffToField`)

## 从者/礼装/纹章筛选对话框

此处的效果筛选项已经过个人的挑选，仅显示常用的一些效果筛选

- 合并了一些常用的效果类似但 FuncType/BuffType 不同的效果。
- 其中带星号的是有限制条件，状态解除=解除所有效果，而 强化解除(\*)=解除所有包含"强化状态"属性的效果。

## 效果检索页

此页面提供了原始的`FuncType`和`BuffType`的筛选。

- 指定搜索范围(仅限从者): 保有技能、宝具、被动技能。不考虑附加技能(因为都一样)
- 简单得视`FuncType`和`BuffType`为效果可多选进行且/或筛选

举例，QAB 卡性能提升都属于指令卡性能提升(upCommandall)，但各自限定了指令卡必需包含 Quick/Arts/Buster 卡特性。
