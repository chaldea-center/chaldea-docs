# Team Setup

### Select Quests

For now there are four different ways to choose a quest:

1. Use the dropdown menu to select Free quests directly
2. From War section, go to any quest detail page and click the **calculator** icon on the right of the Spot name (The blue
   icon in the picture below)
3. Input Atlas ID or URL: **93000002/3** represents a quest with ID 93000002 and phase 3. Aside from this format, the following
   url pattern also works. This is limited to get data from JP and NA servers only
   - https://cn.chaldea.center/quest/93000002
   - https://apps.atlasacademy.io/db/JP/quest/93000002/3
   - Detailed explanation can be found in [FAQ](faq.md#what-is-atlas-db-url)
4. Import quest from JSON data. It needs to be structured in Atlas DB format. You can use 'Export JSON' function on any
   quests to see what it looks like. However, unless you know what that means, using this method is not recommended

![Select Quests](https://data-cn.chaldea.center/public/select_quest_en.png)

<figcaption style="text-align:center">Select Quests</figcaption>

### Custom Quest

You can use the current selected quest as a template to create custom quests.

Notes:

- After selecting an enemy servant or unit, their traits will be filled automatically. You can continue to edit its traits list
- Death rate of enemy servants will be filled based on their servant data. However, for enemy servants this value is
  usually less than 1% (most of the time 0.2%)
- Defense NP rate needs to be manually set since normally this is a data provided directly from game server

### Formation Edit

#### Strengthen Status And Default Levels

1. Strengthen Status: Sets the default skill / NP strengthen status after selecting a servant. For servants not yet added
   for the given server, will default to JP. Laplace will use the event open dates of JP server to automatically set
   relevant strengthen status, but since each server has different schedules, you may need to adjust manually via servant edit
2. Default Lvs: For non-favorite servants, their default settings will be set based on this page
3. Player Data: Whether not to use the planned data as default servant settings for favourite servants. Servants not in
   current plan data will use the "Default Lvs" as described above. For detailed explanation of planning, please reference
   [Servant Plan](../guide/servant_plan.md)
   - Disabled: all servants will use the setting in "Default Lvs"
   - Current: use the current skill / NP lvs of the current plan
   - Target: use the target skill / NP lvs of the current plan

#### Team

1. Clear: Remove all selected servants and CEs
2. Save: Save the current team as a template (for "Local Teams")
3. Local Teams: Select a team from saved local templates
4. Shared Teams: Select a team from a list of teams uploaded by other users that cleared the current quest. For more information
   on the shared teams, please reference [FAQ](faq.md#shared-teams)

#### Shared Teams

This page will list user uploaded teams that cleared the current quest

- Can use the icon on top right corner to filter for certain settings
- Can use the Details to check the actions done by the uploader

#### Servant And CE Preview

Preview data format is similar to that of the servant lists

- Click the servant/CE icon to modify settings or change selections
- If there is a buff power up icon (E.g. Castoria in the sample image), then that means this servant has custom skills
- If there is a friendship icon (E.g. Koyan), then that means this servant is marked as Support / NPC
- Detailed format of servant data is:
  1. Servant level & NP level
  2. Skill levels
  3. Append skill levels (will be omitted if no append skills are active)

![Team Preview](https://data-cn.chaldea.center/public/servant_icon_en.png)

<figcaption style="text-align:center">Team Preview</figcaption>

### Servant & CE Settings

::: tip
The settings are independent from that of the current plan, and will only be synced when selecting the servant. If needs
to resync, can use the "Resync Options" from the top right menu
:::

**Servant Options**:

- Supports editing Ascension Phases, levels, foufou, command card strengthen, and command codes
  - Ascension Phase can be modified by clicking "Ascension X" label
  - Slider options accept manual input via clicking on the label on the left
  - Append levels will be disabled if level is set to 0
- Support: this is for calculating costs only
  - Although if a servant is set to NPC, it won't be saved and will disqualify the current team from uploading to shared teams
- Active skills and NP strengthen status can be manually configured. They can also be disabled of customized
- Custom Skill/Buff: they will be added as passives. For more information on this, please reference [Custom Skills](faq.md#custom-skills)
- Extra Passive are generally event skills and can be removed
- You can also select enemies or NPC supports (E.g. U-Olga Marie) from the top right menu

![Servant Options](https://data-cn.chaldea.center/public/servant_edit_en.png)

<figcaption style="text-align:center">Servant Options</figcaption>

**CE Options**:

- Allows for setting levels and limit break status
- You can also select NPC CEs from the top right menu

### Mystic Code & Misc Settings

1. Mystic Code will be disabled if level is set to 0
2. Probability Threshold: Can be configured during simulation. This value dictates if a function succeeds or not, default
   to 100%. E.g. Space Ishtar skill 3 has 80% success rate for all three card buffs, so if the probability threshold is
   greater than 80% then all checks will fail. The probability threshold needs to be configured to 80% or below for it
   to succeed
3. Disable Event Effects: remove event related field traits. This will disable all event buffs
4. Simulate Enemy Actions: Since Laplace needs to import enemy data, this can not be changed amid simulation and will
   disqualify this team from uploads
5. Event Point Buffs: For now only used by Oniland and Grail Concert Event.
6. Auto Add Trait: Since super effective damages are checked via traits, older quests may not have all the relevant trait
   setup. Draco is an example for this. Her NP targets "Standard Class Servants", which is a newly added trait so does not
   exist in old free quests. To resolve this, whenever Draco is in the team, Laplace will automatically add the missing
   trait for the enemy servant.
