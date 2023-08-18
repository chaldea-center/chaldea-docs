# Bugs

Up to v2.4.9

## Known Issues

- Andersen skill upgrade's check on non-standard alignment servants

## Unimplemented Functions

- damageNpCounter - Aŋra Mainiiu NP

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
