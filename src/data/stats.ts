export interface Stat {
  /** Cifra sola. El símbolo (+, %) va aparte para no romper el ritmo visual. */
  value: string;
  suffix?: string;
  label: string;
  /** Matiz que evita que la cifra se lea sin contexto. */
  detail: string;
}

/**
 * Franja de confianza sobre azul profundo.
 *
 * Las cuatro cifras salen de material que el hospital ya entregó; ninguna está
 * inventada ni se repite en otra parte de la página:
 *
 *  - 20 años   -> del propio logotipo, «CMC 20 Años».
 *  - 8         -> los servicios de apoyo que enumera la pieza de urgencias:
 *                 laboratorio, ultrasonido, rayos X, tomografía,
 *                 hospitalización, UCI, UCIN y hemodinamia.
 *  - 2         -> las dos unidades de terapia intensiva de esa misma lista.
 *  - 365       -> urgencias abiertas todo el año, de la pieza de urgencias.
 *
 * Se retiraron «médicos especialistas», «camas censables» y «aseguradoras»:
 * eran marcadores sin dato y ocupaban tres de las cuatro cifras. Si el cliente
 * facilita esos números, se reponen añadiendo entradas aquí.
 */
export const stats: Stat[] = [
  {
    value: '20',
    suffix: ' años',
    label: 'de experiencia',
    detail: 'Dos décadas al servicio de las familias campechanas.',
  },
  {
    value: '8',
    suffix: ' servicios',
    label: 'de apoyo en urgencias',
    detail: 'Diagnóstico, quirófano y terapia intensiva sin salir del edificio.',
  },
  {
    value: '2',
    suffix: ' unidades',
    label: 'de cuidados intensivos',
    detail: 'Terapia intensiva para adultos y para recién nacidos.',
  },
  {
    value: '365',
    suffix: ' días',
    label: 'con urgencias abiertas',
    detail: 'También domingos y días festivos, a cualquier hora.',
  },
];
