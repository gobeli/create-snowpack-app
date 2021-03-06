// const fs = require("fs");
// const path = require("path");
// const cwd = process.cwd();

const scripts = {
  "mount:public": "mount public --to .",
  "mount:web_modules": "mount web_modules",
  "mount:src": "mount src --to _dist_",
  "plugin:svelte": "@snowpack/plugin-svelte",
  "build:js": "cat",
};

module.exports = {
  scripts,
  knownEntrypoints: ["svelte/internal"],
  installOptions: {},
  devOptions: {},
};
