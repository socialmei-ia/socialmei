/* LANDING GALLERY */
(() => {
  const reduce = () =>
    !!window.SocialMEIMotion?.reduced || matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hero = document.querySelector("#xpHero .landing-hero-preview-live");
  const figures = [
    ...document.querySelectorAll("#xpProduct .landing-gallery-piece[data-demo-scene]"),
  ];
  if (!hero && !figures.length) {
    return;
  }
  const heroItems = hero ? [...hero.querySelectorAll("[data-hero-item]")] : [];
  const heroThreads = hero ? [...hero.querySelectorAll("[data-hero-thread]")] : [];
  const heroCards = hero ? [...hero.querySelectorAll("[data-hero-card]")] : [];
  const heroName = hero?.querySelector(".landing-hero-preview-scene-name");
  const heroChannel = hero?.querySelector(".landing-hero-preview-scene-channel");
  const heroScenes = [
    ["Ana Paula", "WhatsApp"],
    ["Juliana Lima", "Instagram"],
    ["Carla Menezes", "WhatsApp"],
  ];
  let heroIndex = 0;
  let figIndex = 0;
  let heroTimer = 0;
  let figTimer = 0;
  let heroRemaining = 2;
  let figRemaining = 2;
  let heroManual = false;
  let figManual = false;
  const clear = () => {
    clearTimeout(heroTimer);
    clearTimeout(figTimer);
    heroTimer = 0;
    figTimer = 0;
  };
  const visible = (element) => {
    if (
      !element ||
      !document.body.classList.contains("experience-public") ||
      !document.querySelector('[data-xp-screen="landing"].is-active')
    ) {
      return false;
    }
    const r = element.getBoundingClientRect();
    return r.top < innerHeight * 0.82 && r.bottom > innerHeight * 0.18;
  };
  const syncHero = () => {
    if (!hero) {
      return;
    }
    hero.dataset.heroScene = String(heroIndex);
    heroItems.forEach((element, i) => {
      element.classList.toggle("is-active", i === heroIndex);
      element.setAttribute("aria-pressed", String(i === heroIndex));
    });
    heroThreads.forEach((element, i) => element.classList.toggle("is-active", i === heroIndex));
    heroCards.forEach((element, i) => element.classList.toggle("is-active", i === heroIndex));
    if (heroName) {
      heroName.textContent = heroScenes[heroIndex][0];
    }
    if (heroChannel) {
      heroChannel.textContent = heroScenes[heroIndex][1];
    }
  };
  const tickHero = () => {
    clearTimeout(heroTimer);
    heroTimer = 0;
    if (
      reduce() ||
      document.hidden ||
      heroManual ||
      heroRemaining <= 0 ||
      !visible(document.getElementById("xpHero"))
    ) {
      return;
    }
    heroRemaining--;
    heroIndex = (heroIndex + 1) % heroScenes.length;
    syncHero();
    if (heroRemaining > 0) {
      heroTimer = setTimeout(tickHero, 4300);
    }
  };
  const syncFigures = () =>
    figures.forEach((fig, i) => {
      fig.dataset.demoScene = String((figIndex + i) % 3);
    });
  const tickFigures = () => {
    clearTimeout(figTimer);
    figTimer = 0;
    if (
      reduce() ||
      document.hidden ||
      figManual ||
      figRemaining <= 0 ||
      !visible(document.getElementById("xpProduct"))
    ) {
      return;
    }
    figRemaining--;
    figIndex = (figIndex + 1) % 3;
    syncFigures();
    if (figRemaining > 0) {
      figTimer = setTimeout(tickFigures, 3400);
    }
  };
  syncHero();
  syncFigures();
  const boot = () => {
    clear();
    if (!reduce()) {
      if (heroRemaining > 0 && !heroManual && visible(document.getElementById("xpHero"))) {
        heroTimer = setTimeout(tickHero, 2600);
      }
      if (figRemaining > 0 && !figManual && visible(document.getElementById("xpProduct"))) {
        figTimer = setTimeout(tickFigures, 2200);
      }
    }
  };
  boot();
  document.addEventListener("visibilitychange", boot);
  document.addEventListener("socialmei-motion-change", boot);
  ["scroll", "resize"].forEach((evt) =>
    window.addEventListener(
      evt,
      () => {
        if (!heroTimer && !figTimer) {
          boot();
        }
      },
      {
        passive: true,
      },
    ),
  );
  heroItems.forEach((button, idx) => {
    const activate = () => {
      heroManual = true;
      heroIndex = idx;
      syncHero();
      clearTimeout(heroTimer);
      heroTimer = 0;
    };
    ["pointerenter", "focus", "click"].forEach((type) => button.addEventListener(type, activate));
  });
  figures.forEach((fig, idx) =>
    fig.addEventListener("pointerenter", () => {
      figManual = true;
      clearTimeout(figTimer);
      figTimer = 0;
    }),
  );
  window.addEventListener("pagehide", clear, {
    once: true,
  });
})();
