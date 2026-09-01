/**
 * Datos institucionales del sitio.
 *
 * Los datos de contacto y ubicación son REALES, confirmados por el cliente.
 * Lo que sigue marcado con {{DOBLE_LLAVE}} está pendiente. Ver el README.
 */

export const site = {
  name: 'Centro Médico Campeche',
  shortName: 'CMC',
  legalName: '{{RAZON_SOCIAL}}',
  tagline: 'Cuidando de tu salud con excelencia',
  description:
    'Hospital de alta especialidad certificado en San Francisco de Campeche. ' +
    'Urgencias las 24 horas, paquetes de maternidad, quirófanos, laboratorio ' +
    'e imagenología. Atención cercana y equipo profesional para usted y su familia.',
} as const;

export const address = {
  street: 'Av. Luis Donaldo Colosio Murrieta 5-258',
  neighborhood: 'Barrio de San José',
  city: 'San Francisco de Campeche',
  state: 'Campeche',
  postalCode: '24049',
  country: 'México',
  /** Una sola línea, para la barra de utilidad y el footer. */
  short: 'Av. Luis Donaldo Colosio Murrieta 5-258, Barrio de San José',
  /** Versión abreviada: la larga desborda la barra superior en un teléfono. */
  shortMobile: 'Av. Colosio 5-258',

  /**
   * Ficha de Google Maps del hospital, identificada por su `cid`.
   * Los tres enlaces de mapa del sitio —"Cómo llegar", la ficha y el iframe—
   * apuntan a este mismo lugar, por indicación del cliente.
   */
  placeUrl:
    'https://www.google.com/maps?cid=16080539060780401412&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=es-419&source=embed',

  directionsUrl:
    'https://www.google.com/maps?cid=16080539060780401412&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=es-419&source=embed',

  /** El mismo `cid`, en su forma incrustable. No necesita llave de API. */
  mapEmbedUrl: 'https://www.google.com/maps?cid=16080539060780401412&hl=es-419&output=embed',

  /** Para los datos estructurados. */
  latitude: 19.8309218,
  longitude: -90.5389684,
} as const;

/**
 * El hospital no publica correo: la cuenta que se usaba quedó fuera de
 * servicio y anunciar una dirección que nadie lee es peor que no anunciar
 * ninguna. Si más adelante hay una activa, se añade aquí como
 * `email: { label, href: 'mailto:…', note }` y el pie de página y la página
 * de contacto la recogen solas.
 */
export const contact = {
  /**
   * Línea directa de urgencias, confirmada por el cliente: es la que imprime
   * la ficha promocional del hospital.
   */
  emergency: {
    label: '981 175 6512',
    href: 'tel:+529811756512',
    note: 'Urgencias, las 24 horas',
  },
  switchboard: {
    label: '981 816 2356',
    href: 'tel:+529818162356',
    note: 'Conmutador e informes',
  },
  whatsapp: {
    label: '+52 1 981 136 6016',
    href: 'https://wa.me/5219811366016',
    note: 'Atención por WhatsApp',
  },
} as const;

/** Quita los duplicados por destino, para no listar dos veces el mismo teléfono. */
export function uniqueByHref<T extends { href: string }>(items: T[]): T[] {
  return [...new Map(items.map((item) => [item.href, item])).values()];
}

export interface ScheduleEntry {
  service: string;
  hours: string;
  emphasis?: boolean;
}

/**
 * Horarios por área.
 *
 * Se retiraron consulta externa, laboratorio, imagenología, farmacia y visita
 * a pacientes: no hay horario confirmado y anunciar el área sin la hora no
 * ayuda a nadie. Para reponerlas basta con añadir aquí `{ service, hours }`;
 * la sección de ubicación y el pie de página las recogen solas.
 */
export const schedule: ScheduleEntry[] = [
  { service: 'Urgencias', hours: 'Las 24 horas, los 365 días del año', emphasis: true },
];

export interface SocialLink {
  name: string;
  href: string;
  icon: 'facebook' | 'instagram' | 'youtube';
}

/** Solo se listan las redes que el hospital tiene activas. */
export const socials: SocialLink[] = [
  { name: 'Facebook', href: 'https://www.facebook.com/centromedicocampeche', icon: 'facebook' },
  { name: 'Instagram', href: 'https://www.instagram.com/centromedicocampeche/', icon: 'instagram' },
];
