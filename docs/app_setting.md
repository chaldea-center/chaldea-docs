# APP Settings

## Chaldea User
A very simple user system, only for user data backup and multi-device synchronization.

It's not a necessary step if you just use it on one device. Everything in app is available regardless of registered or not.

::: warning
NO security guarantee! DON'T use frequently used passwords!!!
:::


## Game Account
* Switch among multiple game accounts
* Game Server

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
├── assets  // image/voice assets downloaded path
├── backup  // daily backup of userdata.json
├── config  // some local configuration and caches
├── game    // app dataset
├── downloads
├── ffo_output
├── logs
├── temp
└── user
    ├── settings.json   // main local settings
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

* Download Source: Global and China source, set at top of Settings page
* Auto update: background update after startup, and apply it at the next startup or manually update it here.
* Cached resources: mainly servant/ce/cc/buff icons

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
- Auto upgrade is for Android, Windows and Linux. You have to manually extract and replace the downloaded file.
- For iOS and Mac App Store version, please check update in store
