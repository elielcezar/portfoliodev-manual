"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PROJETOS, PROJETOS_IMG } from "@/data/projetos";
import { Comentario, Cota, Frame } from "./Anotacoes";
import { Icone } from "./Icones";

const pad = (n: number) => String(n).padStart(2, "0");
const total = PROJETOS.length;

function indiceDoHash(): number | null {
  const m = window.location.hash.match(/^#(?:projeto|trabalho)-(.+)$/);
  if (!m) return null;
  const i = PROJETOS.findIndex((p) => p.id === m[1]);
  return i >= 0 ? i : null;
}

export function Projetos() {
  const [atual, setAtual] = useState(0);
  const [exibido, setExibido] = useState(0);
  const [trocando, setTrocando] = useState(false);
  const primeira = useRef(true);
  const reduzir = useRef(false);

  const ir = useCallback((i: number, comHash = true) => {
    const alvo = (i + total) % total;
    setAtual(alvo);
    if (comHash) window.history.replaceState(null, "", `#projeto-${PROJETOS[alvo].id}`);
  }, []);

  useEffect(() => {
    reduzir.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const inicial = indiceDoHash();
    if (inicial !== null) {
      setAtual(inicial);
      setExibido(inicial);
      requestAnimationFrame(() => document.getElementById("projetos")?.scrollIntoView());
    }
    const onHash = () => {
      const i = indiceDoHash();
      if (i !== null) setAtual(i);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (primeira.current) {
      primeira.current = false;
      return;
    }
    if (reduzir.current) {
      setExibido(atual);
      return;
    }
    setTrocando(true);
    const t = setTimeout(() => {
      setExibido(atual);
      setTrocando(false);
    }, 180);
    return () => clearTimeout(t);
  }, [atual]);

  const projeto = PROJETOS[atual];
  const imagem = PROJETOS[exibido];

  return (
    <section className="prancha wrap" id="projetos" aria-labelledby="h-projetos" data-host="">
      <Frame />
      <header className="prancha__head">
        <span className="prancha__no" aria-hidden="true">
          04
        </span>
        <h2 id="h-projetos">Projetos Recentes</h2>
        <p>Sites e produtos que desenhei e desenvolvi. Escolha no índice ou use as setas do teclado.</p>
      </header>
      <div className="regua" aria-hidden="true">
        <Cota coluna="1/4" rotulo="Índice" />
        <Cota coluna="4/13" rotulo="Palco" />
      </div>
      <div
        className="viewer"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Projetos Recentes"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            ir(atual + 1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            ir(atual - 1);
          }
        }}
      >
        <ol className="viewer__index" aria-label="Índice de projetos">
          {PROJETOS.map((p, i) => (
            <li key={p.id}>
              <button type="button" aria-current={i === atual} onClick={() => ir(i)}>
                <b>{pad(i + 1)}</b>
                <span>{p.nome}</span>
              </button>
            </li>
          ))}
        </ol>
        <div className="viewer__stage">
          <figure className="viewer__frame" data-host="">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={`viewer__img${trocando ? " is-swapping" : ""}`}
              src={PROJETOS_IMG + imagem.img}
              width={imagem.w}
              height={imagem.h}
              alt={imagem.alt}
            />
            <span className="sel" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
            <Comentario n={5} style={{ left: "7%", top: "9%" }}>
              Frame fixo em 900 : 639. A imagem se ajusta, o layout não.
            </Comentario>
            <figcaption className="viewer__cota">
              <span className="viewer__no">{pad(atual + 1)}</span>
              <span className="viewer__name">{projeto.nome}</span>
            </figcaption>
          </figure>
          <div className="viewer__desc">
            <p className="viewer__text" aria-live="polite">
              {projeto.texto}
            </p>
            <div className="viewer__actions">
              <a className="link viewer__link" href={projeto.url} rel="noopener" target="_blank">
                Ver o site
                <span className="sr-only viewer__sr"> de {projeto.nome}</span>
                <Icone id="i-out" />
              </a>
              <span className="viewer__nav">
                <button className="arrow" type="button" aria-label="Projeto anterior" onClick={() => ir(atual - 1)}>
                  <Icone id="i-prev" />
                </button>
                <span className="viewer__count">
                  <b>{pad(atual + 1)}</b> / {total}
                </span>
                <button className="arrow" type="button" aria-label="Próximo projeto" onClick={() => ir(atual + 1)}>
                  <Icone id="i-next" />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
