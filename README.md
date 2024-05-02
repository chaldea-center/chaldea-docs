# Chaldea Docs

[![chaldea release](https://img.shields.io/github/v/release/chaldea-center/chaldea?label=chaldea)](https://github.com/chaldea-center/chaldea/releases)
[![docs](https://github.com/chaldea-center/chaldea-docs/actions/workflows/docs.yml/badge.svg)](https://github.com/chaldea-center/chaldea-docs/actions/workflows/docs.yml)
[![MIT license](https://img.shields.io/github/license/chaldea-center/chaldea-docs)](https://github.com/chaldea-center/chaldea-docs/blob/main/LICENSE)
[![discord](https://img.shields.io/discord/839788731108032532?label=discord)](https://discord.gg/5M6w5faqjP)

Documentation for [Chaldea](https://github.com/chaldea-center/chaldea) app. Powered by [VitePress](https://vitepress.dev/).

## Documentation

https://docs.chaldea.center/

https://docs.chaldea.center/zh/

## Contributing

[VitePress Document](https://vitepress.dev/)

Requirement: `node 18+`

```sh
# enable pnpm
corepack enable
corepack prepare pnpm@latest --activate

# Install dependencies
pnpm install

# Serve the docs site in the local server
# http://localhost:8080
pnpm run docs:dev

# Edit or create markdown files
...

# Format
pnpm run docs:format
# or
npm run docs:format
# or
prettier --write .

# Make sure build passed
pnpm run docs:build

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
