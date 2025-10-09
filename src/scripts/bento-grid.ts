// Script para la interactividad del Bento Grid
document.addEventListener("astro:page-load", () => {
  // Definir interfaces para TypeScript
  interface HTMLElementWithStyle extends HTMLElement {
    style: CSSStyleDeclaration;
  }
  
  interface LightEffectElement extends HTMLElementWithStyle {
    style: CSSStyleDeclaration & {
      opacity: string;
      transform: string;
    };
  }
  
  interface BentoCellElement extends HTMLElementWithStyle {
    style: CSSStyleDeclaration & {
      borderImage: string;
    };
  }

  // Función para aplicar el efecto de luz
  function applyLightEffect() {
    // Seleccionamos los elementos y los tipamos
    const bentoCells = document.querySelectorAll<BentoCellElement>(".bento-cell");
    
    // Optimización: Usar throttle para limitar la frecuencia de eventos mousemove
    function throttle(callback: Function, limit: number) {
      let waiting = false;
      return function(this: any, ...args: any[]) {
        if (!waiting) {
          callback.apply(this, args);
          waiting = true;
          setTimeout(() => {
            waiting = false;
          }, limit);
        }
      };
    }

    bentoCells.forEach((cell) => {
      const lightEffect = cell.querySelector<LightEffectElement>(".light-effect");
      
      // Si no hay efecto de luz en esta celda, saltamos
      if (!lightEffect) return;
      
      // Usar mouseenter/mouseleave para mejor rendimiento
      cell.addEventListener("mouseenter", () => {
        lightEffect.style.opacity = "1";
      });

      cell.addEventListener("mouseleave", () => {
        lightEffect.style.opacity = "0";
        cell.style.borderImage = "none";
      });

      // Throttle para el evento mousemove (limitar a 30ms)
      cell.addEventListener("mousemove", throttle((e: MouseEvent) => {
        const rect = cell.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Usar transform para mejor rendimiento
        lightEffect.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        
        // Precalcular valores y reutilizar
        const gradientSize = 153;
        const borderGradient = `
          radial-gradient(
            circle ${gradientSize}px at ${x}px ${y}px,
            rgba(255, 83, 83, 0.5) 50%,
            rgba(255, 255, 255, 0.05) ${gradientSize}px
          ) 1
        `;

        // Usar requestAnimationFrame para cambios visuales
        requestAnimationFrame(() => {
          cell.style.borderImage = borderGradient;
        });
      }, 30));
    });
  }

  // Inicializar el efecto de luz
  applyLightEffect();
});