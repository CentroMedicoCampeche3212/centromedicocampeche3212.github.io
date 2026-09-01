import type { IconName } from '@/components/ui/icons';
import { address } from '@/data/site';

export interface QuickAccessItem {
  icon: IconName;
  title: string;
  description: string;
  href: string;
  /** Texto del enlace, leído también por lectores de pantalla. */
  cta: string;
  /**
   * `featured` invierte la tarjeta a azul profundo. Es el recurso para
   * destacar urgencias sin recurrir al rojo, que está reservado en exclusiva
   * al botón de urgencias.
   */
  tone?: 'default' | 'featured';
}

/**
 * Accesos grandes, pensados para quien llega con prisa o desde un teléfono
 * en la calle.
 *
 * La tarjeta «Urgencias 24 horas» se retiró a petición del cliente. El acceso
 * a urgencias sigue disponible en la barra superior y en el botón rojo que
 * está justo debajo del carrusel.
 */
export const quickAccess: QuickAccessItem[] = [
  {
    icon: 'stethoscope',
    title: 'Especialidades',
    description: 'Consulta con especialistas en {{NUMERO_ESPECIALIDADES}} áreas médicas.',
    href: '/servicios',
    cta: 'Ver especialidades',
  },
  {
    icon: 'baby',
    title: 'Paquetes de Maternidad',
    description: 'Paquete de parto desde $6,778 y cesárea desde $10,976, con habitación VIP.',
    href: '/paquetes-maternidad',
    cta: 'Conocer los paquetes',
  },
  {
    icon: 'directions',
    title: 'Cómo llegar',
    description: `Estamos en ${address.neighborhood}, sobre Av. Luis Donaldo Colosio Murrieta.`,
    href: '#ubicacion',
    cta: 'Ver ubicación y horarios',
  },
];
