import { sitio } from "../lib/sitio.js";
export function GET({ site }) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const origen = site ?? new URL(sitio.dominio);
  const demo = String(site ?? "").includes("demos.");
  const sitemap = new URL(`${base}/sitemap.xml`, origen).href;
  return new Response(demo ? `User-agent: *\nDisallow: /\n` : `User-agent: *\nAllow: /\nDisallow: ${base}/gracias/\n\nSitemap: ${sitemap}\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
