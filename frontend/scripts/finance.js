/* FINANCE */
function ledgerStatus(entry) {
  return entry.status === "pago"
    ? "pago"
    : entry.vencimento < todayISO()
      ? "atrasado"
      : entry.status === "atrasado"
        ? "atrasado"
        : "aberto";
}
function financeStatusLabel(status, kind) {
  return status === "pago"
    ? kind === "receita"
      ? "Recebido"
      : kind === "despesa"
        ? "Pago"
        : "Regularizado"
    : status === "atrasado"
      ? "Atrasado"
      : status === "aberto"
        ? "Em aberto"
        : status;
}
function financeStatusClass(status) {
  return status === "pago" ? "green" : status === "atrasado" ? "red" : "amber";
}
