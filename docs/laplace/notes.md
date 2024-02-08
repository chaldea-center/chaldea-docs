# Laplace Dev Notes

::: details Table of Contents
[[toc]]
:::

## Switching Targets

### Selecting the next target

For regular quests, the next target is determined based on on-field order.

If `QuestFlag.immediateEnemyDisapper` is present, the next target is determined based on uniqueId.

### U-Olga Marie's AOE Card

NP Card or AOE Card (U-Olga Marie's Buster & Extra) will force a target switch (resulting in death animation). This applies
both before and after the card.

E.g. U-Olga Marie executing a BAQ Chain will result in target switch three times:

1. After Buster, play death animation if any enemy death, switch targets
2. After Arts & Quick but before Extra, play death animation and switch targets again
3. After Extra, switch the third time

The takeaway is that this may affect U-Olga Marie's NP refund if the Buster card kills the enemy before Arts. 

## DOT Damage Mechanism

At the end of the turn, first record the current hp as `X`, then applies HOT, then DOT. If DOT would kill the servant
(hp <= 0), then:
- if there is enemy (including backup) available, applies normal DOT damage.
- if all enemies (including backup) are eliminated, cap the DOT damage as `X - 1`, thus the servant would live.

For example, suppose we have a setup where Babbage equiping a 1HP Guts CE then uses his skill 3 (300 DOT), followed by
Van Gogh's skill 2 (100 DOT and 300 HOT) and Gong's NP (also Gong's skill 1 not taunting Babbage), then:
- if there is enemy (including backup) available, Babbage would end up with `1 + 300 - 400 = -99 HP` and die
- if all enemies (including backup) are eliminated, Babbage would end up with `1 + 300 - 0 = 301 HP` and live (since DOT
damage got capped at `X - 1` where `X = 1`)

The takeaway is if you kill all enemies in the current wave you can help servants with lethal DOT to live one more turn.

## Overkill Bug Bug

Overkill bug refers to the bug that by doing enough damage in a single turn you can gain overkill NP (* 1.5) even if 
it's not actually an overkill (only applies to command cards). This got preserved as a feature.

Triggering enemy deathRattle or gutsFunction would reset accumulation damage thus disabling overkill bug.

## Multiple Class Affinity Buffs

E.g. if Reines NP (negates DEF disadvantage) and Kama skill 3 (advantage against Alter Ego) both applies, and somehow an
enemy Alter Ego applies ATK advantage against Assassin, what would be the final affinity if this Alter Ego attacks Kama?

This depends on the order of Kama's skill 3 & Reines' NP.

- First, Defender's Class Affinity Buff would override that of the attacker
- **Whichever gets applied first gets higher priority**, so if Kama uses skill 3 first then the affinity would be 0.5,
otherwise it would be 1

## Multiple NP Card Type Change Buff

The last chosen card type gets priority.

## Revenge Target

Related Buffs: selfturnendFunction (turn end), delayFunction (after X turns), gutsFunction, damageFunction 
(when defending), deadFunction. Each trigger skill finds its own target.

Damage type: Command Card, Np Card, HP loss, DOT, damageValue (script damage)

::: warning
Not entirely confirmed
:::

Should be based on the following order:

1. Selecting a revenge target

     When the buffs above activates, will target the last entity that attacked the current servant (regardless whether 
that's an ally or not on field or already dead):
   - Excludes self
   - If `DataVals.OpponentOnly` is specified, then will only target enemy

    If there is no valid revenge target, then select a random enemy. In Laplace, this means the selected enemy.

2. Selecting the actual target based on `func.funcTargetType`

    - `enemy`: a single enemy, if a valid revenge target exists from the previous step, then select that target
    - `enemyOneNoDamageNoAction`: same as above, except this one only activates when taking damage
    - `enemyOther`/`enemyOtherFull`: targets all enemies excluding the revenge target (all enemies if revenge target is an ally)

## Aŋra Mainiiu's NP

Based on current testing result, Aŋra Mainiiu will record all damages after his NP, which will get canceled out by 
healing (negative damage).

Note that:
- the recorded damage would not be negative, thus having a minimum of 0.
- servants have a minimum HP of 0, so if one has 500 HP and takes a billion damage, the recorded damage would be 500.
- DOT, force instant death (Gong's NP), and damages done by self are not recorded.
- HOT would cancel out recorded damage (however, right now there is no meaningful way to test this).
- Guts count as heals, thus canceling out the recorded damage. However, the healing amount is `gutsHp - 1` (so a guts of
3000 HP counts as 2999 healing).

Tips: most of the time you can just do the calculation by writing down Aŋra Mainiiu's HP at the start of the enemy turn.
The recorded damage (not multiplying by NP's rate) is `Aŋra Mainiiu's HP at the start of enemy turn - Aŋra Mainiiu's HP
at the end of enemy turn + number of times Guts applied`.

## About HP Bars related scripts

- `EnemyScript.shiftPosition`: starting value of `shiftDeckIndex`, **default to -1**. When this value is set, enemy HP 
bars would get partially hidden based on the value. For example, if an enemy has five npcId in `EnemyScript.shift` (6 HP
bars in total), if shiftPosition = 1. then two HP bars will be hidden, and only three extra HP bars will be shown.
- `EnemyScript.dispBreakDisp`: make the enemy to start with empty hp bars, default to 0.
- `FuncType.breakGaugeUp/Down`: Used to add / remove HP bars of enemy via scripted events. Note that if 
`DataVals.ChangeMaxBreakGauge` is set, then the final display would be a little different. For example if right now the
hp bar is (3/5) and `DataVals.ChangeMaxBreakGauge` is set, then after `breakGaugeUp` it would arrive at (4/6) instead of
(4/5).

E.g.: [FSR Event Main Story 2-1 Ushi Gozen](https://apps.atlasacademy.io/db/JP/quest/94091502/1)
base enemy npcId=100, EnemyScript:

```json
{
  "npcId": 100,
  "script": {
    "shift": [101, 102, 103, 104],
    "shiftPosition": 2,
    "dispBreakShift": 1
  }
}
```

| idx | **Step**                                | **lowLimitShift** | **shiftDeckIndex** | **curNpcId** | **Bars**    |
| --- | --------------------------------------- | ----------------- | ------------------ | ------------ | ----------- |
| 1   | init                                    | 0                 | -1                 | 100          | ◆◆◆◆<br>5/5 |
| 2   | shiftPosition=2                         | 0+(2+1)=3         | -1+(2+1)=2         | 103          | ◆<br>2/2    |
| 3   | dispBreakShift=1                        | 3                 | 2+1=3              | 104          | ◇<br>1/2    |
| 4   | breakGaugeUp(2)<br>+ChangeMaxBreakGauge | 3-2=1             | 3-2=1              | 102          | ◆◆◇<br>3/4  |
| 5   | breakGaugeUp(1)                         | 1                 | 1-1=0              | 101          | ◆◆◆<br>4/4  |

> Step 4 is Yui Shousetsu's Master skill. Step 5 is not actually in this quest, just here to demonstrate the effect when
> ChangeMaxBreakGauge is not set.

