# Bugs

Up to v2.3.4

## Known Issues

- NP super effective damage of Beast Nero is not applied: since this super effective damage
  uses a new trait added in the latest JP version, so enemy servants from recorded old quests data
  do not possess such traits, thus failing to proc the super effective damage.
  - For quests from old events: since it's not possible to get quest data from game server, so those
    cannot be updated at the moment.
  - For free quests from main story chapters: data will be gradually updated after players clear those quests.
  - For quests from new events: Beast Nero's NP will correctly apply this super effective damage.

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