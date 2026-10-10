const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { test } = require("node:test");

function initializeTheme(items = {}, dark = false, failStorage = false) {
  const values = new Map(Object.entries(items));
  const listeners = {};
  const root = { style: { setProperty() {} }, dataset: {} };
  const scheme = {
    matches: dark,
    addEventListener: (_, callback) => (listeners.scheme = callback),
  };
  const context = vm.createContext({
    document: { documentElement: root },
    window: { addEventListener() {}, dispatchEvent() {} },
    matchMedia: () => scheme,
    localStorage: {
      getItem: (key) => values.get(key) || null,
      setItem: (key, value) => {
        if (failStorage) throw Object.assign(new Error("quota"), { name: "QuotaExceededError" });
        values.set(key, value);
      },
    },
    setTimeout() {},
    console: { warn() {} },
    CustomEvent: class {},
    crypto: { randomUUID: () => "test-id" },
  });
  vm.runInContext(
    fs.readFileSync(path.join(__dirname, "../frontend/scripts/storage-and-themes.js"), "utf8"),
    context,
  );
  return { themes: context.window.SocialMEIThemes, root, scheme, listeners, values };
}

test("automatic theme follows system changes and explicit preferences survive reload", () => {
  const state = initializeTheme();
  assert.equal(state.themes.active, "auto");
  assert.equal(state.root.dataset.theme, "light");
  state.scheme.matches = true;
  state.listeners.scheme();
  assert.equal(state.root.dataset.theme, "dark");
  state.themes.select("light");
  assert.equal(initializeTheme(Object.fromEntries(state.values)).root.dataset.theme, "light");
});

test("custom themes persist and invalid colors are rejected", () => {
  const state = initializeTheme();
  const saved = state.themes.save({ ...state.themes.official.dark, name: "Tema QA" });
  state.themes.select(saved.id);
  assert.equal(initializeTheme(Object.fromEntries(state.values)).themes.active, saved.id);
  assert.throws(() =>
    state.themes.validate({ ...state.themes.official.dark, name: "QA", primary: "invalid" }),
  );
});

test("official palette contrast checks pass for light and dark", () => {
  const { themes } = initializeTheme();
  for (const name of ["light", "dark"])
    assert(themes.checks(themes.official[name]).every((check) => check.pass));
});

test("storage failure is reported instead of claiming a preference was saved", () => {
  const state = initializeTheme({}, false, true);
  assert.equal(state.themes.select("dark"), false);
  assert.equal(state.themes.storageError, true);
});
