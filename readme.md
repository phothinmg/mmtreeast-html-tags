# mmtreeast-html-tags

![GitHub Actions Workflow Status][npm-build] ![GitHub Actions Workflow Status][gh-codeql] ![NPM Version][npm-version] ![npm bundle size][npm-size]

## Contents

- [Overview](#overview)
- [Install](#install)
- [Use](#use)
- [License](#license)

## Overview

HTML tag names , fetch from https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements

## Install

```shell
npm i mmtreeast-html-tags
```

```shell
pnpm i mmtreeast-html-tags
```

```shell
yarn add mmtreeast-html-tags
```

## Use

### ESM

```js
import { htmlTags } from "mmtreeast-html-tags"; //tag names
import { getTagInfo } from "mmtreeast-html-tags"; // get some tag info
```

### Commonjs

```js
const { htmlTags, getTagInfo } = require("mmtreeast-html-tags");
```

## API

- This package exports:

  - javascript object : `htmlTags` `voidTags`
  - type : `FlowType`

- There is no default export.

## Related

- [`mmtreeast-html-attributes`][mmtreeast-html-attributes]

## License

[MIT][file-license] © [Pho Thin Mg][ptm]

<!-- Definitions -->

[file-license]: LICENSE
[ptm]: https://github.com/phothinmg
[npm-build]: https://img.shields.io/github/actions/workflow/status/phothinmg/mmtreeast-html-tags/npm-publish.yml?style=for-the-badge&logo=github
[gh-codeql]: https://img.shields.io/github/actions/workflow/status/phothinmg/mmtreeast-html-tags/codeql.yml?style=for-the-badge&logo=github&label=codeql
[npm-version]: https://img.shields.io/npm/v/mmtreeast-html-tags?registry_uri=https%3A%2F%2Fregistry.npmjs.org%2F&style=for-the-badge&logo=npm
[npm-size]: https://img.shields.io/bundlephobia/minzip/mmtreeast-html-tags?style=for-the-badge
[mmtreeast-html-attributes]: https://github.com/phothinmg/mmtreeast-html-attributes
