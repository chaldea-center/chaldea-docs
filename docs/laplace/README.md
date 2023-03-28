# Laplace

<a href="#">事象記録電脳魔・ラプラス</a>

Laplace is in charge of battle simulations. It's currently in beta phase, so any feedback is welcome!

- Can be accessed via the Laplace button on the main menu
- Can also be accessed via the calculator icon near quest details page

## Manual

TL;DR: Select your servants, CEs, then just activate skills and fight! Now it mainly supports free quests, but
you can try Challenge quests using custom skill activation.

### Formation

![Formation](https://data-cn.chaldea.center/image/simulation_preview.jpg)

<figcaption style="text-align:center">Formation</figcaption>

![Servant Edit](https://data-cn.chaldea.center/image/svt_options.jpg)

<figcaption style="text-align:center">Servant Edit</figcaption>

- If Prefer Player Data is checked and the selected servant is marked as favorite in the current plan, then the
  application
  will automatically set the ascension phase, skill levels, and np level to match the setting stored
- NP & skill upgrades default to JP and modifiable. In later version this will match the user's server setting
- Also provide the ability to disable or customize skills/np (in local database)

### Battle Simulation

![Battle Simulation](https://data-cn.chaldea.center/image/battle_simulation.jpg)

<figcaption style="text-align:center">Battle Simulation</figcaption>

- UI is mostly built in reference to [FGO Teamup](https://www.fgo-teamup.com), backend is
  basically [FGO Simulator](https://github.com/SharpnelXu/FGOSimulator),
  but the data structure is from Atlas Academy DB
- Press servants' and enemies' icons to view detailed information
- There is also a Manual Random Value Mode (the dice icon down bottom), which allows users to manually decide each
  probability check and random value
- Quest info and battle log can be accessed via the top right corner
- There is also a custom skill activation function, which can be used to simulate simple challenge quests
  at the moment. This requires skill id, which can be found in AADB. This function can be accessed via the
  top right corner

## Note

- For now, enemy simulation is unavailable
- All servant skills and buffs should all be implemented except Bazett & Angra Mainyu's NP
- A ton of enemy skills and buffs are not implemented, which can be confirmed via DEBUG battle logs

## TODO

- Easy to access battle log & details
- Custom skill functions as now there are only selections
- More TODO on [Github](https://github.com/chaldea-center/chaldea/blob/main/TODO.md)

## Bug Report

- The feedback page can be found in Laplace page
- Or report in discord

## Reference

- [FGO Simulator](https://github.com/SharpnelXu/FGOSimulator)
- [FGO Teamup](https://www.fgo-teamup.com)
- [Atlas Academy](https://apps.atlasacademy.io/fgo-docs/)
- [Mooncell](https://fgo.wiki)
