import type { CSSProperties, ReactNode } from "react";

/* Static building blocks of the annotation layer. Everything here is decorative
   (aria-hidden) and measured at runtime by <Notas />. */

export function Frame() {
  return (
    <span className="nota nota--frame" aria-hidden="true">
      <span>Frame</span>
      <span data-medir="">1440 × 900</span>
    </span>
  );
}

export function Respiro() {
  return (
    <span className="nota nota--respiro" aria-hidden="true">
      <span className="cota cota--v">
        <span data-token="--step" />
      </span>
    </span>
  );
}

type ComentarioProps = {
  n: number;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  esquerda?: boolean;
};

export function Comentario({ n, children, className = "", style, esquerda }: ComentarioProps) {
  return (
    <span className={`nota comentario ${className}`.trim()} aria-hidden="true" style={style}>
      <span className="pin">{n}</span>
      <span className={`balao${esquerda ? " balao--left" : ""}`}>
        <b>Eliel</b>
        {children}
      </span>
    </span>
  );
}

export function Cota({ coluna, rotulo }: { coluna: string; rotulo: string }) {
  return (
    <span className="cota" style={{ gridColumn: coluna }}>
      <span data-label={rotulo} />
    </span>
  );
}
