# mmtreeast-html-tags

![GitHub Actions Workflow Status][npm-build] ![GitHub Actions Workflow Status][gh-codeql] ![NPM Version][npm-version] ![npm bundle size][npm-size]




## Contents

- [Overview](#overview)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`htmlTags`](#htmltags)
    - [Main root](#htmltagsmain_rootelements)
    - [Document metadata](#htmltagsdocument_metadataelements)
    - [Sectioning root](#htmltagssectioning_rootelements)
    - [Content sectioning](#htmltagscontent_sectioningelements)
    - [Text content](#htmltagstext_contentelements)
    - [Inline text semantics](#htmltagsinline_text_semanticselements)
    - [Image and multimedia](#htmltagsimage_and_multimediaelements)
    - [Embedded content](#htmltagsembedded_contentelements)
    - [SVG and MathML](#htmltagssvg_and_mathmlelements)
    - [Scripting](#htmltagsscriptingelements)
    - [Demarcating edits](#htmltagsdemarcating_editselements)
    - [Table content](#htmltagstable_contentelements)
    - [Forms](#htmltagsformselements)
    - [Interactive elements](#htmltagsinteractive_elementselements)
    - [Web Components](#htmltagsweb_componentselements)
    - [Obsolete and deprecated elements](#htmltagsobsolete_and_deprecated_elementselements)
    - [Void Elements](#htmltagsvoid_elementselements)
    - [Get All Tags](#htmltagsall_mdn_elementselements)
  - [`getTagInfo`](#gettaginfo)
  - [`HTMLTagNames`](#htmltagnames)
- [License](#license)

## Overview

**_ESM Only_**

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

```js
import { htmlTags } from "mmtreeast-html-tags"; //tag names
import { getTagInfo } from "mmtreeast-html-tags"; // get some tag info
```

## API

- This package exports:

  - javascript object : `htmlTags`
  - function : `getTagInfo`
  - type : `HTMLTagNames`

- There is no default export.

### `htmlTags`

#### `htmlTags.main_root.elements`

See at [MDN HTML elements reference main_root](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements#main_root)

#### `htmlTags.document_metadata.elements`

See at [MDN HTML elements reference document_metadata](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements#document_metadata)

#### `htmlTags.sectioning_root.elements`

See at [MDN HTML elements reference sectioning_root](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements#sectioning_root)

#### `htmlTags.content_sectioning.elements`

See at [MDN HTML elements reference content_sectioning](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements#content_sectioning)

#### `htmlTags.text_content.elements`

See at [MDN HTML elements reference text_content](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements#text_content)

#### `htmlTags.inline_text_semantics.elements`

See at [MDN HTML elements reference inline_text_semantics](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements#inline_text_semantics)

#### `htmlTags.image_and_multimedia.elements`

See at [MDN HTML elements reference image_and_multimedia](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements#image_and_multimedia)

#### `htmlTags.embedded_content.elements`

See at [MDN HTML elements reference embedded_content](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements#embedded_content)

#### `htmlTags.svg_and_mathml.elements`

See at [MDN HTML elements reference svg_and_mathml](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements#svg_and_mathml)

#### `htmlTags.scripting.elements`

See at [MDN HTML elements reference scripting](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements#scripting)

#### `htmlTags.demarcating_edits.elements`

See at [MDN HTML elements reference demarcating_edits](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements#demarcating_edits)

#### `htmlTags.table_content.elements`

See at [MDN HTML elements reference table_content](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements#table_content)

#### `htmlTags.forms.elements`

See at [MDN HTML elements reference forms](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements#forms)

#### `htmlTags.interactive_elements.elements`

See at [MDN HTML elements reference interactive_elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements#interactive_elements)

#### `htmlTags.web_components.elements`

See at [MDN HTML elements reference web_components](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements#web_components)

#### `htmlTags.obsolete_and_deprecated_elements.elements`

See at [MDN HTML elements reference obsolete_and_deprecated_elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements#obsolete_and_deprecated_elements)

#### `htmlTags.void_elements.elements`

See at [MDN docs glossary void_element](https://developer.mozilla.org/en-US/docs/Glossary/Void_element)

#### `htmlTags.all_mdn_elements.elements`

> 👉 Get all html tags from above.

### `getTagInfo`

```js
const info = getTagInfo("meta");

// group: 'Document metadata',
// deprecated: false,
// voidElement: true,
// mainRoot: false,
// documentMetadata: true
```

### `HTMLTagNames`

Type definitions for HTML tags.

## License

[MIT][file-license] © [Pho Thin Mg][ptm]

<!-- Definitions -->

[file-license]: LICENSE

[ptm]: https://github.com/phothinmg

[npm-build]: https://img.shields.io/github/actions/workflow/status/phothinmg/mmtreeast-html-tags/npm-publish.yml?style=for-the-badge&logo=github

[gh-codeql]: https://img.shields.io/github/actions/workflow/status/phothinmg/mmtreeast-html-tags/codeql.yml?style=for-the-badge&logo=github&label=codeql

[npm-version]: https://img.shields.io/npm/v/mmtreeast-html-tags?registry_uri=https%3A%2F%2Fregistry.npmjs.org%2F&style=for-the-badge&logo=npm

[npm-size]: https://img.shields.io/bundlephobia/minzip/mmtreeast-html-tags?style=for-the-badge
