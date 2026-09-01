import promoTomografia from '@/assets/img/promo-tomografia.jpg';
import promoAretes from '@/assets/img/promo-aretes.jpg';

export interface Promotion {
  id: string;
  image: ImageMetadata;
  /**
   * Las piezas traen su texto incrustado, así que el `alt` lo transcribe:
   * es la única vía por la que ese contenido llega a quien no ve la imagen.
   */
  imageAlt: string;
  title: string;
  lead: string;
  includes?: string[];
  /** Horario propio de la promoción, si lo tiene. */
  schedule?: string;
  /** Área del hospital donde se realiza. */
  location?: string;
  /** Letra chica. */
  note?: string;
}

/**
 * Promociones vigentes.
 *
 * Las imágenes se muestran COMPLETAS, sin recorte, por indicación del cliente:
 * son piezas cerradas y cualquier encuadre les cortaría su propio texto.
 *
 * Vigencia: el cliente todavía no la ha confirmado, así que no se anuncia
 * ninguna fecha. Antes de publicar conviene fijarla —una promoción sin
 * vigencia visible se vuelve un compromiso indefinido—: añada el campo aquí y
 * la plantilla lo recoge.
 */
export const promotions: Promotion[] = [
  {
    id: 'tomografia',
    image: promoTomografia,
    imageAlt:
      'Cartel de descuentos en tomografía del Centro Médico Campeche: de lunes a ' +
      'viernes de 8:00 a. m. a 6:00 p. m., previa cita. Tecnología avanzada y ' +
      'especialistas que cuidan tu salud. En la imagen, dos médicos revisan un ' +
      'estudio junto al equipo de tomografía.',
    title: 'Descuento en tomografía',
    lead:
      'Estudios de tomografía con precio preferente, realizados con equipo de ' +
      'diagnóstico por imagen e interpretados por médicos especialistas. El estudio ' +
      'se programa con cita previa para que no tenga que esperar.',
    schedule: 'De lunes a viernes, de 8:00 a 18:00 h',
    note: 'Se agenda con cita previa.',
  },
  {
    id: 'aretes',
    image: promoAretes,
    imageAlt:
      'Cartel del servicio de colocación de aretes del Centro Médico Campeche: ' +
      'incluye esterilización y protocolos de higiene, técnica rápida, segura y sin ' +
      'dolor, e indicaciones para el cuidado posterior a la perforación. Se realiza ' +
      'en el Área de Urgencias. En la imagen, una bebé con diadema rosa y un arete ' +
      'recién colocado.',
    title: 'Colocación de aretes',
    lead:
      'Sabemos que cada detalle cuenta. Por eso ponemos a su disposición el servicio ' +
      'de colocación de aretes para bebés, con el mismo cuidado y los mismos ' +
      'protocolos que cualquier otro procedimiento del hospital.',
    includes: [
      'Esterilización y protocolos de higiene',
      'Técnica rápida, segura y sin dolor',
      'Indicaciones para el cuidado posterior a la perforación',
    ],
    location: 'Área de Urgencias',
    note: 'Más que un procedimiento: es el primer accesorio de una etapa nueva.',
  },
];
