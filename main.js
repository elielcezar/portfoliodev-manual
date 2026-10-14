(() => {
  const root = document.documentElement;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const top = document.querySelector(".top");
  const onScroll = () => top.classList.toggle("is-stuck", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const hero = document.querySelector(".hero");
  if (reduce) hero.classList.add("is-drawn");
  else requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add("is-drawn")));

  const toggle = document.querySelector(".toggle");
  const setMalha = (on) => {
    root.classList.toggle("no-malha", !on);
    toggle.setAttribute("aria-pressed", String(on));
    try { localStorage.setItem("manual-malha", on ? "1" : "0"); } catch (e) {}
  };
  let saved = null;
  try { saved = localStorage.getItem("manual-malha"); } catch (e) {}
  setMalha(saved !== "0");
  toggle.addEventListener("click", () => setMalha(root.classList.contains("no-malha")));
  document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() !== "g" || event.metaKey || event.ctrlKey || event.altKey) return;
    if (event.target.closest("input, textarea, [contenteditable]")) return;
    setMalha(root.classList.contains("no-malha"));
  });

  const viewer = document.querySelector(".viewer");
  const index = viewer.querySelector(".viewer__index");
  const img = viewer.querySelector(".viewer__img");
  const no = viewer.querySelector(".viewer__no");
  const name = viewer.querySelector(".viewer__name");
  const text = viewer.querySelector(".viewer__text");
  const link = viewer.querySelector(".viewer__link");
  const sr = viewer.querySelector(".viewer__sr");
  const count = viewer.querySelector(".viewer__count b");
  const pad = (n) => String(n).padStart(2, "0");

  const buttons = window.PROJETOS.map((p, i) => {
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.type = "button";
    b.innerHTML = `<b>${pad(i + 1)}</b><span></span>`;
    b.querySelector("span").textContent = p.nome;
    b.addEventListener("click", () => seletor.ir(i));
    li.append(b);
    index.append(li);
    return b;
  });

  let first = true;
  const render = (i, p) => {
    const apply = () => {
      img.src = window.PROJETOS_IMG + p.img;
      img.width = p.w;
      img.height = p.h;
      img.alt = p.alt;
      img.classList.remove("is-swapping");
    };
    if (first || reduce) apply();
    else { img.classList.add("is-swapping"); setTimeout(apply, 180); }
    first = false;
    no.textContent = pad(i + 1);
    name.textContent = p.nome;
    text.textContent = p.texto;
    link.href = p.url;
    sr.textContent = " de " + p.nome;
    count.textContent = pad(i + 1);
    buttons.forEach((b, j) => b.setAttribute("aria-current", String(j === i)));
  };

  const seletor = window.criarSeletor(render);
  viewer.querySelectorAll(".arrow").forEach((b) => {
    b.addEventListener("click", () => (b.dataset.dir === "1" ? seletor.proximo() : seletor.anterior()));
  });
  viewer.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") { event.preventDefault(); seletor.proximo(); }
    if (event.key === "ArrowLeft") { event.preventDefault(); seletor.anterior(); }
  });
})();
