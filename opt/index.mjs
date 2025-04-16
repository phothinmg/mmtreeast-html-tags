#!/usr/bin/env node
import * as cheerio from "cheerio";
import $ from "dax-sh";
import fs from "node:fs/promises";
const file = "./src/tags.ts";
const file2 = "./src/types.ts";
const file3 = "./src/group.ts";

await (async function () {
  const mdn_url =
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements";
  const data = await $.request(mdn_url).text();
  const loader = cheerio.load(data);
  const main = loader("#content");
  const htmlData = {};
  const groups = [];
  main.find("section").each((index, el) => {
    const h2 = loader(el).find("h2");
    const tds = loader(el).find("tbody").find("tr").find("td");
    let key = h2.text().trim();

    let els = tds.find("a").text().trim();

    if (/<(\w+)>/g.test(els)) {
      els = els.match(/<(\w+)>/g);
      els = els.map((i) => i.replace(/</, "").replace(/>/, ""));
    }
    const values = {
      elements: els,
    };
    if (key !== "See also") {
      groups.push(key);
      key = key
        .split(" ")
        .map((i) => i.toLowerCase(i))
        .join("_");
      htmlData[key] = values;
    }
  });
  let elements = [];

  Object.keys(htmlData).forEach((i) => {
    htmlData[i].elements.forEach((j) => elements.push(j));
  });
  ["basefont", "bgsound", "command", "image", "keygen"].forEach((k) =>
    elements.push(k)
  );
  htmlData["void_elements"] = {
    elements: [
      "area",
      "base",
      "basefont",
      "bgsound",
      "br",
      "col",
      "command",
      "embed",
      "frame",
      "hr",
      "image",
      "img",
      "input",
      "keygen",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr",
    ],
  };
  htmlData["all_mdn_elements"] = {
    elements: elements,
  };

  const elobj = JSON.stringify(htmlData, null, 2);
  const now = new Date().toLocaleString("en-US", { timeZoneName: "short" });
  const txt = `
  // Do not edit, this is generated file.
  // fetch from https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements
  // last update at ${now}

  import type { HTMLTagNames } from "./types";
    
  export type HTMLTags = {
   ${Object.keys(htmlData).map((key) => `${key}:{elements: HTMLTagNames[];}`)}
   
  };


  export const htmlTags: HTMLTags = ${elobj};
      `;

  const txt2 = `
  // Do not edit, this is generated file.
  // fetch from https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements
  // last update at ${now}

  const alltags = ${JSON.stringify(elements, null, 2)} as const;

  export type HTMLTagNames = typeof alltags[number];
  `;
  const txt3 = `
  // Do not edit, this is generated file.
  // fetch from https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements
  // last update at ${now}

  export const tagGroup: string[] = ${JSON.stringify(groups, null, 2)}
  `;
  await fs.writeFile(`${file}`, txt);
  await fs.writeFile(`${file2}`, txt2);
  await fs.writeFile(`${file3}`, txt3);
})();

await $`npx biome format ${file} --write`;
await $`npx biome format ${file2} --write`;
await $`npx biome format ${file3} --write`;
