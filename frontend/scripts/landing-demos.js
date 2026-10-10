/* LANDING DEMOS */

(() => {
  /* ==================================================
UTILITÁRIOS DO APP — JAVASCRIPT
================================================== */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = () =>
    !!window.SocialMEIMotion?.reduced || matchMedia("(prefers-reduced-motion: reduce)").matches;
  const configs = [];
  const register = (selector, interval, step, startDelay = 1800) => {
    const element = $(selector);
    if (!element) {
      return;
    }
    configs.push({
      el: element,
      interval,
      step,
      startDelay,
      timer: 0,
      visible: false,
      pauseUntil: 0,
      index: -1,
      remaining: selector === "#smAutomation" ? 4 : 3,
      manual: false,
    });
  };
  const clear = (s) => {
    if (s.timer) {
      clearTimeout(s.timer);
      s.timer = 0;
    }
  };
  const canRun = (s) =>
    s.visible &&
    !s.manual &&
    s.remaining > 0 &&
    !document.hidden &&
    !reduce() &&
    document.body.classList.contains("experience-public") &&
    document.querySelector('[data-xp-screen="landing"].is-active');
  const arm = (s, delay = s.interval) => {
    clear(s);
    if (!canRun(s)) {
      return;
    }
    const wait = Math.max(delay, s.pauseUntil - Date.now() + 40, 120);
    s.timer = setTimeout(() => {
      s.timer = 0;
      if (!canRun(s)) {
        return;
      }
      s.remaining--;
      try {
        s.step(s);
      } catch (_) {
        /* Falhas decorativas não devem bloquear a página. */
      }
      arm(s);
    }, wait);
  };
  const focusCycle = (nodes, s) => {
    if (!nodes.length) {
      return;
    }
    s.index = (s.index + 1) % nodes.length;
    nodes.forEach((n, i) => n.classList.toggle("landing-live-focus", i === s.index));
  };
  const replayTimers = new WeakMap();
  const replay = (element, cls = "landing-live-replay", milliseconds = 1050) => {
    if (!element || reduce()) {
      return;
    }
    clearTimeout(replayTimers.get(element));
    element.classList.remove(cls);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        element.classList.add(cls);
        replayTimers.set(
          element,
          setTimeout(() => element.classList.remove(cls), milliseconds),
        );
      }),
    );
  };
  register(
    "#xpHero",
    4600,
    (s) => {
      const cards = $$(".landing-showcase-card.is-visible", s.el);
      focusCycle(cards, s);
      const chips = $$(".landing-integration-chip", s.el);
      chips.forEach((c, i) =>
        c.classList.toggle("landing-live-focus", i === s.index % Math.max(1, chips.length)),
      );
    },
    2800,
  );
  register(
    "#xpProduct",
    5000,
    (s) => {
      const journey = $$(".landing-journey>.landing-surface", s.el);
      const gallery = $$(".landing-gallery-piece", s.el);
      if (!journey.length && !gallery.length) {
        return;
      }
      s.index = (s.index + 1) % Math.max(journey.length, gallery.length);
      journey.forEach((n, i) =>
        n.classList.toggle("landing-live-focus", i === s.index % journey.length),
      );
      gallery.forEach((n, i) =>
        n.classList.toggle("landing-live-focus", i === s.index % gallery.length),
      );
      // O visitante controla a rolagem da galeria; o destaque visual não desloca a página.
    },
    3000,
  );
  register(
    "#xpChannels",
    6200,
    (s) => {
      const buttons = $$("[data-demo-channel]", s.el);
      if (buttons.length < 2) {
        return;
      }
      const active = Math.max(
        0,
        buttons.findIndex((b) => b.getAttribute("aria-pressed") === "true"),
      );
      const next = buttons[(active + 1) % buttons.length];
      next.click();
      replay($(".landing-inbox", s.el), "landing-live-replay", 1150);
    },
    3600,
  );
  register(
    "#smTogether",
    3400,
    (s) => {
      const modules = $$(".landing-module", s.el);
      focusCycle(modules, s);
    },
    2400,
  );
  register(
    "#smAutomation",
    1550,
    (s) => {
      const nodes = $$(".landing-rule-grid>div", s.el);
      const result = $(".landing-automation-result", s.el);
      if (!nodes.length) {
        return;
      }
      const total = nodes.length + 1;
      s.index = (s.index + 1) % total;
      nodes.forEach((n, i) => {
        n.classList.toggle("landing-live-step", i === s.index);
        n.classList.toggle("landing-live-past", i < s.index);
      });
      result?.classList.toggle("landing-live-step", s.index === nodes.length);
    },
    2550,
  );
  register(
    "#smAI",
    5600,
    (s) => {
      const buttons = $$("[data-demo-ai]", s.el);
      if (buttons.length < 2) {
        return;
      }
      const active = Math.max(
        0,
        buttons.findIndex((b) => b.getAttribute("aria-pressed") === "true"),
      );
      const next = buttons[(active + 1) % buttons.length];
      next.click();
      replay($("#smAIResult", s.el), "landing-live-replay", 1100);
    },
    3200,
  );
  register(
    "#xpSocialProof",
    3400,
    (s) => {
      const cards = $$(".landing-proof-card", s.el);
      const nums = $$(".landing-proof-numbers>div", s.el);
      if (!cards.length) {
        return;
      }
      s.index = (s.index + 1) % cards.length;
      cards.forEach((n, i) => n.classList.toggle("landing-live-focus", i === s.index));
      nums.forEach((n, i) =>
        n.classList.toggle("landing-live-focus", i === s.index % Math.max(1, nums.length)),
      );
    },
    2400,
  );
  register(
    "#xpSetup",
    4800,
    (s) => {
      const buttons = $$("[data-demo-step]", s.el);
      if (buttons.length < 2) {
        return;
      }
      const active = Math.max(
        0,
        buttons.findIndex((b) => b.getAttribute("aria-selected") === "true"),
      );
      const next = buttons[(active + 1) % buttons.length];
      next.click();
      replay($("#smSetupPanel", s.el), "landing-live-replay", 1050);
    },
    3300,
  );
  const byTarget = new Map(configs.map((s) => [s.el, s]));
  const observer =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const s = byTarget.get(entry.target);
              if (!s) {
                return;
              }
              s.visible = entry.isIntersecting && entry.intersectionRatio > 0.14;
              s.el.classList.toggle("landing-live-active", s.visible && !reduce());
              if (s.visible) {
                arm(s, s.startDelay);
              } else {
                clear(s);
              }
            });
          },
          {
            threshold: [0, 0.14, 0.3, 0.55],
            rootMargin: "-8% 0px -8% 0px",
          },
        )
      : null;
  configs.forEach((s) => observer?.observe(s.el));

  /* A interação manual interrompe a sequência automática para preservar o controle do visitante. */
  const pauseFromEvent = (event) => {
    const s = configs.find((x) => x.el.contains(event.target));
    if (!s) {
      return;
    }
    if (event.isTrusted) {
      s.manual = true;
      clear(s);
      s.el.classList.remove("landing-live-active");
    }
  };
  ["pointerdown", "keydown", "focusin"].forEach((type) =>
    document.addEventListener(type, pauseFromEvent, true),
  );
  document.addEventListener("visibilitychange", () =>
    configs.forEach((s) => (document.hidden ? clear(s) : s.visible && arm(s, 700))),
  );
  document.addEventListener("socialmei-motion-change", () =>
    configs.forEach((s) => {
      s.el.classList.toggle("landing-live-active", s.visible && !reduce());
      if (reduce()) {
        clear(s);
      } else if (s.visible) {
        arm(s, 700);
      }
    }),
  );
  const screenObserver = new MutationObserver(() =>
    configs.forEach((s) => (canRun(s) ? arm(s) : clear(s))),
  );
  document.querySelectorAll("[data-xp-screen]").forEach((element) =>
    screenObserver.observe(element, {
      attributes: true,
      attributeFilter: ["class"],
    }),
  );
  window.addEventListener("pagehide", () => {
    configs.forEach(clear);
    observer?.disconnect();
    screenObserver.disconnect();
  });
})();
