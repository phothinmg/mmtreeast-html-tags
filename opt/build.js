#!/usr/bin/env node
import { compile, mergeFiles } from "lwe8-build";
import fs from "node:fs/promises";
import { existsSync } from "node:fs";

const out_dir = "./dist";
const tempDir = await fs.mkdtemp("__temp");
const fileName = `${tempDir}/index.ts`;

if (!existsSync(out_dir)) {
  await fs.mkdir(out_dir);
}

/** @type {import("lwe8-build").MergeFilesOptions} */
const mergeOpt = {
  indexFile: {
    path: "./src/index.ts",
    lines: 3,
  },
  otherFiles: [
    {
      path: "./src/types.ts",
    },
    {
      path: "./src/group.ts",
    },
    {
      path: "./src/tags.ts",
      lines: 5,
    },
  ],
};

const merg = await mergeFiles(mergeOpt);

setTimeout(() => {}, 2000);

await fs.writeFile(fileName, merg);
setTimeout(() => {}, 2000);
await compile({
  fileNames: [fileName],
  format: "esm",
  outDir: out_dir,
  declaration: true,
  sourceMap: true,
});
setTimeout(() => {}, 2000);
await compile({
  fileNames: [fileName],
  format: "cjs",
  outDir: out_dir,
  sourceMap: true,
});

setTimeout(() => {}, 2000);

await fs.rm(tempDir, { recursive: true, force: true });
