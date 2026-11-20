import sitio from "../datos/sitio.json";
import serviciosData from "../datos/servicios.json";
import marcasData from "../datos/marcas.json";
import ciudadesData from "../datos/ciudades.json";
import legalesData from "../datos/legales.json";

export { sitio, serviciosData, marcasData, ciudadesData, legalesData };

export const base = (import.meta.env?.BASE_URL ?? "/").replace(/\/$/, "");
/** Ruta interna con la base del sitio. Las carpetas terminan en "/". */
export function ruta(p = "") {
  const rel = String(p).replace(/^\//, "");
  return `${base}/${rel}`;
}
/** Ruta de un archivo de /public (foto, logo). */
export const recurso = (p) => (p ? `${base}/${String(p).replace(/^\//, "")}` : "");

export const wa = (texto = "") => {
  const u = `https://wa.me/${sitio.whatsapp}`;
  return texto ? `${u}?text=${encodeURIComponent(texto)}` : u;
};
export const reemplazar = (s, vars) => String(s).replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? `{${k}}`);

export const servicios = serviciosData.items;
export const servicioPor = (slug) => servicios.find((s) => s.slug === slug);
export const marcas = marcasData.items;
export const marcaPor = (slug) => marcas.find((m) => m.slug === slug);
export const marcaPorNombre = (n) => marcas.find((m) => m.nombre.toLowerCase() === String(n).toLowerCase());
export const ciudades = sitio.ciudades;
export const ciudadPor = (slug) => ciudades.find((c) => c.slug === slug);
export const rutaCiudad = (c) => ruta(`atendemos-en-${c.slug}/`);
export const serviciosDeCiudad = (c) => sitio.grupos[c.grupo].servicios.map(servicioPor);
export const ciudadesDeServicio = (slug) => ciudades.filter((c) => sitio.grupos[c.grupo].servicios.includes(slug));
export const categorias = serviciosData.categorias.map((c) => ({ ...c, items: servicios.filter((s) => s.categoria === c.id) }));
export const nombreCorto = (s) => s.nombre;
