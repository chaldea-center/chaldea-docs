# Help Translation

### Game Data

Current based on JP data, added CN/TW/NA/KR translations of released part for each region. Besides, Mooncell translation for CN and AtlasAcademy/Fandom translation for NA are also used.

In order to display future data in other regions, please help us with the translation! 

Translation files locate at [https://github.com/chaldea-center/chaldea-data/tree/main/mappings](https://github.com/chaldea-center/chaldea-data/tree/main/mappings)

These are all json files, the basic format is: 

```json
{
  "key": {
    "JP": null, // keep null if key is jp
    "CN": "Simplified Chinese",
    "TW": "Traditional Chinese",
    "NA": "English",
    "KR": "Korean"
  }
}
```
1 - `"key"` is Japanese

Mostly the `"key"` is Japanese name, and you need to fill the translations for `CN/TW/NA/KR`. Left `"JP": null` if the key is Japanese. For already released content, the translation will be automatically added or overridden.

**File list:**
- `item_names`
- `svt_names`
- `ce_names`
- `cc_names`
- `cv_names`
- `mc_names`
- `illustrator_names`
- `bgm_names`
- `buff_detail`
- `buff_names`
- `costume_names`
- `entity_names`
- `event_names`
- `func_popuptext`
- `quest_names`
- `skill_detail`
- `skill_names`
- `spot_names`
- `td_detail`
- `td_names`
- `td_ruby`
- `td_types`
- `war_names`

2 - `"key"` is Simplified Chinese

So only left `"CN": null` then fill Japanese and other translations.

**File list:**
- `chara_names`
- `summon_names`
  
3 - `"key"` is a number

The most important file is `trait.json`, all fields need translations. It maps the trait id to display name. 

You should check the trait description in game data then fill the trait.
Try search on AtlasAcademy and switch regions to check descriptions:
- [https://apps.atlasacademy.io/db/JP/buffs?tvals=1](https://apps.atlasacademy.io/db/JP/buffs?tvals=1)
- [https://apps.atlasacademy.io/db/JP/funcs?tvals=2](https://apps.atlasacademy.io/db/JP/funcs?tvals=2)

**File list:**
- `trait`
- `svt_class`
- `costume_detail`: skip it now
- `mc_detail`: skip it now

4 - `override_mapping.json`

This is a special file to override official translations. The format is:

```json
{
  "file_name": {
    "key": {
      "CN": "QP"
    }
  },
  "item_names": {
    "QP": {
      "CN": "QP"
    }
  }
}
```

Attention, only file_name without `.json` suffix here. And only add fields need overridden.


### UI Text

App ui text also support multi-language, besides the official 5 languages, we can extend support for other languages too.

Translation files locate at [https://github.com/chaldea-center/chaldea/tree/main/lib/l10n](https://github.com/chaldea-center/chaldea/tree/main/lib/l10n)

- `intl_ar.arb` - Arabic(RTL)
- `intl_en.arb` - English
- `intl_es.arb` - Spanish/Español
- `intl_ja.arb` - Japanese
- `intl_ko.arb` - Korean
- `intl_zh.arb` - Chinese
- `intl_zh_Hant.arb` - Traditional Chinese

If you want to add more language, just copy `intl_en.arb` or `intl_zh.arb` and translate the listed strings.
You'd better to check these strings in APP to see where it would be used.
