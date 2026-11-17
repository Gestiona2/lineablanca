# Secciones de la página de inicio

Todo el texto comercial vive en `src/datos/inicio.json`. El diseño está en `src/pages/index.astro` y `src/styles/global.css`.

## Portada
- Datos: `portada.etiqueta`, `titulo`, `texto`, `imagen`, `imagenAlt`, `cta`, `ctaSecundario`.
- La acción principal abre WhatsApp.

## Servicios
- Datos: `servicios.titulo`, `texto`, `grupos[]` (`nombre`, `items[]` con `nombre`, `detalle`).
- Hay 13 tipos de equipo publicados; se muestran agrupados en lavado/frío, cocina/agua caliente y otros.
- Las filas llevan a la solicitud de WhatsApp, donde se selecciona ciudad y equipo.

## Atención y mantenimiento
- Datos: `atencion.titulo`, `texto`, `puntos[]` (`titulo`, `texto`).
- Presenta mantenimiento preventivo, ahorro de energía y atención especializada, todos mencionados en el sitio anterior.

## Marcas
- Datos: `marcas.titulo`, `texto`, `items[]`.
- Se muestran como nombres informativos, no como afirmación de servicio oficial o representación.

## Proceso
- Datos: `proceso.titulo`, `pasos[]` (`titulo`, `texto`).

## Cobertura
- Datos: `cobertura.titulo`, `texto`, `ciudades[]`, `municipiosTitulo`, `municipios[]`, `barriosTitulo`, `barrios[]`.
- Las ciudades, municipios y barrios provienen del sitio actual. Confirmar disponibilidad por equipo y zona antes de prometer una visita.

## Solicitud de servicio
- Datos: `solicitud.titulo`, `texto`, etiquetas, opciones de `ciudades[]` y textos del botón/aviso.
- El formulario pide ciudad/municipio, equipo y una descripción opcional. No recoge nombre, teléfono o correo; arma un mensaje que el visitante revisa y envía en WhatsApp.

## Preguntas frecuentes
- Datos en `faq[]` (`pregunta`, `respuesta`). Incluye contacto, cobertura, garantía publicada para neveras y descargo de servicio oficial.
- La mención de garantía de seis meses está acotada a la página de neveras del sitio anterior; el texto pide confirmar sus condiciones para cada equipo.

## Contacto y pie
- Datos: `contacto.titulo`, `texto`, `whatsapp`, `telefonoVisible`.
- WhatsApp global y teléfono también están en `src/datos/sitio.json`.
