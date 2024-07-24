# 翻译和数据更新

大多数数据会在日服更新后半小时内更新，其中部分翻译和wiki相关内容仍需手工填写。

应用数据均位于<https://github.com/chaldea-center/chaldea-data>:

- `mappings`文件夹下: 各游戏文本的翻译
- `wiki`文件夹下: Mooncell/Fandom wiki等需要

注意json格式:

- 文本用英文双引号`"`括起来
- 文本里含英文双引号的在前面添加`\`，即`\"`, `这是带\"引号\"内容`
- 换行用`\n`

## 人工翻译部分

一般新从者/新活动实装时，以下内容需要手动添加。以龙宫城为例:

### 活动信息

活动`wiki/eventsBase.json`，例：

```jsonc
{
  "id": 80480,
  "name": "踊るドラゴン・キャッスル！ \n～深海の姫君とふたつの宝玉～",
  "mcLink": "舞动龙宫城！_～深海公主与两颗宝玉～",
  "fandomLink": "Dancing_Dragon_Castle",
  "shown": null,
  "titleBanner": {
    "JP": "https://media.fgo.wiki/6/69/舞动龙宫城_jp.png"
  },
  "officialBanner": {
    "JP": "https://news.fate-go.jp/wp-content/uploads/2024/dragon_castle_full_sjanv/top_banner.png"
  },
  "extraBanners": {},
  "noticeLink": {
    "JP": "https://news.fate-go.jp/2024/dragon_castle/"
  },
  "extraFixedItems": [],
  "extraItems": [],
  "script": {}
}
```

- `mcLink`: Mooncell页面链接 <https://fgo.wiki/w/舞动龙宫城！_～深海公主与两颗宝玉～> `/w/`后的部分，注意空格应转化为下划线。
- `fandomLink`: Fandom wiki的页面 <https://fategrandorder.fandom.com/wiki/Dancing_Dragon_Castle> `/wiki/`后的部分，同样空格应转化为下划线

以下在Mooncell已创建页面的情况下会自动解析，若Mooncell未更新，可手动添加:

- `officialBanner`: 官方公告中标题图的图片链接，尽量800×300尺寸
- `noticeLink`: 公告链接，日服填写完整地址

### 文本翻译

在 <https://github.com/chaldea-center/chaldea-data/commits/main> 中找到日服更新的commit并查看新增内容 <https://github.com/chaldea-center/chaldea-data/commit/74ad34>

- `event_names`: 一般有换行，因此Mooncell的单行活动名往往无法匹配
- `war_names`
- `svt_names`/`entity_names`: 从者或敌人的名字
- `buff_names`/`func_popuptext`: 注意参考已有翻译格式
- `skill_names`: 一般仅从者被动和活动被动需要手动填写，主动技能可以自动解析Mooncell
- `cv_names`

::: warning
对于buff_names/skill_detail等效果注意参考已有翻译格式，请勿使用自己直译的格式
:::

龙宫城活动的部分修改如<https://github.com/chaldea-center/chaldea-data/commit/e23d46>

## 游戏文本翻译

绝大部分翻译不定期同步至谷歌表格(需要科学上网)，也可直接github修改提交pr。

<https://docs.google.com/spreadsheets/d/1SSFQgfg-EFqfRzdKnoyRZIB7t6cwc_4MyseFXRdOSqs/edit>

非常希望有能人志士帮忙一起翻译! TAT 其中繁/英/韩部分确实严重。

- 部分文件如`enums.json`由于格式问题未同步至谷歌表格
- 修改前通知我进行更新表格，更新后请及时告知我进行合并

目前以日服(JP)数据为基础，并增加国服(CN)、台服(TW)、美服(NA)和韩服(KR)已实装的部分翻译，并增加了部分 Mooncell、AtlasAcademy 和 Fandom 的翻译。为了更好的展示各个区服未实装的资料，欢迎贡献翻译！

所需翻译的文件位于<https://github.com/chaldea-center/chaldea-data/tree/main/mappings>

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

- <https://apps.atlasacademy.io/db/JP/buffs?tvals=1>
- <https://apps.atlasacademy.io/db/JP/funcs?tvals=2>

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

所需翻译的文件位于<https://github.com/chaldea-center/chaldea/tree/main/lib/l10n>

- `intl_ar.arb` - Arabic, 阿拉伯语(RTL)
- `intl_en.arb` - English, 英语
- `intl_es.arb` - Spanish/Español, 西班牙语
- `intl_ja.arb` - Japanese, 日语
- `intl_ko.arb` - Korean, 韩语
- `intl_zh.arb` - Chinese, 简体中文
- `intl_zh_Hant.arb` - Traditional Chinese, 繁体中文

## 联系我们

可以通过[反馈](./feedback.md)中的途径联系我们。最好是 Discord: <https://discord.gg/5M6w5faqjP>
