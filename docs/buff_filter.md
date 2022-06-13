# Buff Filter

Use the AtlasAcademy Database to filter skill/NP effects.

There are two kinds of effects:
- `FuncType`: act directly, like NP charge, gain star
- `BuffType`: display as buff in servant status bar, like invincible, Arts Up, regain NP per turn.

## Servant/CE/Command Code Filter Dialog
Here, the filters are optimized by me:
- merge similar effects: Buster Up and Buster resistance down, NP Charge and absorb NP
- Split Arts/Quick/Buster effects: they are all `upCommandall`


## Buff Filter Page
This page provides original `FuncType` and `BuffType`.
- custom filter scope: active skill/class passive/NP. Append skill not included, they are all the same.

A text search input is also provide here, only support card name and effects search here.
