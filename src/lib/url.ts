/**
 * El sitio se publica bajo un subdirectorio en GitHub Pages
 * (`base` en astro.config.mjs), asi que ningun href interno puede
 * escribirse como "/servicios" a secas: se rompe en produccion.
 *
 * Astro solo aplica `base` a los assets que el mismo procesa, no a los
 * enlaces del markup. Todo href interno pasa por esta funcion.
 */
const BASE = import.meta.env.BASE_URL;

/** Devuelve true si la ruta apunta fuera del sitio o es un ancla. */
function isExternal(path: string): boolean {
  return /^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path);
}

/**
 * Prefija una ruta interna con la base del sitio.
 *
 *   withBase('/servicios')  ->  '/CentroMedicoCampeche/servicios'
 *   withBase('/')           ->  '/CentroMedicoCampeche/'
 *   withBase('tel:999')     ->  'tel:999'   (se deja intacta)
 */
export function withBase(path: string = '/'): string {
  if (isExternal(path)) return path;

  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const clean = path.startsWith('/') ? path : `/${path}`;

  return clean === '/' ? `${base}/` : `${base}${clean}`;
}

/**
 * Marca el enlace activo en la navegacion comparando rutas normalizadas
 * (sin base y sin diagonal final).
 */
export function isCurrentPath(href: string, pathname: string): boolean {
  const normalize = (value: string) => {
    const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
    const withoutBase = value.startsWith(base) ? value.slice(base.length) : value;
    const trimmed = withoutBase.replace(/\/+$/, '');
    return trimmed === '' ? '/' : trimmed;
  };

  return normalize(href) === normalize(pathname);
}
