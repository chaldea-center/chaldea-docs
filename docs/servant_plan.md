# Servant Planning

::: tip
The **Servant** and **Plan** page are all for servants. **Plan** page is designed for batch changing the servant skill levels.
:::


## Servant List Page
Similar to CE and Command Code list, it shows servants' name, number, class and current skill levels if favorite. 

### Favorite :heart:
Switch list among **SHOW ALL**, **FAVORITE** and **NOT FAVORITE**.

The default behavior can be set in [Display Settings](./app_setting.md#display_settings)

### Top Class Filter Style
Go to [Display Settings](./app_setting.md#display-settings) to choose the class filter style

### Search
- custom search scope: basic, skill, NP...
- some key fields support Chinese Pinyin and Japanese Romaji search
- multiple keyword support, see [Search](./search_filter.md) for details.

### Filter
Provide the detailed servant basic info, traits, plan status, and skill/NP effect filter. 
See [Buff Filter](./buff_filter.md) for details.

## Plan List Page
Different from **Servant List Page**, it shows the servant detail level info for ascension, palingenesis, skills and costume,
both current value and target value.

::: tip
Main purpose of this page is to **batch** changing all shown servants' level.
:::

You can custom shown servants by filter dialog. What's more, click the trailing **:eye_speech_bubble:Hide** button will hide the specific servant which won't respond to your batch setting. 

Make sure the correct plan is selected. Every account supports multiple plans, you can switch or copy plan in the popup menu.

There are the functions for every bottom button:
- Set all for `Current` status or `Target` plan
- Jump to Item List Page
- Dropdown button to batch change value
  - ascension
  - all 3 active skills
  - append skills: you can set **only 2nd** or **all 3** in [Display Settings](./app_setting.md#display-settings)
  - all costumes

When you click `Lv.x`, all shown servants' current/target level will change to `Lv.x`.

If you select `x+1` for skills, it means change from `Lv.x` to `Lv.x+1`. For me, mostly used for check which item is lacking at the moment.

## Detail Page - Plan Tab

::: tip
Switch **Slider Mode** and **Dropdown Mode** in the popup menu.
:::

### Favorite :heart:
:heart: :white_heart:

Add servant into plan or remove from plan. Changing current or plan value will automatically set favorite:heart:.

The item detail page only shows favorite servants' demands by default.

### Priority :one:~:five:
Apply different priority for servants, as an extra filter property. Default to P1, ranges from P1 to P5.

E.g. set low rarity cards to P1, SR&SSR cards to P2, upcoming servants to P3. It's convenient to filter out which priority servants should be added into plan.

> To remember the meanings of P1~P5, you can set the label for priorities in [Display Settings-Priority Tagging](./app_setting.md#display-settings)

::: warning
The priority filter in servant list page, item list page and statistic page, share the global priority filter setting.
Unchecked priority won't be added into plan. What's more, all unselected=all selected.
:::

### Duplicated Servant
By default, we use servant collection number as key. So every servant can have only one instance. Here we call it **Primary** one.

If your true love is Ishtar, and want to plan 2 Ishtar for same servant collection number. You can create **duplicated** servant. in popup menu.

e.g. the number of primary Ishtar is No.142, the duplicated Ishtar has a new number of No.142001. ~~which means you can create at most 999 duplicated servants.~~

::: warning
Duplicated servants may cause some potential bugs, if encountered, please tell me.
:::

### Leveling Plan

For every attribute with range values, the left value is **current level**, and the right value is **target/plan value**.
If it's not a range, just a single value, it won't be included in plan, just recording such a info, like NP level.

Click the right info button :information_source: to check the item cost details or tips.

1. Ascension - 0~4
2. Active Skill - 1~10
3. Append Skill - 0~10, `0/-` means unlocked, 0-1 will cost 120 coins
4. Servant coin - coin amount of servant specific coin
5. Palingenesis - max level(0 grail)~Lv.120(n grails), differ from servant rarity
6. NP level - just recording, not used
7. HP/ATK Fou-kun - 0~2000, 1000 by default. The internal value and shown value has such relations:
  - `0` Fou-kun = `-20`(calculated by silver(3) Fou-kun)
  - `1000` Fou-kun = `0`
  - `2000` Fou-kun = `50`(calculated by gold(4) Fou-kun)
8. Bond Limit - mainly designed for Chaldea Lantern cost
9. Command Codes - it's easy to find out code pinned on which servants in code detail page

### Toolbar
- :information_source:: show item cost for current plan
- `Enhance` button: enter **Enhance Mode**, and now:
  - current value cannot be changed
  - change target value for this enhancement(it's not servant plan value)
  - click **OK** will execute enhancement and take out items
- `Lv.x` dropdown
  - quickly setting all 3 **active skills** to the same value. Meanwhile, ascension will be set to 4. Append skills are not changed.
  - in **normal mode**, it changes current value. In **Enhance Mode**, it changes target value.
- :arrow_up: Change all current value to 4-10/10/10 (ascension 4+active skill 10/10/10)
- :arrow_upper_right: Change target value to 4-9/9/9
- :arrow_upper_right: Change target value to 4-10/10/10


### Others
- Display order of tabs can be costumed in [Display Settings-Tabs Sorting](./app_settin.md#display-settings)
- Click ATK/HP besides avatar to show the ATK/HP growth curve
- Skill: list active/class passive/append skills effects
- Noble Phantasm: list NP effects
- Info
  - game base data: illustrator, voice actor, traits, alignment, hits, NP rate, bond points and so on.
  - profiles
  - bond CE
  - valentine CE
  - related cards: shown in CE/Command code
    > click `中|日|EN` to switch the display language for card profile text
- Illustrations
- Sprites: ascension icons and battle models
- Summons: those with current servant picked up, class pickup or guarantee summon
  > A :star: is shown for Single PickUp
- Voices
  - :arrow_forward: download on play
  - some voice file may be not uploaded, especially for new servants
  - some voice formats may be not supported by platform
  - click :arrow_down: to download voice file to local
  - click `中|日|EN` to switch the display language for voice text
    - English text may be mismatched
- Quests: interludes and rank-up quests

