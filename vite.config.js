import purgeCSSPlugin from "@fullhuman/postcss-purgecss";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Strips unused Bootstrap rules at build time. react-bootstrap builds class
// names at runtime (e.g. `navbar-expand-${expand}`, `col-md-${span}`), so those
// prefixes are safelisted — savings come from whole unused components (forms,
// modals, tables, carousel, ...).
const purgecss = purgeCSSPlugin({
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  safelist: {
    standard: [/^h[1-6]$/, "show", "active", "disabled", "fade", "visible"],
    deep: [
      /^navbar/,
      /^nav-/,
      /^container/,
      /^row/,
      /^col/,
      /^btn/,
      /^card/,
      /^collaps/,
      /^d-/,
      /^m[setbxy]?-/,
      /^p[setbxy]?-/,
      /^justify-/,
      /^align-/,
      /^text-/,
      /^img-/,
      /^fixed-/,
      /^sticky/,
      /^Typewriter/,
    ],
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  css: {
    postcss: {
      plugins: command === "build" ? [purgecss] : [],
    },
  },
}));
