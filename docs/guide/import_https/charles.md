# Charles Sniffning

::: tip
HttpCanary is recommended for Android sniffing. It doesn't need PC or the first time only. Check [HttpCanary-Android](./httpcanary.md)
:::

## Requirements

- Charles: support Windows, macOS, Linux, you can download from official website: <https://www.charlesproxy.com/download/>
- Global http proxy app
  - iOS: `Potatso Lite`(free), `shadowrocket`(paid) or others you know
  - Android: `Drony v1.3.x`(free) or other you know, you can also download it from [cloud drive(password:chaldea)](https://wws.lanzoui.com/b01uoc3qh)
- FGO
  - CN/TW: official game client, support iOS/Android
  - JP/NA: not supported, use [Login via Account File](./authfile_login.md) instead.
  - KR: not supported
- Android only: Android 7+ won't trust user cert, you can choose one of these solution
  1. Use Android 6(or lower)
  2. \[root\] Install user cert as system cert via ADB: <https://stackoverflow.com/a/46569793>
  3. \[root\] magisk+JustTrustMe module
- iOS only:
  - only CN/TW supported!

## About Emulator

This tutorial is based on [MuMu(Android 6)](https://mumu.163.com/), at least this is tested okay.

If Android version of emulator/phone is higher than 6, you need root device then copy CA cert into system cert partition using `adb` tool. If you are not sure or don't know how to do, please use MuMu instead.

There may be strange problems in other emulators. For example, BlueStacks doesn't have WiFi network setting and Cert Security settings, Nox doesn't capture desired https traffic. I don't know why, so if you suffer from unknown issue, please use MuMu instead.

## Configure Charles

![Charles UI](/images/import_https/charles-1.webp)

<figcaption style="text-align:center">Charles UI</figcaption>

![Charles Configuration](/images/import_https/charles-2.webp)

<figcaption style="text-align:center">Charles Configurations</figcaption>

::: details
<https://zhile.io/2017/07/07/charles-proxy-usage-and-license.html>
:::

0. Make sure that your Android/iOS device and the computer are in the same local area network, or the emulator and Charles are on the same computer.
1. `Help-Local IP Address`, record the displayed local IPv4 address, such as `192.168.0.5`
2. `Proxy-Proxy Settings`, record or modify the port, the default is `8888`
3. `Help-SSL Proxying-Install Charles Root Certificate on a Mobile device or Remote Browser`, no operation, prompt to set up mobile proxy (`192.168.0.5:8888`) and certificate download address `chls.pro/ssl`, see next step for detail.
4. `Proxy-SSL Proxying Settings`, click to add `Add` in `include` on the left, enter `*` in host and port respectively, which means to decrypt all https traffic.
5. Click OK, Charles is set up, make sure that `Recording` is displayed in the bottom-right corner of Charles.
6. After completing the proxy setting on iOS/Android, when you connect to Charles for the first time, you will be prompted to have a remote connection `Connection from 1.2.3.4`, make sure the IP here is the IP of your phone/emulator, and click `Allow` to accept, otherwise it may be other trojan or crawlers in the network, click `Deny` to reject.

## Configure iOS

Only CN/TW supported!!!

![iOS Configuration](/images/import_https/ios-1.webp)

<figcaption style="text-align:center">iOS Configuration</figcaption>

> The screenshot is only used to indicate the location of the setting item. If it is inconsistent with the following text steps, the text steps shall prevail.

### iOS Certificate

Take iOS14 as an example. The settings on different iOS version may be displayed in different places, so look for them carefully.

1. Connect to wifi, make sure it is in the same local area network as the computer (such as the same router or hotspot connected to the computer).
2. `Settings-WiFi-Click the trailing icon-Configure proxy-Manual`, fill in the proxy host`192.168.0.5` and port`8888` displayed in step 3 in the configuration Charles, then save.
3. Open **Safari**! Safari! It must be Safari, other browsers cannot be used. Open `chls.pro/ssl`, download and install the configuration profile
4. Open `Settings`, the top should display `Downloaded Profile`, if not, you can find it in `General-Profiles-Downloaded Profiles` and install `Charles Proxy CA ****`.
5. Open `Settings-General-About-Certificate Trust Settings`, turn on Charles's certificate trust (this step is not needed for iOS 10.2 and below)
6. Open `https://www.bing.com/` in browser, check that most of the URLs starting with `https` in the Charles list are prefixed by a blue icon or lightning icon. If all of them are prefixed with a white lock icon, it means that it has not been decrypted. Please delete the above Profile and try again.
7. After the certificate is installed, the WiFi proxy can be turned off, and then the global proxy can be used later

### iOS Global HTTP Proxy

1. Download and install `Potatso Lite`
2. Create a new proxy and select `manual input` mode: Type-`HTTP`(not https), fill in the host and port as in the previous step
3. Make sure `Smart Routing` is disabled in Potatso settings. In other apps, you may need choose Proxy(for shadowrocket) or Global mode, PAC mode will take no effect.
4. Select and connect the newly created proxy. The first time you use it, it will apply for the permission to create ⅤΡΝ. Then in Charles you need to `Allow` the connection from this device.

## Configure Android

![Android Configuration](/images/import_https/android-1.webp)

<figcaption style="text-align:center">Android configuration</figcaption>

> The screenshot is only used to indicate the location of the setting item. If it is inconsistent with the following text steps, the text steps shall prevail.

### Android Certificate

Take the MuMu emulator (Android 6.0.1) as an example, there may be differences of different emulators/mobile phones

0. Use a mobile phone or emulator with Android 6 and below
1. If using a mobile phone, make sure that it is in the same local area network as the computer (such as the same router or hotspot connected to the computer)
2. Open `Settings-WiFi-long press or other ways to view WiFi details-modify network`, select the proxy `manual`, and fill in the proxy host `192.168.0.5` and port`8888` displayed in step 3 of the configuration Charles, save
3. Open `chls.pro/ssl` in the browser, download the pem/crt certificate file, there are two ways to install the certificate
   -Open the file directly to install, sometimes it may fail
   -In `Settings-Security-Install Certificate from SD Card`, select the certificate file you just downloaded and give it a name. The default credential usage is ⅤΡΝ and application
4. You can find `Charles Proxy CA ****` in `Settings-Security-Trusted Credentials-User`
5. Open `https://www.bing.com/` in browser, check that most of the URLs starting with `https` in the Charles list are prefixed by a blue icon or lightning icon. If all of them are prefixed with a white lock icon, it means that it has not been decrypted. Please delete the above Profile and try again.
6. It stands to reason that after the certificate is successfully installed, you only need to use the subsequent global proxy, and the WiFi proxy setting can be turned off

> Android system proxy to download certificate in this step could also be replaced by the following global proxy

### Android Global HTTP Proxy

1. Download and install Drony, according to the system language display, refer to the screenshot above
2. After opening, the log page and settings page will be displayed, swipe left and right to switch to the settings page
3. Network-wireless network-select the connected WiFi-network details settings
   - WiFi name: `Proxy type` select `Manual`
   - WiFi name-Manual Proxy: `Hostname` and `Port` are the same as the previous step, select `Plain` for `Proxy type`
   - WiFi name-Filter: default value - select `Local Proxy Chain All`
   - return
4. Filter-Default: select `Direct All`
5. Swipe left to return to the log page, click the ON/OFF switch at the bottom, you can see the ⅤΡΝ connection prompt in the notification bar after opening. The first time you use it, it will apply for the permission to create ⅤΡΝ. Then in Charles you need to `Allow` the connection from this device.

## Capture and Import

![Save Response](/images/import_https/charles-3.webp)

<figcaption style="text-align:center">Target URL and Saving Response</figcaption>

### Capture FGO Traffic

1. Restart and login to terminal
2. Find the following url in Charles's list, **If you can't find it, reopen FGO once or check previous steps again**
   - **JP**:
   ```:no-line-numbers
   https://game.fate-go.jp/login/top?_userId=xxxx
   ```
   - **NA**:
   ```:no-line-numbers
   https://game.fate-go.us/login/top?_userId=xxxx
   ```
   - **CN**: where `line3-s2-ios-fate` follows different game server channel (iOS/android/other) and geographic location are different, the most important thing is `_key=toplogin`
   ```:no-line-numbers
   https://line3-s2-ios-fate.bilibiligame.net/rongame_beta//rgfate/60_1001/ac.php?_userId=xxxx&_key=toplogin
   ```
   - **TW**: similar to the CN server, the domain name is `https://line3-s1-all.fate-go.com.tw`, to be confirmed.
3. Select the above url and right click `Save Response`, (note that it is `Response`, do not confuse it with Request), and save it as fgo.txt (any name)
4. **Check**: Open the saved txt file with any text editor. for the JP and NA server, it is the readable json format beginning with `{`. For the CN and TW server, the content is base64 encoded - a large string of alphanumeric symbols beginning with `ey`. The default file should be utf8 encoding, only view after open, please do not edit and save which may change the encoding.

### Import to Chaldea

1. In `Import-HTTPS Sniffing`, click on the upper right corner to import the txt file you just saved, and the data will be automatically parsed
2. All data is divided into: material, servants, servants in second archive, craft essences, check things to be imported according to your needs
3. Filter
   - **Lock**: By default, only locked servants are displayed and imported
   - **Duplicated**: The same servant can have multiple cards. By default, only the one with the max active skill levels is selected. If there are duplicate servants, the acquisition date will be displayed as hint
   - Click on a single servant to hide/unhide
4. Click **Import** to update the current account data
5. Click **Bond** to view and sort the bond level, accumulated bond value, and bond value required for the next level of each servant

Notes: The imported data is at the moment the https traffic is captured. It's not the login credentials and cannot automatically update, so the next time you need to capture the https traffic again to update.

## Cleanup and next Capture

Cleanup work:

- Make sure to turn off the global proxy and the manual proxy in the WiFi settings. Otherwise, you cannot connect to the Internet after closing Charles
- Delete or turn off the certificate trust: If you delete it, you need to reinstall the certificate before the next capture; you can also keep it. For example, if iOS turns off the trust setting, you don't need to delete the profile file.

The next https traffic capture:

- Open the global proxy of Potatso/Drony, other settings remain unchanged, just turn on the switch of the proxy software
  - Android: If the WiFi is changed, the settings in Drony need to be set again
- Check the certificate: If the trusted certificate has been deleted or turned off last time, reinstall or trust the certificate.
- Open Charles and FGO to capture target traffic

## FAQ

- JP/NA: not supported.
- KR: not supported.
- Any feedback on this method or documents is welcomed.
