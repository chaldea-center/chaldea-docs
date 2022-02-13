# Import HTTPS Response

Capture the network traffic when FGO client login to terminal which contains the data of all servants(ascension/palingenesis/bond/active skill/append skill/costume/coins), materials and CEs. Then easily import it to Chaldea app, no need to manually input servant data anymore.

The tutorial is just an example. The core of the method is HTTPS traffic capture, so any method or software that can obtain the https response body can be used, such as **Charles**, **Fiddler**, **mitmproxy**, **Surge** or **NetCapture**. You can search the following keywords `Charles/https sniffing/mobile/emulator/global proxy` to find more online tutorials.

Note that the final exported data must only include the response body, excluding response headers and other information, and the response body must be a valid json(for JP/NA), or base64 encoded string(for CN/TW). 

::: danger Disclaimer
Make sure you are aware of the risk of capturing HTTPS traffic. Chaldea app doesn't handle any sensitive data like password and https decryption, these are all done by third-party software or client.
:::

- [Charles Tutorial](./charles.md)
- [mitmproxy Tutorial](./mitmproxy.md)
- 
## Principle

Here, a simple principle about https sniffing gives a brief introduction of the potential risks. You can search more about MITM and cert-pinning on internet.

### Man-in-the-Middle Attack(MITM)
The network traffics are HTTPS encrypted, thus, we need some tricks to hacking it. Fiddler and Charles are the mostly used network debugging proxy which support HTTPS decryption by injecting its CA certificate into client device. Then most https traffic can be sniffed and decrypted from the client device.
- make sure you are using the legal copy of Fiddler/Charles software
- remove or don't trust the installed CA cert once you finished importing to Chaldea

### Cert-pinning
Further, JP/NA/KR FGO client will validate the certificate before establish https connection, so the above CA cert will be rejected. Now we need to modify the client app to remove the https cert validation. This doc will use the apk mod by [rayshift.io](https://rayshift.io). Obviously, Android is supported and only JP and NA(EN) version mods are provided.

For CN/TW version, you don't this step, and both Android and iOS version of original FGO clients support https sniffing.

## Get BetterFGO apk mod

For JP and NA, we need modified apk to bypass cert-pinning, here we take the [Rayshift](https://rayshift.io)'s BetterFGO mod.

BetterFGO can be installed together with original FGO client, and you can login BFGO and original iOS/Android FGO together after [transferring data](./transfer_data.md)

::: danger Disclaimer from Rayshift.io
Disclaimer: While I believe this app will not get you banned, I take no responsibility for anything that might happen. I have been using this for over a year myself without issues.
:::

You can get it from their discord channel:
1. Join [https://discord.gg/8JeHHvh](https://discord.gg/8JeHHvh)
2. In `ANNOUNCEMENT-roles`, click the `BetterFGO` role emoji to get the role and permission.
3. Goto `betterfgo-cli` channel, there are JP/NA apk mod links.
4. [transfer](./transfer_data.md) iOS/Android FGO data to BetterFGO.
