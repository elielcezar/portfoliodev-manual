import { Comentario, Frame, Respiro } from "./Anotacoes";

const grupos = [
  { titulo: "Design", itens: ["Figma", "Photoshop", "Illustrator", "UI Design"] },
  { titulo: "Front End", itens: ["CSS", "JavaScript", "React", "Vue", "Next.js", "Tailwind"] },
  { titulo: "Back end e CMS", itens: ["Node.js", "MySQL", "PHP", "WordPress", "Drupal"] },
  { titulo: "Marketing / Dados", itens: ["Google Analytics", "Google Ads", "Google Data Studio"] },
];

export function Ferramentas() {
  return (
    <section className="prancha wrap" id="ferramentas" aria-labelledby="h-ferramentas" data-host="">
      <Frame />
      <Respiro />
      <header className="prancha__head">
        <span className="prancha__no" aria-hidden="true">
          05
        </span>
        <h2 id="h-ferramentas">Habilidades</h2>
        <p>As mesmas ferramentas servem ao layout e ao código.</p>
      </header>
      <div className="spec">
        {grupos.map((g, i) => (
          <div key={g.titulo} data-host={i === grupos.length - 1 ? "" : undefined}>
            <h3>{g.titulo}</h3>
            <ul>
              {g.itens.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {i === grupos.length - 1 && (
              <Comentario n={6} style={{ left: 0, top: 132 }}>
                Tudo o que utilizo no dia-a-dia para criar e manter um projeto.
              </Comentario>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
