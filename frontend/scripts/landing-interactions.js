/* LANDING INTERACTIONS */

(() => {
  const motion = window.SocialMEIMotion;
  const enter = (element, delay = 0) =>
    motion.animate(
      element,
      [
        {
          opacity: 0.45,
          transform: "translate3d(0,7px,0)",
        },
        {
          opacity: 1,
          transform: "none",
        },
      ],
      340,
      "ease-enter",
      delay,
    );
  document.addEventListener("click", (event) => {
    const control = event.target.closest(
      "[data-demo-channel],[data-demo-ai],[data-demo-step],#smSetupNext",
    );
    if (!control || !event.isTrusted) {
      return;
    }
    requestAnimationFrame(() => {
      const target = control.matches("[data-demo-channel]")
        ? document.querySelector("#xpChannels .landing-inbox")
        : control.matches("[data-demo-ai]")
          ? document.querySelector("#smAIResult")
          : document.querySelector("#smSetupPanel");
      if (!target) {
        return;
      }
      const children = target.querySelectorAll(
        ".landing-bubble,.landing-sale-chip,.landing-setup-fields>div",
      );
      if (children.length) {
        [...children].slice(0, 5).forEach((element, i) => enter(element, i * 45));
      } else {
        enter(target);
      }
    });
  });
  document.addEventListener(
    "toggle",
    (event) => {
      const detail = event.target;
      if (detail.matches?.(".landing-faq-list details") && detail.open) {
        enter(detail.querySelector("p"));
      }
    },
    true,
  );
})();

(() => {
  const motion = window.SocialMEIMotion;
  const sections = ["#xpChannels", "#smAutomation", "#smAI", "#xpSetup"]
    .map((s) => document.querySelector(s))
    .filter(Boolean);
  const seen = new WeakSet();
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting || seen.has(target) || motion.reduced) {
          return;
        }
        seen.add(target);
        observer.unobserve(target);
        const items = target.querySelectorAll(
          ".landing-stage-bar,.landing-context-strip,.landing-ai-seal,.landing-review-stamp,.landing-node-icon,.landing-workspace-mark,.landing-workspace-preview",
        );
        [...items].forEach((element, i) =>
          motion.animate(
            element,
            [
              {
                opacity: 0.2,
                transform: "translate3d(0,10px,0) scale(.97)",
              },
              {
                opacity: 1,
                transform: "none",
              },
            ],
            560,
            "ease-enter",
            Math.min(i, 4) * 75,
          ),
        );
      }),
    {
      threshold: 0.15,
    },
  );
  sections.forEach((s) => observer.observe(s));
  const panel = document.getElementById("smSetupPanel");
  const updatePreview = () => {
    const step =
      document.querySelector('[data-demo-step][aria-selected="true"]')?.dataset.demoStep || "1";
    const title = document.getElementById("smPreviewBusiness");
    const desc = document.getElementById("smPreviewDescription");
    const ready = document.getElementById("smPreviewReady");
    if (!title) {
      return;
    }
    const fields = [...document.querySelectorAll("#smSetupFields b")].map(
      (element) => element.textContent,
    );
    title.textContent =
      step === "2"
        ? fields[0] || "Seu negócio"
        : step === "3"
          ? "Seu espaço está tomando forma"
          : "Beatriz Souza";
    desc.textContent =
      step === "1"
        ? "Tudo começa por você."
        : step === "2"
          ? "Seu negócio, no centro."
          : "Uma rotina que acompanha você.";
    ready.textContent =
      step === "1"
        ? "Perfil pessoal"
        : step === "2"
          ? "Identidade do negócio"
          : "Prioridades definidas";
    document
      .querySelectorAll(".landing-preview-lines i")
      .forEach(
        (element, i) =>
          (element.style.background =
            i < Number(step) ? "var(--story-accent)" : "var(--story-soft)"),
      );
    motion.animate(
      document.querySelector(".landing-workspace-preview"),
      [
        {
          opacity: 0.5,
          transform: "translateY(5px)",
        },
        {
          opacity: 1,
          transform: "none",
        },
      ],
      280,
      "ease-enter",
    );
  };
  if (panel) {
    new MutationObserver(updatePreview).observe(document.getElementById("smSetupFields"), {
      childList: true,
    });
  }
  updatePreview();
  window.addEventListener("pagehide", () => observer.disconnect(), {
    once: true,
  });
})();
