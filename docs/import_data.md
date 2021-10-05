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


## HTTPS Sniffing
Capture the game data on login(not password or login credential). For NA/JP, you need the modified apk on Android, iOS not supported. For CN/TW, you can capture it on both iOS and Android. 

See [Import HTTPS Response](./import_https.md) for details.


## Item Screenshots
1. Goto **My Room-Item List** then take screenshots
2. Import these screenshots and upload to chaldea server
3. Download result after server completes recognition
4. In **Result** tab, you can manually correct the wrong recognized ones.
5. After inspection, you can import result to your account. Not detected items won't be changed.

::: warning
Don't crop, don't use split screen mode, make sure the game fills the entire screen.\
:::
![Item Screenshot Example](/images/item_recognition_example.webp)
<figcaption style="text-align:center">Item Screenshot Example</figcaption>

If there are many wrong recognition results, please tell me.

## Active/Append Skill Recognition
1. Goto **Enhance-Skill/Append Skill**, on the screen of selecting servant, take screenshots
   - in order to improve recognition accuracy, select the middle density of servant avatar layout by clicking the left-bottom button
2. Similar to item recognition, upload to server
3. Download result after server finished. Each image may take about 1~2 min.
4. Manually correct wrong results then import to current account
   - unrecognized servant or skill cannot be imported
   - if duplicated servants found, please uncheck them with only one left. Or the last one will override others.

Maybe the recognition speed is too slow and cost too much time. If you are expert on image tech, improvement is welcomed.

Currently only support skill levels, ascension level and grails is not included

![Skill Screenshot Example](/images/skill_recognition_example.webp)
<figcaption style="text-align:center">Skill Screenshot Example</figcaption>

## Guda Data
The iOS app **Guda** exported item data or servant data in txt file. Just import them and the app will parse it.

## FGO Simulator - Material
Import from [http://fgosimulator.webcrow.jp/Material/](http://fgosimulator.webcrow.jp/Material/)

1. On the website, click **My Chaldea-引継ぎコード**, select **サーヴァント/アイテム** and **発行**
2. Copy the text to the input field, then parse it to import
