# About HTTPS Sniffing

## Contents
- This page: Https sniffing introdution 
- [BetterFGO apk](./bfgo.md): For JP/NA sniffing
- [Transfer Data](./transfer_data.md): Keep JP/NA account data in multiple clients
- [Stream-iOS](./stream.md): Only for CN/TW sniffing on iOS
- [HttpCanary-Android](./httpcanary.md): JP/NA/CN/TW on Android 
- [Charles-PC](./charles.md): Android/iOS with Charles(PC)
- [mitmproxy-PC](./mitmproxy.md): Android/iOS with mitmproxy(PS)


> FGO JP/NA/KR app has cert-pinning, which will reject custom cert. 
> So we must use modified apk(here BetterFGO JP/NA). iOS is not supported.
>
> For CN/TW, Android/iOS are both supported yet.

Capture the network traffic when FGO client login to terminal which contains the data of all servants(ascension/palingenesis/bond/active skill/append skill/costume/coins), materials and CEs. Then easily import it to Chaldea app, no need to manually input servant data anymore.

The tutorial is just an example. The core of the method is HTTPS traffic capture, so any method or software that can obtain the https response body can be used, such as **Charles**, **Fiddler**, **mitmproxy**, **Surge** or **NetCapture**. You can search the following keywords `Charles/https sniffing/mobile/emulator/global proxy` to find more online tutorials.

Note that the final exported data must only include the response body, excluding response headers and other information, and the response body must be a valid json(for JP/NA), or base64 encoded string(for CN/TW). 

::: danger Disclaimer
Make sure you are aware of the risk of capturing HTTPS traffic. Chaldea app doesn't handle any sensitive data like password and https decryption, these are all done by third-party software or client.
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
Further, JP/NA/KR FGO client will validate the certificate before establish https connection, so the above CA cert will be rejected. Now we need to modify the client app to remove the https cert validation. This doc will use the apk mod by [rayshift.io](https://rayshift.io). Obviously, Android is supported and only JP and NA(EN) version mods are provided.

For CN/TW version, you don't this step, and both Android and iOS version of original FGO clients support https sniffing.
