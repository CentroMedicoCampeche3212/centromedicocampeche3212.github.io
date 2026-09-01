import EmblaCarousel from 'embla-carousel';

/** WCAG 2.2.2: el intervalo debe poder pausarse; 6 s da tiempo a leer. */
const AUTOPLAY_MS = 6000;

/**
 * Inicializa el carrusel del hero.
 *
 * Todo esto es mejora progresiva: sin JavaScript el visor conserva
 * `overflow-x: auto` con scroll-snap y las diapositivas siguen siendo
 * navegables. Los controles (flechas, puntos, pausa) solo se muestran
 * cuando esta función marca la raíz con `data-enhanced`.
 */
export function initHeroCarousel(root: HTMLElement): void {
  const viewport = root.querySelector<HTMLElement>('[data-embla-viewport]');
  const track = root.querySelector<HTMLElement>('[data-embla-track]');
  if (!viewport || !track) return;

  const slides = Array.from(root.querySelectorAll<HTMLElement>('[data-embla-slide]'));
  const dots = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-carousel-dot]'));
  const prevButton = root.querySelector<HTMLButtonElement>('[data-carousel-prev]');
  const nextButton = root.querySelector<HTMLButtonElement>('[data-carousel-next]');
  const toggleButton = root.querySelector<HTMLButtonElement>('[data-carousel-toggle]');
  const toggleLabel = root.querySelector<HTMLElement>('[data-carousel-toggle-label]');
  const iconPlay = root.querySelector<HTMLElement>('[data-carousel-icon="play"]');
  const iconPause = root.querySelector<HTMLElement>('[data-carousel-icon="pause"]');

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const embla = EmblaCarousel(viewport, {
    loop: true,
    align: 'start',
    containScroll: false,
    duration: motion.matches ? 0 : 30,
    watchDrag: true,
  });

  root.dataset.enhanced = 'true';

  /* ------------------------------------------------------------------ estado */

  let timer: number | undefined;
  /** Pausa decidida por la persona. Manda sobre el hover y el foco. */
  let manuallyPaused = motion.matches;
  let hovering = false;
  let focusInside = false;

  const canPlay = () => !manuallyPaused && !hovering && !focusInside && !document.hidden;

  function stopTimer(): void {
    if (timer !== undefined) {
      window.clearInterval(timer);
      timer = undefined;
    }
    // Detenido: los cambios de diapositiva sí deben anunciarse.
    track!.setAttribute('aria-live', 'polite');
  }

  function startTimer(): void {
    stopTimer();
    timer = window.setInterval(() => embla.scrollNext(), AUTOPLAY_MS);
    // En rotación automática se silencia: anunciar cada 6 s es inutilizable.
    track!.setAttribute('aria-live', 'off');
  }

  function syncAutoplay(): void {
    if (canPlay()) startTimer();
    else stopTimer();
  }

  /** Reinicia la cuenta tras una acción manual, para no cortar la lectura. */
  function restartAfterInteraction(): void {
    if (canPlay()) startTimer();
  }

  /* --------------------------------------------------------------- interfaz */

  function updateToggleButton(): void {
    if (!toggleButton) return;
    const playing = timer !== undefined;
    const label = playing ? 'Pausar el cambio automático' : 'Reanudar el cambio automático';

    toggleButton.setAttribute('aria-label', label);
    if (toggleLabel) toggleLabel.textContent = playing ? 'Pausar' : 'Reproducir';
    iconPlay?.classList.toggle('hidden', playing);
    iconPause?.classList.toggle('hidden', !playing);
  }

  function updateSelected(): void {
    const selected = embla.selectedScrollSnap();

    slides.forEach((slide, index) => {
      // Solo la diapositiva a la vista se expone al lector de pantalla.
      slide.setAttribute('aria-hidden', String(index !== selected));
    });

    dots.forEach((dot, index) => {
      const current = index === selected;
      dot.setAttribute('aria-current', current ? 'true' : 'false');
      dot.classList.toggle('is-current', current);
    });

    updateToggleButton();
  }

  /* ---------------------------------------------------------------- eventos */

  prevButton?.addEventListener('click', () => {
    embla.scrollPrev();
    restartAfterInteraction();
  });

  nextButton?.addEventListener('click', () => {
    embla.scrollNext();
    restartAfterInteraction();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      embla.scrollTo(index);
      restartAfterInteraction();
    });
  });

  toggleButton?.addEventListener('click', () => {
    manuallyPaused = !manuallyPaused;
    syncAutoplay();
    updateToggleButton();
  });

  // Pausa al pasar el cursor.
  root.addEventListener('mouseenter', () => {
    hovering = true;
    syncAutoplay();
    updateToggleButton();
  });

  root.addEventListener('mouseleave', () => {
    hovering = false;
    syncAutoplay();
    updateToggleButton();
  });

  // Pausa mientras el foco de teclado esté dentro del carrusel.
  root.addEventListener('focusin', () => {
    focusInside = true;
    syncAutoplay();
    updateToggleButton();
  });

  root.addEventListener('focusout', (event) => {
    const next = event.relatedTarget;
    if (next instanceof Node && root.contains(next)) return;
    focusInside = false;
    syncAutoplay();
    updateToggleButton();
  });

  // Flechas del teclado, disponibles desde cualquier control del carrusel.
  root.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      embla.scrollPrev();
      restartAfterInteraction();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      embla.scrollNext();
      restartAfterInteraction();
    }
  });

  // Arrastre táctil: no tiene sentido competir con el temporizador.
  embla.on('pointerDown', stopTimer);
  embla.on('pointerUp', () => {
    syncAutoplay();
    updateToggleButton();
  });
  embla.on('select', updateSelected);

  // Pestaña en segundo plano: nada que mirar, nada que rotar.
  document.addEventListener('visibilitychange', () => {
    syncAutoplay();
    updateToggleButton();
  });

  // Si activa "reducir movimiento" a mitad de la sesión, se respeta al vuelo.
  motion.addEventListener('change', (event) => {
    if (event.matches) manuallyPaused = true;
    embla.reInit({ duration: event.matches ? 0 : 30 });
    syncAutoplay();
    updateToggleButton();
  });

  updateSelected();
  syncAutoplay();
  updateToggleButton();
}
