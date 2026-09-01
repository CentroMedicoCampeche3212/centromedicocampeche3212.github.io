/**
 * Textos institucionales. Redacción proporcionada por el hospital.
 * No reescribir sin confirmarlo: son declaraciones formales, no copy.
 */

export const whoWeAre = {
  title: 'Quiénes somos',
  heading: 'Un hospital de alta especialidad certificado',
  body:
    'Somos un hospital de alta especialidad certificado, líder en la prestación de ' +
    'servicios médicos acreditados, formador de recursos humanos y generador de nuevos ' +
    'conocimientos en el ámbito de la medicina, buscando el reconocimiento estatal.',
} as const;

export const objective = {
  title: 'Nuestro objetivo',
  heading: 'Calidad y seguridad en cada servicio',
  body:
    'Brindar servicios de salud de alta especialidad que cumplan los estándares de ' +
    'calidad y seguridad establecidos por la Ley General de Salud del estado de Campeche, ' +
    'la Ley Federal del Trabajo y las normativas para la protección y prevención de ' +
    'riesgos sanitarios, buscando la satisfacción total de nuestros pacientes.',
} as const;

/** Los pilares que se desprenden del objetivo, para dar ritmo a la lectura. */
export const pillars = [
  {
    icon: 'shield' as const,
    title: 'Certificación y normativa',
    description:
      'Operamos conforme a la Ley General de Salud del estado de Campeche y a las ' +
      'normativas de protección contra riesgos sanitarios.',
  },
  {
    icon: 'stethoscope' as const,
    title: 'Alta especialidad',
    description:
      'Servicios médicos acreditados, con equipo especializado y protocolos de ' +
      'seguridad del paciente.',
  },
  {
    icon: 'monitor' as const,
    title: 'Formación e investigación',
    description:
      'Formadores de recursos humanos en salud y generadores de nuevo conocimiento ' +
      'en el ámbito de la medicina.',
  },
];

/**
 * Recomendaciones de pacientes.
 *
 * Se transcriben A MANO desde la página de Facebook del hospital. Facebook no
 * permite incrustar la pestaña de opiniones —el plugin de página nunca la
 * incluyó— y leerlas por programa exige un token de página con revisión de
 * app; la página pública devuelve un muro de inicio de sesión.
 *
 * Al copiar una recomendación: use el texto literal, el nombre tal como
 * aparece publicado y la fecha de publicación. Mientras el arreglo esté
 * vacío, la sección muestra solo el enlace a Facebook.
 */
export interface Testimonial {
  quote: string;
  author: string;
  /** Fecha de publicación en formato ISO (AAAA-MM-DD). */
  date: string;
}

/**
 * Publicadas en Facebook por sus autores. La corrección se limitó a la
 * ortografía: acentos, mayúscula inicial, signos repetidos y palabras
 * partidas. NO se cambió una sola idea, ni se pulió el tono, ni se recortó
 * nada: son testimonios firmados con nombre, no texto publicitario. El
 * original literal está a un clic, en el enlace del pie de la sección.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      'Excelente clínica. En cuestión de médicos y con los mejores equipos, puede ' +
      'detectar a tiempo el problema de cálculos renales. Gracias al doctor Manuel ' +
      'Hernández, que me atendió. ¡Lo recomiendo ampliamente!',
    author: 'Ana Ortiz',
    date: '2025-07-02',
  },
  {
    quote:
      'Excelente trato. Desde mi ingreso todos fueron muy amables, tienen equipos de ' +
      'vanguardia y excelentes médicos. Lo que más me gustó es la calidez con la que ' +
      'me trataron, y la habitación me hizo sentir como en casa. Mi familia también ' +
      'se sintió muy a gusto. La verdad, el Centro Médico Campeche es la mejor ' +
      'clínica de la ciudad.',
    author: 'Malen Nita',
    date: '2025-07-02',
  },
  {
    quote:
      'Se recomienda mucho el servicio que ofrece Centro Médico Campeche, ya que ' +
      'cuenta con excelentes médicos de primera calidad y atención personalizada. ' +
      'Mis familiares lo recomiendan al cien.',
    author: 'Zayury Panti',
    date: '2025-06-28',
  },
  {
    quote:
      'Cien por ciento recomendado, excelente servicio. La verdad, traje a mi hijo ' +
      'por una fractura de muñeca. No sabía que tenían ambulancia: hablé y la ' +
      'mandaron, llegamos y ya nos estaba esperando el traumatólogo. De inmediato me ' +
      'atendieron. Las chicas de recepción, a pesar de que tenían muchísima gente, ' +
      'muy atentas. Todo bien, al final todo estuvo bien.',
    author: 'Antonio Lavodnas',
    date: '2025-06-26',
  },
];

export const facebookReviewsUrl =
  'https://www.facebook.com/centromedicocampeche/reviews/?id=100064532116897&sk=reviews';
