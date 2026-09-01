import heroPartos from '@/assets/img/hero-01-partos-cesareas.png';
import heroAtencionHumana from '@/assets/img/hero-03-atencion-humana.png';
import heroQuirofanos from '@/assets/img/hero-04-quirofanos.png';
import heroUrgencias from '@/assets/img/hero-05-urgencias.png';

/**
 * `photo`  Fotografía de fondo. Lleva velo azul degradado y el titular y la
 *          línea de apoyo se dibujan encima con HTML.
 * `banner` Pieza gráfica que ya trae su propio texto incrustado. Se muestra
 *          completa sobre azul profundo, sin velo y sin texto superpuesto:
 *          taparla con el velo enterraría su mensaje, y añadirle un titular
 *          dejaría dos textos compitiendo en la misma diapositiva.
 */
export type HeroSlideMode = 'photo' | 'banner';

export interface HeroSlide {
  image: ImageMetadata;
  /** Texto alternativo: transcribe el mensaje de la pieza. */
  alt: string;
  /** Rótulo corto para el indicador de puntos y las etiquetas ARIA. */
  label: string;
  mode: HeroSlideMode;
  /** Solo en modo `photo`. */
  headline?: string;
  /** Solo en modo `photo`. */
  support?: string;
}

/**
 * Diapositivas del hero.
 *
 * Las cuatro son piezas gráficas terminadas del cliente, de 1920x800 px
 * (proporción 12:5). El contenedor del carrusel usa esa misma proporción en
 * todos los tamaños, así que entran completas: ni recorte ni bandas.
 *
 * El titular y la línea de apoyo van DENTRO de la imagen, así que el `alt`
 * los transcribe: es la única vía por la que ese mensaje llega a quien no ve
 * la pieza, y también lo que indexa un buscador.
 *
 * Si alguna diapositiva pasara a ser fotografía sin texto, cámbiele el `mode`
 * a `photo` y añádale `headline` y `support`: el componente compone entonces
 * el velo azul y el texto en HTML.
 */
export const heroSlides: HeroSlide[] = [
  {
    image: heroPartos,
    mode: 'banner',
    label: 'El hospital número 1 en partos y cesáreas de Campeche',
    alt:
      'Centro Médico Campeche, 20 años: el hospital número 1 en partos y cesáreas de ' +
      'Campeche. Experiencia, tecnología y calidez humana en cada momento que importa. ' +
      'Servicios de rayos X, ultrasonido, laboratorio, tomografía, hospitalización, ' +
      'quirófanos, urgencias, sala de hemodinamia y médicos especialistas. Atención las ' +
      '24 horas. Atención segura y humana, tecnología de vanguardia y acompañamiento en ' +
      'cada etapa. En la imagen, una pareja sostiene a su bebé recién nacido y una vista ' +
      'aérea del hospital.',
  },
  {
    image: heroAtencionHumana,
    mode: 'banner',
    label: 'Atención humana desde el primer momento',
    alt:
      'Acompañamiento en cada etapa. Atención humana desde el primer momento: personal ' +
      'que le orienta y acompaña durante toda su estancia con nosotros. Atención las 24 ' +
      'horas. Junto al texto, el logotipo del Centro Médico Campeche por sus 20 años.',
  },
  {
    image: heroQuirofanos,
    mode: 'banner',
    label: 'Quirófanos equipados y equipo especializado',
    alt:
      'Seguridad del paciente. Quirófanos equipados y equipo especializado: cirugía ' +
      'programada y de urgencia con protocolos de seguridad del paciente. Atención las ' +
      '24 horas. Junto al texto, el logotipo del Centro Médico Campeche por sus 20 años.',
  },
  {
    image: heroUrgencias,
    mode: 'banner',
    label: 'Urgencias las 24 horas',
    alt:
      'Sin cita previa, 24/7. Urgencias las 24 horas: un equipo listo para recibirle ' +
      'cualquier día, a cualquier hora, sin cita previa. Junto al texto, el logotipo del ' +
      'Centro Médico Campeche por sus 20 años.',
  },
];
