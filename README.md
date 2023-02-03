# hexo-renderer-rollup

[![npm][npm-image]][npm-url]
[![build][build-image]][build-url]
[![license][license-image]][license-url]

Rollup renderer plugin for Hexo.

## Install

`$ npm i hexo-renderer-rollup`

## Options

You can configure this plugin in `_config.yml`.

```yaml
rollup:
  output:
    format: iife
```

## Extension

This plugin provide a filter `rollup:renderer` to allows you extend the rollup configuration.

For example, to use plugins:

```javascript
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')

hexo.extend.filter.register('rollup:renderer', function (config) {
  config.plugins = [nodeResolve(), commonjs()]
})
```

Save the file in `scripts/` folder.

Refer to rollup [configuration](https://rollupjs.org/guide/en/#configuration-files).

## License

[MIT][license-url] © AkiJoey

[npm-image]: https://img.shields.io/npm/v/hexo-renderer-rollup
[npm-url]: https://www.npmjs.com/package/hexo-renderer-rollup
[build-image]: https://img.shields.io/github/actions/workflow/status/akijoey/hexo-renderer-rollup/build.yml
[build-url]: https://github.com/akijoey/hexo-renderer-rollup/actions/workflows/build.yml
[license-image]: https://img.shields.io/github/license/akijoey/hexo-renderer-rollup
[license-url]: https://github.com/akijoey/hexo-renderer-rollup/blob/main/LICENSE
