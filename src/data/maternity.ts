/**
 * Paquetes de Maternidad.
 *
 * Contenido transcrito de la ficha promocional del cliente
 * (src/assets/img/paquete-maternidad-ficha.jpg). Se pasa a texto en lugar de
 * mostrar la imagen: los precios y las condiciones tienen que poder leerse
 * con lupa, escalar con el zoom del navegador y llegar a un lector de
 * pantalla. Dentro de un JPG no hacen ninguna de las tres cosas.
 *
 * Al actualizar precios, cambie también {{VIGENCIA_PAQUETES_MATERNIDAD}}.
 */

export interface MaternityPackage {
  name: string;
  /** Importe en pesos, ya formateado. */
  price: string;
  room: string;
  stay: string;
  /** Diferencia el paquete destacado dentro de la rejilla. */
  featured?: boolean;
}

export const maternityPackages: MaternityPackage[] = [
  {
    name: 'Paquete parto',
    price: '$6,778',
    room: 'Habitación VIP',
    stay: '1 noche',
    featured: true,
  },
  {
    name: 'Paquete cesárea',
    price: '$10,976',
    room: 'Habitación VIP',
    stay: '2 noches',
  },
];

/** Lo que cubre cualquiera de los dos paquetes. */
export const maternityIncludes: string[] = [
  'Uso de sala de quirófano',
  'Materiales y medicamentos básicos para la atención',
  'Hospitalización en área VIP',
  'Atención de enfermeras especializadas',
  'Alimentos de la paciente',
  'Desayunos de cortesía para el acompañante',
  'Kit sorpresa',
];

/** Lo que se cobra aparte. Va tan visible como lo que sí se incluye. */
export const maternityExcludes: string[] = [
  'Honorarios médicos: ginecólogo, anestesiólogo, pediatra e instrumentista',
  'Medicamentos excedentes',
  'Estudios de laboratorio o de imagen',
];

export const maternityTerms: string[] = [
  'Promoción válida para pacientes particulares.',
  'No aplica con otras promociones.',
  'Los servicios no utilizados no son reembolsables ni transferibles.',
];

/** Moneda y vigencia, para no repetirlas en cada plantilla. */
export const maternityCurrency = 'Pesos mexicanos (MXN)';
export const maternityValidity = '{{VIGENCIA_PAQUETES_MATERNIDAD}}';
