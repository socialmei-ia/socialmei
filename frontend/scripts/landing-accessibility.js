/* LANDING ACCESSIBILITY */
/* Navegação pública e atalhos de teclado das prévias. */
(() => {
  const landing = document.querySelector(".landing-page");
  if (!landing) {
    return;
  }
  const button = landing.querySelector("#xpNavMenu");
  const nav = landing.querySelector("#xpLandingNav");
  const mobile = matchMedia("(max-width:1000px)");
  const close = (returnFocus = false) => {
    nav.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Abrir menu do site");
    nav.inert = mobile.matches;
    if (returnFocus) {
      button.focus();
    }
  };
  const sync = () => {
    if (!mobile.matches) {
      nav.inert = false;
      nav.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
    } else {
      close();
    }
  };
  sync();
  mobile.addEventListener("change", sync);
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") !== "true";
    if (!open) {
      return close();
    }
    nav.inert = false;
    nav.classList.add("is-open");
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-label", "Fechar menu do site");
    nav.querySelector("a")?.focus();
  });
  document.addEventListener("click", (event) => {
    if (mobile.matches && !event.target.closest(".landing-navigation")) {
      close();
    }
  });
  landing.addEventListener("click", (event) => {
    if (event.target.closest("[data-scroll-to]")) {
      close();
    }
    const placeholder = event.target.closest("[data-placeholder-link]");
    if (placeholder) {
      event.preventDefault();
      landing.querySelector("#smFooterLinkStatus").textContent =
        "Este link ainda não foi informado. Conteúdo institucional a adicionar.";
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      event.preventDefault();
      close(true);
    }
  });
  const year = landing.querySelector("#smFooterYear");
  year.textContent = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    timeZone: "America/Fortaleza",
  }).format(new Date());
  const segments = landing.querySelector(".landing-segment-grid");
  segments.addEventListener("keydown", (event) => {
    if (
      !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key) ||
      !matchMedia("(max-width:720px)").matches
    ) {
      return;
    }
    event.preventDefault();
    if (event.key === "Home" || event.key === "End") {
      segments.scrollTo({
        left: event.key === "Home" ? 0 : segments.scrollWidth,
        behavior: "auto",
      });
    } else {
      segments.scrollBy({
        left: (event.key === "ArrowRight" ? 1 : -1) * (segments.firstElementChild.clientWidth + 16),
        behavior: "auto",
      });
    }
  });
  // A interface do navegador acompanha o tema público selecionado.
  const syncMeta = () => {
    const dark = document.documentElement.dataset.publicTheme === "dark";
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.content = dark ? "#081321" : "#fbfbf9";
    });
  };
  syncMeta();
  new MutationObserver(syncMeta).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-public-theme"],
  });
})();
