(() => {
  'use strict';


  const I18N = {
    es: {
      'nav.home': 'Inicio',
      'nav.how': 'Cómo funciona',
      'nav.segments': 'A quién sirve',
      'nav.domain': 'Dominio',
      'nav.team': 'Equipo',
      'nav.cta': 'Solicitar demo',
      'hero.eyebrow': 'SaaS logístico · Equipo CodeCraft',
      'hero.title': 'Cero mermas.<br />Trazabilidad total.',
      'hero.subtitle': 'BevTrace digitaliza la cadena de suministro de embotelladoras y distribuidoras de bebidas en envases PET no retornables, uniendo gestión operativa e Internet de las Cosas en un solo sistema.',
      'hero.cta1': 'Ver la solución',
      'hero.cta2': 'Conoce al equipo',
      'hero.credit': 'Proyecto académico de Ingeniería de Software · CodeCraft',
      'intro.eyebrow': 'Por qué existimos',
      'intro.title': 'Una plataforma pensada para quien controla el almacén y quien decide sobre la operación',
      'marquee.item1': 'Gestión de inventarios',
      'marquee.item2': 'Gestión de despachos',
      'marquee.item3': 'Trazabilidad IoT',
      'marquee.item4': 'Alertas automáticas',
      'problem.eyebrow': 'El problema',
      'problem.title': 'El registro manual no debería decidir cuánto pierdes en mermas',
      'problem.description': 'A pesar de los altos volúmenes de producción, almacenes y distribuidoras de bebidas en envases PET no retornables operan con procesos manuales que impiden un control estricto de la mercadería.',
      'problem.cta': 'Ver la solución',
      'accordion.q1': 'Qué problema existe',
      'accordion.a1': 'Pérdida de inventario (mermas), desorganización en la asignación de despachos y nula trazabilidad del estado físico del producto durante las operaciones logísticas.',
      'accordion.q2': 'Por qué ocurre',
      'accordion.a2': 'Los procesos dependen de verificaciones manuales y desconectadas. No existe un ecosistema que integre la lectura masiva de productos ni el monitoreo ambiental de la carga en los vehículos.',
      'accordion.q3': 'Quiénes están involucrados',
      'accordion.a3': 'Empresas embotelladoras y distribuidoras. Operativamente impacta a los Jefes y Gerentes de Logística, así como a los Operarios de Almacén.',
      'accordion.q4': 'Cuándo ocurre',
      'accordion.a4': 'Durante la preparación de pedidos (picking), la asignación de rutas, la carga de vehículos y el transporte hacia los distribuidores finales.',
      'accordion.q5': 'Dónde ocurre',
      'accordion.a5': 'En los centros de distribución, los almacenes de las embotelladoras y durante la ruta de los camiones de transporte.',
      'accordion.q6': 'Cómo se soluciona',
      'accordion.a6': 'Con una plataforma SaaS que centraliza la información y se integra con hardware IoT (sensores de peso, humedad, temperatura y antenas RFID) para automatizar el registro y monitorear el estado de los envases.',
      'accordion.q7': 'Cuánto impacto genera',
      'accordion.a7': 'Las pérdidas por mermas no detectadas a tiempo y las ineficiencias en despachos representan millones en sobrecostos operativos anuales para la industria de bebidas masivas.',
      'solution.eyebrow': 'Cómo lo resolvemos',
      'solution.statement': 'BevTrace centraliza la gestión de inventarios y despachos, permite el monitoreo de los productos en tiempo real e integra telemetría IoT para facilitar la trazabilidad desde el almacén hasta el destino final.',
      'solution.metric1': 'de responsables de almacén reduciría la discrepancia entre inventario registrado y real (H1)',
      'solution.metric2': 'de responsables de logística mejoraría el seguimiento y gestión de despachos (H2)',
      'solution.metric3': 'de responsables de distribución consultaría correctamente el estado y recorrido del producto (H3)',
      'features.eyebrow': 'Lo que incluye la plataforma',
      'features.title': 'Seis módulos que resuelven inventario, despacho y trazabilidad',
      'feature1.title': 'Gestión de inventarios',
      'feature1.desc': 'Registra, consulta y actualiza el stock por lote, zona de almacén y estado, reduciendo la discrepancia entre lo físico y lo registrado.',
      'feature2.title': 'Gestión de despachos',
      'feature2.desc': 'Centraliza la asignación de vehículos, choferes y rutas de entrega, autorizando cada despacho antes de que salga del almacén.',
      'feature3.title': 'Trazabilidad de productos',
      'feature3.desc': 'Sigue el recorrido de cada lote desde el almacén hasta el destino final, con puntos de control y validación de entrega.',
      'feature4.title': 'Monitoreo mediante IoT',
      'feature4.desc': 'Sensores de peso, humedad y temperatura, junto a antenas de lectura RFID, transmiten telemetría en tiempo real desde los vehículos.',
      'feature5.title': 'Alertas de incidencias',
      'feature5.desc': 'Detecta desvíos de ruta, retrasos o anomalías durante el transporte y notifica automáticamente al equipo responsable.',
      'feature6.title': 'Dashboard de indicadores',
      'feature6.desc': 'Visualiza KPIs de mermas, despachos y trazabilidad consolidados en tiempo real para apoyar la toma de decisiones gerenciales.',
      'outcomes.eyebrow': 'Resultados que buscamos validar',
      'outcomes.metric1': 'menos mermas no justificadas al detectar anomalías físicas en tránsito con sensores IoT',
      'outcomes.metric2': 'más velocidad de despacho al registrar pallets completos con lectura masiva',
      'outcomes.metric3': 'más retención de clientes corporativos gracias al dashboard de KPI en tiempo real',
      'rec.eyebrow': 'Una hipótesis de BevTrace',
      'rec.title': 'Dashboard de KPI en tiempo real para gerentes de logística',
      'rec.paragraph': 'Si los Gerentes de Logística obtienen visibilidad gerencial inmediata con un dashboard de KPI en tiempo real, esperamos aumentar la retención de clientes corporativos que hoy dependen de reportes manuales dispersos.',
      'rec.cta': 'Ver arquitectura del dominio',
      'product.title': 'Así se verá BevTrace por dentro',
      'product.note': 'Vista previa del dashboard operativo · próximamente',
      'segments.eyebrow': 'A quién servimos',
      'segments.title': 'Dos segmentos, un solo sistema',
      'segments.lede': 'Un Buyer Persona que decide la compra y un User Persona que opera la plataforma cada día.',
      'seg1.tag': 'Buyer Persona',
      'seg1.title': 'Jefes y Gerentes de Logística',
      'seg1.profile': '35–55 años · Ing. Industrial / Administración · Supply Chain Management',
      'seg1.li1': 'Necesitan visibilidad total de la operación y KPIs actualizados al segundo para reportar a la alta gerencia.',
      'seg1.li2': 'Interactúan con el Dashboard de KPI, las reglas de negocio y los reportes de trazabilidad IoT.',
      'seg1.li3': 'Buscan retorno de inversión (ROI) a través de la optimización de procesos.',
      'seg2.tag': 'User Persona',
      'seg2.title': 'Operarios y Supervisores de Almacén',
      'seg2.profile': '20–45 años · educación técnica o secundaria completa',
      'seg2.li1': 'Necesitan herramientas rápidas que no entorpezcan su labor física.',
      'seg2.li2': 'Usan escáneres y antenas de lectura masiva, validando la carga contra el sistema antes del despacho.',
      'seg2.li3': 'Buscan interfaces claras que eliminen el conteo manual repetitivo.',
      'domain.eyebrow': 'Arquitectura del dominio',
      'domain.title': 'Seis dominios, un solo sistema',
      'domain.lede': 'BevTrace divide su lógica de negocio en Bounded Contexts (Domain-Driven Design) que colaboran mediante eventos de dominio.',
      'domain1.title': 'Inventory Management',
      'domain1.desc': 'Controla lotes, zonas de almacén y mermas (waste) por unidad de producto.',
      'domain2.title': 'Dispatch Management',
      'domain2.desc': 'Orquesta la carga, el vehículo, el chofer y la ruta planificada de cada salida.',
      'domain3.ribbon': 'Core Domain',
      'domain3.title': 'Product Traceability',
      'domain3.desc': 'Bitácora inmutable de checkpoints en ruta y entrega validada con firma del cliente.',
      'domain4.title': 'IoT Telemetry',
      'domain4.desc': 'Ingiere ubicación y estado de conexión de cada dispositivo instalado en los vehículos.',
      'domain5.title': 'Incident &amp; Alert Management',
      'domain5.desc': 'Motor de reglas que detecta anomalías y registra las acciones correctivas aplicadas.',
      'domain6.title': 'Operations Analytics',
      'domain6.desc': 'Consolida KPIs logísticos y métricas financieras de merma (shrinkage) por periodo.',
      'team.eyebrow': 'CodeCraft',
      'team.title': 'El equipo detrás de BevTrace',
      'team.lede': 'Estudiantes de Ingeniería de Software construyendo BevTrace de principio a fin. Arrastra para conocer al equipo.',
      'member.role': 'Ingeniería de Software',
      'member.generic': 'Miembro del equipo CodeCraft en el desarrollo de BevTrace.',
      'member2.desc': 'Programación en C++, edición de video en canvas y experiencia con formatos de startup.',
      'finalcta.title': '¿Listo para eliminar las mermas de tu cadena de distribución?',
      'finalcta.paragraph': 'BevTrace centraliza inventarios, despachos y trazabilidad IoT en un solo sistema, desde el almacén hasta el destino final.',
      'finalcta.cta1': 'Ver la solución',
      'finalcta.cta2': 'Conoce al equipo',
      'footer.tagline': 'Un proyecto de <strong>CodeCraft</strong>, plataforma SaaS de trazabilidad inteligente para distribución de bebidas.',
      'footer.col1Title': 'Plataforma',
      'footer.link1': 'Cómo funciona',
      'footer.link2': 'A quién sirve',
      'footer.link3': 'Arquitectura del dominio',
      'footer.link4': 'Resultados esperados',
      'footer.col2Title': 'Startup',
      'footer.link5': 'Equipo',
      'footer.link6': 'Inicio',
      'footer.link7': 'Términos',
      'footer.link8': 'Privacidad',
      'footer.col3Title': 'Síguenos',
      'footer.copyright': '© 2026 CodeCraft · BevTrace. Proyecto académico de Ingeniería de Software.',
      'legal.termsTitle': 'Términos de uso',
      'legal.termsBody': 'Contenido de ejemplo para el proyecto académico BevTrace.',
      'legal.privacyTitle': 'Política de privacidad',
      'legal.privacyBody': 'Contenido de ejemplo para el proyecto académico BevTrace.'
    },
    en: {
      'nav.home': 'Home',
      'nav.how': 'How it works',
      'nav.segments': 'Who we serve',
      'nav.domain': 'Domain',
      'nav.team': 'Team',
      'nav.cta': 'Request a demo',
      'hero.eyebrow': 'Logistics SaaS · CodeCraft Team',
      'hero.title': 'Zero shrinkage.<br />Total traceability.',
      'hero.subtitle': 'BevTrace digitizes the supply chain of bottlers and distributors of beverages in non-returnable PET containers, bringing operations management and the Internet of Things together in one system.',
      'hero.cta1': 'See the solution',
      'hero.cta2': 'Meet the team',
      'hero.credit': 'Academic Software Engineering project · CodeCraft',
      'intro.eyebrow': 'Why we exist',
      'intro.title': 'A platform built for whoever runs the warehouse and whoever decides on the operation',
      'marquee.item1': 'Inventory management',
      'marquee.item2': 'Dispatch management',
      'marquee.item3': 'IoT traceability',
      'marquee.item4': 'Automatic alerts',
      'problem.eyebrow': 'The problem',
      'problem.title': "Manual record-keeping shouldn't decide how much you lose to shrinkage",
      'problem.description': 'Despite high production volumes, warehouses and distributors of beverages in non-returnable PET containers still run on manual processes that make strict control of merchandise impossible.',
      'problem.cta': 'See the solution',
      'accordion.q1': 'What the problem is',
      'accordion.a1': "Inventory loss (shrinkage), disorganized dispatch assignment, and zero traceability of the product's physical condition during logistics operations.",
      'accordion.q2': 'Why it happens',
      'accordion.a2': 'Processes rely on manual, disconnected checks. There is no ecosystem that integrates bulk product scanning or environmental monitoring of the cargo in vehicles.',
      'accordion.q3': 'Who is involved',
      'accordion.a3': 'Bottling and distribution companies. Operationally it affects Logistics Managers and Supervisors, as well as Warehouse Operators.',
      'accordion.q4': 'When it happens',
      'accordion.a4': 'During order picking, route assignment, vehicle loading, and transport to final distributors.',
      'accordion.q5': 'Where it happens',
      'accordion.a5': "In distribution centers, bottlers' warehouses, and along the route of transport trucks.",
      'accordion.q6': "How it's solved",
      'accordion.a6': 'With a SaaS platform that centralizes information and integrates with IoT hardware (weight, humidity and temperature sensors, plus RFID antennas) to automate record-keeping and monitor the condition of the containers.',
      'accordion.q7': 'How much impact it has',
      'accordion.a7': 'Losses from undetected shrinkage and dispatch inefficiencies represent millions in annual operating overcosts for the mass beverage industry.',
      'solution.eyebrow': 'How we solve it',
      'solution.statement': 'BevTrace centralizes inventory and dispatch management, enables real-time product monitoring, and integrates IoT telemetry to make traceability possible from the warehouse to the final destination.',
      'solution.metric1': 'of warehouse managers would reduce the discrepancy between recorded and actual inventory (H1)',
      'solution.metric2': 'of logistics managers would improve dispatch tracking and management (H2)',
      'solution.metric3': 'of distribution managers would correctly check product status and route (H3)',
      'features.eyebrow': 'What the platform includes',
      'features.title': 'Six modules that solve inventory, dispatch and traceability',
      'feature1.title': 'Inventory management',
      'feature1.desc': 'Records, checks and updates stock by batch, warehouse zone and status, reducing the gap between physical and recorded inventory.',
      'feature2.title': 'Dispatch management',
      'feature2.desc': 'Centralizes the assignment of vehicles, drivers and delivery routes, authorizing every dispatch before it leaves the warehouse.',
      'feature3.title': 'Product traceability',
      'feature3.desc': "Tracks the journey of every batch from the warehouse to its final destination, with checkpoints and delivery validation.",
      'feature4.title': 'IoT monitoring',
      'feature4.desc': 'Weight, humidity and temperature sensors, along with RFID reader antennas, transmit real-time telemetry from the vehicles.',
      'feature5.title': 'Incident alerts',
      'feature5.desc': 'Detects route deviations, delays or anomalies during transport and automatically notifies the responsible team.',
      'feature6.title': 'KPI dashboard',
      'feature6.desc': 'Visualizes consolidated shrinkage, dispatch and traceability KPIs in real time to support management decisions.',
      'outcomes.eyebrow': 'Results we aim to validate',
      'outcomes.metric1': 'fewer unexplained losses by detecting physical anomalies in transit with IoT sensors',
      'outcomes.metric2': 'faster dispatch by registering full pallets with bulk scanning',
      'outcomes.metric3': 'more corporate client retention thanks to the real-time KPI dashboard',
      'rec.eyebrow': 'A BevTrace hypothesis',
      'rec.title': 'Real-time KPI dashboard for logistics managers',
      'rec.paragraph': 'If Logistics Managers get immediate management visibility through a real-time KPI dashboard, we expect to increase retention among corporate clients who today rely on scattered manual reports.',
      'rec.cta': 'See the domain architecture',
      'product.title': "Here's a look inside BevTrace",
      'product.note': 'Preview of the operations dashboard · coming soon',
      'segments.eyebrow': 'Who we serve',
      'segments.title': 'Two segments, one system',
      'segments.lede': 'A Buyer Persona who decides the purchase and a User Persona who operates the platform every day.',
      'seg1.tag': 'Buyer Persona',
      'seg1.title': 'Logistics Managers and Supervisors',
      'seg1.profile': 'Ages 35–55 · Industrial Engineering / Business Administration · Supply Chain Management',
      'seg1.li1': 'Need full visibility of the operation and second-by-second KPIs to report to senior management.',
      'seg1.li2': 'Interact with the KPI dashboard, business rules, and IoT traceability reports.',
      'seg1.li3': 'Look for return on investment (ROI) through process optimization.',
      'seg2.tag': 'User Persona',
      'seg2.title': 'Warehouse Operators and Supervisors',
      'seg2.profile': 'Ages 20–45 · technical or completed secondary education',
      'seg2.li1': "Need fast tools that don't get in the way of their physical work.",
      'seg2.li2': 'Use scanners and bulk-read antennas, validating the load against the system before dispatch.',
      'seg2.li3': 'Look for clear interfaces that eliminate repetitive manual counting.',
      'domain.eyebrow': 'Domain architecture',
      'domain.title': 'Six domains, one system',
      'domain.lede': 'BevTrace splits its business logic into Bounded Contexts (Domain-Driven Design) that collaborate through domain events.',
      'domain1.title': 'Inventory Management',
      'domain1.desc': 'Controls batches, warehouse zones and shrinkage (waste) per product unit.',
      'domain2.title': 'Dispatch Management',
      'domain2.desc': 'Orchestrates the load, vehicle, driver and planned route for every departure.',
      'domain3.ribbon': 'Core Domain',
      'domain3.title': 'Product Traceability',
      'domain3.desc': "Immutable log of checkpoints along the route and delivery validated with the customer's signature.",
      'domain4.title': 'IoT Telemetry',
      'domain4.desc': 'Ingests location and connection status from every device installed in the vehicles.',
      'domain5.title': 'Incident &amp; Alert Management',
      'domain5.desc': 'Rules engine that detects anomalies and logs the corrective actions taken.',
      'domain6.title': 'Operations Analytics',
      'domain6.desc': 'Consolidates logistics KPIs and financial shrinkage metrics per period.',
      'team.eyebrow': 'CodeCraft',
      'team.title': 'The team behind BevTrace',
      'team.lede': 'Software Engineering students building BevTrace from start to finish. Drag to meet the team.',
      'member.role': 'Software Engineering',
      'member.generic': 'Member of the CodeCraft team building BevTrace.',
      'member2.desc': 'C++ programming, canvas video editing, and experience with startup formats.',
      'finalcta.title': 'Ready to eliminate shrinkage from your distribution chain?',
      'finalcta.paragraph': 'BevTrace centralizes inventory, dispatch and IoT traceability in one system, from the warehouse to the final destination.',
      'finalcta.cta1': 'See the solution',
      'finalcta.cta2': 'Meet the team',
      'footer.tagline': 'A project by <strong>CodeCraft</strong>, a smart traceability SaaS platform for beverage distribution.',
      'footer.col1Title': 'Platform',
      'footer.link1': 'How it works',
      'footer.link2': 'Who we serve',
      'footer.link3': 'Domain architecture',
      'footer.link4': 'Expected results',
      'footer.col2Title': 'Startup',
      'footer.link5': 'Team',
      'footer.link6': 'Home',
      'footer.link7': 'Terms',
      'footer.link8': 'Privacy',
      'footer.col3Title': 'Follow us',
      'footer.copyright': '© 2026 CodeCraft · BevTrace. Academic Software Engineering project.',
      'legal.termsTitle': 'Terms of use',
      'legal.termsBody': 'Sample content for the BevTrace academic project.',
      'legal.privacyTitle': 'Privacy policy',
      'legal.privacyBody': 'Sample content for the BevTrace academic project.'
    }
  };

  function applyLanguage(lang) {
    const dict = I18N[lang] || I18N.es;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang-option]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.langOption === lang);
    });
  }

  document.querySelectorAll('[data-lang-option]').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.langOption));
  });
  applyLanguage('es');

  const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (hasFinePointer) {
    const dot = document.querySelector('[data-cursor-dot]');
    const ring = document.querySelector('[data-cursor-ring]');
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;

    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    });

    function raf() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(raf);
    }
    raf();

    function bindHoverTargets() {
      document.querySelectorAll('[data-hover], a, button').forEach((el) => {
        if (el.dataset.cursorBound) return;
        el.dataset.cursorBound = 'true';
        el.addEventListener('mouseenter', () => ring.classList.add('cursor-ring--active'));
        el.addEventListener('mouseleave', () => ring.classList.remove('cursor-ring--active'));
      });
    }
    bindHoverTargets();
  }

  const header = document.querySelector('[data-site-header]');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  const navLinks = document.querySelectorAll('[data-nav-link]');
  const sections = Array.from(navLinks)
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = `#${entry.target.id}`;
        navLinks.forEach((link) => {
          link.classList.toggle('site-header__link--active', link.getAttribute('href') === id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach((section) => spy.observe(section));
  }

  const drawer = document.querySelector('[data-drawer]');
  const drawerBackdrop = document.querySelector('[data-drawer-backdrop]');
  const drawerToggle = document.querySelector('[data-drawer-toggle]');
  const drawerClose = document.querySelector('[data-drawer-close]');

  function openDrawer() {
    drawer.classList.add('is-open');
    drawerBackdrop.classList.add('is-open');
    drawerToggle?.setAttribute('aria-expanded', 'true');
  }
  function closeDrawer() {
    drawer.classList.remove('is-open');
    drawerBackdrop.classList.remove('is-open');
    drawerToggle?.setAttribute('aria-expanded', 'false');
  }

  drawerToggle?.addEventListener('click', openDrawer);
  drawerClose?.addEventListener('click', closeDrawer);
  drawerBackdrop?.addEventListener('click', closeDrawer);
  document.querySelectorAll('[data-drawer-link]').forEach((link) => link.addEventListener('click', closeDrawer));

  if (hasFinePointer) {
    document.querySelectorAll('[data-magnetic]').forEach((wrap) => {
      const max = parseFloat(wrap.dataset.magneticMax || '14');
      const child = wrap.firstElementChild;

      wrap.addEventListener('mousemove', (e) => {
        const rect = wrap.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        const x = Math.max(-max, Math.min(max, relX * 0.28));
        const y = Math.max(-max, Math.min(max, relY * 0.28));
        child.style.transform = `translate(${x}px, ${y}px)`;
      });

      wrap.addEventListener('mouseleave', () => {
        child.style.transform = 'translate(0, 0)';
      });
    });
  }

  document.querySelectorAll('[data-liquid-glass], .liquid-glass').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--glass-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
      el.style.setProperty('--glass-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
    });
  });

  document.querySelectorAll('[data-accordion-item]').forEach((item) => {
    const trigger = item.querySelector('[data-accordion-trigger]');
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('accordion__item--active');
      item.closest('[data-accordion]').querySelectorAll('[data-accordion-item]').forEach((el) => {
        el.classList.remove('accordion__item--active');
        el.querySelector('[data-accordion-trigger]').setAttribute('aria-expanded', 'false');
      });
      if (!isActive) {
        item.classList.add('accordion__item--active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  const revealTargets = document.querySelectorAll('[data-reveal]');
  if (revealTargets.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealTargets.forEach((el) => revealObserver.observe(el));
  }

  const heroBg = document.querySelector('[data-parallax-bg]');
  const heroMark = document.querySelector('[data-parallax-mark]');
  if (heroBg || heroMark) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (heroBg) heroBg.style.transform = `translateY(${y * 0.18}px)`;
      if (heroMark) heroMark.style.transform = `translateY(${y * 0.08}px) rotate(${y * 0.01}deg)`;
    }, { passive: true });
  }

  function makeDraggable(track) {
    if (!track) return;
    let isDown = false, startX, scrollLeft, moved = false;

    track.addEventListener('mousedown', (e) => {
      isDown = true;
      moved = false;
      track.classList.add('is-dragging');
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });
    ['mouseleave', 'mouseup'].forEach((evt) => track.addEventListener(evt, () => {
      isDown = false;
      track.classList.remove('is-dragging');
    }));
    track.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = x - startX;
      if (Math.abs(walk) > 5) moved = true;
      track.scrollLeft = scrollLeft - walk * 1.4;
    });
    track.addEventListener('click', (e) => {
      if (moved) { e.preventDefault(); e.stopPropagation(); }
    }, true);
  }

  document.querySelectorAll('[data-drag-track]').forEach(makeDraggable);

  const featureTrack = document.querySelector('[data-feature-track]');
  if (featureTrack) {
    makeDraggable(featureTrack);
    const slides = Array.from(featureTrack.querySelectorAll('[data-feature-slide]'));
    const dotsWrap = document.querySelector('[data-feature-dots]');
    const prevBtn = document.querySelector('[data-feature-prev]');
    const nextBtn = document.querySelector('[data-feature-next]');

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', `Ir a la diapositiva ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.children);

    let activeIndex = 0;
    let userIsDragging = false;

    function setActive(index) {
      activeIndex = index;
      slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
      dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
    }

    function goToSlide(index) {
      const clamped = Math.max(0, Math.min(slides.length - 1, index));
      const slide = slides[clamped];
      const maxScrollLeft = featureTrack.scrollWidth - featureTrack.clientWidth;
      const target = slide.offsetLeft - (featureTrack.clientWidth - slide.clientWidth) / 2;
      featureTrack.scrollTo({
        left: Math.max(0, Math.min(maxScrollLeft, target)),
        behavior: 'smooth'
      });
      setActive(clamped);
    }

    function currentIndexFromScroll() {
      const maxScrollLeft = featureTrack.scrollWidth - featureTrack.clientWidth;
      if (featureTrack.scrollLeft <= 2) return 0;
      if (featureTrack.scrollLeft >= maxScrollLeft - 2) return slides.length - 1;
      const center = featureTrack.scrollLeft + featureTrack.clientWidth / 2;
      let closest = 0, minDist = Infinity;
      slides.forEach((slide, i) => {
        const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
        const dist = Math.abs(slideCenter - center);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      return closest;
    }

    let scrollRaf;
    featureTrack.addEventListener('scroll', () => {
      if (!userIsDragging) return;
      cancelAnimationFrame(scrollRaf);
      scrollRaf = requestAnimationFrame(() => setActive(currentIndexFromScroll()));
    }, { passive: true });

    featureTrack.addEventListener('mousedown', () => { userIsDragging = true; });
    window.addEventListener('mouseup', () => { userIsDragging = false; });
    featureTrack.addEventListener('touchstart', () => { userIsDragging = true; }, { passive: true });
    featureTrack.addEventListener('touchend', () => { userIsDragging = false; });

    prevBtn?.addEventListener('click', () => goToSlide(activeIndex - 1));
    nextBtn?.addEventListener('click', () => goToSlide(activeIndex + 1));

    setActive(0);
    window.addEventListener('resize', () => setActive(currentIndexFromScroll()));
  }

  const segmentsPager = document.querySelector('[data-segments-pager]');
  if (segmentsPager) {
    const slides = Array.from(segmentsPager.querySelectorAll('[data-segments-slide]'));
    const currentLabel = segmentsPager.querySelector('[data-segments-current]');
    const totalLabel = segmentsPager.querySelector('[data-segments-total]');
    const prevBtn = segmentsPager.querySelector('[data-segments-prev]');
    const nextBtn = segmentsPager.querySelector('[data-segments-next]');
    let index = 0;
    let autoTimer;

    totalLabel.textContent = String(slides.length).padStart(2, '0');

    function render(newIndex) {
      const clamped = (newIndex + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        slide.classList.toggle('is-active', i === clamped);
      });
      currentLabel.textContent = String(clamped + 1).padStart(2, '0');
      index = clamped;
    }

    function next() { render(index + 1); resetAuto(); }
    function prev() { render(index - 1); resetAuto(); }

    function resetAuto() {
      clearInterval(autoTimer);
      autoTimer = setInterval(() => render(index + 1), 6000);
    }

    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);

    render(0);
    resetAuto();

    segmentsPager.addEventListener('mouseenter', () => clearInterval(autoTimer));
    segmentsPager.addEventListener('mouseleave', resetAuto);
  }

  const legalDrawer = document.querySelector('[data-legal-drawer]');
  if (legalDrawer) {
    document.querySelectorAll('[data-legal]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const kind = link.dataset.legal;
        legalDrawer.querySelectorAll('[data-legal-content]').forEach((c) => {
          c.hidden = c.dataset.legalContent !== kind;
        });
        legalDrawer.hidden = false;
      });
    });
    legalDrawer.querySelectorAll('[data-legal-close]').forEach((btn) => {
      btn.addEventListener('click', () => { legalDrawer.hidden = true; });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
