// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/**
 * Despliegue en GitHub Pages (repositorio de proyecto).
 *
 * El sitio queda en https://centromedicocampeche3212.github.io/CentroMedicoCampeche/
 * El repositorio DEBE llamarse exactamente `CentroMedicoCampeche`: `BASE` es
 * el prefijo que GitHub Pages antepone a todas las rutas, y si el nombre no
 * coincide, cada enlace y cada imagen del sitio apuntan a un 404.
 *
 * Para un dominio propio: cambie SITE por el dominio, ponga BASE = '/' y
 * agregue un archivo public/CNAME con el nombre del dominio.
 */
const SITE = 'https://centromedicocampeche3212.github.io';
const BASE = '/CentroMedicoCampeche/';

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
