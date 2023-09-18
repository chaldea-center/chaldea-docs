# Master Mission

Solution for master mission/weekly mission.

Similar to free quest solver, using linear programming, but here we use **Integer** constraints.

## Get Master Mission

Choose your region through the dropdown button at top. Check the weekly mission or extra mission.

For missions can be planned, there is a search icon at the trailing. Click it to search targets for this mission.
Or click "Solve" button to solve all missions together.

## Custom Mission

You can add custom mission and get the least AP solution.

Mission detail:

- Type: enemy trait, enemy class, servant class, etc.
- Count: the mission target count
- IDs: the mission target id, it should match mission type, the id may be invalid if type is wrong. Click <+> icon to add more target id.

**Free Progress**

- basically, it uses Main Story's free quests to plan, you can choose the different mains story progress
- You can also choose event quests, only JP/NA quests after 2020.11 has enemy data.

**Main Story's Free Quest Scope**:

- All free quests from Singularity F to selected war/chapter, plus all "Enter the Treasure Vault - Novice~Extreme" in Daily Quests.
- "Training Ground" and "Ember Gathering" quests are not included because of random enemies.
- All above quest and enemy data use JP data.

**Solution**
Solution tab is the least AP solution and you can also choose related quests by your own demands. Each quest has shown the count of mission target count.

**Attention**

::: warning
JP removed \[Not Base on Servant\] trait for some of Lostbelt 6.5 Class enemies, then they won't progress missions such as "Defeat x enemies (excluding Servants & certain bosses)".
But the trait exists in other regions yet, so the solution may not be the best for non-JP.
:::

- some quests of limit event may not have data, and these quest data are downloaded when solving
- events with enemy appearance rate up may be inaccurate
- some missions may be impossible to complete so may be ignored

## Event Mission

In the mission tab of event, you can also choose missions and solve them here.
