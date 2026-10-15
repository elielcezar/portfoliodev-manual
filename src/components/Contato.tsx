import { Comentario, Frame } from "./Anotacoes";
import { Icone } from "./Icones";

const contatos = [
  { rotulo: "E-mail", valor: "contato@elielcezar.com", href: "mailto:contato@elielcezar.com", externo: false },
  { rotulo: "WhatsApp", valor: "(41) 99963-1609", href: "https://wa.me/5541999631609", externo: true },
  {
    rotulo: "LinkedIn",
    valor: "linkedin.com/in/elielcezar",
    href: "https://www.linkedin.com/in/elielcezar/",
    externo: true,
  },
  { rotulo: "GitHub", valor: "@elielcezar", href: "https://github.com/elielcezar", externo: true },
];

export function Contato() {
  return (
    <section className="contato" id="contato" aria-labelledby="h-contato" data-host="">
      <Frame />
      <div className="wrap contato__in">
        <header className="prancha__head">
          <span className="prancha__no" aria-hidden="true">
            06
          </span>
          <h2 id="h-contato">Vamos conversar?</h2>
          <p>Sei lidar com clientes exigentes, chefe estressado, designers emocionados e devs que falam pouco.</p>
        </header>
        <div className="contato__body" data-host="">
          <Comentario n={8} style={{ left: 0, top: 84 }}>
            Estou feliz por ter chamado sua atenção, agora é só escolher alguma opção aqui do lado :)
          </Comentario>
          <a className="btn btn--inverse" href="/assets/docs/curriculo-eliel-cezar.pdf" download>
            Baixar currículo
            <Icone id="i-down" />
          </a>
          <ul className="contato__list">
            {contatos.map((c) => (
              <li key={c.rotulo}>
                <a href={c.href} rel={c.externo ? "noopener" : undefined} target={c.externo ? "_blank" : undefined}>
                  <small>{c.rotulo}</small>
                  <b>{c.valor}</b>
                  <Icone id="i-out" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
