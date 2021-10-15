# Import HTTPS Response

Capture the network traffic when FGO client login to terminal which contains the data of all servants(ascension/palingenesis/bond/active skill/append skill/costume/coins), materials and CEs. Then easily import it to Chaldea app, no need to manually input servant data anymore.

The tutorial is just an example. The core of the method is HTTPS traffic capture, so any method or software that can obtain the https response body can be used, such as **Surge** or **NetCapture**. You can search the following keywords `Charles/https sniffing/mobile/emulator/global proxy` to find more online tutorials.

Note that the final exported data must only include the response body, excluding response headers and other information, and the format is the same as described at the end of this tutorial, which is base64 encoded or json format. 

::: danger Disclaimer
Make sure you are aware of the risk of capturing HTTPS traffic. Chaldea app doesn't handle any sensitive data like password and https decryption is done by third-party software or client.
:::

## Principle

Here, a simple principle about https sniffing gives a brief introduction of the potential risks. You can search more about MITM and cert-pinning on internet.

### Man-in-the-Middle Attack(MITM)
The network traffics are HTTPS encrypted, thus, we need some tricks to hacking it. Fiddler and Charles are the mostly used network debugging proxy which support HTTPS decryption by injecting its CA certificate into client device. Then most https traffic can be sniffed and decrypted from the client device.
- make sure you are using the legal copy of Fiddler/Charles software
- remove or don't trust the installed CA cert once you finished importing to Chaldea

### Cert-pinning
Further, JP/NA/KR FGO client will validate the certificate before establish https connection, so the above CA cert will be rejected. Now we need to modify the client app to remove the https cert validation. This doc will use the apk mod by [rayshift.io](https://rayshift.io). Obviously, Android is supported and only JP and NA(EN) version mods are provided.

For CN/TW version, you don't this step, and both Android and iOS version of original FGO clients support https sniffing.

## Requirements
- Charles: support Windows, macOS and Linux, you can download from official website: [https://www.charlesproxy.com/download/](https://www.charlesproxy.com/download/)
- Global http proxy app
  - iOS: `Potatso Lite`(free), `shadowrocket`(paid) or others you know
  - Android: `Drony v1.3.x`(free) or other you know
- Android only:
  - Android device: android version <=6. For most Android emulators, system version may be Android 6, you can check it in Setting-About
  - BetterFGO apk, for JP and NA: please join the rayshift's discord channel([https://discord.gg/8JeHHvh](https://discord.gg/8JeHHvh)) and apply the `BetterFGO` role to get the download link. Tips: BetterFGO can be installed together with official FGO client. And you can copy data without transfer code, goto rayshift for more details.


## Configure Charles

![Charles UI](/images/import_https/charles-1.webp)
<figcaption style="text-align:center">Charles UI</figcaption>


![Charles Configuration](/images/import_https/charles-2.webp)
<figcaption style="text-align:center">Charles Configurations</figcaption>

::: details
[https://zhile.io/2017/07/07/charles-proxy-usage-and-license.html](https://zhile.io/2017/07/07/charles-proxy-usage-and-license.html)
:::

0. Make sure that your Android/iOS device and the computer are in the same local area network, or the emulator and Charles are on the same computer.
1. `Help-Local IP Address`, record the displayed local IPv4 address, such as `192.168.0.5`
2. `Proxy-Proxy Settings`, record or modify the port, the default is `8888`
3. `Help-SSL Proxying-Install Charles Root Certificate on a Mobile device or Remote Browser`, no operation, prompt to set up mobile proxy (`192.168.0.5:8888`) and certificate download address `chls.pro/ssl`, see next step for detail.
4. `Proxy-SSL Proxying Settings`, click to add `Add` in `include` on the left, enter `*` in host and port respectively, which means to decrypt all https traffic.
5. Click OK, Charles is set up, make sure that `Recording` is displayed in the bottom-right corner of Charles.
6. After completing the proxy setting on iOS/Android, when you connect to Charles for the first time, you will be prompted to have a remote connection `Connection from 1.2.3.4`, make sure the IP here is the IP of your phone/emulator, and click `Allow` to accept, otherwise it may be other trojan or crawlers in the network, click `Deny` to reject.


## Configure iOS
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
4. Select and connect the newly created proxy. The first time you use it, it will apply for the permission to create VPN. Then in Charles you need to `Allow` the connection from this device.


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
    -In `Settings-Security-Install Certificate from SD Card`, select the certificate file you just downloaded and give it a name. The default credential usage is VPN and application
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
5. Swipe left to return to the log page, click the ON/OFF switch at the bottom, you can see the VPN connection prompt in the notification bar after opening. The first time you use it, it will apply for the permission to create VPN. Then in Charles you need to `Allow` the connection from this device.


## Capture and Import

![Save Response](/images/import_https/charles-3.webp)
<figcaption style="text-align:center">Target URL and Saving Response</figcaption>

### Capture FGO Traffic
1. Restart and log in to terminal (using BetterFGO for JP/NA)
2. Find the following url in Charles's list, **If you can't find it, close FGO and reopen it and try a few more times**
    - **JP**: 
    ```:no-line-numbers
    https://game.fate-go.jp/login/top?_userId=xxxx
    ```
    - **NA**: Similar to the JP server, the domain name is `https://game.fate-go.us`, to be confirmed.
    - **CN**: where `line1-s2-ios-fate` follows the account server (iOS/android/other) and geographic location are different, the most important thing is `_key=toplogin`
    ```:no-line-numbers
    https://line1-s2-ios-fate.bilibiligame.net/rongame_beta//rgfate/60_1001/ac.php?_userId=xxxx&_key=toplogin
    ```
    - **TW**: similar to the CN server, the domain name format is `https://line3-s1-all.fate-go.com.tw`, to be confirmed.
3. Select the above url and right click `Save Response`, (note that it is `Response`, do not confuse it with Request), and save it as fgo.txt (any name)
4. **Check**: Open the saved txt file with any text editor. For the CN and TW server, the content is base64 encoded - a large string of alphanumeric symbols beginning with `ey`; for the JP and NA server, it is the readable json format beginning with `{`. The default file should be utf8 encoding, only view after opening, please do not edit and save which may change the encoding.

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
- When capturing packets, FGO may often prompt the connection failure. Please try again for several times. If it still does not work, then make sure that the WiFi proxy and global proxy software are both turned on.
- KR server is not supported yet.
- Under testing, any feedback on this method or documents is welcomed.
