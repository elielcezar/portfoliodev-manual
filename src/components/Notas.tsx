"use client";

import { useEffect, useRef } from "react";

/* Fills the annotation layer with values read from the rendered page, so every
   measure shown is the real one, and places the comments in the outer margin
   on wide screens. Renders only two empty hosts; React never owns their children. */

const LAYOUT = 1440; /* width of the page layout, px */
const NEEDED = 190; /* margin each side must have for a pin and a readable balloon */

export function Notas() {
  const margemRef = useRef<HTMLDivElement>(null);
  const probeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const margem = margemRef.current;
    const probe = probeRef.current;
    if (!margem || !probe) return;

    const px = (value: string) => {
      probe.style.width = value;
      return Math.round(probe.getBoundingClientRect().width);
    };

    const hexOf = (token: string) => {
      probe.style.background = `var(${token})`;
      const [r, g, b] = (getComputedStyle(probe).backgroundColor.match(/\d+/g) ?? ["0", "0", "0"]).map(Number);
      probe.style.background = "";
      return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
    };

    const luminance = (hex: string) => {
      const c = (hex.replace("#", "").match(/../g) ?? []).map((h) => {
        const v = parseInt(h, 16) / 255;
        return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
      });
      return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
    };

    const contrast = (a: string, b: string) => {
      const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
      return (hi + 0.05) / (lo + 0.05);
    };

    const all = <T extends HTMLElement>(selector: string) =>
      Array.from(document.querySelectorAll<T>(selector));

    const fill = () => {
      all("[data-medir]").forEach((el) => {
        const host = el.closest<HTMLElement>("[data-host]");
        if (!host) return;
        const sel = el.dataset.medir;
        const target = sel ? host.querySelector<HTMLElement>(sel) : host;
        if (!target) return;
        const r = target.getBoundingClientRect();
        const w = Math.round(r.width);
        const h = Math.round(r.height);
        const axis = el.dataset.eixo;
        el.textContent = axis === "h" ? `H ${h}` : axis === "w" ? `W ${w}` : `${w} × ${h}`;
      });

      all("[data-pad]").forEach((el) => {
        const host = el.closest<HTMLElement>("[data-host]");
        if (!host) return;
        const cs = getComputedStyle(host);
        const side = el.dataset.pad === "bottom" ? cs.paddingBottom : cs.paddingTop;
        el.textContent = `${Math.round(parseFloat(side))} px`;
      });

      all("[data-label]").forEach((el) => {
        const [a, b] = (el.parentElement?.style.gridColumn ?? "").split("/").map((v) => parseInt(v, 10));
        el.textContent = `${el.dataset.label} · ${b - a}`;
      });

      all("[data-conta]").forEach((el) => {
        const n = el.parentElement?.querySelectorAll(el.dataset.conta ?? "").length ?? 0;
        el.textContent = `${el.dataset.titulo} · ${n} ${el.dataset.unidade}`;
      });

      all("[data-hex]").forEach((el) => {
        el.textContent = hexOf(el.dataset.hex ?? "").toUpperCase();
      });

      all("[data-token]").forEach((el) => {
        el.textContent = `${px(`var(${el.dataset.token})`)} px`;
      });

      all("[data-regua]").forEach((el) => {
        const grade = document.querySelector(".malha__cols");
        const cols = grade ? getComputedStyle(grade).gridTemplateColumns.split(" ").length : 12;
        el.textContent = `Desktop ${window.innerWidth} · ${cols} col · gutter ${px("var(--gutter)")} · margem ${px("var(--side)")}`;
      });

      all("[data-contraste]").forEach((el) => {
        const [fg, bg] = (el.dataset.contraste ?? "").split(",");
        const base = hexOf(bg);
        el.textContent = `${contrast(hexOf(fg), base).toFixed(1)} : 1 sobre ${base === "#ffffff" ? "papel" : base}`;
      });
    };

    const place = () => {
      margem.textContent = "";
      const width = document.documentElement.clientWidth;
      const room = (width - LAYOUT) / 2;
      if (room < NEEDED) return;
      const x = (width + LAYOUT) / 2 + 16;
      const w = Math.min(212, room - 16 - 36 - 20);
      all(".nota.comentario").forEach((src) => {
        if (margem.contains(src)) return;
        const pin = src.querySelector<HTMLElement>(".pin");
        if (!pin) return;
        const top = pin.getBoundingClientRect().top + window.scrollY;
        const copy = src.cloneNode(true) as HTMLElement;
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
    document.fonts?.ready.then(refresh);
    return () => {
      window.removeEventListener("resize", refresh);
      window.removeEventListener("load", refresh);
      margem.textContent = "";
    };
  }, []);

  return (
    <>
      <div className="margem" ref={margemRef} aria-hidden="true" />
      <div
        ref={probeRef}
        aria-hidden="true"
        style={{ position: "absolute", visibility: "hidden", pointerEvents: "none", height: 0 }}
      />
    </>
  );
}
