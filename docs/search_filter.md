# Search and Filters

The app provides search and filter functions at most pages.

## Search
Click :mag: search button to open search input.

### Custom Search Scope
If there is a :gear: setting button on the trailing of search input, you can custom the search scope.
Take the search setting of servant list page as example:
- Basic info: servant id, name, illustrator, CV and so on
- Active skill: name and effects
- Class Passive skill: name and effects
- Append Skill: name and effects
- Noble Phantasm: name, upper name(ruby) and effects

Not include unimportant info like profiles.

If there is no such a setting button, only search the critical info.

### Chinese Pinyin and Japanese Romaji
- for multi-language fields, all languages are included in search
- only partial critical fields support Chinese Pinyin and Romaji

### Multi-keywords
Use **space** to split keywords.

- By default, use ***OR*** to combine keywords
  - `A B C` = A OR B OR C
- `+B` means MUST contain `B`
  - `A +B` = `+A +B` = A AND B
- `-C` means MUST NOT contain `C`
  - `A -C` = must A AND NOT C
  - `A +B -C` = MUST A AND B and NOT C


## Filters
Click filter button to teh filter dialog. Take servant as example.
List/Grid, sorting: display settings
- Costume: only show servants with costumes
- Basic profile filter: class, rarity, NP color and type, alignment, traits, gender and so on.
- User's plan status: dup servants, plan status, skill status and priority
- Buff/effect filter: see [Buff Filter](./buff_filter.md)

### Combined Filter
- Inside one filter group, use the ***OR*** to combine
  -  you can check **:ballot_box_with_check:Match ALL** button to change it
- All unselected=all selected
- Different groups use ***AND** to combine
- **:ballot_box_with_check:Invert Selection**

You can choose whether to reset filter every time entering the list page.
