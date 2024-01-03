# FAQ

## Forgot Password

Please send following information through Email or in-app feedback:

- username
- register date
- device UUID that has been successfully logged in recently

UUID: via "About Chaldea" - long press logo - paste UUID.

In-app feedback will attach UUID automatically.

## Fail to start or white screen

- Web: for Firefox, if InPrivate mode or "Clear history when close" setting is turned on, it will disable IndexedDB then stop app.
- It seems not support Windows 7, btw only 64-bit supported.
- Don't run it in zip without extraction. Extract it then run!
- Don't save it to any folders need **admin** permission, such as `C:\`, `C:\Program Files\`
- Don't save it to **Network** folder, such as the network disk/FTP

## Cannot find \*\* Servant/CE

Please check your favorite button and filter setting, maybe you just hide them. Reset those filters and check again.

## Loading Image Failed

Most of all images(card thumbs, skill icons, illustrations, voices) are downloaded on demands.

Possible reason:

- check Network Setting, if it shows offline, you can switch on the Force Online Mode
- chaldea server: one in China and one is Global

## Web Renderers

Web app has bad performance and compatibility. Especially on mobile browser, web app is not recommended.

There are two renderer, HTML renderer and CanvasKit renderer. You can specify the renderer in Settings, the change will take affect at next loading or page refreshing.

::: warning
In-app screenshot is only supported in CanvasKit mode, such as Laplace team screenshot.
:::

1. HTML Renderer

   - advantages: This renderer has a smaller download size, can use system fonts.
   - disadvantages: page layout may be broken, like incorrect font size calculation. Cannot use in-app screenshot.

2. CanvasKit Renderer

   - advantages: fully consistent with Flutter mobile and desktop, ~~has faster performance with higher widget density~~ it's laggy and annoying. Supports in-app screenshots.
   - disadvantages: larger app size, especially the first loading. Need to download then render Google fonts at runtime. It may take several seconds before you can see the correct characters.

3. auto

   Automatically choose renderer by flutter engine.

## Web: laggy or font not rendered

In settings, change web renderer from canvas to html to use system font.

For users in China, visit <https://cn.chaldea.center>

## Anti-Virus

1. this is an open-source project <https://github.com/chaldea-center/chaldea>
2. Trust the app or exclude its folder in Anti-Virus software

## Wrong Text/Data

**Game Data**

- some unreleased data in your region may not have translation
- skill/NP/mission are described according to game data, if there is any mistake, please submit feedback

For any translation missing or mistake, feedback welcomed, and help translation wanted!!!

## Delete Account

Account system is used for online userdata backup and Laplace team sharing. If you want to delete account and all data, you can:

1. Go to Settings - User Page, input user name and password then click DELETE.
2. Contact developer to remove data: [support@chaldea.center](mailto:support@chaldea.center)

## [Feedback](./feedback.md)
