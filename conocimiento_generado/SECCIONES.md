# Secciones de la página de inicio

Todo el texto comercial vive en `src/datos/inicio.json`. El diseño está en `src/pages/index.astro` y `src/styles/global.css`.

## Portada
- Datos: `portada.etiqueta`, `titulo`, `texto`, `imagen`, `imagenAlt`, `cta`, `ctaSecundario`.
- La acción principal abre WhatsApp.

## Servicios
- Datos: `servicios.titulo`, `texto`, `items[]` (`nombre`, `detalle`).
- Cada servicio abre WhatsApp con un mensaje preparado.

## Proceso
- Datos: `proceso.titulo`, `pasos[]` (`titulo`, `texto`).

## Cobertura
- Datos: `cobertura.titulo`, `texto`, `zonas`.
- Confirmar vigencia y disponibilidad local antes de cambiar ciudades.

## Preguntas frecuentes
- Datos en `faq[]` (`pregunta`, `respuesta`). Incluye horario, cobertura, contacto y descargo de servicio oficial.

## Contacto y pie
- Datos: `contacto.titulo`, `texto`, `whatsapp`, `telefonoVisible`.
- WhatsApp global y teléfono también están en `src/datos/sitio.json`.
