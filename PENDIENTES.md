# Pendientes de Línea Blanca

## Contexto (2026-11-19)

Línea Blanca es la **misma empresa** que Arreglo de Lavadoras. El sitio comparte servicios, marcas, ciudades, condiciones, garantía, historia y legales; cambian el diseño, los textos (reescritos con otras palabras para no duplicar contenido ante Google) y los datos de contacto (WhatsApp 312 341 0405 y horario publicado en lineablanca.co). Las URL siguen la misma taxonomía que Arreglo de Lavadoras.

## Por confirmar con el cliente

- [ ] Correo corporativo, razón social y NIT (no hay; los legales remiten a WhatsApp). Los legales son plantillas: requieren revisión legal antes de publicar en el dominio real.
- [ ] Medios de pago (Bancolombia, Nequi, Daviplata) y titular: se copiaron de Arreglo de Lavadoras. Confirmar que son los mismos para Línea Blanca; si no, editarlos en `src/datos/inicio.json` (`pagos`).
- [ ] Testimonios (Andrea Angarita, Carlos Manosalva, Claudia Martínez): vienen de Arreglo de Lavadoras. Confirmar que se pueden mostrar también aquí.
- [ ] Horario: se usa el publicado en lineablanca.co (lunes a viernes 6–18 con extendido hasta 22; sábados 7–17). Arreglo de Lavadoras publica lunes a sábado 7–17. Confirmar cuál aplica.
- [ ] Confirmar que "18 años de experiencia", "10 ciudades" y "14 servicios" también valen para Línea Blanca (misma empresa).
- [ ] La web anterior se titulaba "Servicio Técnico Autorizado"; el rediseño no usa esa frase (no hay autorización de marca que la respalde).
- [ ] Las 12 URL por barrio de Bogotá y las páginas por marca y servicio antiguas de lineablanca.co (más de 60) no se replican uno a uno; las reemplazan `/atendemos-en-<ciudad>/` y `/marcas/<marca>/`. Decidir si hacen falta redirecciones desde las URL viejas al publicar en el dominio real.

## Imágenes

- [ ] Los logos de marcas (`public/brand/marcas/`) son marcas de terceros; se usan solo para identificar los equipos que se atienden, igual que en Arreglo de Lavadoras, con el aviso de que Línea Blanca no es servicio oficial. Solo 12 de las 22 marcas tienen logo; las demás se muestran en texto.

- [ ] Fotos de portada y nevera (Unsplash: Brian Zajac y Lisa Anna, créditos en `creditos-imagenes.md`) y las 8 fotos de servicios (copiadas de Arreglo de Lavadoras): provisionales; ninguna es trabajo real de Línea Blanca. La portada es una cocina con lavavajillas, microondas, estufa y nevera (imagen con aspecto de render).
- [ ] Hay servicios sin foto (microondas, campanas, freidoras, cafeteras, aspiradoras, televisores): la página se arma sin imagen.

## Técnico

- [x] Rediseño completo (inicio, servicios, 14 páginas de servicio, marcas y 22 páginas de marca, 10 páginas de ciudad, nosotros, contacto, legales, 404, sitemap y robots). 55 páginas.
- [x] Enlaces internos revisados automáticamente: ninguno roto.
- [ ] Revisar a 768 px y en celular real antes de enseñar al cliente.
- [ ] Al pasar al dominio real: quitar `noindex` (se activa solo en demos.emp2web.com), definir `PUBLIC_SITE` y `PUBLIC_BASE`, y revisar el sitemap.
- [ ] El tema oscuro solo se activa con el botón de la barra; por defecto el sitio abre siempre en claro.
