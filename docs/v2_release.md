# v2 Release Note

## About v1

The last version of v1 is v1.7.0, no updates anymore, the next version will be v2.x. And the dataset won't update either.

v2 is released! The service for v1 will be stopped until 2022/5/31, including account system, server backup and item&skill recognizer.

Because the incompatibility of v1 and v2, please make a manual backup before upgrading, we will only provide the basic migration for item and servant info. You can also import V1 data in "Home-Import".

**Attentions**

- Silver Fou is removed from plan now. Only Gold Fou is planned.
- More detailed future event planning, incompatible with V1 data.
- Server backup/chaldea account system has been moved to another service provider, you have to register again.
- Android users must uninstall v1.x first before installing v2.

## About v2

This upgrade brings Progressive Web App(PWA) support. Most of features have been migrated.

Website domain:

- [https://chaldea.center](https://chaldea.center)
- [https://cn.chaldea.center](https://cn.chaldea.center)

If you are inside China mainland, [https://cn.chaldea.center](https://cn.chaldea.center) is recommended, and set Chaldea server to CN.

::: warning
However, the web app has pooooor performance, especially on mobile browser. Crash ~~sometimes~~ frequently.
:::

You can download installer of preview version from github release for canary version(Preview), it will be updated once any code changed.
Only Android/Windows/Linux available for canary version.

- [https://github.com/chaldea-center/chaldea/releases/canary](https://github.com/chaldea-center/chaldea/releases/canary)

For Android, it has different package name, which means you can install both normal version and canary version.

## Web Renderer

There are two renderer, HTML renderer and CanvasKit renderer. Also you can specify the renderer in Settings, the change will take affect at next loading or page refreshing.

By default, `canvaskit` renderer is used.

### HTML Renderer

Uses a combination of HTML elements, CSS, Canvas elements, and SVG elements. .

- advantages: This renderer has a smaller download size, can use system fonts
- disadvantages: page layout may be broken, like incorrect font size calculation.

### CanvasKit Renderer

- advantages: fully consistent with Flutter mobile and desktop, has faster performance with higher widget density
- disadvantages: larger app size, especially the first loading. Need to download then render Google fonts at runtime. It may take several seconds before you can see the correct characters.

### auto

Automatically choose renderer according to device info.

## Help Translation

The app supports all 5 official regions(JP/CN/TW/NA/KR) for gamedata. And also support other languages for app UI, like Spanish and Arabic.

However human translation is wanted for unreleased game data and UI text. If you are interested in helping translation or adding more language support, please contact me! Really welcomed!

### How to help

See [Help Translation](./translation.md) for translation details.

You can help translation through:

- Github Pull Request
- Join Discord Channel, directly provide translation texts/files

## Feedback

- Email: [chaldea@narumi.cc](mailto:chaldea.narumi.cc)
- Discord: [https://discord.gg/5M6w5faqjP](https://discord.gg/5M6w5faqjP)
- Github: [https://github.com/chaldea-center/chaldea/issues](https://github.com/chaldea-center/chaldea/issues)
