# Línea Blanca — demo del sitio web

Propuesta de rediseño para el servicio técnico de electrodomésticos Línea Blanca.

## Vista de demo

URL prevista: <https://demos.emp2web.com/lineablanca/>

## Construcción local

La página se construye con Astro y CSS propio. Ejecuta `npm install` una vez y luego `npm run dev` para la vista previa; `npm run build` genera el sitio estático.

## Contenido editable

- `src/datos/inicio.json`: portada, servicios, proceso, cobertura, preguntas y contacto.
- `src/datos/sitio.json`: nombre, teléfono y horario.
- `MARCA.md`: identidad visual de Línea Blanca.

## Publicar la demo

El script `scripts/publicar-demo.sh` compila solo `/lineablanca` y publica en una rama `gh-pages` de un repositorio aislado. Antes de usarlo, Emp2Web debe asignar explícitamente el repositorio de destino y configurar la autenticación; el script se detiene si `LINEABLANCA_DEMO_REPO` no está definido.

## Imágenes y contenido

La fotografía de portada apunta a Unsplash (foto de cocina editorial, endpoint de imagen `photo-1556911220-bff31c812dba`). Se usa provisionalmente desde su CDN; no se ha copiado al proyecto. El logo local es el archivo entregado para la marca.

El teléfono, horarios, ciudades, lista de servicios y aviso sobre marcas se tomaron del sitio actual `https://www.lineablanca.co/`. No se incluyeron cifras de experiencia, certificaciones ni testimonios.
