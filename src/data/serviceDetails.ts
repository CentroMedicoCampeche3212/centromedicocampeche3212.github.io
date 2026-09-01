/**
 * Servicios con ficha propia dentro de /servicios.
 *
 * El texto viene de las piezas promocionales del hospital, reescrito para
 * lectura en pantalla: sin emojis, sin mayúsculas sostenidas y con las
 * afirmaciones en el orden en que se necesitan al decidir.
 */

export interface SpecialistInfo {
  name: string;
  /** Especialidad tal como debe leerse junto al nombre. */
  role: string;
  /** Trayectoria u otro dato que respalde la ficha. */
  credential?: string;
}

export interface ContactPoint {
  label: string;
  href: string;
}

export interface ServiceHighlight {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  /** Encabezado de la lista principal. */
  featuresTitle?: string;
  /** Puntos verificables, no adjetivos sueltos. */
  features: string[];
  /**
   * Segunda lista, para las fichas que además responden «cuándo acudir».
   * Va aparte porque no es lo mismo lo que se ofrece que los motivos de
   * consulta: mezclarlos en una sola lista confunde al lector.
   */
  secondary?: { title: string; items: string[] };
  specialist?: SpecialistInfo;
  /** Aviso de a quién pertenece el servicio, cuando no es del hospital. */
  provider?: string;
  phone?: ContactPoint;
  whatsapp?: ContactPoint;
  note?: string;
}

export const urgencias: ServiceHighlight = {
  id: 'urgencias',
  eyebrow: 'Urgencias',
  title: 'Atención inmediata, las 24 horas',
  lead:
    'En esos momentos inesperados, cuando cada segundo cuenta, estamos aquí para ' +
    'usted y su familia. Nuestro servicio de urgencias está preparado para dar ' +
    'atención inmediata, con médicos y enfermeras capacitados para responder con ' +
    'rapidez, calidez y profesionalismo.',
  featuresTitle: 'Cómo atendemos una urgencia',
  features: [
    'Recepción las 24 horas, todos los días del año',
    'Valoración inmediata, sin cita previa',
    'Médicos y personal de enfermería capacitados',
    'Traslado interno directo a quirófano o terapia si el caso lo exige',
  ],
  secondary: {
    title: 'Con apoyo inmediato de',
    items: [
      'Laboratorio',
      'Ultrasonido',
      'Rayos X',
      'Tomografía',
      'Hospitalización',
      'Unidad de Cuidados Intensivos',
      'Cuidados Intensivos Neonatales',
      'Hemodinamia',
    ],
  },
  phone: { label: '981 175 6513', href: 'tel:+529811756513' },
  whatsapp: { label: '981 136 6016', href: 'https://wa.me/5219811366016' },
};

export const laboratorio: ServiceHighlight = {
  id: 'laboratorio',
  eyebrow: 'Laboratorio',
  title: 'Laboratorio de análisis clínicos',
  lead:
    'Contamos con laboratorio propio, comprometido con cada uno de nuestros ' +
    'pacientes: que tenga los resultados de sus estudios lo antes posible, de forma ' +
    'exacta y eficiente.',
  featuresTitle: 'Qué puede esperar',
  features: [
    'Análisis clínicos de rutina y especiales',
    'Resultados en el menor tiempo posible',
    'Procesos verificados para asegurar la exactitud',
    'Apoyo directo al área de urgencias y hospitalización',
  ],
  phone: { label: '981 816 2356', href: 'tel:+529818162356' },
  whatsapp: { label: '981 136 6016', href: 'https://wa.me/5219811366016' },
};

export const cirugia: ServiceHighlight = {
  id: 'cirugia-quirofano',
  eyebrow: 'Cirugía',
  title: 'Quirófanos listos para su cirugía',
  lead:
    'Salas de operación equipadas y personal capacitado para procedimientos ' +
    'programados y de urgencia, con el soporte completo que exige una cirugía ' +
    'segura de principio a fin.',
  features: [
    'Personal altamente capacitado',
    'Sala de operación equipada',
    'Anestesia',
    'Monitoreo del paciente',
    'Bomba de infusión',
    'Suministro de oxígeno',
    'Equipo de emergencia',
  ],
  whatsapp: { label: '981 136 6016', href: 'https://wa.me/5219811366016' },
};

export const ucin: ServiceHighlight = {
  id: 'ucin',
  eyebrow: 'Neonatología',
  title: 'Unidad de Cuidados Intensivos Neonatal',
  lead:
    'Los recién nacidos que necesitan vigilancia estrecha se atienden en nuestra ' +
    'UCIN, con monitoreo permanente y personal especializado en neonatología las ' +
    'veinticuatro horas.',
  features: [
    'Monitoreo las 24 horas',
    'Equipo médico especializado',
    'Atención inmediata y segura',
  ],
  whatsapp: { label: '981 136 6016', href: 'https://wa.me/5219811366016' },
};

export const rayosX: ServiceHighlight = {
  id: 'rayos-x',
  eyebrow: 'Imagenología',
  title: 'Rayos X las 24 horas',
  lead:
    'Radiografías con la precisión y la confianza que su salud merece. Contamos con ' +
    'servicio de rayos X las 24 horas del día, con estudios rápidos y seguros y ' +
    'resultados de alta calidad que apoyan un diagnóstico oportuno.',
  features: [
    'Atención las 24 horas, todos los días',
    'Estudios rápidos y precisos',
    'Equipo de tecnología confiable',
    'Personal técnico capacitado',
    'Procedimientos seguros y sin complicaciones',
  ],
  phone: { label: '981 136 6016', href: 'tel:+529811366016' },
};

export const urologia: ServiceHighlight = {
  id: 'urologia',
  eyebrow: 'Urología',
  title: 'Su experto en urología',
  lead:
    'En el Centro Médico Campeche contamos con atención urológica a cargo del ' +
    'doctor Manuel Hernández Pérez, especialista con más de treinta años de ' +
    'experiencia.',
  featuresTitle: 'Qué ofrece la consulta',
  features: [
    'Consultas especializadas en urología',
    'Paquetes quirúrgicos adaptados a cada paciente',
    'Seguimiento médico cercano y profesional',
  ],
  secondary: {
    title: '¿Cuándo acudir con un urólogo?',
    items: [
      'Dolor en la zona lumbar',
      'Ardor o dolor al orinar',
      'Sangre en la orina',
      'Infecciones urinarias frecuentes',
      'Problemas de próstata',
    ],
  },
  specialist: {
    name: 'Dr. Manuel Hernández Pérez',
    role: 'Urología',
    credential: 'Más de 30 años de experiencia',
  },
  whatsapp: {
    label: 'Agendar por WhatsApp',
    href:
      'https://wa.me/529811366016?text=Hola%2C%20quiero%20agendar%20una%20cita%20con%20el%20Dr.%20Hern%C3%A1ndez',
  },
  phone: { label: '981 337 9334', href: 'tel:+529813379334' },
};

export const nutricion: ServiceHighlight = {
  id: 'nutricion',
  eyebrow: 'Nutrición',
  title: 'Nutrición clínica',
  lead:
    'La alimentación es clave para prevenir, controlar y mejorar muchas ' +
    'enfermedades. En consulta realizamos una valoración completa y construimos un ' +
    'plan alimentario adaptado a su diagnóstico y a sus necesidades médicas.',
  featuresTitle: 'Cómo trabajamos',
  features: [
    'Valoración nutricional completa',
    'Plan alimentario adaptado a su diagnóstico',
    'Acompañamiento durante el tratamiento médico',
  ],
  specialist: {
    name: 'Nutrióloga Alejandra Infanzo Domínguez',
    role: 'Nutrición clínica',
  },
  phone: { label: '981 107 3076', href: 'tel:+529811073076' },
};
