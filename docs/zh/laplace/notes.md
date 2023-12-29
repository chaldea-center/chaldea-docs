# 开发笔记

又名螺旋社之十万个为什么

[[toc]]

## 目标切换

宝具卡、全体攻击卡(大总统Buster/Extra)前后均会触发敌方的退场/亡语。

## DOT伤害结算

回合结束时，先结算回血(`resultHp`变化，但`hp`尚未变化)，再结算扣血。若扣血会导致`hp<=0`:

- 当敌方(包括候补)存在幸存者: `damage = this.resultHp - DotDamage`
- 当敌方(包括候补)全部死亡时: `damage = this.hp - 1`
