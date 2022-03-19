# V2 Release Note

This upgrade brings Progressive Web App(PWA) support. Most of functions have been migrated, though still in test now.

Website domain: 
- [https://chaldea.center](https://chaldea.center)

If you are inside China mainland, [https://cn.chaldea.center](https://cn.chaldea.center) is recommended.

::: warning
The domain is disabled until website approved from China gov. The domain may be available in April.
Thus the original web app/doc site/api are all unavailable.

The docs site is temporarily moved to:
- [https://github-center.github.io](https://github-center.github.io)
- [https://chaldea-center-github-io.vercel.app](https://chaldea-center-github-io.vercel.app)

In-app skill and item recognition is disabled! Please waiting.
:::

## Migrate from V1

Enter **Import Data** from Home page, you can now import V1 data, sniffed data and FGOSim(webcrow) data.

When importing V1 data, only servants and items data are handled. All previous accounts will be added after current ones. Please go to `Settings-Accounts` to switch account.
 
::: warning
**Settings-Userdata-Import** can only import data that is saved by current app version. NOT for V1 data. 
:::

## Attentions
- Silver Fou is removed from plan now. Only Gold Fou is planned.
- More detailed future event planning, incompatible with V1 data.
- Search is disabled temporary.
- Server backup/restore is disabled either.

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

* Email: [chaldea@narumi.cc](mailto:chaldea.narumi.cc)
* Discord: [https://discord.gg/5M6w5faqjP](https://discord.gg/5M6w5faqjP)
* Github: [https://github.com/chaldea-center/chaldea/issues](https://github.com/chaldea-center/chaldea/issues)
