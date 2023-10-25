# About HTTPS Sniffing

## Contents

- This page: Https sniffing introdution
- [Login via Account File](./authfile_login.md): The only method for JP/NA, read 54cc file and login
- [Stream-iOS](./stream.md): iOS only
- [mitmproxy-PC](./mitmproxy.md): Android/iOS with mitmproxy(PC)
- [Charles-PC](./charles.md): Android/iOS with Charles(PC)
- [HttpCanary-Android](./httpcanary.md): Android only
- [Transfer Data](./transfer_data.md): Keep JP/NA account data in multiple clients

## How to choose

- JP (after 2.80.5)
  - [transfer file login](./authfile_login.md)
  - [mitmproxy](./mitmproxy.md)/[Charles](./charles.md) + Android, not support iOS
- NA:
  - [transfer file login](./authfile_login.md)
- CN/TW:
  - iOS: [Stream](./stream.md)
  - Android: [mitmproxy](./mitmproxy.md)/[Charles](./charles.md)

## Introduction

> FGO JP/NA/KR app has cert-pinning, which will reject custom cert.
>
> For JP, official apk(after 2.80.5) supports sniffing if cert is installed as system cert.
>
> For NA/KR, must use modified apk, which is not available.
>
> Use Login via Account File if needed for JP/NA.
>
> If you can modify apk to remove cert pinning by yourself, surely these methods are also useful for these regions.
>
> For CN/TW, Android/iOS official fgo apps are both supported yet.

Capture the network traffic when FGO client login to terminal which contains the data of all servants(ascension/palingenesis/bond/active skill/append skill/costume/coins), materials and CEs. Then easily import it to Chaldea app, no need to manually input servant data anymore.

The tutorial is just an example. The core of the method is HTTPS traffic capture, so any method or software that can obtain the https response body can be used, such as **Charles**, **Fiddler**, **mitmproxy**, **Surge** or **NetCapture**. You can search the following keywords `Charles/https sniffing/mobile/emulator/global proxy` to find more online tutorials.

Note that the final exported data must only include the response body, excluding response headers and other information, and the response body must be a valid json(for JP/NA), or base64 encoded string(for CN/TW).

::: danger Disclaimer
Make sure you are aware of the risk of capturing HTTPS traffic. Chaldea app only reads the sniffed data which doesn't contains accounts secrets or password.

But if you are using simulating login JP/NA via auth file(recent added), it does read your login secrets to perform a login in chaldea app.
:::

- [Charles Tutorial](./charles.md)
- [mitmproxy Tutorial](./mitmproxy.md)

## Principle

Here, a simple principle about https sniffing gives a brief introduction of the potential risks. You can search more about MITM and cert-pinning on internet.

### Man-in-the-Middle Attack(MITM)

The network traffics are HTTPS encrypted, thus, we need some tricks to hacking it. Fiddler and Charles are the mostly used network debugging proxy which support HTTPS decryption by injecting its CA certificate into client device. Then most https traffic can be sniffed and decrypted from the client device.

- make sure you are using the legal copy of Fiddler/Charles software
- remove or don't trust the installed CA cert once you finished importing to Chaldea

### Cert-pinning

Further, JP/NA/KR FGO client will validate the certificate before establish https connection, so the above CA cert will be rejected.

For CN/TW version, you don't this step, and both Android and iOS version of original FGO clients support https sniffing.
