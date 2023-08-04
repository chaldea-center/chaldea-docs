# Login via Transfer File(JP/NA)

Ref: [hexstr/FGODailyBonus](https://github.com/hexstr/FGODailyBonus)。

Read your account auth file to create login request to FGO server. Then import the response data to chaldea app.

::: danger Declaimer
It reads your account auth file!
Breaking Term of Service (ToS).
Use in RISK!
I take no responsibility for anything.
:::

Auth file is `54cc(Android)` or `authsave2.dat(iOS)` referred in [Transfer Data](./transfer_data.md)

> Auth file is not "Transfer/Bind Code", you can login with the auth multiple times.
> Only when you login at another device by consuming the transfer code,
> the auth file is expired, you have to read new auth file again.

The app will:

1. read 54cc/authsave2
2. select `ZSv/....` string from above file
3. simulate login

You can import file to chaldea app or just copy the text to app.

Additionally, you can set User-Agent, deviceinfo and Country(for NA). They are mainly device related params, you can leave them default if you don't know much about it.
