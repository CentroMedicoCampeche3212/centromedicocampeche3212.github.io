import type { IconName } from '@/components/ui/icons';

export interface Service {
  /**
   * Identificador de la URL: /servicios/<slug>.
   * Coincide con el `id` de su ficha en serviceDetails.ts; serviceCatalog.ts
   * comprueba en el build que ningún servicio se quede sin ficha.
   */
  slug: string;
  icon: IconName;
  title: string;
  /** Una sola línea. Si no cabe en un renglón y medio, va larga. */
  summary: string;
}

/**
 * Catálogo de servicios.
 *
 * Cada uno tiene su propia página. El orden importa: la página de Inicio
 * muestra los seis primeros y /servicios los muestra todos.
 */
export const services: Service[] = [
  {
    slug: 'urgencias',
    icon: 'ambulance',
    title: 'Urgencias',
    summary: 'Valoración inmediata las 24 horas, sin cita previa.',
  },
  {
    slug: 'cirugia-quirofano',
    icon: 'surgery-lamp',
    title: 'Cirugía y quirófano',
    summary: 'Procedimientos programados y de urgencia con anestesiología.',
  },
  {
    slug: 'rayos-x',
    icon: 'scan',
    title: 'Imagenología y rayos X',
    summary: 'Rayos X las 24 horas y ultrasonido.',
  },
  {
    slug: 'ucin',
    icon: 'baby',
    title: 'Cuidados intensivos neonatales',
    summary: 'UCIN con monitoreo permanente y personal especializado.',
  },
  {
    slug: 'laboratorio',
    icon: 'flask',
    title: 'Laboratorio clínico',
    summary: 'Análisis de rutina y especiales, con resultados exactos y pronto.',
  },
  {
    slug: 'urologia',
    icon: 'droplet',
    title: 'Urología',
    summary: 'Consulta y paquetes quirúrgicos con especialista de trayectoria.',
  },
  {
    slug: 'nutricion',
    icon: 'apple',
    title: 'Nutrición clínica',
    summary: 'Plan alimentario adaptado a su diagnóstico y necesidades médicas.',
  },
];

/** Ruta de la página de un servicio. Un solo sitio donde se arma la URL. */
export const serviceHref = (slug: string) => `/servicios/${slug}`;

/** Los seis que se muestran en la página de Inicio. */
export const featuredServices: Service[] = services.slice(0, 6);
