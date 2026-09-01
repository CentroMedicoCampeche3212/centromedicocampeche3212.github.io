/**
 * Set de iconos propio, dibujado sobre una retícula de 24x24.
 *
 * Se define aquí y no con una librería externa porque el sitio usa poco más
 * de veinte iconos: incrustarlos como SVG en línea evita una dependencia y
 * una petición de red, y permite que hereden `currentColor`.
 *
 * `mode: 'stroke'` (predeterminado) para los iconos de interfaz;
 * `mode: 'fill'` para los glifos de marca y los triángulos macizos.
 */

export type IconMode = 'stroke' | 'fill';

export interface IconDef {
  /** Contenido interno del <svg>, sin el propio elemento raíz. */
  body: string;
  mode?: IconMode;
}

export const icons = {
  /* ------------------------------------------------------- interfaz */
  menu: { body: '<path d="M3.5 7h17M3.5 12h17M3.5 17h17"/>' },
  close: { body: '<path d="m6 6 12 12M18 6 6 18"/>' },
  'chevron-left': { body: '<path d="m14.5 4.5-7.5 7.5 7.5 7.5"/>' },
  'chevron-right': { body: '<path d="m9.5 4.5 7.5 7.5-7.5 7.5"/>' },
  'arrow-right': { body: '<path d="M3.5 12h16m-6.5-6.5 6.5 6.5-6.5 6.5"/>' },
  check: { body: '<path d="m4.5 12.5 5 5 10-11.5"/>' },
  play: { body: '<path d="M8 5.2v13.6L19 12z"/>', mode: 'fill' as IconMode },
  pause: {
    body: '<path d="M8.25 4.75h2.75v14.5H8.25zM13 4.75h2.75v14.5H13z"/>',
    mode: 'fill' as IconMode,
  },
  'external-link': {
    body:
      '<path d="M14 4.25h5.75V10M19.75 4.25 11.5 12.5"/>' +
      '<path d="M17.75 14v4.75a1.75 1.75 0 0 1-1.75 1.75H5.5a1.75 1.75 0 0 1-1.75-1.75V8.25A1.75 1.75 0 0 1 5.5 6.5h4.75"/>',
  },

  /* -------------------------------------------------------- contacto */
  phone: {
    body:
      '<path d="M6.75 3h2.9l1.45 3.9-2 1.45a12.4 12.4 0 0 0 6.55 6.55l1.45-2 3.9 1.45v2.9a2 2 0 0 1-2.2 2A17 17 0 0 1 4.75 5.2 2 2 0 0 1 6.75 3Z"/>',
  },
  whatsapp: {
    body:
      '<path d="M20.75 11.6a8.4 8.4 0 0 1-12.3 7.45L3.5 20.5l1.5-4.85A8.4 8.4 0 1 1 20.75 11.6Z"/>' +
      '<path d="M9.15 8.5h1.4l.85 2-1 .95a6.4 6.4 0 0 0 3.15 3.15l.95-1 2 .85v1.4a1.15 1.15 0 0 1-1.3 1.05 8.7 8.7 0 0 1-7.1-7.1A1.15 1.15 0 0 1 9.15 8.5Z"/>',
  },
  mail: {
    body:
      '<rect x="3" y="5.25" width="18" height="13.5" rx="2"/>' +
      '<path d="m3.75 6.75 8.25 6 8.25-6"/>',
  },
  'map-pin': {
    body:
      '<path d="M12 21.25s7.25-5.5 7.25-11.25a7.25 7.25 0 1 0-14.5 0C4.75 15.75 12 21.25 12 21.25Z"/>' +
      '<circle cx="12" cy="9.75" r="2.6"/>',
  },
  clock: {
    body: '<circle cx="12" cy="12" r="8.75"/><path d="M12 6.75V12l3.6 2.15"/>',
  },
  calendar: {
    body:
      '<rect x="3.25" y="5.5" width="17.5" height="15.25" rx="2"/>' +
      '<path d="M3.25 10.25h17.5M8 3.25v4.5M16 3.25v4.5"/>',
  },

  /* ------------------------------------------------- servicios médicos */
  ambulance: {
    body:
      '<path d="M2.75 6.75h10.5v9H2.75zM13.25 9.75h3.9l3.35 3.3v2.7h-7.25z"/>' +
      '<path d="M6.9 9v3.4M5.2 10.7h3.4"/>' +
      '<circle cx="7" cy="17.75" r="2"/><circle cx="17.25" cy="17.75" r="2"/>' +
      '<path d="M2.75 17.75h2.25M9 17.75h6.25M19.25 17.75h2"/>',
  },
  stethoscope: {
    body:
      '<path d="M6.5 3v4.6a4 4 0 0 0 8 0V3"/>' +
      '<path d="M5 3h1.5M13 3h1.5"/>' +
      '<path d="M10.5 11.6v2.6a4.6 4.6 0 0 0 9.2 0v-.9"/>' +
      '<circle cx="19.7" cy="9.9" r="2.3"/>',
  },
  baby: {
    body:
      '<circle cx="12" cy="12" r="8.75"/>' +
      '<path d="M9.2 10.4h.01M14.8 10.4h.01"/>' +
      '<path d="M9 14.4a3.7 3.7 0 0 0 6 0"/>',
  },
  flask: {
    body:
      '<path d="M9.5 3v6.3l-4.8 8.1a1.9 1.9 0 0 0 1.65 2.85h11.3a1.9 1.9 0 0 0 1.65-2.85L14.5 9.3V3"/>' +
      '<path d="M8.25 3h7.5M7.1 14.5h9.8"/>',
  },
  scan: {
    body:
      '<path d="M3.5 8.75v-3.2a2 2 0 0 1 2-2h3.2M15.3 3.55h3.2a2 2 0 0 1 2 2v3.2"/>' +
      '<path d="M20.5 15.25v3.2a2 2 0 0 1-2 2h-3.2M8.7 20.45H5.5a2 2 0 0 1-2-2v-3.2"/>' +
      '<path d="M3.5 12h17"/>',
  },
  'surgery-lamp': {
    body:
      '<path d="M5.75 9.25a6.25 6.25 0 0 1 12.5 0z"/>' +
      '<path d="M12 9.25v4M3.75 17.25h16.5M6.5 17.25v3.25M17.5 17.25v3.25"/>',
  },
  bed: {
    body:
      '<path d="M2.75 20V7M2.75 12.25h11.5a4.5 4.5 0 0 1 4.5 4.5v0M2.75 17.25h18.5V20"/>' +
      '<circle cx="7" cy="9.25" r="2"/>',
  },
  monitor: {
    body:
      '<rect x="3" y="4.75" width="18" height="12" rx="2"/>' +
      '<path d="M12 16.75v3.25M8.25 20h7.5"/>' +
      '<path d="M6.25 11h2.1l1.4-2.5 2 5 1.4-2.5h4.7"/>',
  },
  droplet: {
    body:
      '<path d="M12 3.1c3.35 3.75 5.75 6.6 5.75 9.4a5.75 5.75 0 0 1-11.5 0c0-2.8 2.4-5.65 5.75-9.4Z"/>' +
      '<path d="M9.3 12.7a2.75 2.75 0 0 0 2.7 3.15"/>',
  },
  apple: {
    body:
      '<path d="M12 8.35c1-.9 2.2-1.4 3.4-1.4 2.35 0 4.05 1.95 4.05 4.85 0 3.75-2.55 8-4.85 8-1 0-1.65-.5-2.6-.5s-1.6.5-2.6.5c-2.3 0-4.85-4.25-4.85-8 0-2.9 1.7-4.85 4.05-4.85 1.2 0 2.4.5 3.4 1.4Z"/>' +
      '<path d="M12 8.35c-.1-2 1.35-3.6 3.35-3.9"/>',
  },
  'heart-pulse': {
    body:
      '<path d="M12 20.5S3.6 15 3.6 9.35A4.6 4.6 0 0 1 12 6.6a4.6 4.6 0 0 1 8.4 2.75C20.4 15 12 20.5 12 20.5Z"/>' +
      '<path d="M3.9 11.5h3.6L9 9l2 5 1.6-2.5h7.5"/>',
  },
  directions: {
    body:
      '<path d="M12 2.6 21.4 12 12 21.4 2.6 12z"/>' +
      '<path d="M9.4 13.6v-2.3a1.2 1.2 0 0 1 1.2-1.2h4m-1.9-1.9 1.9 1.9-1.9 1.9"/>',
  },
  tag: {
    body:
      '<path d="M4.25 4.25h6.4l8.85 8.85a2 2 0 0 1 0 2.83l-3.57 3.57a2 2 0 0 1-2.83 0L4.25 10.65z"/>' +
      '<path d="M8.4 8.4h.01"/>',
  },
  shield: {
    body:
      '<path d="M12 2.75 4.75 5.75v5.6c0 4.6 3 8.4 7.25 9.9 4.25-1.5 7.25-5.3 7.25-9.9v-5.6z"/>' +
      '<path d="m8.75 12 2.25 2.25 4.25-4.5"/>',
  },

  /* ------------------------------------------------------ redes sociales */
  facebook: {
    body:
      '<path d="M13.4 21v-8.2h2.75l.42-3.2H13.4V7.55c0-.93.26-1.56 1.58-1.56h1.7V3.13A22.6 22.6 0 0 0 14.2 3c-2.45 0-4.13 1.5-4.13 4.25V9.6H7.3v3.2h2.77V21z"/>',
    mode: 'fill' as IconMode,
  },
  instagram: {
    body:
      '<rect x="3.25" y="3.25" width="17.5" height="17.5" rx="4.75"/>' +
      '<circle cx="12" cy="12" r="4"/>' +
      '<path d="M16.9 7.1h.01"/>',
  },
  youtube: {
    body:
      '<path d="M21.55 8.2a2.55 2.55 0 0 0-1.8-1.8C18.16 6 12 6 12 6s-6.16 0-7.75.4a2.55 2.55 0 0 0-1.8 1.8A26.6 26.6 0 0 0 2.05 12c0 1.28.13 2.55.4 3.8a2.55 2.55 0 0 0 1.8 1.8C5.84 18 12 18 12 18s6.16 0 7.75-.4a2.55 2.55 0 0 0 1.8-1.8c.27-1.25.4-2.52.4-3.8s-.13-2.55-.4-3.8ZM10.05 14.95v-5.9L15.15 12z"/>',
    mode: 'fill' as IconMode,
  },
} satisfies Record<string, IconDef>;

export type IconName = keyof typeof icons;
