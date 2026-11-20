import { sitio, servicios, marcas, ciudades, legalesData } from "../lib/sitio.js";

const paginas = [
  { ruta: "", prioridad: "1.0", frec: "monthly" },
  { ruta: "servicios/", prioridad: "0.9", frec: "monthly" },
  { ruta: "marcas/", prioridad: "0.8", frec: "monthly" },
  { ruta: "nosotros/", prioridad: "0.6", frec: "yearly" },
  { ruta: "contacto/", prioridad: "0.9", frec: "yearly" },
  ...servicios.map((s) => ({ ruta: `${s.slug}/`, prioridad: "0.8", frec: "yearly" })),
  ...marcas.map((m) => ({ ruta: `marcas/${m.slug}/`, prioridad: "0.5", frec: "yearly" })),
  ...ciudades.map((c) => ({ ruta: `atendemos-en-${c.slug}/`, prioridad: "0.7", frec: "yearly" })),
  ...legalesData.paginas.map((l) => ({ ruta: `${l.slug}/`, prioridad: "0.2", frec: "yearly" })),
];

export function GET({ site }) {
  const hoy = new Date().toISOString().slice(0, 10);
  const origen = site ?? new URL(sitio.dominio);
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const urls = paginas.map((p) => `  <url>\n    <loc>${new URL(`${base}/${p.ruta}`, origen).href}</loc>\n    <lastmod>${hoy}</lastmod>\n    <changefreq>${p.frec}</changefreq>\n    <priority>${p.prioridad}</priority>\n  </url>`).join("\n");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
