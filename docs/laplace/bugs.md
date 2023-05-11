# Bugs

Up to v2.3.6

## Unimplemented Functions
- damageNpCounter - Aŋra Mainiiu NP
- counterFunction - Bazett NP

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