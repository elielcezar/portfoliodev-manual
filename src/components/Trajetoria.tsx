import { Comentario, Cota, Frame, Respiro } from "./Anotacoes";

const cargos = [
  {
    periodo: "2007 — 2010",
    ano: "2007",
    empresa: "Grupo Uninter",
    cargo: "Designer Gráfico",
    texto: "Atuei como designer gráfico desenvolvendo desde o conceito até a arte final para campanhas de vestibular e outras ações do Grupo Uninter com, foco em mídia impressa como: anúncios de revista, outdoors, banenrs, folders, etc.",
  },
  {
    periodo: "2010 — 2011",
    ano: "2010",
    empresa: "eBehavior",
    cargo: "Desenvolvedor Júnior",
    texto:
      "Momento em que migrei para a área de desenvolvimento web. Nessa startup ajudei a desenvolver um sistema de vitrine de recomendação de produtos para e-commerce. O sistema, na época, era bastante inovador e levava em consideração dezenas de variáveis para recomendar produtos para o usuário.",
  },
  {
    periodo: "2011 — 2014",
    ano: "2011",
    empresa: "Buscapé",
    cargo: "Desenvolvedor Pleno",
    texto:
      "Devido à tecnologia de vitrine de recomendação de produtos desenvolvida na eBehavior, a empresa foi adquirida pelo Grupo Buscapé e a equipe de desenvolvimento foi absorvido pela empresa. Fui promovido a Desenvolvedor Pleno e integrado ao time de novas tecnologias do comparador de preços.",
  },
  {
    periodo: "2014 — 2016",
    ano: "2014",
    empresa: "M2E Comunicação",
    cargo: "Fundador e Full Stack",
    texto: "Neste período abri uma pequena agência de marketing digital. Atuamos por quase 3 anos oferecendo serviços de design, desenvolvimento web e social media. Fui responsável por todos os assuntos relacionados à area de digital.",
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
      <Comentario n={2} className="comentario--r" style={{ right: 0, top: 174 }} esquerda>
          De designer gráfico a desenvolvedor, passando por uma fase como freelancer e dono de agência, já fiz de tudo um pouco.
        </Comentario>
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
          Atualmente lidero um time de 5 desenvolvedores em uma agência de publicidade. Sou responsável pela definição de tecnologias, prazos e coordenação de projetos. Na Megamidia atendemos grandes marcas do varejo como: Assaí, Muffato, McDonalds, Lojas Americanas e Subway.
          </p>
          <strong className="tag">Atual</strong>
          <Comentario n={3} className="comentario--atual">
            Após 10 anos sinto que é hora de mudar.
          </Comentario>
        </li>
      </ol>
    </section>
  );
}
