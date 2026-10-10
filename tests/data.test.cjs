const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { test } = require("node:test");

function dataModule() {
  const context = vm.createContext({
    document: { addEventListener() {}, getElementById: () => ({ addEventListener() {} }) },
    SOCIALMEI_APP_SCHEMA_VERSION: 1,
    structuredClone,
    DEFAULT_APP_DATA: { prefs: {} },
  });
  vm.runInContext(
    fs.readFileSync(path.join(__dirname, "../frontend/scripts/data-and-backup.js"), "utf8"),
    context,
  );
  return context;
}

function businessData() {
  return {
    financeiro: [
      {
        id: 1,
        descricao: "Pix",
        tipo: "receita",
        valor: 100,
        vencimento: "2026-10-10",
        status: "pago",
      },
    ],
    vendas: [{ id: 1, cliente: "Maria", data: "2026-10-10", valor: 100, status: "Pago" }],
    clientes: [{ id: 1, nome: "Maria", tags: ["MEI"] }],
    produtos: [
      { id: 1, nome: "Camisa", tipo: "Produto", preco: 50, custo: 10, estoque: 2, minimo: 1 },
    ],
    prefs: {},
  };
}

test("business validation rejects duplicate IDs, impossible dates and negative amounts", () => {
  const module = dataModule();
  assert(module.validAppDataShape(businessData()));
  const duplicated = businessData();
  duplicated.clientes.push({ ...duplicated.clientes[0] });
  assert.equal(module.validAppDataShape(duplicated), false);
  const invalidDate = businessData();
  invalidDate.vendas[0].data = "2026-02-30";
  assert.equal(module.validAppDataShape(invalidDate), false);
  const negative = businessData();
  negative.financeiro[0].valor = -1;
  assert.equal(module.validAppDataShape(negative), false);
});

test("backup import preserves business data and ignores unrelated localStorage keys", () => {
  const module = dataModule();
  const payload = {
    product: "SocialMEI.IA",
    schemaVersion: 1,
    storage: { "socialmei-app-data-v2": JSON.stringify(businessData()), unrelated: "secret" },
  };
  const imported = module.parseBackupForImport(JSON.stringify(payload));
  assert.equal(imported.app.clientes[0].nome, "Maria");
  assert.equal(imported.app.schemaVersion, 1);
  assert.equal(imported.entries.unrelated, undefined);
  assert.throws(() => module.parseBackupForImport("{"));
  assert.throws(() =>
    module.parseBackupForImport(JSON.stringify({ ...payload, schemaVersion: 99 })),
  );
  assert.throws(() => module.parseBackupForImport(JSON.stringify({ ...payload, storage: {} })));
});

test("cloning a draft does not mutate the persisted record", () => {
  const module = dataModule();
  const original = businessData();
  const copy = module.cloneData(original);
  copy.clientes[0].nome = "Alterado";
  assert.equal(original.clientes[0].nome, "Maria");
});
