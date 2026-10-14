export function Icones() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <symbol id="i-down" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="2.2" d="M12 3v14M5.5 11l6.5 6.5 6.5-6.5M4 21h16" />
      </symbol>
      <symbol id="i-out" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="2.2" d="M7 17L17 7M8 6h10v10" />
      </symbol>
      <symbol id="i-prev" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="2.2" d="M20 12H5M11 5l-7 7 7 7" />
      </symbol>
      <symbol id="i-seta" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="2.4" d="M12 3v17M5.5 13.5L12 20l6.5-6.5" />
      </symbol>
      <symbol id="i-next" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="2.2" d="M4 12h15M13 5l7 7-7 7" />
      </symbol>
    </svg>
  );
}

export function Icone({ id }: { id: "i-down" | "i-out" | "i-prev" | "i-next" | "i-seta" }) {
  return (
    <svg aria-hidden="true">
      <use href={`#${id}`} />
    </svg>
  );
}
