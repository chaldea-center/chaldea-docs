# APP Settings

## Chaldea User
A very simple user system, only for user data backup and multi-device synchronization.

It's not a necessary step if you just use it on one device. Everything in app is available regardless of registered or not.

::: warning
NO security guarantee! DON'T use frequently used passwords!!!
:::


## Game Account
* Switch among multiple game accounts
* Game Server: related with exchange ticket's month setting and default event/summon progress
  * JP: as base
  * CN: 15 months gap
  * TW: 21 months gap
  * NA/EN: 24 months gap
* Event Progress: this setting is used to hide the outdated events and summons in the list

## App Data
> Root folder for app data(`root_path`): All data saved here, you can manually backup them.

::: warning
For Android and iOS, uninstall app will fully delete `root_path` including your user data.
:::

The root path differs from platforms
| OS       | Root Path                                   |
| :------- | :-------------------------------------- |
| iOS      | `"File" App/On My iPhone/Chaldea/`            |
| Android  | `Android/data/cc.narumi.chaldea/files/` |
| Windows  | `folder_of_chaldea.exe/userdata`            |
| macOS    | `/Users/<user>/Library/Containers/cc.narumi.chaldea/Data/Documents/` |
> The true path can be found in `User Data-Data Folder`.

Directory Structure:
```:no-line-numbers
root_path
├── backup  // daily backup of userdata.json
├── config  // some local configuration and caches
├── data    // app dataset(dataset*.zip) extracted folder
│   ├── dataset.json
│   └── icons
├── downloads
├── ffo     // Fate/Freedom Order data(ffo-data.zip) extracted folder
├── ffo_output
├── logs
├── temp
└── user
    └── userdata.json   // ALL user-related data
```

### User Data Management
Provide user data backup and restore(import). The app will create a backup everyday, you can restore it in backup history.

And Chaldea server also provides a simple backup feature, you need to manually upload to or download from server among multiple devices.

**Android External Storage**

Android users can select whether to use external storage if SD card exists.
When toggle the setting, you can choose to auto migrate app data to target directory.
Take attention, auto migration will **override** files if already exist in target directory.
Otherwise, you can choose to manually copy your data.

> Do manual BACKUP for your data to avoid accident, mainly in `userdata`, `config` and `backup`.

You need to restart app to let it take effect.

### App Dataset Management
The dataset version is just the created date. A full version contains the minimal compatible app version.
e.g. 20210922-1.6.0 means the 20210922 version dataset requires your app version at least 1.6.0, or may be incompatible.

* Download Source
  * Server: fetch app and dataset updates from Chaldea server proxy, it's only recommended if you cannot access Github.
  * Github: Recommended if you can access Github
  * Gitee: blocked currently, but you can still manually download assets.
* Dataset update methods
  * Auto update: fetch patch from Chaldea server at every app startup, if failed, download full data.
  * Patch Gamedata: fetch patch from Chaldea server
  * Download Full Dataset: download `dataset-text.zip` directly from the source selected above.
  * Download Icons: cache all icons to `app_path/data/icons/`, about 3000+ icons. Thus, download requests are limited to 5 requests per second at most.
  * Import dataset.zip: manually download `dataset-text.zip` from github release, and import it here.Pay attention to the compatibility of data version and app version.
  * Reload Default: app build-in data
* Cached resources：
  * Icons: Card thumbs and skill icons, they will be permanently saved in `app_path/data/icons/`
  * Illustrations and voices: once cleared cache, you need to download again. Only cached when used.

### General Settings
* Multi-language support: Chinese, English and Japanese(part)
* Dark Mode
* Always on Top: for desktop platforms
* Auto Rotate: for mobiles except iPad
* Show Account at HomePage: beside refresh icon
* Carousel Setting
  * App announcement: usually about critical bugs, always turned on unless the whole carousel is closed
  * Mooncell homepage carousel(CN&JP)
  * carousels of JP announcement
  * carousels of NA announcement

### Display Settings
* Auto Reset Filters: for Servant/CE/CommandCode filters, reset when you enter the list page
* Servant List Page
  * **Favorite** button's default behavior: **Show Favorite**, **Show ALL** or **Remember**
  * Top Class Filter Style:
    - Auto match screen size
    - Single row with **Extra** class collapsed 
    - Single row with **Extra** class expended
    - Expand **Extra** class in the second row
    - Hide class filter
  * [Plan List Page] Only Change 2nd Append Skill or all 3 skills
* Servant Detail Page
  * Tab Sorting: sorting plan, skill, np and other tabs as you like
  * Priority Tagging: servant priority P1~P5, just label them with text to help you remember

## APP Auto Upgrade
Inside `About Chaldea`, you can turn on app auto upgrade. The download source is the same as dataset source.
- Auto upgrade is only for Android and Windows.
- For windows, auto upgrade may failed if the path contains non English chars.
- For Linux version and Github downloaded macOS version, you need to manually extract the auto downloaded zip.
- For iOS and Mac App Store version, please check update in store
