# Bugs

Up to v2.3.4

## Unimplemented Functions

- hpReduceToRegain - Locusta Skill 2
- damageNpCounter - Aŋra Mainiiu NP
- counterFunction - Bazett NP
- Enemy / Challenge Quest functions & buffs. E.g. doNotGainNp

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