# Master Mission

Solution for master mission/weekly mission.

Similar to free quest solver, using linear programming, but here we use **Integer** constraints.

## Add Mission Target
Generally, mission targets are described as **OR**: defeat 15 enemy type A or enemy type B.

Click the top trait tabs, after select all traits for one mission, then click **ADD** to add to mission list.

e.g.
- 15 Saber or Rider enemy(not servant): select **Enemy Class-Saber** and **Enemy Class-Rider**
- 15 demon enemy(include servant): select **Servant Trait-Demon** and **Enemy Trait-Demon**
- .....

**For JP/CN weekly missions**: easily add this week's missions by selecting in the popup menu.

## About **AND** Mode
It won't be used in most most most most situations.

e.g. mission: defeat enemies with both demon and divine.

But the dataset only records a quest with how many demon and how many divine, you don't how many enemies with both.

So here we use `min(x1,x2)` as the mission target count for the quest, although it is incorrect maybe.


## Results and Related Quests
Mostly are quests in the first several main stories. If you want to choose other quests, check the related quests.
It shows the all quests with mission targets.

The related quests are sorted by target `efficiency=target count/AP`.

If you cannot find any quest for a mission, that mission will display grey style.
