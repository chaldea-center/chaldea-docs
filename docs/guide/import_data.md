# Import Data

This app provides multiple methods to import or migrate your data, without tiring manual inputs.

Before import, please make sure the correct target account.

## From Backup of Chaldea

All user data of Chaldea app are saved in `root_path/user/userdata.json`.

You can backup data through:

- manually backup the above file
- **Settings-User Data-Backup**
- **Settings-User Data-History Backup**: daily backup (automatically).

Import any of above json files to restore backup.

Another way is to **backup to server & download from server**.

::: warning
Different app version may use the different user data structure, in another words, they may be incompatible.
:::

You can also import v1 data here, only some of servants and item data will be imported.

## HTTPS Sniffing

- For JP/NA, official apk is not supported, use [Login via Account File](./import_https/auto_login.md) instead if needed.
- For CN/TW, official app is support, you can capture login data ob iOS and Android.
- For KR, no way yet.

See [Import HTTPS Response](./import_https) for details.

## Item Screenshots

::: warning
Don't crop, don't use split screen mode, make sure the game fills the entire screen.

Don't upload too many screenshots at once, 100 seconds timeout limit!
:::

1. Goto **My Room-Item List** then take screenshots
2. Import these screenshots and upload to chaldea server
3. In **Result** tab, you can manually correct the wrong results.
4. After inspection, you can import result to your account. Not detected items won't be changed.

::: warning
Don't crop, don't use split screen mode, make sure the game fills the entire screen.
:::

![Item Screenshot Example](/images/item_recognition_example.webp)

<figcaption style="text-align:center">Item Screenshot Example</figcaption>

## Active/Append Skill Recognition

::: warning
Don't crop, don't use split screen mode, make sure the game fills the entire screen.

Don't upload too many screenshots at once, 100 seconds timeout limit!
:::

1. Goto **Enhance-Skill/Append Skill**, on the screen of selecting servant, take screenshots
   - in order to improve recognition accuracy, select the middle density of servant avatar layout by clicking the left-bottom button
2. Similar to item recognition, upload to server
3. Manually correct wrong results then import to current account
   - unrecognized servant or skill cannot be imported
   - if duplicated servants found, please uncheck them with only one left. Or the last one will override others.

Currently only support skill levels, ascension level and grails are not included.

![Skill Screenshot Example](/images/skill_recognition_example.webp)

<figcaption style="text-align:center">Skill Screenshot Example</figcaption>

## FGO Simulator - Material

Import from [http://fgosimulator.webcrow.jp/Material/](http://fgosimulator.webcrow.jp/Material/)
The new site: [https://fgosim.github.io/Material](https://fgosim.github.io/Material)

1. On the website, click **My Chaldea-引継ぎコード**, select **サーヴァント/アイテム** and **発行**
2. Copy the text to the input field, then parse it to import

## CSV Template

Since input servant data in app is a little annoying, and not convenient on desktop, you can export account data to csv file, and edit it in Excel/Google Sheet.

Once you finished, save as csv file again, and import it in app.

::: tip
Not enough test yet. For costume and command code data,
they are json format. If you don't know that, don't modify the value.
:::
