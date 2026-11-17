import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// output por defecto queda en "static" — no agregar adapter salvo que el
// proyecto necesite SSR real (formularios y automatizaciones van por
// proxy PHP o GitHub Actions, no requieren servidor Astro en producción).
export default defineConfig({
  site: process.env.PUBLIC_SITE || "https://demos.emp2web.com",
  base: process.env.PUBLIC_BASE || "/lineablanca",
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
