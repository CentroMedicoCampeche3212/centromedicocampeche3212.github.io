// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/**
 * Despliegue en GitHub Pages, en la raíz del dominio.
 *
 * El sitio vive en https://centromedicocampeche3212.github.io/
 *
 * Para que sirva desde la raíz, el repositorio DEBE llamarse exactamente
 * `centromedicocampeche3212.github.io` (el patrón `<usuario>.github.io` que
 * GitHub reserva para el sitio personal de la cuenta).
 *
 * Antes vivía en /CentroMedicoCampeche/ y se movió por un motivo concreto:
 * GitHub Pages distingue mayúsculas en la ruta, y el enlace publicado en la
 * página de Facebook estaba en minúsculas, así que daba 404. Sin ruta no hay
 * capitalización que equivocar. Las direcciones antiguas siguen funcionando
 * gracias al redireccionador de public/ y al de la página 404.
 *
 * Para un dominio propio: cambie SITE por el dominio y agregue un archivo
 * public/CNAME con el nombre del dominio. BASE se queda en '/'.
 */
const SITE = 'https://centromedicocampeche3212.github.io';
const BASE = '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  // El formato WebP se pide en cada <Image format="webp" />, no de forma
  // global, para poder dejar en su formato original algún activo puntual.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
