"use client";

import { useEffect, useRef, useState } from "react";
import { Icone } from "./Icones";

const STORAGE_KEY = "manual-malha";

export function Header() {
  const [stuck, setStuck] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [marcacoes, setMarcacoes] = useState(true);
  const hiddenNow = useRef(false);

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

  return (
    <header
      className={`top${stuck ? " is-stuck" : ""}${hidden ? " is-hidden" : ""}`}
      onFocus={mostrar}
    >
      <div className="wrap top__in">
        <a className="brand" href="#inicio">
          <span>Portfolio [2026v2]</span>
        </a>
        <nav className="nav" aria-label="Pranchas">
          <ol>
            <li>
              <a href="#trajetoria">
                <b>02</b> Experiência
              </a>
            </li>
            <li>
              <a href="#formacao">
                <b>03</b> Formação
              </a>
            </li>
            <li>
              <a href="#projetos">
                <b>04</b> Projetos
              </a>
            </li>
            <li>
              <a href="#ferramentas">
                <b>05</b> Ferramentas
              </a>
            </li>
            <li>
              <a href="#contato">
                <b>06</b> Contato
              </a>
            </li>
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
  );
}
