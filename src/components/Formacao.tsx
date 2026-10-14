import { Comentario, Cota, Frame } from "./Anotacoes";

export function Formacao() {
  return (
    <section className="prancha wrap" id="formacao" aria-labelledby="h-formacao" data-host="">
      <Frame />
      <header className="prancha__head">
        <span className="prancha__no" aria-hidden="true">
          03
        </span>
        <h2 id="h-formacao">Formação</h2>
        <p>Duas passagens pela UTFPR: uma pelo design, outra pelo software.</p>
      </header>
      <div className="regua" aria-hidden="true">
        <Cota coluna="1/7" rotulo="Pós-graduação" />
        <Cota coluna="7/13" rotulo="Graduação" />
      </div>
      <div className="edu">
        <article>
          <p className="edu__meta">Pós-graduação · 2015 — 2017</p>
          <h3>Software para Dispositivos Móveis</h3>
          <p className="edu__where">UTFPR</p>
          <p>Arquitetura, experiência do usuário (UX), performance e otimização de sistemas complexos.</p>
        </article>
        <article data-host="">
          <Comentario n={4} className="comentario--r" style={{ right: 0, top: 42 }} esquerda>
            Duas passagens, mesma casa.
          </Comentario>
          <p className="edu__meta">Graduação · 2003 — 2007</p>
          <h3>Design Gráfico</h3>
          <p className="edu__where">UTFPR</p>
          <p>Projetos gráficos, identidade visual, branding e marketing estratégico.</p>
        </article>
      </div>
    </section>
  );
}
