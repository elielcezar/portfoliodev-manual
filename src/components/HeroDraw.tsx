"use client";

import { useEffect } from "react";

/* Draws the hero rules once on load (instantly when the visitor prefers reduced motion). */
export function HeroDraw() {
  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      hero.classList.add("is-drawn");
      return;
    }
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => hero.classList.add("is-drawn"));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, []);

  return null;
}
