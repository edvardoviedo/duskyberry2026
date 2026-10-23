# Duskyberry — sitio web

Agencia creativa · diseño visual, video, web, presentaciones, mascotas e invitaciones web.

## Estructura

- `*.dc.html` — páginas del sitio (Inicio, Servicios, Portfolio, Blog, Recomendaciones, Cotización, Muestra gratuita, Invitaciones, Nosotros, Maker, Aviso de privacidad, Términos, 404).
- `SiteHeader.dc.html` / `SiteFooter.dc.html` — header (con loader inicial) y footer compartidos.
- `support.js` — runtime que monta las páginas. Necesario en producción.
- `site-config.js` — configuración central: WhatsApp, correo, dominio y redes sociales.
- `seo.js` — metadatos, Open Graph y datos estructurados (JSON-LD) por página.
- `data/` — artículos del blog (`blog-0X.js`) y productos recomendados (`productos.js`).
- `assets/` — logotipos, portfolio, productos, mascotas e invitaciones.
- `sitemap.xml`, `robots.txt`, `llms.txt` — SEO y visibilidad en buscadores con IA.
- `index.html` — redirige a `Inicio.dc.html`.

## Ejecutar localmente

Es un sitio estático; solo necesita un servidor local (no abrir con `file://`):

```bash
npx serve .
# o
python3 -m http.server 8080
```

Abre `http://localhost:8080`.

## Publicar

Funciona en cualquier hosting estático: GitHub Pages, Netlify, Vercel o Cloudflare Pages.

**GitHub Pages:** sube el repositorio → Settings → Pages → Deploy from branch → `main` / raíz.

## Antes de publicar

1. Define el dominio oficial en `site-config.js` (`domain`) y reemplázalo en `sitemap.xml`, `robots.txt` y `llms.txt`.
2. Revisa con un abogado el aviso de privacidad y los términos y condiciones.
3. Confirma los enlaces de productos en `data/productos.js`.
4. Agrega una imagen Open Graph (1200×630) en `assets/` y su ruta en `seo.js`.

## Editar contenido

- **Nuevo artículo:** añade un objeto en `data/blog-0X.js` (slug, título, categoría, fecha, cuerpo, metadatos) y su URL en `sitemap.xml`.
- **Nuevo producto:** añade un objeto en `data/productos.js` con imagen, nombre, categoría, descripción y enlace.
- **Portfolio:** edita la lista `PIECES` en `Portfolio.dc.html` e incluye la imagen en `assets/portfolio/`.

Hecho con amor en Duskyberry.
