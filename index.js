// hexo-renderer-rollup

const renderer = require('./lib/renderer')

hexo.extend.renderer.register('js', 'js', renderer)
