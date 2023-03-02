# Free Quest Solver

Feature: get the best free quest farming solution and compare their efficiencies. **Bond** and **Master EXP** as a special item can also be added to plan.

You can directly set item demands here. Also, you can click **Planning Quests** button in [Item List Page](./items.md) to calculate the lacked items.

## Item Demands

Click :heavy_plus_sign: button to add item to list. **Bond** and **Master EXP** are classified into the first **Special Items** category.

Click item icon to show the detail, click item name to switch item.

In **demands** tab, the input field is for item demand count by default, you can switch to item **weight** by change **Plan/Efficiency** dropdown.

The default weight `w` for every item is 1.0

`quest efficiency x = Σx_i*w_i = Sum of every item's drop_rate*weight`

Take Charlotte as an example, AP20, 0.65 Void's Dust and 0.519 Proof of Hero per battle.
Now set weight 2.0 for Dust and weight 1.0 for Proof. The overall efficiency for this quest is
`0.65×2.0+0.519×1.0=1.819`

The drop rate can be set to `per 20AP` or `per battle` in settings.

### Settings

Click :gear: setting button to show the dialog. It will looks red if using the non-default setting.

1. **New DropRate Data**(JP 6th Anniversary), switch to old data(last updated 2021.08.02), new items in 2.6 not included
2. **Minimum AP**: filtrate some low AP quests
3. **Quest Limit**: set to current server's main story progress, uninstalled items won't be included
4. **Plan Objective**: Minimum AP or minimum battle counts
5. **Efficiency**: use per 20AP or per battle
6. **Blacklist**: custom quest blacklist, e.g. which maybe too hard for me to 3T

## Plan Result Tab

After demands set, click **solve**, the plan tab will show the best solution.

Click quest to expand its detail info. You can choose to add it to blacklist or remove from blacklist, then solve again.

::: tip
Here we use Linear Programming, without Integer limit. So the solution may have ±1 difference.
:::

Invalid items will be shown at top - for which you cannot find any quest.

## Efficiency Tab

Sort all quest which drops this item. The weight for each item is set in demands tab.

**Sort:** by total efficiency, or by bond efficiency(BP/AP)

**Filter:**

- Click the bottom item icon to show quest containing this item
- :heavy_plus_sign:button: switch **"AND"** (default)、**"OR"** mode
  - **"AND"** mode: quests containing all these items
  - **"OR"** mode: quests containing any of these items

## Free Quests List

View all free quests of main story.
