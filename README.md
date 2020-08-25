# hexo-renderer-rollup

[![Build Status](https://travis-ci.org/hexojs/hexo-generator-tag.svg?branch=master)](https://travis-ci.org/hexojs/hexo-generator-tag)
[![NPM version](https://badge.fury.io/js/hexo-generator-tag.svg)](https://www.npmjs.com/package/hexo-generator-tag)
[![Coverage Status](https://img.shields.io/coveralls/hexojs/hexo-generator-tag.svg)](https://coveralls.io/r/hexojs/hexo-generator-tag?branch=master)

Tag generator for [Hexo].

## Installation

``` bash
$ npm install hexo-generator-tag --save
```

## Options

``` yaml
tag_generator:
  per_page: 10
  order_by: -date
```

- **per_page**: Posts displayed per page. (0 = disable pagination)
- **order_by**: Posts order. (Order by date descending by default)

## License

MIT

[Hexo]: http://hexo.io/
