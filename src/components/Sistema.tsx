import { Comentario } from "./Anotacoes";

const cores = [
  { nome: "Papel", token: "--white", contraste: false },
  { nome: "Tinta", token: "--black", contraste: true },
  { nome: "Azul de cota", token: "--blue", contraste: true },
  { nome: "Azul profundo", token: "--blue-deep", contraste: true },
  { nome: "Azul névoa", token: "--blue-mist", contraste: false },
  { nome: "Grafite", token: "--soft", contraste: true },
];

const tipos = [
  {
    classe: "especime--display",
    familia: "Schibsted Grotesk",
    pesos: "500 · 700 · 800 · 900",
    uso: "Assinatura, títulos, botões, números",
  },
  {
    classe: "especime--text",
    familia: "Hanken Grotesk",
    pesos: "400 · 500 · 600",
    uso: "Texto corrido e rótulos",
  },
];

export function Sistema() {
  return (
    <section className="prancha wrap" id="sistema" aria-labelledby="h-sistema" data-host="">
      <h2 id="h-sistema" className="sr-only">
        Sistema visual
      </h2>
      <div className="ds">
        <div className="ds__cores">
          <h3 data-titulo="Cor" data-conta=".ds__cores li" data-unidade="tokens">Cores &amp; tokens</h3>
          <ul>
            {cores.map((c) => (
              <li key={c.token}>
                <span className="amostra" style={{ background: `var(${c.token})` }} />
                <b>{c.nome}</b>
                <code>{c.token}</code>
                <small data-hex={c.token} />
                {c.contraste && (
                  <small>
                    <span data-contraste={`${c.token},--white`} />
                  </small>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="ds__tipos">
          <h3 data-titulo="Tipo" data-conta=".especime" data-unidade="famílias" />
          {tipos.map((t, i) => (
            <div key={t.familia} data-host={i === tipos.length - 1 ? "" : undefined}>
              {i === tipos.length - 1 && (
                <Comentario n={7} style={{ left: 168, top: 34 }}>
                  6 cores, duas famílias tipográficas.
                </Comentario>
              )}
              <p className={`especime ${t.classe}`} aria-hidden="true">
                Aa
              </p>
              <dl>
                <div>
                  <dt>Família</dt>
                  <dd>{t.familia}</dd>
                </div>
                <div>
                  <dt>Pesos</dt>
                  <dd>{t.pesos}</dd>
                </div>
                <div>
                  <dt>Uso</dt>
                  <dd>{t.uso}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
