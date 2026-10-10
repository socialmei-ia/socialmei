/* CUSTOMERS */
async function openClient(client) {
  if (!client) {
    toast("Cliente não encontrado", "Cadastre o perfil na página Clientes.");
    return;
  }
  await closeModal("recordModal");
  drawerClientId = client.id;
  selectedClientTab = "resumo";
  $("clientModalTitle").textContent = client.nome;
  renderClientPanel();
  openModal("clientModal");
}
