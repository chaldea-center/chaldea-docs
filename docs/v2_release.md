# V2 Release Note

This upgrade brings Progressive Web App(PWA) support. Most of functions have been migrated, though still in test now.

Website domain: 
- [https://chaldea.center](https://chaldea.center)

If you are inside China mainland, [https://cn.chaldea.center](https://cn.chaldea.center) is recommended.

## Web Renderer

There are two renderer, HTML renderer and CanvasKit renderer. By default, it is automatically chosen according to device info.
Also you can specify the renderer in Settings, the change will take affect at next loading or page refreshing.

### HTML Renderer
Uses a combination of HTML elements, CSS, Canvas elements, and SVG elements. .

- advantages: This renderer has a smaller download size, can use system fonts
- disadvantages: page layout may be broken, like incorrect font size calculation.

### CanvasKit Renderer

- advantages: fully consistent with Flutter mobile and desktop, has faster performance with higher widget density
- disadvantages: larger app size, especially the first loading. Need to download then render Google fonts at runtime. It may take several seconds before you can see the correct characters.

## Feedback

* Email: [chaldea@narumi.cc](mailto:chaldea.narumi.cc)
* Discord: [https://discord.gg/5M6w5faqjP](https://discord.gg/5M6w5faqjP)
* Github: [https://github.com/chaldea-center/chaldea/issues](https://github.com/chaldea-center/chaldea/issues)
