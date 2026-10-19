"use client";

import { useEffect, useRef, useState } from "react";
import { Icone } from "./Icones";

const STORAGE_KEY = "manual-malha";

const LINKS = [
  { href: "#trajetoria", no: "02", rotulo: "Experiência" },
  { href: "#formacao", no: "03", rotulo: "Formação" },
  { href: "#projetos", no: "04", rotulo: "Projetos" },
  { href: "#ferramentas", no: "05", rotulo: "Ferramentas" },
  { href: "#contato", no: "06", rotulo: "Contato" },
];

export function Header() {
  const [stuck, setStuck] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [marcacoes, setMarcacoes] = useState(true);
  const [menu, setMenu] = useState(false);
  const hiddenNow = useRef(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const gavetaRef = useRef<HTMLDivElement>(null);

  const mostrar = () => {
    hiddenNow.current = false;
    setHidden(false);
  };

  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;
    let stuckNow = false;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - last;
        const nextStuck = y > 8;
        let nextHidden = hiddenNow.current;
        if (y <= 72) nextHidden = false;
        else if (delta > 6) nextHidden = true;
        else if (delta < -6) nextHidden = false;

        if (nextStuck !== stuckNow) {
          stuckNow = nextStuck;
          setStuck(nextStuck);
        }
        if (nextHidden !== hiddenNow.current) {
          hiddenNow.current = nextHidden;
          setHidden(nextHidden);
        }
        last = y;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "0") setMarcacoes(false);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("no-malha", !marcacoes);
  }, [marcacoes]);

  const alternar = () => {
    setMarcacoes((atual) => {
      try {
        localStorage.setItem(STORAGE_KEY, atual ? "0" : "1");
      } catch {}
      return !atual;
    });
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() !== "g" || event.metaKey || event.ctrlKey || event.altKey) return;
      const alvo = event.target as HTMLElement | null;
      if (alvo?.closest("input, textarea, [contenteditable]")) return;
      alternar();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const fecharMenu = (devolverFoco = true) => {
    setMenu(false);
    if (devolverFoco) burgerRef.current?.focus();
  };

  useEffect(() => {
    document.documentElement.classList.toggle("menu-aberto", menu);
    if (!menu) return;
    gavetaRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") fecharMenu();
    };
    const onResize = () => {
      if (window.innerWidth > 900) setMenu(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menu]);

  return (
    <>
      <header
        className={`top${stuck ? " is-stuck" : ""}${hidden ? " is-hidden" : ""}`}
        onFocus={mostrar}
      >
        <div className="wrap top__in">
          <button
            ref={burgerRef}
            className="burger"
            type="button"
            aria-expanded={menu}
            aria-controls="gaveta"
            aria-label="Abrir menu"
            onClick={() => setMenu(true)}
          >
            <span />
            <span />
            <span />
          </button>
          <a className="brand" href="#inicio">
            <span>Portfolio [2026v2]</span>
          </a>
          <nav className="nav" aria-label="Pranchas">
            <ol>
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>
                    <b>{l.no}</b> {l.rotulo}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <button
            className="toggle"
            type="button"
            aria-pressed={marcacoes}
            title="Atalho: tecla G"
            onClick={alternar}
          >
            GRID
          </button>
          <a className="btn btn--small" href="/assets/docs/curriculo-eliel-cezar.pdf" download>
            Currículo
            <Icone id="i-down" />
          </a>
        </div>
      </header>
      <div className={`gaveta${menu ? " is-open" : ""}`} id="gaveta" ref={gavetaRef} inert={!menu}>
        <div className="gaveta__fundo" aria-hidden="true" onClick={() => fecharMenu(false)} />
        <div className="gaveta__painel" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="gaveta__topo">
            <span className="gaveta__rotulo" aria-hidden="true">
              Menu · Drawer
            </span>
            <button className="gaveta__fechar" type="button" aria-label="Fechar menu" onClick={() => fecharMenu()}>
              <span />
              <span />
            </button>
          </div>
          <nav aria-label="Pranchas">
            <ol className="gaveta__lista">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => fecharMenu(false)}>
                    <b>{l.no}</b>
                    {l.rotulo}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <a className="btn gaveta__cv" href="/assets/docs/curriculo-eliel-cezar.pdf" download>
            Baixar currículo
            <Icone id="i-down" />
          </a>
        </div>
      </div>
    </>
  );
}
