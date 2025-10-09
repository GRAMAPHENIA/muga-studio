# Documentación Inicial – Modelo de Negocio y Sistema de Diseño

## 1. Visión general

Ofrecemos sitios web y aplicaciones modulares, rápidos y eficientes, basados en un sistema de diseño propio. Nuestro enfoque prioriza:

- Velocidad de desarrollo y carga.
- Coherencia estética y funcional.
- Escalabilidad y mantenimiento sencillo.
- Valor real y tangible para el cliente, evitando soluciones sobrecargadas o dependientes de modas pasajeras.

Nuestro lema interno: "Construir con método, entregar con valor".

## 2. Pilar estratégico tecnológico

### Stack elegido

- **Astro**: generación estática por defecto, carga solo lo necesario, optimización de performance.
- **TailwindCSS**: estilos predefinidos mediante tokens de colores, tipografía y espaciado, permitiendo consistencia y rapidez.
- **TypeScript**: mayor seguridad y escalabilidad en el código.
- **Componentes modulares**: reutilizables en múltiples proyectos, fáciles de actualizar y mantener.
- **Hosting y deploy**: Hostinger como principal, Vercel o Netlify para pruebas o proyectos especiales.

### Ventaja frente a la competencia:

- Otros usan WordPress → sitios lentos y difíciles de escalar.
- Otros usan React puro → sobrecarga innecesaria para sitios que no requieren tanta interactividad.
- Nosotros: velocidad + eficiencia + coherencia + escalabilidad, entregando valor real al cliente y reduciendo costos de producción.

## 3. Sistema de diseño

### Objetivos

- Estilo moderno, elegante y atemporal.
- Modular y reutilizable en todos los proyectos.
- Coherente visualmente para mantener identidad en cada sitio.

### Componentes base

- **Botones y CTAs**: primario, secundario, ghost, icono+texto.
- **Cards / bloques de contenido**: información, testimonial, compacta, expandible.
- **Grids y secciones**: Bento grid, columnas flexibles, full width, masonry.
- **Microinteracciones**: hover, fade-in, transiciones, animaciones de íconos.
- **Componentes de marca**: logo, iconografía, tipografía y elementos gráficos.
- **Formularios e inputs**: input simple, input con icono, textarea, botón de envío.
- **Navegación**: navbar fijo, menú hamburguesa, breadcrumb, footer.

### Paleta conceptual:

- Fondo oscuro: #191717
- Acento principal: #FF5353
- Neutros: #D9D9D9, #302E2E, #2D1F1F
- Blanco para contraste: #FFFFFF

### Componentes avanzados:

#### BentoCell

El componente BentoCell es un elemento clave en nuestro sistema de diseño para crear layouts tipo "Bento Grid". Características principales:

- **Estructura flexible**: Permite definir el tamaño mediante colSpan
- **Personalización**: Admite fondos y bordes personalizados
- **Efectos visuales**: Incluye opción para efecto de iluminación
- **Integración con iconografía**: Soporta iconos SVG como imágenes de fondo o elementos internos

**Uso con iconografía**:
- Los iconos se almacenan en `/public/icons/` para optimizar el rendimiento
- Se implementan como elementos `<img>` con clases para control de opacidad y z-index
- Se posicionan con clases de Tailwind para centrado y dimensionamiento
- Permiten superposición de contenido mediante control de capas (z-index)

**Ejemplo de implementación**:
```astro
<BentoCell
  title="Nombre de la sección"
  colSpan="col-span-1 md:col-span-2"
  bgClass="bg-transparent"
  rounded={true}
  lightEffect={true}
>
  <!-- Icono de fondo -->
  <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
    <img src="/icons/nombre-icono.svg" class="w-40 h-40 opacity-10" alt="Descripción del icono">
  </div>
  
  <!-- Contenido principal -->
  <div class="relative z-10">
    <p class="text-muga-neutral py-10">Contenido de la sección</p>
  </div>
</BentoCell>
```

## 4. Flujo de trabajo (pipeline de proyecto)

1. **Diseño inicial**: wireframes y mockups en Figma, aprobación del cliente.
2. **Definición del sistema de diseño**: construcción de la biblioteca de componentes y configuración de tokens de estilo.
3. **Desarrollo del sitio**: maquetado con Astro + Tailwind, integración de componentes y microinteracciones.
4. **QA y pruebas**: performance, accesibilidad, SEO.
5. **Deploy y entrega**: Hostinger o plataforma elegida.
6. **Mantenimiento y upgrades**: plan de suscripción opcional, incluyendo nuevos componentes o ajustes estéticos.

## 5. Modelo de negocio

### Monetización

- **Proyectos base**: precio inicial competitivo por sitio estándar.
- **Extras y personalización**: animaciones, integraciones con APIs, secciones especiales → ingresos adicionales.
- **Mantenimiento y upgrades**: plan de suscripción recurrente.
- **Paquetes modulares**: aprovechar biblioteca de componentes para entregar funcionalidades predefinidas sin rehacer trabajo.

### Ventaja estratégica

- **Rapidez y eficiencia** → entregas más rápidas con menos horas de desarrollo.
- **Coherencia y originalidad** → estilo propio y reconocible, no dependemos de modas pasajeras.
- **Escalabilidad** → crecimiento fácil del proyecto y posibilidad de generar ingresos recurrentes.

## 6. Filosofía de valor

- **Ofrecer algo digno**: cada proyecto tiene sentido, es útil y eficiente.
- **Ser justo con el cliente**: cobramos por valor real entregado, no por complejidad innecesaria.
- **Construir para durar**: diseño atemporal y componentes reutilizables que sostienen futuros desarrollos.
- **Educación y transparencia**: explicamos decisiones de diseño y tecnología para que el cliente entienda el valor entregado.

## 7. KPI de Contrato — AWNG

Nuestros contratos incluyen garantías técnicas medibles que aseguran la calidad y el rendimiento de cada proyecto.

### 1. Performance (Core Web Vitals)

- **LCP (Largest Contentful Paint)**: ≤ 2.5s en el 95% de usuarios móviles (CrUX/field data).
- **CLS (Cumulative Layout Shift)**: ≤ 0.1 (sin saltos de diseño).
- **INP (Interaction to Next Paint)**: ≤ 200ms (respuesta fluida a la interacción).
- **JS Budget inicial**: ≤ 70KB gzip por página (para evitar sobrecarga).

✅ **Cómo se mide**: Google Lighthouse, PageSpeed Insights, CrUX Dashboard, WebPageTest.

### 2. Indexación y SEO técnico

- **Páginas indexadas**: ≥ 95% en Google Search Console dentro de los primeros 30 días post-lanzamiento.
- **Sitemap y robots.txt** correctos (con integraciones de Astro).
- **Metadatos completos**: títulos, descripciones, OpenGraph, schema.org.
- **Jerarquía semántica válida**: uso correcto de H1-H6, landmarks HTML5.

✅ **Cómo se mide**: Google Search Console, ScreamingFrog, Ahrefs/SEMrush.

### 3. Accesibilidad (a11y)

- **Score de accesibilidad**: ≥ 90 en Lighthouse.
- **Cumplimiento WCAG AA**: contraste, navegación por teclado, alt en imágenes, foco visible.
- **Pruebas de usuarios simulados**: validación con herramientas como axe o Playwright + axe-core.

✅ **Cómo se mide**: Lighthouse, axe DevTools, manual con teclado.

### 4. Disponibilidad y confiabilidad

- **Uptime**: ≥ 99.9% en hosting gestionado (Vercel/Netlify/Cloudflare).
- **Seguridad**:
  - HTTPS por defecto.
  - CSP configurado.
  - HSTS activo.
  - Headers de seguridad (X-Frame-Options, Referrer-Policy).
- **Backups**: snapshots de contenido/DB automáticos (si aplica).

✅ **Cómo se mide**: Better Uptime, Pingdom, observabilidad de logs.

### 5. Mantenibilidad y escalabilidad

- **CI/CD configurado**: todo deploy pasa por test de performance + accesibilidad.
- **Componentes documentados**: design system con ≥ 80% de UI cubierta.
- **Tests automatizados**: cobertura mínima 70% de componentes críticos.
- **Escalabilidad progresiva**: capacidad de agregar Server Islands sin reescribir el sitio.

✅ **Cómo se mide**: CI/CD logs, Storybook/Docs internos, cobertura en Vitest/Playwright.

### Integración al Modelo de Negocio AWNG

#### Propuesta de valor
"Nuestros contratos incluyen garantías técnicas medibles (KPI de Performance, SEO, Accesibilidad y Confiabilidad) que otros estudios no ofrecen. No entregamos promesas vagas, entregamos métricas alcanzables."

#### Relación con clientes
"El cliente recibe un informe de KPIs post-lanzamiento (Core Web Vitals, indexación, accesibilidad) y monitoreo mensual si tiene plan de mantenimiento."

#### Diferenciación competitiva
- **Contra WordPress**: no se pueden garantizar Core Web Vitals con 20 plugins.
- **Contra Next.js**: performance más consistente y mantenible sin sobreingeniería.
- **Contra agencias estándar**: contrato basado en métricas, no en estética subjetiva.

### Síntesis
Estos KPI de contrato convierten a la Arquitectura Web de Nueva Generación en un servicio premium y confiable, alineado a métricas reales de negocio (SEO, velocidad, accesibilidad). Son, en sí mismos, una herramienta de ventas porque ponen un estándar técnico que la competencia no se anima a garantizar.