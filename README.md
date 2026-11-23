# Línea Blanca — demo del sitio web

Propuesta de rediseño para el servicio técnico de electrodomésticos Línea Blanca.

## Vista de demo

URL prevista: <https://demos.emp2web.com/lineablanca/>

## Construcción local

La página se construye con Astro y CSS propio. Ejecuta `npm install` una vez y luego `npm run dev` para la vista previa; `npm run build` genera el sitio estático.

## Contenido editable

- `src/datos/sitio.json`: nombre, WhatsApp, horario, ciudades y qué se atiende en cada grupo de ciudades, menú y legales.
- `src/datos/inicio.json`: portada, selector de equipos y ciudades, compromisos, proceso, garantía, testimonios, medios de pago y preguntas.
- `src/datos/servicios.json`, `marcas.json`, `ciudades.json`: una entrada por servicio, marca o ciudad; de ahí salen las páginas internas.
- `nosotros.json`, `contacto.json`, `servicios-pagina.json`, `legales.json`, `404.json`: textos de cada página.
- `src/datos/sitio.json`: nombre, teléfono y horario.
- `MARCA.md`: identidad visual de Línea Blanca.

## Publicar la demo

El script `scripts/publicar-demo.sh` compila solo `/lineablanca` y publica en la rama `gh-pages` del repositorio aislado `Gestiona2/lineablanca`. Requiere GitHub CLI autenticado como miembro de la organización.

## Imágenes y contenido

Las fotografías (`public/img/portada.jpg` y `nevera.jpg`) son de Unsplash, con licencia libre y crédito en el pie: Brian Zajac (cocina de portada, foto Uw4Z5jU_G-E) y Lisa Anna (nevera, foto ZkWMfHPNWpw). Son provisionales. La tipografía Manrope (OFL, subconjunto latino) está en `public/fonts/`. El logo local es el archivo entregado para la marca.

El tema es claro por defecto; el visitante puede activar el oscuro con el botón de la barra y queda guardado en su navegador.

El teléfono, horarios, ciudades, lista de servicios y aviso sobre marcas se tomaron del sitio actual `https://www.lineablanca.co/`. No se incluyeron cifras de experiencia, certificaciones ni testimonios.

## Conversiones de Google Ads

El formulario abre WhatsApp y lleva a `/gracias/`, que sirve como página de conversión (no se indexa). Los clics a WhatsApp y a llamar se publican en `dataLayer`. Para usar etiquetas de Google directamente, llena el bloque `googleAds` de `src/datos/sitio.json` (`id`, `etiquetaGracias`, `etiquetaWhatsapp`, `etiquetaLlamar`); vacío, no se carga nada de Google.
