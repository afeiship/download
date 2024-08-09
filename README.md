# download
> Download file use fetch.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/node-down
```

## usage
```js
import download from '@jswork/node-down';

await download({
  filename: 'test.jpg',
  cwd: '__tests__',
  url: 'https://tva1.sinaimg.cn/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg',
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/download/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/download
[version-url]: https://npmjs.org/package/@jswork/download

[license-image]: https://img.shields.io/npm/l/@jswork/download
[license-url]: https://github.com/afeiship/download/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/download
[size-url]: https://github.com/afeiship/download/blob/master/dist/index.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/download
[download-url]: https://www.npmjs.com/package/@jswork/download
