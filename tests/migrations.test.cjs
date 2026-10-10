const assert = require("node:assert/strict");
const { test } = require("node:test");
const { existsSync, readFileSync, readdirSync } = require("node:fs");
const { spawnSync } = require("node:child_process");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const migrationsDir = path.join(root, "database", "migrations");

test("database migrations are sequentially named and contain no obvious secrets", () => {
  assert.equal(existsSync(migrationsDir), true);

  const files = readdirSync(migrationsDir)
    .filter((name) => name.endsWith(".sql"))
    .sort();

  assert.ok(files.length >= 1);

  files.forEach((file, index) => {
    assert.match(file, /^\d{3}_[a-z0-9_]+\.sql$/);
    const expected = String(index + 1).padStart(3, "0");
    assert.equal(file.slice(0, 3), expected);

    const sql = readFileSync(path.join(migrationsDir, file), "utf8");
    assert.doesNotMatch(sql, /password\s*=|api[_-]?key\s*=|authorization\s*:/i);
  });
});

test("local migration runner parses with Node", () => {
  const script = path.join(root, "tools", "db-migrate.mjs");
  const result = spawnSync(process.execPath, ["--check", script], {
    encoding: "utf8",
  });

  assert.equal(result.status, 0, result.stderr);
});
