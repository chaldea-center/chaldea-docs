# Transfer Data

No need to use and update transfer code time and time again. You can directly copy FGO data from original client to target client. Support both iOS and Android. And only for JP and NA server which use transfer code.

::: warning
NOT allowed according to FGO's user agreement: emulator, apk mod and so on.
:::

## Extract Data

### Data File Directory

- Android: `/storage/emulated/0/Android/data/<package>/files/data/`
- iOS: `Fate_GO.imazingapp/Container/Documents/`

For Android-Android and iOS-iOS transferring, just copy then paste the above directory or file.

If you want to transfer from iOS to Android or reverse, you need to rename the files, they have different filename for the same file.

### Extract Android Data

Just copy the files under `/storage/emulated/0/Android/data/<package>/files/data/`, subfolder can be skipped.

The `<package>` name for different apk is:

- JP: `com.aniplex.fategrandorder`
- NA: `com.aniplex.fategrandorder.en`

### Extract iOS Data

With the ability of **iMazing** software, you can backup entire phone then extract FGO data. You can find more tutorials on web about iMazing.

0. Install [iMazing](https://imazing.com), support Windows and macOS, trial version is enough. Then connect iPhone with computer through USB cable, trust computer and you can see your phone info in iMazing.
1. In iMazing, choose `Manage Apps`, (may need Apple ID login), choose `Device` tab, find `Fate/GO` app.
2. Right click `Fate/GO`, select `Export app data`, choose your saving folder. There are two options: `Backup and Extract App Data`, `Extra from Last Backup if possible`, choose at your demand(no difference for first use).
3. After extraction, you will get `Fate_GO.imazingapp`, it's a zip file in fact, so you can open it with WinRAR.
4. In the zip file, `Container/Documents` is the data folder.

The files under data folder have the different names in iOS and Android. Refer the following table.

| iOS (\*.dat)          | Android              | 备注             |
| --------------------- | -------------------- | ---------------- |
| authsave<br>authsave2 | 54cc\*\*<br>969b\*\* | login credential |
| friendcodesave        | e1a9\*\*             | user id          |
| signupsave            | 644b\*\*             | user name?       |

- in iOS, `authsave.dat` and `authsave2.dat` are the same, just duplicate one and rename
- in Android, `54cc` and `969b` are also the same, delete 969b or duplicate it
- Full Android filename (**_NO Extension_**):
  - `54cc790bf952ea710ed7e8be08049531`
  - `969b46577f365fadeb79ef14cf5d6370`
  - `e1a9f8e0ff970cc15b1a1d1e31d146db`
  - `644b05165c512739dc5e70ad513548fe`

The login credential is the most important file, you should retain only this file or 4 files above, delete all other files (subfolder is safe to keep).

## Restore Data

Remember to rename files to the one in target platform.

### Restore to Android

Delete all files under data folder, then copy the above 3 files to here. Over.

### Restore to iOS

You should turn off `Find My Phone` first.

1. Open `Fate_GO.imazingapp` with WinRAR, delete all files under `Container/Documents/`, copy above 4 files to here, save it.
2. Back to iMazing, still in `Manage Apps-Device-Fate/GO`, right click and choose `Restore App Data`, your phone will restart.
3. After restart, you need to verify Apple ID, check security settings again. Choose **DON'T Restore Data** when it let you restore data.
4. Over.

## Others

In order to bypass the risk of iOS restoration, it was recommended to:

1. transfer your FGO account to iOS client, generate transfer code
2. Extract iOS data and copy to another device.
