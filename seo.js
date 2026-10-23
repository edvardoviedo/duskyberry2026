// SEO + GEO compartido para todas las páginas de Duskyberry.
// Genera: lang, canonical (si hay dominio en site-config.js), Open Graph, Twitter Cards,
// JSON-LD de Organization + WebSite, BreadcrumbList (desde la ruta de navegación),
// FAQPage (desde <details><summary>), Service (páginas de servicio) y ItemList (recomendaciones).
(function () {
  var C = window.DUSKY_CONFIG || {};
  var ORIGIN = C.domain ? String(C.domain).replace(/\/$/, '') : '';
  document.documentElement.lang = 'es-MX';
  function abs(path) { return ORIGIN ? ORIGIN + '/' + String(path).replace(/^\.?\//, '') : path; }
  function meta(attr, key, val) { if (!val) return; var m = document.head.querySelector('meta[' + attr + '="' + key + '"]'); if (!m) { m = document.createElement('meta'); m.setAttribute(attr, key); document.head.appendChild(m); } m.setAttribute('content', val); }
  function link(rel, href) { var l = document.head.querySelector('link[rel="' + rel + '"]'); if (!l) { l = document.createElement('link'); l.rel = rel; document.head.appendChild(l); } l.href = href; }
  function ld(id, obj) { var s = document.getElementById(id); if (!obj) { if (s) s.remove(); return; } if (!s) { s = document.createElement('script'); s.type = 'application/ld+json'; s.id = id; document.head.appendChild(s); } s.textContent = JSON.stringify(obj); }
  function txt(el) { return el ? el.textContent.replace(/\s+/g, ' ').trim() : ''; }
  var SERVICES = ['Diseño visual para redes sociales y campañas', 'Video y contenido audiovisual', 'Diseño web, landing pages y experiencias digitales', 'Presentaciones y pitch decks', 'Mascotas y personajes para marcas', 'Invitaciones web personalizadas'];
  function run() {
    var file = location.pathname.split('/').pop() || 'Inicio.dc.html';
    var url = ORIGIN ? abs(file) + location.search : '';
    var title = document.title;
    var descEl = document.querySelector('meta[name="description"]');
    var desc = descEl ? descEl.content : '';
    var img = abs('assets/duskyberry-logo.png');
    var isArticle = !!document.getElementById('ld-article');
    if (url) link('canonical', url);
    meta('name', 'theme-color', '#000000');
    meta('property', 'og:site_name', 'Duskyberry');
    meta('property', 'og:locale', 'es_MX');
    meta('property', 'og:type', isArticle ? 'article' : 'website');
    meta('property', 'og:title', title);
    meta('property', 'og:description', desc);
    meta('property', 'og:image', img);
    meta('property', 'og:image:alt', 'Logotipo de Duskyberry Studio');
    if (url) meta('property', 'og:url', url);
    meta('name', 'twitter:card', 'summary_large_image');
    meta('name', 'twitter:title', title);
    meta('name', 'twitter:description', desc);
    meta('name', 'twitter:image', img);

    var orgId = (ORIGIN || '') + '#organizacion';
    var social = Object.keys(C.social || {}).map(function (k) { return C.social[k]; }).filter(Boolean);
    var org = {
      '@type': 'Organization', '@id': orgId, name: 'Duskyberry', alternateName: 'Duskyberry Studio',
      slogan: 'Somos tu agencia creativa favorita.',
      description: 'Duskyberry es una agencia creativa independiente nacida en 2024 en México. Diseña contenido visual, videos, sitios web, presentaciones, mascotas para marcas e invitaciones web para negocios, marcas y profesionales de México y de todo el mundo.',
      foundingDate: '2024', logo: img, image: img,
      areaServed: [{ '@type': 'Country', name: 'México' }, { '@type': 'Place', name: 'Internacional' }],
      knowsLanguage: 'es',
      knowsAbout: ['Diseño gráfico', 'Branding', 'Contenido para redes sociales', 'Edición de video', 'Motion graphics', 'Diseño web', 'Landing pages', 'Presentaciones', 'Diseño de personajes', 'Invitaciones digitales'],
      contactPoint: { '@type': 'ContactPoint', telephone: '+52-844-293-4546', contactType: 'ventas', availableLanguage: ['es'], areaServed: 'MX' },
      makesOffer: SERVICES.map(function (s) { return { '@type': 'Offer', itemOffered: { '@type': 'Service', name: s } }; })
    };
    if (ORIGIN) org.url = ORIGIN + '/';
    if (social.length) org.sameAs = social;
    var site = { '@type': 'WebSite', '@id': (ORIGIN || '') + '#sitio', name: 'Duskyberry', inLanguage: 'es-MX', publisher: { '@id': orgId } };
    if (ORIGIN) site.url = ORIGIN + '/';
    var page = { '@type': isArticle ? 'WebPage' : (file.indexOf('Blog') === 0 ? 'CollectionPage' : 'WebPage'), name: title, description: desc, inLanguage: 'es-MX', isPartOf: { '@id': (ORIGIN || '') + '#sitio' }, about: { '@id': orgId } };
    if (url) page.url = url;
    ld('ld-site', { '@context': 'https://schema.org', '@graph': [org, site, page] });

    var crumbs = document.querySelector('nav[aria-label="Ruta de navegación"]');
    if (crumbs) {
      var items = [], pos = 1;
      crumbs.querySelectorAll('a, [aria-current]').forEach(function (el) {
        var it = { '@type': 'ListItem', position: pos++, name: txt(el) };
        if (el.getAttribute('href')) it.item = abs(el.getAttribute('href')); else if (url) it.item = url;
        items.push(it);
      });
      ld('ld-breadcrumbs', items.length ? { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items } : null);
    }

    var faqs = [];
    document.querySelectorAll('details').forEach(function (d) {
      var q = txt(d.querySelector('summary span')) || txt(d.querySelector('summary'));
      var a = txt(d.querySelector('p'));
      if (q && a) faqs.push({ '@type': 'Question', name: q.replace(/\+$/, '').trim(), acceptedAnswer: { '@type': 'Answer', text: a } });
    });
    ld('ld-faq', faqs.length ? { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs } : null);

    if (/^Servicio-|^Invitaciones/.test(file)) {
      var h1 = txt(document.querySelector('h1'));
      var name = txt(document.querySelector('nav[aria-label="Ruta de navegación"] [aria-current]')) || h1;
      ld('ld-service', { '@context': 'https://schema.org', '@type': 'Service', name: name, serviceType: name, description: desc, provider: { '@id': orgId }, areaServed: ['México', 'Latinoamérica'], availableChannel: { '@type': 'ServiceChannel', serviceUrl: abs('Cotizacion.dc.html') } });
    }

    if (/^Recursos/.test(file) && window.DUSKY_PRODUCTS) {
      ld('ld-list', { '@context': 'https://schema.org', '@type': 'ItemList', name: 'Recomendaciones Duskyberry', itemListElement: window.DUSKY_PRODUCTS.map(function (p, i) { return { '@type': 'ListItem', position: i + 1, item: { '@type': 'Product', name: p.name, description: p.desc, image: abs(p.img) } }; }) });
    }
  }
  function go() { setTimeout(run, 700); }
  if (document.readyState === 'complete') go(); else window.addEventListener('load', go);
  window.addEventListener('db:posts', function () { setTimeout(run, 400); });
})();
