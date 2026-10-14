/* Fills the annotation layer with values read from the rendered page,
   so every measure shown is the real one. */
(() => {
  const root = document.documentElement;
  const probe = document.createElement("div");
  probe.setAttribute("aria-hidden", "true");
  probe.style.cssText = "position:absolute;visibility:hidden;pointer-events:none;height:0";
  document.body.append(probe);

  const px = (value) => {
    probe.style.width = value;
    return Math.round(probe.getBoundingClientRect().width);
  };

  const hexOf = (token) => {
    probe.style.background = `var(${token})`;
    const [r, g, b] = getComputedStyle(probe).backgroundColor.match(/\d+/g).map(Number);
    probe.style.background = "";
    return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
  };

  const luminance = (hex) => {
    const c = hex.replace("#", "").match(/../g).map((h) => {
      const v = parseInt(h, 16) / 255;
      return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  };

  const contrast = (a, b) => {
    const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
    return (hi + 0.05) / (lo + 0.05);
  };

  const fill = () => {
    document.querySelectorAll("[data-medir]").forEach((el) => {
      const host = el.closest("[data-host]");
      const sel = el.dataset.medir;
      const target = sel ? host.querySelector(sel) : host;
      if (!target) return;
      const r = target.getBoundingClientRect();
      const w = Math.round(r.width);
      const h = Math.round(r.height);
      const axis = el.dataset.eixo;
      el.textContent = axis === "h" ? `H ${h}` : axis === "w" ? `W ${w}` : `${w} × ${h}`;
    });

    document.querySelectorAll("[data-pad]").forEach((el) => {
      const host = el.closest("[data-host]");
      const cs = getComputedStyle(host);
      const side = el.dataset.pad === "bottom" ? cs.paddingBottom : cs.paddingTop;
      el.textContent = `${Math.round(parseFloat(side))} px`;
    });

    document.querySelectorAll("[data-label]").forEach((el) => {
      const [a, b] = el.parentElement.style.gridColumn.split("/").map((v) => parseInt(v, 10));
      el.textContent = `${el.dataset.label} · ${b - a}`;
    });

    document.querySelectorAll("[data-conta]").forEach((el) => {
      const n = el.parentElement.querySelectorAll(el.dataset.conta).length;
      el.textContent = `${el.dataset.titulo} · ${n} ${el.dataset.unidade}`;
    });

    document.querySelectorAll("[data-hex]").forEach((el) => {
      el.textContent = hexOf(el.dataset.hex).toUpperCase();
    });

    document.querySelectorAll("[data-token]").forEach((el) => {
      el.textContent = `${px(`var(${el.dataset.token})`)} px`;
    });

    document.querySelectorAll("[data-largura]").forEach((el) => {
      el.style.width = `${px(`var(${el.dataset.largura})`)}px`;
    });

    document.querySelectorAll("[data-regua]").forEach((el) => {
      const cols = getComputedStyle(document.querySelector(".malha__cols")).gridTemplateColumns.split(" ").length;
      el.textContent = `Desktop ${window.innerWidth} · ${cols} col · gutter ${px("var(--gutter)")} · margem ${px("var(--side)")}`;
    });

    document.querySelectorAll("[data-contraste]").forEach((el) => {
      const [fg, bg] = el.dataset.contraste.split(",");
      const base = hexOf(bg);
      el.textContent = `${contrast(hexOf(fg), base).toFixed(1)} : 1 sobre ${base === "#ffffff" ? "papel" : base}`;
    });
  };

  /* Comments sit outside the 1440px layout, in the margin, and only when
     the margin is wide enough to hold a pin and a readable balloon. */
  const LAYOUT = 1440;
  const NEEDED = 190;
  const margem = document.createElement("div");
  margem.className = "margem";
  margem.setAttribute("aria-hidden", "true");
  document.body.append(margem);

  const place = () => {
    margem.textContent = "";
    const width = document.documentElement.clientWidth;
    const room = (width - LAYOUT) / 2;
    if (room < NEEDED) return;
    const x = (width + LAYOUT) / 2 + 16;
    const w = Math.min(212, room - 16 - 36 - 20);
    document.querySelectorAll(".nota.comentario").forEach((src) => {
      const pin = src.querySelector(".pin");
      const top = pin.getBoundingClientRect().top + window.scrollY;
      const copy = src.cloneNode(true);
      copy.removeAttribute("style");
      copy.style.setProperty("--x", `${x}px`);
      copy.style.setProperty("--y", `${Math.round(top)}px`);
      copy.style.setProperty("--w", `${Math.round(w)}px`);
      const wrap = document.createElement("div");
      wrap.className = src.closest(".contato") ? "margem--azul" : "";
      wrap.append(copy);
      margem.append(wrap);
    });
  };

  const refresh = () => {
    fill();
    place();
  };

  refresh();
  window.addEventListener("resize", refresh, { passive: true });
  window.addEventListener("load", refresh);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
  root.classList.add("notas");
})();
