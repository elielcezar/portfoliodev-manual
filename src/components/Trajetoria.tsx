import { Comentario, Cota, Frame, Respiro } from "./Anotacoes";

const cargos = [
  {
    periodo: "2007 — 2010",
    ano: "2007",
    empresa: "Grupo Uninter",
    cargo: "Designer Gráfico",
    texto: "Do conceito à arte final de campanhas de vestibular: anúncios de revista, outdoors, banners e folders.",
  },
  {
    periodo: "2010 — 2011",
    ano: "2010",
    empresa: "eBehavior",
    cargo: "Desenvolvedor Júnior",
    texto:
      "A virada para a web. Ajudei a construir uma vitrine de recomendação de produtos para e-commerce que pesava dezenas de variáveis.",
  },
  {
    periodo: "2011 — 2014",
    ano: "2011",
    empresa: "Buscapé",
    cargo: "Desenvolvedor Pleno",
    texto:
      "O Grupo Buscapé comprou a eBehavior pela tecnologia de recomendação. Fui promovido e entrei no time de novas tecnologias do comparador.",
  },
  {
    periodo: "2014 — 2016",
    ano: "2014",
    empresa: "M2E Comunicação",
    cargo: "Fundador e Full Stack",
    texto: "Minha própria agência de marketing digital: design, desenvolvimento web e social media por quase 3 anos.",
  },
];

export function Trajetoria() {
  return (
    <section className="prancha wrap" id="trajetoria" aria-labelledby="h-trajetoria" data-host="">
      <Frame />
      <Respiro />
      <header className="prancha__head">
        <span className="prancha__no" aria-hidden="true">
          02
        </span>
        <h2 id="h-trajetoria">Experiência</h2>
        <p>Do impresso ao front end. Dezenove anos entre design, código e gente, em ordem de aplicação.</p>
      </header>
      <div className="regua" aria-hidden="true">
        <Cota coluna="1/3" rotulo="Período" />
        <Cota coluna="3/7" rotulo="Empresa e cargo" />
        <Cota coluna="7/12" rotulo="Resumo" />
      </div>
      <ol className="tabela">
        {cargos.map((c, i) => (
          <li key={c.empresa} data-host={i === 0 ? "" : undefined}>
            {i === 0 && (
              <span className="nota nota--pad" aria-hidden="true">
                <span className="cota cota--v">
                  <span data-pad="bottom" />
                </span>
              </span>
            )}
            <time dateTime={c.ano}>{c.periodo}</time>
            <h3>
              {c.empresa} <span>{c.cargo}</span>
            </h3>
            <p>{c.texto}</p>
          </li>
        ))}
        <li className="is-atual" data-host="">
          <time dateTime="2016">2016 — hoje</time>
          <h3>
            MegaMidia <span>Tech Lead / Sênior</span>
          </h3>
          <p>
            Lidero 5 desenvolvedores numa agência de publicidade. Defino tecnologias, prazos e coordeno projetos para
            Assaí, Muffato, McDonald&apos;s, Lojas Americanas e Subway.
          </p>
          <strong className="tag">Atual</strong>
          <Comentario n={3} className="comentario--atual">
            O único cargo que ainda não fechou.
          </Comentario>
        </li>
      </ol>
    </section>
  );
}
