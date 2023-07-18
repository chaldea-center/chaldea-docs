# HttpCanary-Android

::: warning
It is not working again on some devices, I don't know why ╮(╯▽╰)╭

Please use [Charles](./charles.md) if HttpCanary failed.
:::

Once you installed CA cert, you don't need PC anymore.

For Android 6 or lower:

- Install CA cert in HttpCanary
- start sniffing

## adb

For Android 7-10(root required) 0. Turn on Developer Mode and Debugging Mode in Android Settings

1. Install CA cert in HttpCanary
2. download adb from [https://developer.android.com/studio/releases/platform-tools](https://developer.android.com/studio/releases/platform-tools), add it to Path(environment variable)
3. open CMD or PowerShell, make sure `adb` or `./adb` works
4. connect mobile phone via USB, or connect emulator via `adb connect 127.0.0.1:xxxx`

   xxxx is the emulator port, it depends on what emulator you are using, search it. Do connect one device or emulator at one.
   `adb devices` to check connected devices.

5. Run
   ```
   adb shell
   su
   mount -o rw,remount /
   cp -f /data/data/com.guoshi.httpcanary/cache/HttpCanary.pem /system/etc/security/cacerts/87bc3517.0
   chmod 644 /system/etc/security/cacerts/87bc3517.0
   touch /data/data/com.guoshi.httpcanary/cache/HttpCanary.jks
   chmod 600 /data/data/com.guoshi.httpcanary/cache/HttpCanary.jks
   ```
6. reopen HttpCanary and start sniffing

### Some Emulator ports

May be different with actual port ╮(╯▽╰)╭

- NetEase MuMu 7555
- Nox 62001
- BlueStacks 5555 (ps:There is no network/cert related settings?)

## Magisk+JustTrustMe

Also need root.

1. Install Magisk
2. In Magisk, install [JustTrustMe](https://github.com/SekiBetu/JustTrustMe/releases) or [MagiskTrustUserCerts](https://github.com/NVISOsecurity/MagiskTrustUserCerts/releases) module
3. Install HttpCanary CA cert as user cert.
4. Restart phone, the module will auto move user cert to system cert
5. (Android 11+?) create this file and give 600 permission

   `/data/data/com.guoshi.httpcanary/cache/HttpCanary.jks`

6. start sniffing

## Target Https Request

It's the login request:

- JP:

```:no-line-numbers
https://game.fate-go.jp/login/top?_userId=xxxx
```

- NA:

```:no-line-numbers
https://game.fate-go.us/login/top?_userId=xxxx
```

- CN: where `line3-s2-ios-fate` may change, the key point is `_key=toplogin`

```:no-line-numbers
https://line3-s2-ios-fate.bilibiligame.net/rongame_beta//rgfate/60_1001/ac.php?_userId=xxxx&_key=toplogin
```

- TW: similar with CN, but its domain is `https://line3-s1-all.fate-go.com.tw`

## Notes

I don't try much for this method, please google it for more details.
