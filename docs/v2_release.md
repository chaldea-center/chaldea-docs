# V2 Release Note

## About V1

The last version of V1 is v1.7.0, no updates anymore, the next version will be v2.x. And the dataset won't update either.

After V2 released, the service for V1 will be stopped, including account system, server backup and item&skill recognizer.

Because the incompatibility of V1 and V2, please make a manual backup before upgrading, we will only provide the basic migration for item and servant info. You can also import V1 data in "Home-Import".

**Attentions**

- Silver Fou is removed from plan now. Only Gold Fou is planned.
- More detailed future event planning, incompatible with V1 data.
- Search is disabled temporary.
- Server backup/restore is disabled either.

## About V2

This upgrade brings Progressive Web App(PWA) support. Most of features have been migrated, though still in test now.

Website domain:

- [https://chaldea.center](https://chaldea.center)
- [https://cn.chaldea.center](https://cn.chaldea.center)

If you are inside China mainland, [https://cn.chaldea.center](https://cn.chaldea.center) is recommended.

> However, the web app performs pooooorly on mobile, crash and refresh page ~~sometimes~~ frequently.

Native app for mobile and desktop will still be available for V2. Since it is in preview stage and publish for iOS/macOS is a little troublesome which must upload to Apple to review, thus, currently only provide Android/Windows/Linux preview.

You can download installer of preview version from github release:

- [https://github.com/chaldea-center/chaldea/releases/canary](https://github.com/chaldea-center/chaldea/releases/canary)

Note that it is updated automatically when source code updated, so the version code may not changed, just override the old one. Meanwhile, Android preview can be installed together with V1, they have different package name.

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

The app support all 5 official regions(JP/CN/TW/NA/KR) for gamedata. And also support other languages for app UI, like Spanish and Arabic.

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
