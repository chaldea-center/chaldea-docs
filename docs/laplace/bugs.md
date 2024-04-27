# Bugs

## Unimplemented Functions

- Class Board:
  - Command Spell Added Buffs
  - Henry Jekyll & Hyde won't gain class board buffs after class change (probably will never be implemented)

## Fixed in v2.5.9
* Aoko Aozaki
  * Fix incorrect checks on magic bullet buffs
  * Support Protagonist Correction
* Sizuki Soujyuro
  * Support Avoid Lethal Attack Damage (Skill 1)
  * Support Np Multiply (Skill 2)
  * Support Pierce Damage Cut (NP)
* General
  * Skills & NPs that transform servants now reapply passives & adjust atk & maxHp (except Jekyll, it's literally hardcoded in the game as a constant)
  * Fix certain command codes & attack trigger functions not working due to Aoko's AoE card update causing lots of type changes
  * Add support to linked buffs & behave as family buffs (Summer Chloe Skill 1). These buffs will share use count & will get removed at the same time

## Fixed in v2.5.8
- Fix incorrect class advantages against special enemy classes
- Fix Gilgamesh S1 trait check

## Fixed in v2.5.7
- Fix Bakin's skill3 trigger effect

## Fixed in v2.5.6

- 【Chaange Quest Related】Support breakGaugeUp
- 【Chaange Quest Related】Support gutsHp
- 【Chaange Quest Related】Max HP related buffs will no longer cause targets which hp are below 0 to gain hp (mainly affects gauge break)
- 【Chaange Quest Related】Enemy Melusine can now use her skill 3 to correctly transform
- 【Chaange Quest Related】Enemy skills can now be acted multiple times each turn
- Support Aŋra Mainiiu NP
- Guts will now clear accumulation damage (overkill bug related)
- Fix a bug that will cause servants to always gain max HP when affected by percentMaxHp related buffs

## Fixed in v2.5.5
- 【Chaange Quest Related】Support shiftGuts
- Fix preventDeathByDamage (Van Gogh's passive) related interactions

## Fixed in v2.5.2
- 【Chaange Quest Related】Max HP Buff not active after gauge break
- Fix command codes & command card strengthen missing after type change

## Fixed in v2.5.0
- Support Ptolemaîos

## Fixed in v2.4.18

- Use 32 bit accuracy for damage and critical star calculation (previously it's 64 bit)
  - Lowered accuracy because FGO uses 32 bit
  - In previous 64 bit calculation, there's a ±1 error in damage value
  - NP calculations are always 32 bit, so nor error there

## Fixed in v2.4.16

- Fix Summer Chloe's NP unable to trigger NP SE damage
- Fix Cait Cú Cerpriestess able to extend buff durations of irremovable buffs

## Fixed in v2.4.15

- Fix issues with additional passives causing simulation errors
- Fix issues with certain CQ AI skills causing simulation errors

## Fixed in v2.4.14

- Fix Summer Chloe cannot move to last

## Fixed in v2.4.13

- Command Code triggered buff was processed as passive buff (introduce bug: Summer Chloe cannot move to last)

## Fixed in v2.4.12

> Rewrite some code, may bring some bugs!

- Fix Kingprotea skill 3 NP Damage Up
- Fix Command Seal
- Fix Serva Fes 2023 event point buff
- Fix some field buff condition check

## Fixed in v2.4.11

- Support Summer Barghest NP Change buff
- Fix entry function should only trigger once (Summer Chloe bond CE)
- Fix team upload ineligibility check

## Fixed in v2.4.10

- Fix CE pin to top not work in Laplace
- Fix condition check for Andersen skill 3 upgrade and Cnoc na Riabh skill 3
- Fix summer 2023 point buff
- Fix move to last member should check actor can act (Summer Chloe S2)
- [WRONG! originally right but now BUG] Fix entry function should activate multiple times if count >0
- Fix servant event trait should check limit count (Murasama event bonus in summer 2023)

## Fixed in v2.4.9

- Rewriting attackAfterFunction trigger logic
  - Altrai (Alter) skill 1 vs NP
  - Bakin skill 3 vs NP
  - Koyan of Dark skill 3 vs NP
  - Hokusai skill 3 vs NP
  - Bhima skill 3 vs NP
- OC damage vs Sleep buff
- counterFunction - Bazett NP test

## Fixed in v2.4.8

- Fix a bug that may cause replaceMember to execute incorrectly
- Supports Tonelico's skills
  - Rewrote activation logic for effects that require a previous function to succeed. This also fixed Cursed Arm's NP

## Fixed in v2.4.7

- Refactor targeting related code logic to fix issues that cause mystic code skills to have incorrect activators in certain situations

## Fixed in v2.4.6

- Damage cut & Damage up (granted from Melusine ST NP) buffs behave as opposite
- After an enemy activates a custom skill, subsequent mystic code skill are applied incorrectly
- Supports INDIVIDUALITIE_AND & INDIVIDUALITIE_OR related scripts

## Fixed in v2.4.5

- Hokusai (Foreigner) Skill 3 triggers before NP attack
- Users able to interact with UI while Laplace is trying to fetch necessary data. This will result in errors under certain circumstances
- Certain skills that impose rarity constraints do not actually check for rarity
- functionWaveStart - usually used by enemies / scripted events to trigger skills at the start of a wave

## Fixed in v2.4.4

- Servant HP Foufou is capped at 20000

## Fixed in v2.4.2

- StackOverflow if an add/remove trait buff requires checks on servants' traits

## Fixed in v2.4.1

- Ally servants immediate enter field on quests where enemy immediate appears

## Fixed in v2.4.0

- Miyamoto Musashi's (Saber) upgraded NP always apply super effective damage
- CE passive skills are not activated after all the servant passives. This would result in an edge case where if Amor (Caren)
  is equipped with a CE that grants her debuff immune, allies' Avenger passive may not correctly grant Caren Debuff resist down
  depending on party order

## Fixed in v2.3.6

- Proper buff turn duration counting to fix issues related to endOfTurn buffs end one turn early than expected
- gainNpIndividualSum now properly counts traits from specified targets

## Fixed in v2.3.5

- hpReduceToRegain - Locusta Skill 2
- functionAttackAfter is not called after NP - Super Bunyan NP
- NP super effective damage of Beast Nero is not applied
  - added an option to automatically add the necessary traits to enemy servants to proc Beat Nero's NP super effective damage when she's in the team

## Fixed in v2.3.3

- Certain buffs that check for opponent/self's buff traits does not apply.
  E.g. Command Code 77 (Imperial Consort of the Heavenly Emperor) which requires
  opponent to have buffBurn.
- When a servant has multiple tdTypeChange buffs, the first one mistakenly takes priority over the last one.
  E.g. Space Ishtar skill 2.
- When a servant has multiple overwriteClassRelation buffs with overwriteForce values,
  the last one mistakenly takes priority over the first one.
  E.g. Kama skill3 & Reinis NP vs Atlerego attacker.
- After 7th anniversay option does not enable invalid first card to provide first card bonus.
  E.g. actor of first card is stunned.
