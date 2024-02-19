# Login via Transfer File(JP/NA)

Read your account auth file to create login request to FGO server. Then import the response data to chaldea app.

::: danger IMPORTANT
JP 2.87.0 (updated on 2024.2.14) has changed the verification method, and the in-app authfile login
will not return error.

**For account security, please do not continue using in-app auth file login!!!**

[Transfer Data](./transfer_data.md) and Official fgo client + mitmproxy/Charles sniffing is still valid.
:::

::: warning Declaimer
It reads your account auth file!
Breaking Term of Service (ToS).
Use in RISK!
I take no responsibility for anything.
:::

Auth file is `54cc(Android)` or `authsave2.dat(iOS)` referred in [Transfer Data](./transfer_data.md)

::: warning
Keep your account file in a safe place! if you are not sure the UserAgent and deviceinfo are the same with
your real device which fgo is running, DO NOT contact FGO official support to restore account or reset Transfer Code.
They will verify your login device.

Auth file is not "Transfer/Bind Code", you can login with the auth multiple times.
Only when you login at another device by consuming the transfer code,
the auth file is expired, you have to read new auth file again.
:::

The app will:

1. read 54cc/authsave2
2. select `ZSv/....` string from above file
3. simulate login

You can import file to chaldea app or just copy the text to app.

Additionally, you can set User-Agent, deviceInfo and Country(for NA). They are mainly device related params, you can leave them default if you don't know much about it.

::: tip
On **Android/iOS**, `UserAgent` and `deviceInfo` can be detected via "Read this Device's info" button.

Remember to use on the same device with FGO.
:::

Ref: [hexstr/FGODailyBonus](https://github.com/hexstr/FGODailyBonus)。

[.](./deep.md)
