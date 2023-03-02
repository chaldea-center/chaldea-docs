# 贡献翻译

绝大部分翻译不定期同步至谷歌表格(需要科学上网):

[https://docs.google.com/spreadsheets/d/1SSFQgfg-EFqfRzdKnoyRZIB7t6cwc_4MyseFXRdOSqs/edit](https://docs.google.com/spreadsheets/d/1SSFQgfg-EFqfRzdKnoyRZIB7t6cwc_4MyseFXRdOSqs/edit)

非常希望有能人志士帮忙一起翻译! TAT 其中繁/英/韩部分确实严重。

- 部分文件如`enums.json`由于格式问题未同步至谷歌表格
- 更新后请及时告知我进行合并

## 联系我们

通过[反馈](./feedback.md)中的途径联系我们。

## 游戏数据

目前以日服(JP)数据为基础，并增加国服(CN)、台服(TW)、美服(NA)和韩服(KR)已实装的部分翻译，并增加了部分 Mooncell、AtlasAcademy 和 Fandom 的翻译。为了更好的展示各个区服未实装的资料，欢迎贡献翻译！

所需翻译的文件位于[https://github.com/chaldea-center/chaldea-data/tree/main/mappings](https://github.com/chaldea-center/chaldea-data/tree/main/mappings)

上述文件均为 JSON 文件，其基本格式如下:

```json
{
  "key": {
    "JP": null, // 如果key已经是日文，则JP留空
    "CN": "简中",
    "TW": "繁中",
    "NA": "英语",
    "KR": "韩语"
  }
}
```

1 - `"key"` 为日文

绝大多数文件的 `"key"` 为日文，因此只需翻译成其他几种语言，而 JP 部分留空。对于各个区服已经实装的内容，翻译会被官方翻译覆盖。

**文件列表:**

- `buff_names`
- `func_popuptext`
- `skill_detail`
- `td_detail`
- `event_names`
- `item_names`
- `svt_names`
- `buff_detail`
- `cv_names`
- `illustrator_names`
- `ce_names`
- `quest_names`
- `spot_names`
- `entity_names`
- `cc_names`
- `mc_names`
- `costume_names`
- `war_names`
- `skill_names`
- `td_names`
- `td_ruby`
- `td_types`
- `bgm_names`

可以依据上述优先级选择文件翻译。注意，对于包含年份的词条，请将年份替换成相应区服的年份。一般的，国服差 1 年，台服差 1 年 9 月，美服和韩服差两年。

2 - `"key"` 为简中

此时将`"CN": null`留空即可，目前只有以下两个文件

- `chara_names`
- `summon_names`

3 - `"key"` 的特殊情况！！

主要有 `trait.json` 和 `enums.json`，为游戏内各类名词词条，全部手动添加。

其中特性(trait)翻译建议遵从游戏内文本描述，可从以下网址搜索相应特性描述：

- [https://apps.atlasacademy.io/db/JP/buffs?tvals=1](https://apps.atlasacademy.io/db/JP/buffs?tvals=1)
- [https://apps.atlasacademy.io/db/JP/funcs?tvals=2](https://apps.atlasacademy.io/db/JP/funcs?tvals=2)

4 - `override_mapping.json`

当我们认为官方翻译存在明显错误或~~和谐~~的时候，可以在此文件中覆盖官方翻译，格式如下

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

## UI 文本

应用 UI 的文本同样支持以上五种语言，并可扩展至其他语种。急需每一种语言的翻译，包括简中繁中，以韩语日语最缺。

所需翻译的文件位于[https://github.com/chaldea-center/chaldea/tree/main/lib/l10n](https://github.com/chaldea-center/chaldea/tree/main/lib/l10n)

- `intl_ar.arb` - Arabic, 阿拉伯语(RTL)
- `intl_en.arb` - English, 英语
- `intl_es.arb` - Spanish/Español, 西班牙语
- `intl_ja.arb` - Japanese, 日语
- `intl_ko.arb` - Korean, 韩语
- `intl_zh.arb` - Chinese, 简体中文
- `intl_zh_Hant.arb` - Traditional Chinese, 繁体中文
