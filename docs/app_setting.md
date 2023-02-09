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
- Online backup: the server provides user data backup and restore.
- Github Backup: sync data with Github repo. It will fail if SHA mismatch, you can clear SHA then force overwrite remote file.
- Backup history: the app will create a backup everyday(in `backup` folder), you can restore it in backup history.

And Chaldea server also provides a simple backup feature, you need to manually upload to or download from server among multiple devices.

**Android External Storage**
> Disabled.
Android users can select whether to use external storage if SD card exists.
When toggle the setting, you can choose to auto migrate app data to target directory.
Take attention, auto migration will **override** files if already exist in target directory.
Otherwise, you can choose to manually copy your data.

> Do manual BACKUP for your data to avoid accident, mainly in `userdata`, `config` and `backup`.

You need to restart app to let it take effect.

### Game Data Management
The dataset has minimal app requirement. If you cannot update to the latest data, please upgrade app first.

* Download Source: Global and China source, set at top of Settings page
* Auto update: background update after startup, and apply it at the next startup or manually update it here.
* Cached resources: mainly servant/ce/cc/buff icons
* Clear caches: such as memory cache, temp dir, image assets etc.
  
### Spoiler Settings
There are 2 similar settings:
1. "Hide Unreleased Cards": 
   - Only turn on filter in svt/cc/ce list page. All data are still there, turn off filter or in other pages, you can still find the unreleased cards.
   - The filter is based on current game account's region setting.
2. "Delete Unreleased Cards": 
   - Delete unreleased Servant/CE/CC data when loading, Events, main stories and mystic codes are kept there.
   - You must restart app to make spoiler change to take effect. 
   - So when you check future event, there may be some icons only display `IDxxxx` which is already removed from local database.
   - All game accounts use the same spoiler settings when they set to different game server region.

### General Settings
* Multi-language support: Simplified and Traditional Chinese, English, Japanese and Korean(partial supported)
* Dark Mode
* Always on Top: for desktop platforms
* Auto Rotate: for mobiles except iPad
* Show Account at HomePage: beside refresh icon
* Carousel Setting
  * App announcement: usually about critical bugs, some are sticky
  * Mooncell homepage carousel(CN&JP)
  * carousels of each region's announcement

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
Inside `About Chaldea`, you can turn on app auto upgrade. It will detect updates and jump to download link.
- You have to manually extract and replace the archived file in Windows/Linux or manually install apk on Android.
- For iOS and Mac App Store version, please check update in store
