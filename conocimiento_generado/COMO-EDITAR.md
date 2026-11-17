# Cómo editar el sitio

- Cambiar servicios o textos: editar `src/datos/inicio.json` → `servicios.grupos`.
- Agregar/quitar una especialidad: editar `servicios.grupos[].items[]`; también aparecerá como opción en la solicitud de WhatsApp.
- Cambiar marcas: editar `marcas.items`. Mantener el aviso de que los nombres son informativos y no implican representación oficial.
- Cambiar ciudades/zonas: editar `cobertura.ciudades`, `municipios`, `barrios` y `solicitud.ciudades`. Confirmar antes la disponibilidad real por equipo y zona.
- Cambiar preguntas: editar `faq[]`. La garantía de seis meses solo puede presentarse como referencia a la página de neveras hasta que el negocio confirme su alcance.
- Cambiar teléfono o horario general: editar `src/datos/sitio.json` y verificar `inicio.json`; los enlaces deben conservar el número internacional correcto.
- Cambiar el logo: reemplazar `public/brand/logo-linea-blanca.png` por el archivo aprobado, manteniendo su fondo transparente.
- Cambiar la foto de portada: editar `portada.imagen` y `portada.imagenAlt` en `inicio.json`; revisar licencia y encuadre móvil.
- Cambiar colores: actualizar `MARCA.md` y las variables al principio de `src/styles/global.css` con autorización del cliente.
- Antes de publicar, mostrar vista previa y esperar aprobación.
