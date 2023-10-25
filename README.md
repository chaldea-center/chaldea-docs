# Chaldea Docs

[![chaldea release](https://img.shields.io/github/v/release/chaldea-center/chaldea?label=chaldea)](https://github.com/chaldea-center/chaldea/releases)
[![docs](https://github.com/chaldea-center/chaldea-docs/actions/workflows/docs.yml/badge.svg)](https://github.com/chaldea-center/chaldea-docs/actions/workflows/docs.yml)
[![MIT license](https://img.shields.io/github/license/chaldea-center/chaldea-docs)](https://github.com/chaldea-center/chaldea-docs/blob/main/LICENSE)
[![discord](https://img.shields.io/discord/839788731108032532?label=discord)](https://discord.gg/5M6w5faqjP)

Documentation for [Chaldea](https://github.com/chaldea-center/chaldea) app. Powered by [Vuepress](https://v2.vuepress.vuejs.org/).

## Documentation

https://docs.chaldea.center/

https://docs.chaldea.center/zh/

## Contributing

[Vuepress Document](https://v2.vuepress.vuejs.org/)

Requirement: `node 14+`

```sh
# Install yarn globally
npm install -g yarn

# Install dependencies
yarn

# Serve the docs site in the local server
# http://localhost:8080
yarn docs:dev

# Edit or create markdown files
...

# Format
yarn docs:format
# or
npm run docs:format
# or
prettier --write .

# Make sure build passed
yarn docs:build

# commit & push
git pull && git add -A && git commit -m "msg" && git push
```

### Structure

- `docs/`: English docs
- `docs/zh/`: Chinese docs
- `docs/.vitepress/configs/sidebar/`: Sidebars

Keep the same structure for English and Chinese.
Add new page for all languages and add them to sidebars.

## License

[MIT](https://github.com/chaldea-center/chaldea-docs/blob/main/LICENSE)
