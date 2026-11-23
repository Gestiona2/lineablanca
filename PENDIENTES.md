# Pendientes de Línea Blanca

## Contexto (2026-11-19)

Línea Blanca es la **misma empresa** que Arreglo de Lavadoras. El sitio comparte servicios, marcas, ciudades, condiciones, garantía, historia y legales; cambian el diseño, los textos (reescritos con otras palabras para no duplicar contenido ante Google) y los datos de contacto (WhatsApp 312 341 0405 y horario publicado en lineablanca.co). Las URL siguen la misma taxonomía que Arreglo de Lavadoras.

## Por confirmar con el cliente

- [ ] Correo corporativo, razón social y NIT (no hay; los legales remiten a WhatsApp). Los legales son plantillas: requieren revisión legal antes de publicar en el dominio real.
- [ ] Medios de pago (Bancolombia, Nequi, Daviplata) y titular: se copiaron de Arreglo de Lavadoras. Confirmar que son los mismos para Línea Blanca; si no, editarlos en `src/datos/inicio.json` (`pagos`).
- [ ] Testimonios (Andrea Angarita, Carlos Manosalva, Claudia Martínez): vienen de Arreglo de Lavadoras. Confirmar que se pueden mostrar también aquí.
- [x] Horario confirmado por el cliente: lunes a viernes 7:00 a. m. a 5:00 p. m. y sábados 7:00 a. m. a 12:00 m. (domingos y festivos no se trabaja, según lineablanca.co; confirmar).
- [ ] Confirmar que "18 años de experiencia", "10 ciudades" y "14 servicios" también valen para Línea Blanca (misma empresa).
- [ ] La web anterior se titulaba "Servicio Técnico Autorizado"; el rediseño no usa esa frase (no hay autorización de marca que la respalde).
- [ ] Las 12 URL por barrio de Bogotá y las páginas por marca y servicio antiguas de lineablanca.co (más de 60) no se replican uno a uno; las reemplazan `/atendemos-en-<ciudad>/` y `/marcas/<marca>/`. Decidir si hacen falta redirecciones desde las URL viejas al publicar en el dominio real.

## Imágenes

- [ ] Los logos de marcas (`public/brand/marcas/`) son marcas de terceros; se usan solo para identificar los equipos que se atienden, igual que en Arreglo de Lavadoras, con el aviso de que Línea Blanca no es servicio oficial. Solo 12 de las 22 marcas tienen logo; las demás se muestran en texto.

- [ ] Fotos de portada y nevera (Unsplash: Brian Zajac y Lisa Anna, créditos en `creditos-imagenes.md`) y las 8 fotos de servicios (copiadas de Arreglo de Lavadoras): provisionales; ninguna es trabajo real de Línea Blanca. La portada es una cocina con lavavajillas, microondas, estufa y nevera (imagen con aspecto de render).
- [x] Cada servicio tiene un carrusel de tipos con avance automático cada 2,2 s (pausa al pasar el cursor, al tocar o con el botón Pausar). Las 30 fotos por tipo se copiaron de Arreglo de Lavadoras (Pexels, licencia libre sin atribución obligatoria); son de apoyo y conviene reemplazarlas por fotos reales del cliente. Los tipos sin foto (semiautomáticas, inverter, industriales, hongos, etc.) se listan como texto.

## Técnico

- [x] Rediseño completo (inicio, servicios, 14 páginas de servicio, marcas y 22 páginas de marca, 10 páginas de ciudad, nosotros, contacto, legales, 404, sitemap y robots). 55 páginas.
- [x] Enlaces internos revisados automáticamente: ninguno roto.
- [ ] Revisar a 768 px y en celular real antes de enseñar al cliente.
- [ ] Al pasar al dominio real: quitar `noindex` (se activa solo en demos.emp2web.com), definir `PUBLIC_SITE` y `PUBLIC_BASE`, y revisar el sitemap.
- [ ] El tema oscuro solo se activa con el botón de la barra; por defecto el sitio abre siempre en claro.

## Google Ads

- [x] Página de agradecimiento `/gracias/` (noindex, fuera del sitemap y bloqueada en robots.txt del dominio real). El formulario abre WhatsApp y lleva a esa página; es la conversión del formulario.
- [ ] Pedir al especialista de Google Ads el ID (`AW-XXXXXXXXX`) y las etiquetas de conversión para llenar `googleAds` en `src/datos/sitio.json`. Mientras estén vacíos el sitio no carga ningún script de Google; solo avisa al `dataLayer` (`solicitud_enviada`, `clic_whatsapp`, `clic_llamar`) por si usan Tag Manager.
- [ ] Listado de enlaces para el especialista: `entrega/Enlaces-Google-Ads-Linea-Blanca.xlsx`. Regenerar si cambia el dominio o las páginas.
