import Image from "next/image";
import type { CSSProperties } from "react";
import { Comentario, Frame } from "./Anotacoes";
import { Icone } from "./Icones";

const selecao = { "--sel-inset": "var(--prot)" } as CSSProperties;

export function Hero() {
  return (
    <section className="prancha hero wrap" id="inicio" aria-labelledby="nome" data-host="">
      <Frame />
      <span className="nota nota--regua" aria-hidden="true">
        <span className="cota">
          <span data-regua="">Desktop · 12 col</span>
        </span>
      </span>
      <h1 id="nome" className="sig">
        <span className="sig__line" data-cota="Altura de caixa alta · linha de base 1">
          Eliel
        </span>
        <span className="sig__line" data-cota="Linha de base 2">
          Cezar
        </span>
        <Comentario n={1} className="comentario--nome">
          Olá, seja bem vindo(a) ao meu portfolio!
        </Comentario>
      </h1>
      <figure className="retrato" data-host="">
        <span className="retrato__area" aria-hidden="true">
          <em>
            Área de proteção · <span data-token="--prot">22 px</span>
          </em>
        </span>
        <Image src="/assets/img/eliel.webp" width={718} height={982} alt="Retrato de Eliel Cezar" priority />
        <span className="sel" aria-hidden="true" style={selecao}>
          <i />
          <i />
          <i />
          <i />
          <em data-medir="img">718 × 982</em>
        </span>
       
      </figure>
      <div className="hero__norma">
        <p className="hero__role">Front End Developer &amp; UI Designer</p>
        <p className="hero__pitch">
        Sou um designer gráfico que migrou pra área de web há 15 anos. Já desenvolvi projetos para grandes marcas como <strong>Assaí, McDonald's, Lojas Americanas e Subway</strong>. Tenho facilidade para trabalhar em squads multidisciplinares e posso conduzir projetos de ponta a ponta: concepção, requisitos, design, desenvolvimento e publicação em servidor VPS.
        </p>
        <div className="actions" data-host="">
          <span className="nota chip" aria-hidden="true" style={{ top: -26, left: 0 }}>
            <Icone id="i-seta" />
            Button / Primary <span data-medir=".btn" data-eixo="h">H 56</span>
          </span>
          <a className="btn" href="/assets/docs/curriculo-eliel-cezar.pdf" download>
            Baixar currículo
            <Icone id="i-down" />
          </a>
          <a className="link" href="https://www.linkedin.com/in/elielcezar/" rel="noopener" target="_blank">
            LinkedIn
            <Icone id="i-out" />
          </a>
          <a className="link" href="https://github.com/elielcezar" rel="noopener" target="_blank">
            GitHub
            <Icone id="i-out" />
          </a>
        </div>
      </div>
      <dl className="hero__spec">
        <div>
          <dt>Base</dt>
          <dd>Curitiba, PR</dd>
        </div>
        <div>
          <dt>Regime</dt>
          <dd>Aberto a vagas remotas</dd>
        </div>
        <div>
          <dt>Idiomas</dt>
          <dd>Português</dd>
          <dd>Inglês [intermediário]</dd>
          <dd>Espanhol [básico]</dd>
        </div>
      </dl>
      <p className="legenda">
        <b>Frame 01</b> Assinatura principal
      </p>
    </section>
  );
}
