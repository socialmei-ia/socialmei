/* PRODUCTS */
function toggleProductInventory() {
  const service = $("f_tipo")?.value === "Serviço";
  for (const id of ["f_estoque", "f_minimo"]) {
    const element = $(id);
    if (element) {
      element.closest(".form-group").hidden = service;
      element.disabled = service;
    }
  }
}
