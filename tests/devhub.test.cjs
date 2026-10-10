const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { test } = require("node:test");

test("DevHub export embeds resources while preserving dollar signs and closing-tag literals", () => {
  const source = fs.readFileSync(path.join(__dirname, "../tools/devhub.js"), "utf8");
  const start = source.indexOf("function buildStandaloneDevHub(");
  const end = source.indexOf('$("downloadHtml").addEventListener', start);
  const context = vm.createContext({});
  vm.runInContext(source.slice(start, end), context);
  const template = '<link rel="stylesheet" href="devhub.css"><script src="devhub.js"></script>';
  const exported = context.buildStandaloneDevHub(
    template,
    '.example { content: "$&"; }',
    'const text = "$& </script>";',
  );
  assert(exported.includes('content: "$&"'));
  assert(exported.includes('const text = "$& <\\/script>"'));
  assert(!exported.includes('src="devhub.js"'));
  assert(!exported.includes('href="devhub.css"'));
  assert.equal([...exported.matchAll(/<\/script>/g)].length, 1);
});
