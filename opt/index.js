#!/usr/bin/env node
import * as cheerio from "cheerio";
import $ from "dax-sh";
import fs from "node:fs/promises";

const url =
  "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements";
const all = [];
const data = await $.request(url).text();
const loader = cheerio.load(data);
const main = loader("div.sidebar-body")
  .find("ol")
  .find("li.toggle")
  .find("details")
  .find("summary");
main.each((i, e) => {
  const mtxt = loader(e).text();
  if (mtxt === "Elements") {
    main
      .siblings("ol")
      .find("li")
      .each((ii, ee) => {
        all.push(loader(ee).text());
      });
  }
});
const meta = ["base", "link", "meta", "script", "style", "title"];
/**
 * @type {string[]}
 */
let allTags = all.slice(0, 127);
/**
 * @type {string[]}
 */
let flow = allTags.filter((i) => i.split("\n").length === 1);
flow = flow.map((i) => i.replace(/</g, "").replace(/>/g, ""));
flow = flow.filter((i) => i !== "html" && i !== "head" && !meta.includes(i));
//
let dep = allTags.filter(
  (i) => i.split("\n").length > 1 && i.split("\n")[1] === "Deprecated"
);
dep = dep.map((i) => i.split("\n")[0]);
dep = dep.map((i) => i.replace(/</g, "").replace(/>/g, ""));
//
let exp = allTags.filter(
  (i) => i.split("\n").length > 1 && i.split("\n")[1] === "Experimental"
);
exp = exp.map((i) => i.split("\n")[0]);
exp = exp.map((i) => i.replace(/</g, "").replace(/>/g, ""));
//

const mapObj = {};

mapObj["mainRoot"] = ["html"];
mapObj["sectionRoot"] = ["head", "body"];
mapObj["metadata"] = meta;
mapObj["flow"] = flow;
mapObj["deprecated"] = dep;
mapObj["experimental"] = exp;

const tx = `
export const htmlTags = ${JSON.stringify(mapObj, null, 2)}
`;

const ftype = flow.map((i) => `"${i}"`).join(" | ");
const txt = `
export type FlowType = ${ftype}
`;

const _void = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
];
const txv = `
export const voidTags = ${JSON.stringify(_void, null, 2)}
`;

//
await fs.writeFile("src/index.ts", tx);
await fs.writeFile("src/type.ts", txt);
await fs.writeFile("src/void.ts", txv);
//
await $`npx biome format src/index.ts --write`;
await $`npx biome format src/type.ts --write`;
await $`npx biome format src/void.ts --write`;
