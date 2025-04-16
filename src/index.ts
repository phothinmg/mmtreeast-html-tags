import { tagGroup } from "./group";
import { htmlTags } from "./tags";
import type { HTMLTagNames } from "./types";

const keys = Object.keys(htmlTags);
const getGroup = (tag: HTMLTagNames) => {
  const keyIndex = keys.findIndex((key) =>
    htmlTags[key].elements.includes(tag)
  );
  if (keyIndex === -1) return null;
  const group = tagGroup[keyIndex] ?? "";
  const key = keys[keyIndex];
  const index = keyIndex;
  return {
    group,
    key,
    index,
  };
};

const isDeprecated = (tag: HTMLTagNames) =>
  htmlTags.obsolete_and_deprecated_elements.elements.includes(tag);

const isVoidElement = (tag: HTMLTagNames) =>
  htmlTags.void_elements.elements.includes(tag);
const isMainRoot = (tag: HTMLTagNames) =>
  htmlTags.main_root.elements.includes(tag);
const isDocMetadata = (tag: HTMLTagNames) =>
  htmlTags.document_metadata.elements.includes(tag);

const getTagInfo = (tag: HTMLTagNames) => {
  return {
    group: getGroup(tag).group,
    deprecated: isDeprecated(tag),
    voidElement: isVoidElement(tag),
    mainRoot: isMainRoot(tag),
    documentMetadata: isDocMetadata(tag),
  };
};

export { type HTMLTagNames, getTagInfo, htmlTags };
