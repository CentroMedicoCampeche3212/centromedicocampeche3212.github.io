/**
 * Aviso de Privacidad Integral.
 *
 * ATENCIÓN: esto es un BORRADOR con la estructura que exige la Ley Federal de
 * Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y
 * su Reglamento. Está redactado con los datos reales del hospital, pero
 * describe prácticas de tratamiento que solo el hospital conoce.
 *
 * Antes de publicarlo en firme debe revisarlo un abogado y confirmarse:
 *  - qué datos se recaban de verdad y por qué vías,
 *  - a quién se transfieren (aseguradoras, laboratorios externos, autoridades),
 *  - cuánto tiempo se conservan los expedientes,
 *  - quién es el responsable de datos personales y cómo se le contacta.
 *
 * Un aviso de privacidad inexacto no es un texto de relleno: expone al
 * hospital a sanciones del INAI, y en un centro de salud los datos tratados
 * son sensibles por definición.
 */

export interface PrivacySection {
  id: string;
  title: string;
  /** Párrafos del apartado. */
  body: string[];
  /** Lista de puntos, cuando el apartado la necesita. */
  items?: string[];
  /** Texto que sigue a la lista. */
  after?: string[];
}

export const privacyUpdatedAt = '2026-09-01';

export const privacyIntro =
  'En cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión ' +
  'de los Particulares, su Reglamento y los Lineamientos del Aviso de Privacidad, ' +
  'ponemos a su disposición el presente aviso, que explica qué datos personales ' +
  'tratamos, para qué los usamos y cómo puede ejercer sus derechos sobre ellos.';

export const privacySections: PrivacySection[] = [
  {
    id: 'responsable',
    title: 'Responsable del tratamiento',
    body: [
      'El responsable del tratamiento de sus datos personales es ' +
        '{{RAZON_SOCIAL}}, que opera bajo el nombre comercial Centro Médico ' +
        'Campeche, con domicilio en Av. Luis Donaldo Colosio Murrieta 5-258, ' +
        'Barrio de San José, C.P. 24049, San Francisco de Campeche, Campeche, México.',
      'Para cualquier asunto relacionado con sus datos personales puede ' +
        'comunicarse al conmutador 981 816 2356 o escribirnos por WhatsApp al ' +
        '981 136 6016, y solicitar comunicación con {{RESPONSABLE_DATOS_PERSONALES}}.',
    ],
  },
  {
    id: 'datos',
    title: 'Datos personales que tratamos',
    body: [
      'Para prestarle atención médica podemos recabar los siguientes datos, ' +
        'directamente de usted o de quien le acompañe:',
    ],
    items: [
      'Datos de identificación: nombre, fecha de nacimiento, sexo, nacionalidad y firma.',
      'Datos de contacto: domicilio, teléfono y, en su caso, correo electrónico.',
      'Datos de un familiar o contacto de emergencia.',
      'Datos de facturación, cuando solicita comprobante fiscal.',
      'Datos del seguro de gastos médicos, cuando la atención se cubre por esa vía.',
    ],
    after: [
      'Los datos de menores de edad o de personas en estado de interdicción se ' +
        'recaban a través de quien ejerce la patria potestad, la tutela o la ' +
        'representación legal.',
    ],
  },
  {
    id: 'sensibles',
    title: 'Datos personales sensibles',
    body: [
      'La atención médica exige tratar datos que la ley considera SENSIBLES: ' +
        'estado de salud presente y pasado, antecedentes clínicos y familiares, ' +
        'diagnósticos, tratamientos, resultados de estudios de laboratorio e ' +
        'imagen, alergias, medicación y, cuando corresponde, información genética ' +
        'o de salud reproductiva.',
      'Estos datos se tratan con estricta confidencialidad y únicamente por el ' +
        'personal que interviene en su atención. Conforme al artículo 9 de la Ley, ' +
        'su tratamiento requiere su consentimiento expreso y por escrito, que se ' +
        'recaba al momento de su ingreso o de su primera consulta.',
    ],
  },
  {
    id: 'finalidades',
    title: 'Para qué usamos sus datos',
    body: ['Finalidades primarias, necesarias para prestarle el servicio:'],
    items: [
      'Prestarle atención médica, de urgencias, quirúrgica, de hospitalización y de diagnóstico.',
      'Integrar y conservar su expediente clínico conforme a la normativa sanitaria aplicable.',
      'Identificarle y contactarle a usted o a su familiar durante y después de la atención.',
      'Gestionar el cobro, la facturación y, en su caso, el trámite ante su aseguradora.',
      'Cumplir obligaciones legales y atender requerimientos de autoridad competente.',
    ],
    after: [
      'Finalidades secundarias, que NO son necesarias para la atención: enviarle ' +
        'recordatorios de cita, información sobre promociones y servicios, e ' +
        'invitaciones a encuestas de satisfacción.',
      'Puede negarse a las finalidades secundarias sin que ello afecte en modo ' +
        'alguno la atención médica que recibe. Basta con manifestarlo al personal ' +
        'de recepción o comunicarlo por los medios señalados en este aviso.',
    ],
  },
  {
    id: 'transferencias',
    title: 'Transferencias de datos',
    body: [
      'Sus datos pueden transferirse, sin requerir su consentimiento, en los ' +
        'supuestos que permite el artículo 37 de la Ley: a autoridades sanitarias ' +
        'y judiciales cuando lo exija una disposición legal, y a profesionales de ' +
        'la salud cuando la transferencia sea necesaria para su atención.',
      'Fuera de esos supuestos, cualquier transferencia —por ejemplo a su ' +
        'aseguradora, a laboratorios o a médicos externos que participen en su ' +
        'tratamiento— se realiza con su consentimiento y con la obligación del ' +
        'receptor de tratar los datos conforme a este aviso.',
      'No vendemos, alquilamos ni comercializamos sus datos personales.',
    ],
  },
  {
    id: 'arco',
    title: 'Sus derechos: acceso, rectificación, cancelación y oposición',
    body: [
      'Usted tiene derecho a conocer qué datos suyos tratamos y para qué ' +
        '(acceso); a pedir que se corrijan si son inexactos o están incompletos ' +
        '(rectificación); a solicitar que se eliminen cuando considere que no se ' +
        'requieren (cancelación); y a oponerse a que se usen para fines ' +
        'determinados (oposición). Son los llamados derechos ARCO.',
      'Para ejercerlos presente una solicitud en el hospital, o comuníquese por ' +
        'los medios indicados en este aviso, acompañando:',
    ],
    items: [
      'Su nombre y un medio para comunicarle la respuesta.',
      'Copia de una identificación oficial vigente que acredite su identidad, o la del representante legal y el documento que acredite la representación.',
      'La descripción clara de los datos sobre los que ejerce el derecho y de lo que solicita.',
    ],
    after: [
      'Responderemos su solicitud en un plazo máximo de veinte días hábiles y, de ' +
        'resultar procedente, la haremos efectiva dentro de los quince días hábiles ' +
        'siguientes.',
      'La cancelación y la oposición tienen límites legales: el expediente clínico ' +
        'debe conservarse por el plazo que fija la normativa sanitaria, de modo que ' +
        'no siempre es posible eliminar la información clínica.',
    ],
  },
  {
    id: 'revocacion',
    title: 'Revocación del consentimiento',
    body: [
      'Puede revocar en cualquier momento el consentimiento que nos otorgó para ' +
        'el tratamiento de sus datos, por los mismos medios previstos para los ' +
        'derechos ARCO.',
      'Tenga presente que en algunos casos la revocación no puede surtir efecto ' +
        'inmediato, y que en otros la relación con el hospital no puede continuar ' +
        'sin ese tratamiento: sin datos clínicos no es posible prestar atención ' +
        'médica con seguridad.',
    ],
  },
  {
    id: 'sitio-web',
    title: 'Uso de este sitio web',
    body: [
      'Este sitio es informativo. No tiene formularios, no pide registro y no ' +
        'utiliza cookies propias ni herramientas de analítica: no recaba ningún ' +
        'dato personal suyo por sí mismo.',
      'Sí incluye un mapa insertado de Google Maps en las páginas de contacto y ' +
        'ubicación. Al cargarse, ese mapa lo sirve Google, que puede recabar datos ' +
        'de su navegación conforme a sus propias políticas, ajenas a este hospital.',
      'Los enlaces a WhatsApp, Facebook e Instagram le llevan a plataformas de ' +
        'terceros que se rigen por sus propios avisos de privacidad.',
    ],
  },
  {
    id: 'cambios',
    title: 'Cambios a este aviso',
    body: [
      'Este aviso puede modificarse por cambios legales, por nuevos servicios o ' +
        'por ajustes en nuestras prácticas de tratamiento. Cualquier modificación ' +
        'se publicará en esta misma página, con la fecha de actualización visible ' +
        'al inicio.',
      'Le sugerimos revisarla periódicamente. Si el cambio afecta de forma ' +
        'sustancial al tratamiento de sus datos, se lo comunicaremos por el medio ' +
        'de contacto que nos haya proporcionado.',
    ],
  },
  {
    id: 'inai',
    title: 'Autoridad en materia de protección de datos',
    body: [
      'Si considera que su derecho a la protección de datos personales ha sido ' +
        'vulnerado, puede acudir al Instituto Nacional de Transparencia, Acceso a ' +
        'la Información y Protección de Datos Personales (INAI) e iniciar el ' +
        'procedimiento correspondiente.',
    ],
  },
];
