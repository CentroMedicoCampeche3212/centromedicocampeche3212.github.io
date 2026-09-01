import { services, type Service } from './services';
import {
  urgencias,
  cirugia,
  ucin,
  rayosX,
  laboratorio,
  urologia,
  nutricion,
  type ServiceHighlight,
} from './serviceDetails';

import urgenciasImg from '@/assets/img/urgencias-ficha.jpg';
import cirugiaImg from '@/assets/img/cirugia-quirofano.jpg';
import rayosXImg from '@/assets/img/rayosx-estudio.jpg';
import ucinImg from '@/assets/img/ucin-neonatal.jpg';
import laboratorioImg from '@/assets/img/laboratorio-muestras.jpg';
import urologiaImg from '@/assets/img/urologia-dr-hernandez.jpg';
import nutricionImg from '@/assets/img/nutricion-consulta.jpg';

/**
 * Une cada tarjeta del catálogo con su ficha y su fotografía.
 *
 * Existe para que haya UN solo sitio donde se decide qué imagen y qué texto
 * le toca a cada servicio. La ruta dinámica /servicios/[slug] recorre esta
 * lista, así que añadir un servicio nuevo es añadir una entrada aquí: la
 * página se genera sola en el build.
 */
export interface ServiceEntry {
  slug: string;
  card: Service;
  detail: ServiceHighlight;
  image: ImageMetadata;
  imageAlt: string;
  imageRatio?: 'portrait' | 'landscape' | 'square';
  /** El rojo se reserva a urgencias, donde importa que salte a la vista. */
  ctaVariant?: 'primary' | 'urgent';
}

/** Presentación de cada ficha, indexada por slug. */
const presentation: Record<
  string,
  Omit<ServiceEntry, 'slug' | 'card'> & { detail: ServiceHighlight }
> = {
  urgencias: {
    detail: urgencias,
    image: urgenciasImg,
    imageAlt:
      'Cartel de urgencias del Centro Médico Campeche: consulta de urgencias las 24 horas ' +
      'en Av. Colosio, con laboratorio, ultrasonido, rayos X, tomografía, hospitalización, ' +
      'UCI, UCIN y hemodinamia. Teléfonos 981 136 6016 y 981 175 6512. En la imagen, un ' +
      'niño en el suelo junto a una bicicleta caída.',
    imageRatio: 'square',
    ctaVariant: 'urgent',
  },
  'cirugia-quirofano': {
    detail: cirugia,
    image: cirugiaImg,
    imageAlt:
      'Cirujana con gorro, cubrebocas y bata estéril colocándose los guantes en el quirófano.',
    imageRatio: 'portrait',
  },
  'rayos-x': {
    detail: rayosX,
    image: rayosXImg,
    imageAlt:
      'Médico señalando una radiografía de tórax en un negatoscopio del área de imagenología.',
  },
  ucin: {
    detail: ucin,
    image: ucinImg,
    imageAlt:
      'Recién nacido dormido dentro de una incubadora de la unidad de cuidados intensivos ' +
      'neonatales.',
  },
  laboratorio: {
    detail: laboratorio,
    image: laboratorioImg,
    imageAlt:
      'Tubos de muestra sanguínea con tapón lila colocados en una centrifugadora del ' +
      'laboratorio.',
  },
  urologia: {
    detail: urologia,
    image: urologiaImg,
    imageAlt: 'El doctor Manuel Hernández Pérez, urólogo, con bata blanca en el consultorio.',
    imageRatio: 'portrait',
  },
  nutricion: {
    detail: nutricion,
    image: nutricionImg,
    imageAlt:
      'La nutrióloga Alejandra Infanzo Domínguez en consulta, junto a una charola de fruta, ' +
      'pan y una lámina del plato del buen comer.',
  },
};

export const serviceCatalog: ServiceEntry[] = services.map((card) => {
  const extra = presentation[card.slug];

  /* Falla en el build, no en producción: si alguien añade un servicio al
     catálogo y olvida su ficha, el sitio no llega a publicarse a medias. */
  if (!extra) {
    throw new Error(
      `El servicio "${card.slug}" no tiene ficha en serviceCatalog.ts. ` +
        'Añádala antes de compilar.',
    );
  }

  return { slug: card.slug, card, ...extra };
});

/** Los demás servicios, para ofrecer salida al pie de cada ficha. */
export const otherServices = (slug: string) =>
  serviceCatalog.filter((entry) => entry.slug !== slug);
