// Recomendaciones Duskyberry — catálogo editorial (sin carrito, pagos ni precios).
// Campos: id, img, name, cat (clave de DUSKY_CATS), desc, url (solo https), tag (opcional)
window.DUSKY_CATS = [
  ['personalizacion', 'Impresión y personalización'],
  ['foto-video', 'Fotografía y video'],
  ['computo', 'Equipo de cómputo'],
  ['escritorio', 'Escritorio y productividad'],
  ['negocio', 'Herramientas para negocios']
];
window.DUSKY_MORE_DEALS = 'https://meli.la/2ZBAn5N';
(function () {
  const P = (id, cat, name, url, desc, tag) => ({ id, cat, name, url, desc, tag: tag || '', img: 'assets/productos/' + id + '.png' });
  window.DUSKY_PRODUCTS = [
    P('cricut-maker-5', 'personalizacion', 'Cricut Maker 5 · Kit Essential', 'https://meli.la/2qVHLSs', 'Plotter de corte para vinil, papel, cartulina y más materiales. Una pieza central si quieres producir stickers, etiquetas o decoración personalizada.', 'Para emprender'),
    P('cricut-joy-2', 'personalizacion', 'Cricut Joy 2 · Kit Essential', 'https://meli.la/34jmmtg', 'Plotter de corte compacto para proyectos pequeños: etiquetas, tarjetas y vinil decorativo. Ideal para empezar sin ocupar mucho espacio.'),
    P('kit-lopasa-joy-xtra', 'personalizacion', 'Kit inicial Lopasa para Cricut Joy Xtra', 'https://meli.la/2HiA1yU', 'Kit con viniles, tapetes, herramientas y accesorios para arrancar con tu plotter de corte.'),
    P('tapetes-corte', 'personalizacion', 'Tapetes de corte para Cricut y Silhouette Cameo', 'https://meli.la/1Abuyp8', 'Tapetes de repuesto en distintos niveles de adherencia para trabajar diferentes materiales.'),
    P('herramientas-vinil', 'personalizacion', 'Herramientas para depilar vinil', 'https://meli.la/1bebsHs', 'Set de tijeras, pinzas, ganchos y espátula para retirar el excedente de vinil con precisión.'),
    P('vinil-inkjet', 'personalizacion', 'Vinil adhesivo para impresión inkjet · 40 hojas A4', 'https://meli.la/16icGVy', 'Vinil blanco glossy para imprimir stickers y etiquetas a color en impresora de inyección de tinta.'),
    P('vinil-textil-reflejante', 'personalizacion', 'Vinil textil reflejante para Cameo y Cricut', 'https://meli.la/2FJbRp5', 'Vinil textil con acabado reflejante para playeras y prendas que se notan de día y de noche.'),
    P('plancha-mini', 'personalizacion', 'Plancha mini portátil Mecolour', 'https://meli.la/2ki9viF', 'Plancha compacta para transferir vinil textil y sublimación en playeras, gorras y piezas pequeñas.'),
    P('plancha-8en1', 'personalizacion', 'Plancha combo 8 en 1 para sublimación', 'https://meli.la/2jFVAue', 'Plancha de transferencia con accesorios para playeras, tazas, platos y gorras. Una base versátil para un taller de personalización.', 'Taller completo'),
    P('plancha-tazas', 'personalizacion', 'Plancha para sublimar tazas TLP', 'https://meli.la/2y73nfu', 'Plancha especializada para tazas, termos y piezas cilíndricas.'),
    P('papel-sublimacion', 'personalizacion', 'Papel para sublimación Papira · A4, 200 hojas', 'https://meli.la/1WryfJL', 'Papel de transferencia para sublimar diseños en tazas, playeras de poliéster y más superficies compatibles.'),
    P('tinta-kamo', 'personalizacion', 'Tinta para sublimación Kamo · CMYK 100 ml', 'https://meli.la/2amv2iT', 'Set de tintas de sublimación en cuatro colores para impresoras de inyección compatibles.'),
    P('sony-zv-e10k', 'foto-video', 'Cámara Sony ZV-E10K APS-C', 'https://meli.la/1efMhQV', 'Cámara de lente intercambiable pensada para creadores de contenido: foto y video con un cuerpo compacto.', 'Para creadores'),
    P('canon-2000d', 'foto-video', 'Cámara Canon EOS 2000D con lente 18-55 mm', 'https://meli.la/2TvBYTk', 'Cámara réflex de entrada con lente de kit. Una buena forma de aprender fotografía con control manual.'),
    P('macbook-pro-14', 'computo', 'Apple MacBook Pro 14" con chip M5', 'https://meli.la/2WUtNrt', 'Laptop de alto rendimiento para diseño, edición de video y flujos creativos exigentes.'),
    P('macbook-neo-indigo', 'computo', 'Apple MacBook Neo 13" · Índigo', 'https://meli.la/32nwccV', 'Laptop ligera de Apple para trabajo diario, estudio y proyectos creativos.'),
    P('macbook-neo-amarillo', 'computo', 'Apple MacBook Neo 13" · Amarillo cítrico', 'https://meli.la/2FCBzSk', 'La misma MacBook Neo con 512 GB de almacenamiento y un color que no pasa desapercibido.'),
    P('mac-mini-m4', 'computo', 'Apple Mac mini M4 · 24 GB, 512 GB', 'https://meli.la/1yUDZi8', 'Computadora de escritorio compacta. Conéctala a tu monitor y tienes una estación de trabajo potente que casi no ocupa espacio.'),
    P('ipad-azul', 'computo', 'Apple iPad 11" Wi-Fi 128 GB · Azul', 'https://meli.la/1NVHj8S', 'Tableta para tomar notas, bocetar ideas, leer y presentar desde cualquier lugar.'),
    P('ipad-rosa', 'computo', 'Apple iPad 11" (A16) 128 GB · Rosa', 'https://meli.la/2zLyegu', 'El iPad de 11 pulgadas en color rosa, para notas, lectura y contenido.'),
    P('hp-245-g10', 'computo', 'Laptop HP 245 G10 · Ryzen 5, 512 GB SSD', 'https://meli.la/282h9WZ', 'Laptop práctica para trabajo de oficina, administración y tareas del día a día.'),
    P('lenovo-ideapad', 'computo', 'Laptop Lenovo IdeaPad Slim 3 · Ryzen 5', 'https://meli.la/2iUNVJh', 'Laptop de 15.6" con 512 GB SSD para trabajo, estudio y gestión de tu negocio.'),
    P('hp-elitebook', 'computo', 'Laptop HP EliteBook 8 G1i · Core Ultra 5', 'https://meli.la/1SoaoyH', 'Laptop empresarial con 24 GB de memoria para quienes trabajan con muchas aplicaciones a la vez.'),
    P('silla-vidita', 'escritorio', 'Silla ergonómica Vidita con soporte lumbar', 'https://meli.la/1DTNHGY', 'Silla de oficina con soporte lumbar y cabecera para jornadas largas frente a la pantalla.', 'Imprescindible'),
    P('monitor-lg-27', 'escritorio', 'Monitor LG UltraGear 27" Full HD IPS 144 Hz', 'https://meli.la/1izpPm3', 'Monitor amplio para trabajar con varias ventanas abiertas y revisar diseños con más espacio.'),
    P('monitor-vedd-22', 'escritorio', 'Monitor Vedd 22" Full HD 100 Hz', 'https://meli.la/1tAk4sW', 'Monitor de 22 pulgadas con bocinas integradas: una segunda pantalla accesible para tu escritorio.'),
    P('pizarron', 'escritorio', 'Pizarrón blanco magnético 120 × 60 cm', 'https://meli.la/2YLG3eX', 'Pizarrón con marcadores para planear la semana, mapear ideas y tener tus pendientes a la vista.'),
    P('hp-officejet-200', 'escritorio', 'Impresora a color HP OfficeJet 200 con wifi', 'https://meli.la/2qRFjyT', 'Impresora a color compacta e inalámbrica para propuestas, contratos y pruebas de color.'),
    P('hp-laserjet-m236', 'escritorio', 'Multifuncional HP LaserJet M236sdw con wifi', 'https://meli.la/2HXXPXf', 'Impresora láser monocromática con escáner: ideal para documentos y trámites del día a día.'),
    P('hp-ink-2975', 'escritorio', 'Multifuncional HP Ink Advantage 2975 Wi-Fi', 'https://meli.la/1jrrEHt', 'Imprime, escanea y copia a color desde tu celular con la app de HP.'),
    P('point-smart-2', 'negocio', 'Terminal Point Smart 2 con internet incluido', 'https://meli.la/1W6wiTF', 'Terminal para cobrar con tarjeta que imprime tickets y trae conexión a internet. Ideal para mostrador y negocios con flujo constante.', 'Cobra con tarjeta'),
    P('point-air', 'negocio', 'Mercado Pago Point Air', 'https://meli.la/1QVJhfP', 'Lector compacto para aceptar tarjetas y más formas de pago desde cualquier lugar. Perfecto para bazares, entregas y servicios a domicilio.'),
    P('impresora-termica', 'negocio', 'Impresora térmica portátil de tickets 58 mm', 'https://meli.la/319uhNo', 'Impresora Bluetooth para tickets y comprobantes en tu punto de venta o en eventos.'),
    P('cajas-premium', 'negocio', 'Cajas premium blancas 20 × 15.5 × 5 cm · 25 piezas', 'https://meli.la/31Ek2wz', 'Cajas para envíos y presentación de producto. Un lienzo en blanco para tu etiqueta o sticker de marca.'),
    P('stand-expo', 'negocio', 'Stand módulo portátil publicitario para expo', 'https://meli.la/187s9by', 'Módulo portátil para ferias y activaciones, listo para vestir con la identidad de tu marca.'),
    P('camaras-seguridad', 'negocio', 'Cámaras de seguridad 1080p 360° · 2 piezas', 'https://meli.la/1LywWio', 'Cámaras wifi con visión nocturna para cuidar tu local, bodega u oficina desde el celular.')
  ];
})();
