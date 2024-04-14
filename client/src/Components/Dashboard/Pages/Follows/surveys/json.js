export const json = {
  locale: 'es',
  title: '#2.3 Situación financiera y tributarias',
  completedHtml: '<h3>Muchas gracias por tu contribuición</h3>',
  completedHtmlOnCondition: [
    {
      expression: '{totalScore} <= 100',
      html: 'Obtuviste {totalScore} puntos de 201. siendo el %, Aún hay mucho margen de mejora por lo que, si tienes encuenta los consejos y revisas cosntamente su desempeño, lograras hacer crecer y mejorar tu empresa!',
    },
    {
      expression: '{totalScore} <= 159',
      html: 'Obtuviste {totalScore} puntos de 201. siendo el %, Tienes gran parte de las bases solidas, y cumplidas, casi que teniendo un margen lo suficiente para ser excelente, no te desanimes con un poco más de esfuerzo y tiempo lograras llevar a lo alto tu empresa!',
    },
    {
      expression: '{totalScore} > 180',
      html: 'Obtuviste {totalScore} puntos de 201. siendo el %, Increible cumples los requisitos adecuadamente, tu empresa se encuentra en uno de los mejores estados posibles, capaz de realizar proyectos u otros de manera impecable, felicidades!',
    },
  ],
  pages: [
    {
      name: 'situación-financiera-tributaria',
      elements: [
        {
          type: 'radiogroup',
          name: 'question1',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Se encuentra al día en cámara de comercio',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question1} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Estar al dia Genera visibilidad y credibilidad en el mercado, abre puertas para hacer negocios, facilita el acceso a créditos y acceso a los beneficios empresariales que ofrece el Gobierno Nacional.',
        },
        {
          type: 'radiogroup',
          name: 'question2',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Esta obligado a tener certificaciones de calidad',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: 'No aplica',
        },
        {
          type: 'radiogroup',
          name: 'question3',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question2} = 'true'",
          title: 'Tiene certificacions de calidad',
          isRequired: true,
          requiredIf: "{question2} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question3} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "No tener la certificacion de calidad genera implicaciones negativas como perdida de confianza en el mercado, ineficiencia operativa, menos oportunidades de negocios hasta sanciones legales y regulatorias.',
        },
        {
          type: 'radiogroup',
          name: 'question4',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene libros de actas de Junta de Socios registrados',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: 'No aplica',
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question4} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Las actas y documentos no inscritos no tienen efectos legales frente a terceros, según lo contemplado en el Art. 29 del C. del Co. Este incumplimiento puede generar sanciones por las entidades de control super sociedades.',
        },
        {
          type: 'radiogroup',
          name: 'question5',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene libros de actas de Socios registrados',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question5} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Las actas y documentos no inscritos no tienen efectos legales frente a terceros, según lo contemplado en el Art. 29 del C. del Co. Este incumplimiento puede generar sanciones por las entidades de control super sociedades.',
        },
        {
          type: 'radiogroup',
          name: 'question6',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Los registros contables están al día',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question6} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "No tener los registros contables al día en una empresa puede tener diversas implicaciones negativas, tanto legales como operativas. Como problemas legales y sanciones, dificultad en la toma de decisiones, imcumplimiento fiscal, dificultad para obtener financiamiento, ineficiencia operativa, riesgo de quiebra.  Además de incumplir art 19 de C de C.',
        },
        {
          type: 'radiogroup',
          name: 'question7',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'La información contable reflejada es razonable',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question7} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando la informacion contable de una empresa no es razonable, esto puede tener varias implicaciones negativas: toma de decisiones deficientes, incumplimiento normativo, perdida de confianza, problemas para una buena gestion, consecuencias legales; Es fundamental que las empresas mantengan información contable razonable y precisa para garantizar la transparencia, la confianza del mercado y la toma de decisiones informadas tanto internamente como para sus inversionistas y otras partes interesadas.',
        },
        {
          type: 'radiogroup',
          name: 'question8',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Se requiere iniciar un proceso depuración',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question8} = 'true'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando la información contable y financiera tengan diferencias con la realidad de los hechos económicos de la empresa se debe iniciar un proceso de depuración contable. ',
        },
      ],
      title: 'Situación financiera y tributaria',
      description:
        'En esta sección, conocida como diagnostico se busca conocer el estado tributario y afiliados de su empresa.',
      questionErrorLocation: 'bottom',
    },
    {
      name: 'page2',
      elements: [
        {
          type: 'radiogroup',
          name: 'question9',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Las conciliaciones bancarias están al día',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question9} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Si no se tiene conciliada la cuenta bancaria, esto puede tener varias implicaciones:  como falta de claridad financiera, errores y duplicaciones, dificultad en las auditorias, perdida de dinero, problemas de flujo de efectivo,dificultades en la toma de decisiones;  la conciliación bancaria es fundamental para garantizar la exactitud de los registros financieros, mantener la transparencia financiera y tomar decisiones informadas en una empresa.',
        },
        {
          type: 'radiogroup',
          name: 'question10',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene Inversiones',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question11',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question10} = 'true'",
          title: 'Que inversiones tienen',
          isRequired: true,
          requiredIf: "{question10 = 'true'}",
          choices: [
            {
              value: 'Item 1',
              text: 'Acciones',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'CDT',
              score: '0',
            },
          ],
          showOtherItem: true,
          otherText: 'Otros (describa)',
        },
        {
          type: 'radiogroup',
          name: 'question12',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'Se realiza periódicamente conciliación de cuentas deudores clientes',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question12} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "La falta de conciliación periódica de las cuentas deudores clientes puede tener varias implicaciones negativas para una empresa como errores contables, perdida de ingresos, problemas con el flujo de efectivo, descuadre financiero, reputacion y relaciones con los clientes;  la conciliación periódica de las cuentas de deudores clientes es fundamental para mantener la precisión financiera, asegurar el flujo de efectivo y prevenir errores costosos en las operaciones financieras de una empresa.',
        },
        {
          type: 'radiogroup',
          name: 'question13',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene política de deterioro de la cartera',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question13} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "La falta de una política de deterioro de cuentas deudores clientes puede tener varias implicaciones negativas para una empresa: como riesgo de perdida financiera, distorsion de la informacion financiera, riesgo de creditos elevados, dificultad en la toma de decisiones, incumplimiento normativo; una política de deterioro de cuentas deudores clientes es esencial para mitigar riesgos financieros, garantizar la integridad de la información contable y tomar decisiones informadas sobre la gestión de cuentas por cobrar. ',
        },
        {
          type: 'radiogroup',
          name: 'question14',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'Se realiza provisiones de deudores y reclasificación de cuentas de difícil recaudo',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question14} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando no se realiza provisiones de cartera y no se reclasifican como de difícil recaudo se tiene una cuenta corriente por cobrar que no refleja la realidad de la cuenta afectando la liquidez de la empresa.',
        },
        {
          type: 'radiogroup',
          name: 'question15',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Realiza pruebas para medir el deterioro de cartera',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question15} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Las pruebas para medir la cartera permiten conocer la viabilidad y probabilidad de ser cobrada efectivamente.',
        },
        {
          type: 'radiogroup',
          name: 'question16',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Hay cuentas por cobrar a socios',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question16} = 'true'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando hay cuentas por cobrar a socios se refleja un uso del recurso liquido de la empresa para actividades que no corresponden a la operación de la empresa llegando afectar de manera importante la normal operación económica de la empresa.',
        },
        {
          type: 'radiogroup',
          name: 'question17',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Se concilia periódicamente las cuentas por cobrar a socios',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question17} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando se concilian las cuentas por cobrar a socios se puede determinar de manera oportuna antigüedad de la cuenta, quienes tienen pendientes obligaciones con la empresa y esto permite iniciar gestión para recuperar este recurso.',
        },
        {
          type: 'radiogroup',
          name: 'question18',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Hay cuantas de avance y anticipos entregados',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'radiogroup',
          name: 'question19',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question18} = 'true'",
          title:
            'Se concilia periódicamente las cuentas de avances y anticipos entregados',
          isRequired: true,
          requireIf: "{question18} ='true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question19} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 " Entregar anticipos son importantes para el desarrollo de contratos, pero es importante tener esta cuenta conciliada para determinar a quienes se le dieron anticipo, por cuanto valor y que antigüedad tienen, esto permite realizar una adecuada gestión de la cuenta .',
        },
        {
          type: 'radiogroup',
          name: 'question20',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Hay cuentas de otros deudores',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question21',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'Se realiza periódicamente conciliación de cuentas de otros deudores',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question21} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando no se tiene la cuenta conciliada no se puede conocer la realidad ni aplicar medidas de gestión de cobro. ',
        },
        {
          type: 'radiogroup',
          name: 'question22',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene cuenta de préstamos a trabajadores',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'checkbox',
          name: 'question23',
          requiredErrorText: "Por favor elige una o varias opciones",
          visibleIf: "{question22} = 'true'",
          title: 'Concepto de los préstamos a trabajadores',
          isRequired: true,
          requireIf: "{question22} = 'true'",
          choices: [
            {
              value: 'Item 1',
              text: 'Calamidad domestica',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'Educacion',
              score: '0',
            },
          ],
          showOtherItem: true,
          otherText: 'Otros (describa)',
        },
        {
          type: 'radiogroup',
          name: 'question24',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'Se realiza periódicamente conciliación de cuentas anticipos de impuestos y contribuciones (Renta, Iva, Ica)',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question24} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Si no se concilia las cuentas de impuestos de manera adecuada, puedes enfrentar varias implicaciones negativas: Perdida de dinero, problemas legales y multas, dificultad para la toma de decisiones, afectar la reputacion e ineficiencia operativa. ',
        },
        {
          type: 'radiogroup',
          name: 'question25',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Maneja cuentas de inventarios',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question26',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'Se realiza cada fin de mes conciliación de cuentas de inventarios',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question26} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "La falta de conciliación en la cuenta de inventarios puede tener varias implicaciones negativas para una empresa:  como planificacion deficiente,problemas de gestion,dificultades contables,riesgo financiero, problemas fiscales, riesgo operativo. ',
        },
      ],
      title: 'Activos',
      description: {
        es: 'Sección establecida para conocer sus estados "Activos" tales como cuentas relacionadas a la misma.',
      },
    },
    {
      name: 'page3',
      elements: [
        {
          type: 'radiogroup',
          name: 'question27',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene bienes "inmuebles"',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'checkbox',
          name: 'question28',
          requiredErrorText: "Por favor elige una o varias opciones",
          visibleIf: "{question27} = 'true'",
          title: 'Que clase de bienes "inmuebles" tiene',
          isRequired: true,
          requiredIf: "{question27} = 'true'",
          choices: [
            {
              value: 'Item 1',
              text: 'Terrenos',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'Construcciones y edificaciones',
              score: '0',
            },
            {
              value: 'Item 3',
              text: 'Fincas',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question29',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question27} = 'true'",
          title:
            'Los bienes "inmuebles" están directamente relacionados con la generación de ingresos',
          isRequired: true,
          requiredIf: "{question27} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question29} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando los bienes no tienen relacion directa con la generacion de ingreso se genera una inmovilizcion del capital, se incurre en costos de mantenimientos, se genera una perdida de liquidez, hay riesgo de devaluacion, impacto fiscal, oportunidades desaprovechadas y dificultades financieras, afectando  negativamente la salud financiera y la flexibilidad operativa de la empresa.',
        },
        {
          type: 'radiogroup',
          name: 'question30',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question27} = 'true'",
          title: 'Se tiene hoja de vida a cada bien "inmueble"',
          isRequired: true,
          requiredIf: "{question29} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'radiogroup',
          name: 'question31',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Esta al día en el pago del impuesto predial',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question31} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "No estar al día en el pago del impuesto predial puede generar: intereses moratorios, embargo de la propiedad, perdida de beneficios fiscales, Para evitar estas consecuencias negativas, es fundamental cumplir con tus obligaciones fiscales y pagar el impuesto predial dentro de los plazos establecidos por las autoridades locales.',
        },
        {
          type: 'radiogroup',
          name: 'question32',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene bienes "Muebles"',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'checkbox',
          name: 'question33',
          requiredErrorText: "Por favor elige una o varias opciones",
          visibleIf: "{question32} = 'true'",
          title: 'Que tipo de bienes "muebles" tiene',
          isRequired: true,
          requiredIf: "{question32} = 'true'",
          choices: [
            {
              value: 'Item 1',
              text: 'Equipos de oficina',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'Equipo de computación y comunicacion',
              score: '0',
            },
            {
              value: 'Item 3',
              text: 'Flota y equipo de transporte',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question34',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question32} = 'true'",
          title:
            'Los bienes "muebles" están directamente relacionados con la generación de ingresos',
          isRequired: true,
          requiredIf: "{question32} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question34} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando los bienes no tienen relacion directa con la generacion de ingreso se genera una inmovilizcion del capital, se incurre en costos de mantenimientos, se genera una perdida de liquidez, hay riesgo de devaluacion, impacto fiscal, oportunidades desaprovechadas y dificultades financieras, afectando  negativamente la salud financiera y la flexibilidad operativa de la empresa. ',
        },
        {
          type: 'radiogroup',
          name: 'question35',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question32} = 'true'",
          title: 'Esta al día en el pago del impuesto de los bienes "muebles"',
          isRequired: true,
          requiredIf: "{question32} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question35} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "No estar al día en el pago del impuesto puede generar: intereses moratorios, embargo de la propiedad, perdida de beneficios fiscales, Para evitar estas consecuencias negativas, es fundamental cumplir con tus obligaciones fiscales y pagar los impuesto dentro de los plazos establecidos por las autoridades locales.',
        },
        {
          type: 'radiogroup',
          name: 'question36',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question32} = 'true'",
          title: 'Se tiene hoja de vida a cada bien mueble',
          isRequired: true,
          requiredIf: "{question32} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question36} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "No tener una hoja de vida para cada bien de la empresa puede tener varias implicaciones: como dificultad en el seguimiento del activo,problemas de control interno, ineficiencia en la gestion de los activos,impacto en la contabilidad y fiscalizacion, desafio en la conciliacion y la rotacion del personal.',
        },
        {
          type: 'radiogroup',
          name: 'question37',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'Hay política de deterioro o vida útil de los bienes inmuebles y muebles',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question37} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "No tener una política de deterioro afecta la rentabilidad de la empresa ya que no se pueden descontar esos gastos generando perdida del valor contable, impacto en la toma de decisiones, incumplimiento normativo, dificultad en la gestion del activo, informacion financiera no confiable, la ausencia de una política de deterioro o vida útil de los bienes inmuebles y muebles puede tener graves implicaciones financieras y operativas para una organización.',
        },
        {
          type: 'radiogroup',
          name: 'question38',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tienes maquinaria y equipos de transporte.',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'radiogroup',
          name: 'question39',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene cuentas de intangibles',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'checkbox',
          name: 'question40',
          requiredErrorText: "Por favor elige una o varias opciones",
          visibleIf: "{question39} = 'true'",
          title: 'Que clase de intangibles tiene',
          isRequired: true,
          requiredIf: "{question39} = 'true'",
          choices: [
            {
              value: 'Item 1',
              text: 'Licencias',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'Now How',
              score: '0',
            },
            {
              value: 'Item 3',
              text: 'Good Will',
              score: '0',
            },
            {
              value: 'Item 4',
              text: 'Patentes',
              score: '0',
            },
            {
              value: 'Item 5',
              text: 'Marcas',
              score: '0',
            },
            {
              value: 'Item 6',
              text: 'Franquicias',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question41',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene otros activos',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'radiogroup',
          name: 'question42',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question41}= 'true'",
          title: 'Cuales otros activos tienen',
          isRequired: true,
          requireIf: "{question41}= 'true'",
          choices: [
            {
              value: 'Item 1',
              text: 'De inversiones',
              score: '0',
            },
          ],
          showOtherItem: true,
          otherText: 'Otros (describa)',
        },
      ],
      title: 'PPE',
      description: {
        es: 'Sección dedicada a diagnosticar la propiedad, manejo y estado de bienes muebles e inmubles.',
      },
    },
    {
      name: 'page4',
      elements: [
        {
          type: 'radiogroup',
          name: 'question43',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene obligaciones financieras',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'radiogroup',
          name: 'question44',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question43}= 'true'",
          title:
            'Se encuentran al día en el plan de pago de las obligaciones financieras',
          isRequired: true,
          requiredIf: "{question43} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question43} = 'true' and {question44} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "No estar al día en las obligaciones con los bancos puede tener diversas implicaciones financieras y legales. Como intereses de mora, bloqueo de cuentas, reporte negativos en centrales de riesgos, recargos y costos legales, embargo de bienes y deterioro de la confianza crediticia.',
        },
        {
          type: 'radiogroup',
          name: 'question45',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question43}= 'true'",
          title: 'Qué plazo tienen las obligaciones financieras',
          isRequired: true,
          requiredIf: "{question43} = 'true'",
          choices: [
            {
              value: 'Item 1',
              text: '(1 años)',
              score: '0',
            },
            {
              value: 'Item 2',
              text: '(2 años)',
              score: '0',
            },
            {
              value: 'Item 3',
              text: '(3 años)',
              score: '0',
            },
            {
              value: 'Item 4',
              text: '(+3 años)',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question45} anyof ['Item 1', 'Item 2']",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Corto plazo: los créditos a corto plazo afectan fuerte el flujo de caja de la empresa. Largo plazo: lo ideal es tener crédito a mas tiempo para tener un mejor desempeño del flujo de caja de la empresa ',
        },
        {
          type: 'radiogroup',
          name: 'question46',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question43}= 'true'",
          title: 'Tasa de intereses mensual de las obligaciones financieras',
          isRequired: true,
          requiredIf: "{question43} = 'true'",
          choices: [
            {
              value: 'Item 1',
              text: '1%',
              score: '0',
            },
            {
              value: 'Item 2',
              text: '2%',
              score: '0',
            },
            {
              value: 'Item 3',
              text: '3%',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question46} anyof ['Item 1', 'Item 2', 'Item 3']",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Tasas de intereses altas: tomar créditos con tasas altas generalmente esta asociada a una baja calificación crediticia al nivel de riesgo por eso es muy importante tener una buena calificación de riesgo para negociar mejores tasas de interés que den mayores beneficios a la empresa  ',
        },
        {
          type: 'radiogroup',
          name: 'question47',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene prestamos con terceros',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question47} = 'true'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Los créditos con terceros son más costosos y afectan la rentabilidad de la empresa. Tener créditos con terceros es un signo de alto riesgo.  ',
        },
        {
          type: 'radiogroup',
          name: 'question48',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question47} = 'true'",
          title: 'Plazo de los créditos con terceros',
          isRequired: true,
          requiredIf: "{question47} = 'true'",
          choices: [
            {
              value: 'Item 1',
              text: 'Hasta 1 año',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'Hasta 2 años',
              score: '0',
            },
            {
              value: 'Item 3',
              text: 'Hasta +3 años',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question48} = 'true'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Corto plazo: los créditos a corto plazo afectan fuerte el flujo de caja de la empresa. Largo plazo: lo ideal es tener crédito a mas tiempo para tener un mejor desempeño del flujo de caja de la empresa.',
        },
        {
          type: 'radiogroup',
          name: 'question49',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question47} = 'true'",
          title: 'Tasa de interés mensual créditos con terceros',
          isRequired: true,
          requiredIf: "{question47} = 'true'",
          choices: [
            {
              value: 'Item 1',
              text: '1%',
              score: '3',
            },
            {
              value: 'Item 2',
              text: '2%',
              score: '2',
            },
            {
              value: 'Item 3',
              text: '3%',
              score: '1',
            },
            {
              value: 'Item 4',
              text: '4% o +4%',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question49} anyof ['Item 3', 'Item 4']",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Las tasas de interés de prestamos con terceros son mas altas afectando la rentabilidad de la empresa y el flujo de caja. Si la tasa de interés es superior al 3% mensual se considera de alto riesgo y es toxica para la empresa porque afecta no solo la rentabilidad sino también el flujo de caja y la estabilidad de la empresa. ',
        },
        {
          type: 'radiogroup',
          name: 'question50',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene cuenta con proveedores',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question51',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question50} = 'true'",
          title: 'Esta al día en el pago a proveedores',
          isRequired: true,
          requiredIf: "{question50} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question51} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Estar en mora en el pago a proveedores puede tener diversas implicaciones para una empresa. Como perdida de credibilidad, intereses  y cargos, restricciones de credito, interrupcion de suministro, daño de las relaciones comerciales, impacto en la liquidez, posibles acciones legales.',
        },
        {
          type: 'radiogroup',
          name: 'question52',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question50} = 'true'",
          title: 'Política de crédito de proveedores',
          isRequired: true,
          requiredIf: "{question50} = 'true'",
          choices: [
            {
              value: 'Item 1',
              text: 'Contado',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'Crédito 30 días',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question53',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question50} = 'true'",
          title: 'A los cuantos Días esta pagando a proveedores',
          isRequired: true,
          requiredIf: "{question50} = 'true'",
          choices: [
            {
              value: 'Item 1',
              text: 'Menor a 30 días',
              score: '0',
            },
            {
              value: 'Item 2',
              text: '31 días',
              score: '0',
            },
            {
              value: 'Item 3',
              text: '60 días',
              score: '0',
            },
            {
              value: 'Item 4',
              text: '90 días',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question54',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene cuenta con acreedores',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question55',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question54} = 'true'",
          title: 'Esta al día en el pago de acreedores',
          isRequired: true,
          requiredIf: "{question54} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question55} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Estar en mora en el pago acreedores puede tener diversas implicaciones para una empresa. Como perdida de credibilidad, intereses  y cargos, restricciones de credito, interrupcion de suministro, daño de las relaciones comerciales, impacto en la liquidez, posibles acciones legales.',
        },
        {
          type: 'radiogroup',
          name: 'question56',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question54} = 'true'",
          title: 'Política de crédito de acreedores',
          isRequired: true,
          requiredIf: "{question54} = 'true'",
          choices: [
            {
              value: 'Item 1',
              text: 'Contado',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'Crédito 30 días',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question57',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question54} = 'true'",
          title: 'A los cuantos Días esta pagando a acreedores',
          isRequired: true,
          requiredIf: "{question54} = 'true'",
          choices: [
            {
              value: 'Item 1',
              text: 'Menor a 30 días',
              score: '0',
            },
            {
              value: 'Item 2',
              text: '31 días',
              score: '0',
            },
            {
              value: 'Item 3',
              text: '60 días',
              score: '0',
            },
            {
              value: 'Item 4',
              text: '90 días',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question58',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene deuda con socios o accionistas',
          isRequired: true,
          choices: [
            {
              value: 'false',
              text: 'Si',
              score: '0',
            },
            {
              value: 'true',
              text: 'No',
              score: '3',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question58} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando se le debe a socios es un indicador de baja liquidez por que la empresa no esta siendo autosuficiente y debe recurrir a terceros para poder cumplir con sus obligaciones ',
        },
        {
          type: 'radiogroup',
          name: 'question59',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'Presenta oportunamente las declaraciones de retención en la fuente',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question59} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "No presentar oportunamente las declaraciones de retención en la fuente tiene diversas implicaciones: sanciones tributarias por extemporaneidad, cobros juridicos, investigaciones por omision de obligaciones, pagos de intereses por no presentar y pagar oportunamente, puede tener consecuencias financieras significativas y problemas legales, lo que hace esencial cumplir con estas obligaciones tributarias de manera adecuada y puntual.',
        },
        {
          type: 'radiogroup',
          name: 'question60',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question59} = 'true'",
          title:
            'Esta al día en el pago de las retenciones en la fuente y autorretenciones',
          isRequired: true,
          requiredIf: "{question59} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question60} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "No  pagar oportunamente las declaraciones de retención en la fuente tiene diversas implicaciones: sanciones tributarias por ineficacia, cobros juridico, investigaciones por omision de obligaciones, pagos de intereses por no  pagar oportunamente  puede tener consecuencias financieras significativas y problemas legales como un proceso penal lo que hace esencial cumplir con estas obligaciones tributarias de manera adecuada y puntual.',
        },
        {
          type: 'radiogroup',
          name: 'question61',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question59} = 'true'",
          title: 'Cuantas declaraciones de retención en la fuente deben',
          isRequired: true,
          requiredIf: "{question59} = 'true'",
          choices: [
            {
              value: 'true',
              text: '0',
              score: '3',
            },
            {
              value: 'false1',
              text: '1',
              score: '0',
            },
            {
              value: 'false2',
              text: '2',
              score: '0',
            },
            {
              value: 'false',
              text: '3 o más',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question61} = 'true'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '📝 "El estar en mora en el pago de las obligaciones por impuesto es un indicador de baja liquidez y una planeación deficiente que genera mayores gastos por intereses que afectan la rentabilidad y flujo de caja de la empresa ',
        },
        {
          type: 'radiogroup',
          name: 'question62',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene acuerdos de pago con la Dian',
          isRequired: true,
          choices: [
            {
              value: 'false',
              text: 'Si',
              score: '0',
            },
            {
              value: 'true',
              text: 'No',
              score: '1',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
            score: '3',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question62} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Los acuerdos para pagos de impuestos, aunque son un alivio también presenta una deficiente planeación afectando la rentabilidad de la empresa por el pago de intereses a tasas mayores. ',
        },
        {
          type: 'radiogroup',
          name: 'question63',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Está obligado a presentar Información exógena a la Dian',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'radiogroup',
          name: 'question64',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question63}= 'true'",
          title:
            'Ha presentado oportunamente la Información exógena a la Dian en los últimos 2 años',
          isRequired: true,
          requiredIf: "{question63}= 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question64} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "La no presentación oportuna de información exógena en materia tributaria puede tener diversas implicaciones negativas para los contribuyentes: sanciones economicas, perdida de beneficios fiscales, problemas legales, no presentar a tiempo la información exógena puede tener graves consecuencias financieras y legales para los contribuyentes. ',
        },
        {
          type: 'radiogroup',
          name: 'question65',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Ha sido sancionado por la Dian en los dos últimos años',
          isRequired: true,
          choices: [
            {
              value: 'false',
              text: 'Si',
              score: '0',
            },
            {
              value: 'true',
              text: 'No',
              score: '3',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question65} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Las implicaciones negativas de haber sido sancionado por la DIAN: Multas y sanciones economicas, deterioro de la reputacion y confianza, problemas legales, perdida de beneficios fiscales, revision continua por parte de la DIAN.',
        },
        {
          type: 'checkbox',
          name: 'question66',
          requiredErrorText: "Por favor elige una o varias opciones",
          visibleIf: "{question65} = 'false'",
          title: 'En que impuesto ha sido sancionado',
          isRequired: true,
          requiredIf: "{question65} = 'false'",
          choices: [
            {
              value: 'Item 1',
              text: 'Exogena',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'Renta',
              score: '0',
            },
            {
              value: 'Item 3',
              text: 'IVA',
              score: '0',
            },
            {
              value: 'Item 4',
              text: 'Retefuente',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf:
            "{question66} anyof ['Item 1', 'Item 2', 'Item 3', 'Item 4']",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Haber sido sancionado por la autoridad tributaria primero refleja una deficiente planeación. segundo se incurren en gastos por sanciones e intereses que afectan la rentabilidad y flujo de caja de la empresa ',
        },
        {
          type: 'radiogroup',
          name: 'question67',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'Está obligado a presentar anexos a la declaración de renta y complementarios formatos 2516-2517',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question68',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question67} = 'true'",
          title:
            'Ha presentado oportunamente los anexos a la declaración de renta y complementarios formatos 2516-2517',
          isRequired: true,
          requiredIf: "{question67} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question68} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "No presentar de manera oportuna los informes requeridos por la autoridad tributaria afecta a la empresa porque debe asumir gastos por sanciones, todo esto muestra una deficiente planeación.',
        },
        {
          type: 'radiogroup',
          name: 'question69',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Maneja impuestos diferidos',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question70',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Esta al día en el pago de seguridad social y parafiscales',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question70} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "La falta de estar al día en el pago de seguridad social y parafiscales puede tener diversas implicaciones negativas para una empresa: como sanciones y multas, riesgo legal, problemas con entidades de control, costos laborales futuros, dificultad para atraer y retener talento humano, no estar al día en el pago de seguridad social y parafiscales puede tener graves repercusiones legales y financieras para una empresa, además de afectar su reputación y relaciones laborales. ',
        },
        {
          type: 'radiogroup',
          name: 'question71',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'Está pagando las tarifas de Riesgos Laborales correcta a la ARL “Verifique sus tarifas actuales”',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question71} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando no se paga la  tarifas correcta en el evento de accidentes la ARL no va a amparar al trabajador y estos gastos los tendrá que asumir la empresa ademas de las consecuencias legales graves para la empresa, afectar la seguridad y el bienestar de los trabajadores y dañar la reputación corporativa. ',
        },
        {
          type: 'radiogroup',
          name: 'question72',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene demandas o procesos laborales',
          isRequired: true,
          choices: [
            {
              value: 'false',
              text: 'Si',
              score: '0',
            },
            {
              value: 'true',
              text: 'No',
              score: '3',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question72} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Las demandas laborales pueden tener un impacto significativo en una empresa, no solo en términos financieros, sino también en su reputación y su capacidad para mantener un ambiente laboral positivo,  teniendo costos legales y financieros, distraccion y tiempo perdido, daño a la reputacion,  ambiente laboral negativo, posibles sanciones legales. ',
        },
        {
          type: 'radiogroup',
          name: 'question73',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'Esta al día en el pago de impuesto de rentas y complementarios',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question73} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "No estar al día en el pago de impuestos a la DIAN puede tener un impacto significativo en la empresa, incluyendo multas, sanciones, problemas financieros, y daños a la reputación, dificultades financieras, reputacion empresarial, problemas legales, perdida de beneficios fiscales, dificultad para conseguir creditos bancarios',
        },
        {
          type: 'radiogroup',
          name: 'question74',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question73} = 'false'",
          title:
            'Cuantos periodos debe de impuesto de rentas y complementarios',
          isRequired: true,
          requiredIf: "{question73} = 'false'",
          choices: [
            {
              value: 'Item 1',
              text: '1',
              score: '0',
            },
            {
              value: 'Item 2',
              text: '2',
              score: '0',
            },
            {
              value: 'Item 3',
              text: '3',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question75',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene saldo a favor por impuesto de rentas y complementarios',
          isRequired: true,
          choices: [
            {
              value: 'false',
              text: 'Si',
              score: '0',
            },
            {
              value: 'true',
              text: 'No',
              score: '3',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question75} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando se tienen saldos a favor de impuestos estos pueden ser suceptibles de ser reclamados pero si la informacion no se lleva conforme a las normas puede tener implicaciones negativas como posibles ajustes y auditorias, unque los saldos a favor pueden parecer beneficiosos a primera vista, su gestión y las posibles implicaciones negativas requieren atención por parte de la empresa para evitar problemas financieros y legales. ',
        },
        {
          type: 'radiogroup',
          name: 'question76',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Se están presentando oportunamente las declaraciones de Iva',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question76} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando una empresa no presenta ni paga oportunamente los impuestos a la DIAN, pueden surgir implicaciones negativas que afectan tanto a la empresa como a sus dueños y socios:  con multas y sanciones, intereses moratorios,  acciones de embargos, perdida de beneficios fiscales, daño a la reputacion, dificultades financieras',
        },
        {
          type: 'radiogroup',
          name: 'question77',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Esta al día en el pago del impuesto de IVA',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question77} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando una empresa no paga oportunamente los impuestos a la DIAN, pueden surgir implicaciones negativas que afectan tanto a la empresa como a sus dueños y socios:  con multas y sanciones, intereses moratorios,  acciones de embargos, perdida de beneficios fiscales, daño a la reputacion, dificultades financieras',
        },
        {
          type: 'radiogroup',
          name: 'question78',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question77} = 'false'",
          title: 'Cuantos periodos debe de impuesto de IVA',
          isRequired: true,
          requiredIf: "{question77} = 'false'",
          choices: [
            {
              value: 'Item 1',
              text: '1',
              score: '0',
            },
            {
              value: 'Item 2',
              text: '2',
              score: '0',
            },
            {
              value: 'Item 3',
              text: '3 o más',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question79',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene saldo a favor de IVA',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question79} = 'true'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando se tienen saldos a favor de impuestos estos pueden ser suceptibles de ser reclamados pero si la informacion no se lleva conforme a las normas puede tener implicaciones negativas como posibles ajustes y auditorias, unque los saldos a favor pueden parecer beneficiosos a primera vista, su gestión y las posibles implicaciones negativas requieren atención por parte de la empresa para evitar problemas financieros y legales.',
        },
        {
          type: 'radiogroup',
          name: 'question80',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Esta obligado a realizar retenciones de ICA',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question81',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question80} = 'true'",
          title: 'Esta presentando oportunamente las declaraciones de Rete Ica',
          isRequired: true,
          requiredIf: "{question80} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question81} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando una empresa no presenta oportunamente los impuestos a las administraciones locales, pueden surgir implicaciones negativas que afectan tanto a la empresa como a sus dueños y socios:  con multas y sanciones, intereses moratorios,  acciones de embargos, perdida de beneficios fiscales, daño a la reputacion, dificultades financieras. ',
        },
        {
          type: 'radiogroup',
          name: 'question82',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question80} = 'true'",
          title: 'Esta al día en el pago de impuesto de ICA',
          isRequired: true,
          requiredIf: "{question80} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question82} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando no se cumple oportunamente con el pago de las retenciones de Ica se generan costos adicionales por intereses de mora que son muchos más altos que la tasa bancaria que afectan la rentabilidad de la empresa y el tener mora puede ser una evidencia de una deficiente planeación. ',
        },
        {
          type: 'radiogroup',
          name: 'question83',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question80} = 'true'",
          title: 'Cuantos periodos debe de impuesto de ICA',
          isRequired: true,
          requiredIf: "{question80} = 'true'",
          choices: [
            {
              value: 'Item 1',
              text: '1',
              score: '0',
            },
            {
              value: 'Item 2',
              text: '2',
              score: '0',
            },
            {
              value: 'Item 3',
              text: '3 o más',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question84',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'Presenta oportunamente la declaración anual de industria y comercio los últimos 3 años',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question84} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando no se presenta oportunamente las declaraciones de Industria y Comercio se incumple un deber legal que trae consecuencia de sobrecostos para la empresa como gastos de intereses y sanciones por extemporaneidad que afectan la rentabilidad y la liquidez, afectando la reputacion de la empresa. ',
        },
        {
          type: 'radiogroup',
          name: 'question85',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question84} = 'true'",
          title:
            'Esta al día en los pagos de impuestos de industria y comercio y complementario',
          isRequired: true,
          requiredIf: "{question84} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question85} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando no se paga oportunamente los impuestos de Industria y Comercio se generan gastos de intereses, afectacion de la reputacion, afectan la rentabilidad y la liquidez asi como posible procesos juridicos y embargos. ',
        },
        {
          type: 'radiogroup',
          name: 'question86',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question85} = 'false'",
          title: 'Cuantos periodos de industria y comercio deben',
          isRequired: true,
          requiredIf: "{question85} = 'false'",
          choices: [
            {
              value: 'Item 1',
              text: '1',
              score: '0',
            },
            {
              value: 'Item 2',
              text: '2',
              score: '0',
            },
            {
              value: 'Item 3',
              text: '3',
              score: '0',
            },
            {
              value: 'Item 4',
              text: '0',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question87',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Está obligado a presentar información exógena por ICA',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'radiogroup',
          name: 'question88',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question87} = 'true'",
          title: 'Ha presentado oportunamente las Información exógena por ICA',
          isRequired: true,
          requireIf: "{question87} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question87} = 'true' and {question88} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando no se presenta oportunamente la declaración anual de información de medios magnéticos municipales o distritales se incurren en sanciones por no cumplir con el deber formal de rendir información de terceros esta situación también es un indicador de una deficiente planeación. ',
        },
        {
          type: 'radiogroup',
          name: 'question89',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'Ha sido sancionado por los municipios o distritos por no cumplir con la presentación de la declaración de industria y comercio',
          isRequired: true,
          choices: [
            {
              value: 'false',
              text: 'Si',
              score: '0',
            },
            {
              value: 'true',
              text: 'No',
              score: '3',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question89} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando se ha sido sancionado por una autoridad en materia tributaria es porque se ha incumplido un deber legal, este incumplimiento trae una investigación que termina en una imposición de sanción afectando la rentabilidad y liquidez de la empresa por que se deben pagar intereses de mora y sanción por extemporaneidad que son muy alto, esta situación también indica que se tiene una deficiente planeación. ',
        },
        {
          type: 'radiogroup',
          name: 'question90',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question89} = 'false'",
          title:
            'Por cuantos periodos ha sido sancionados por no presentar declaración de industria y comercio',
          isRequired: true,
          requiredIf: "{question89} = 'false'",
          choices: [
            {
              value: 'Item 1',
              text: '1',
              score: '0',
            },
            {
              value: 'Item 2',
              text: '2',
              score: '0',
            },
            {
              value: 'Item 3',
              text: '3 o más',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question91',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'Está obligado a pagar el impuesto de licores, cerveza y cigarrillo',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question92',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question91} = 'true'",
          title:
            'Paga oportunamente el impuesto de licores, cerveza y cigarrillo',
          isRequired: true,
          requiredIf: "{question91} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question92} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando una empresa no paga oportunamente los impuestos a la administracion de impuestos, pueden surgir implicaciones negativas que afectan tanto a la empresa como a sus dueños y socios:  con multas y sanciones, intereses moratorios,  acciones de embargos, perdida de beneficios fiscales, daño a la reputacion, dificultades financieras. ',
        },
        {
          type: 'radiogroup',
          name: 'question93',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Estado obligado a pagar el impuesto al consumo',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question94',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question93} = 'true'",
          title: 'Paga oportunamente el impuesto al consumo',
          isRequired: true,
          requiredIf: "{question93} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplicar',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question94} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando una empresa no paga oportunamente los impuestos a la administracion de impuestos, pueden surgir implicaciones negativas que afectan tanto a la empresa como a sus dueños y socios:  con multas y sanciones, intereses moratorios,  acciones de embargos, perdida de beneficios fiscales, daño a la reputacion, dificultades financieras. ',
        },
        {
          type: 'radiogroup',
          name: 'question95',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene cuentas de Anticipos y avances recibidos de contratos',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question96',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question95} = 'true'",
          title:
            'La cuenta de avances y anticipos recibidos se concilia periódicamente',
          isRequired: true,
          requiredIf: "{question95} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question96} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando no se concilia la cuenta se genera incertidumbre en el saldo de la cuenta porque no es posible tener certeza de los hechos económico.  ',
        },
        {
          type: 'radiogroup',
          name: 'question97',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene cuentas por recaudos a favor de terceros',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'radiogroup',
          name: 'question98',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question97} = 'true'",
          title:
            'Se concilia periódicamente esta cuenta de recaudos a favor de terceros',
          isRequired: true,
          requiredIf: "{question97} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question98} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando no se concilia la cuenta se genera incertidumbre en el saldo de la cuenta porque no es posible tener certeza de los hechos económico.  ',
        },
      ],
      title: 'Pasivos',
      description: {
        es: 'Sección de bienes pasivos, para diagnosticar el estado y manejo de obligaciones, cuentas o prestaciones con terceros.',
      },
    },
    {
      name: 'page5',
      elements: [
        {
          type: 'radiogroup',
          name: 'question99',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Que tipo de capital tiene',
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: 'Capital social',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'Capital personas',
              score: '0',
            },
            {
              value: 'Item 3',
              text: 'Naturales',
              score: '0',
            },
          ],
        },
        {
          type: 'text',
          name: 'question100',
          requiredErrorText: "Por favor digite el valor del capital",
          title: 'Valor del capital autorizado ',
          isRequired: true,
          commentText: '(3105). $700.000.000',
          inputType: 'number',
          min: 0,
          max: 1000000000,
          step: 100000,
        },
        {
          type: 'text',
          name: 'question101',
          requiredErrorText: "Por favor digite el valor del capital",
          title: 'Valor del capital suscrito y pagado ',
          isRequired: true,
          commentText: '(3103). $700.000.000',
          inputType: 'number',
          min: 0,
          max: 1000000000,
          step: 100000,
          "startWithNewLine": false
        },
        {
          type: 'radiogroup',
          name: 'question102',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene prima en colocación de acciones',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'radiogroup',
          name: 'question103',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene cuenta de reservas',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question104',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Esta realizando la provisión de reservas obligatorias',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question104} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '📝 "Las implicaciones negativas de no tener reservas legales para una empresa son: Vulnerabilidad financiera, incapacidad para enfrentar perdidas, problemas legales y sanciones, dificultad para distribuir utilidades, devaluacion del valor de la empresa, Mantener reservas legales adecuadas es esencial para la estabilidad y la salud financiera a largo plazo de una empresa. ',
        },
        {
          type: 'radiogroup',
          name: 'question105',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene utilidad del ejercicio actual',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question106',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene utilidades acumuladas de ejercicios anteriores',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
      ],
      title: 'Patrimonio',
      description: {
        es: 'Espacio situaciado para la diagnosticación del capital base u otros.',
      },
    },
    {
      name: 'page6',
      elements: [
        {
          type: 'radiogroup',
          name: 'question107',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Metodo de ventas',
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: 'Credito',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'Contado',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question108',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Cuál es la fuente principal de los ingresos',
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: 'Ventas Minoristas',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'Ventas Mayoristas',
              score: '0',
            },
            {
              value: 'Item 3',
              text: 'Suministros',
              score: '0',
            },
            {
              value: 'Item 4',
              text: 'Servicios y Logistica',
              score: '0',
            },
            {
              value: 'Item 5',
              text: 'Consultorias',
              score: '0',
            },
            {
              value: 'Item 6',
              text: 'Obras Civiles',
              score: '0',
            },
            {
              value: 'Item 7',
              text: 'Inmobiliarios',
              score: '0',
            },
            {
              value: 'Item 8',
              text: 'Transportes',
              score: '0',
            },
            {
              value: 'Item 9',
              text: 'Educación',
              score: '0',
            },
          ],
          showOtherItem: true,
          otherText: 'Otros (describa)',
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '📝 "Los ingresos son fundamentales para el crecimiento, la competitividad y el éxito a largo plazo de una empresa, así como para su contribución a la economía y la sociedad en general. ',
        },
        {
          type: 'radiogroup',
          name: 'question109',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Cuál es la fuente secundaria de los ingresos',
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: 'Ventas Minoristas',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'Ventas Mayoristas',
              score: '0',
            },
            {
              value: 'Item 3',
              text: 'Suministros',
              score: '0',
            },
            {
              value: 'Item 4',
              text: 'Servicios y Logistica',
              score: '0',
            },
            {
              value: 'Item 5',
              text: 'Consultorias',
              score: '0',
            },
            {
              value: 'Item 6',
              text: 'Obras Civiles',
              score: '0',
            },
            {
              value: 'Item 7',
              text: 'Inmobiliarios',
              score: '0',
            },
            {
              value: 'Item 8',
              text: 'Transportes',
              score: '0',
            },
            {
              value: 'Item 9',
              text: 'Educación',
              score: '0',
            },
          ],
          showOtherItem: true,
          otherText: 'Otros (describa)',
        },
        {
          type: 'radiogroup',
          name: 'question110',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Cuál es la fuente terciaria de los ingresos',
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: 'Ventas Minoristas',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'Ventas Mayoristas',
              score: '0',
            },
            {
              value: 'Item 3',
              text: 'Suministros',
              score: '0',
            },
            {
              value: 'Item 4',
              text: 'Servicios y Logistica',
              score: '0',
            },
            {
              value: 'Item 5',
              text: 'Consultorias',
              score: '0',
            },
            {
              value: 'Item 6',
              text: 'Obras Civiles',
              score: '0',
            },
            {
              value: 'Item 7',
              text: 'Inmobiliarios',
              score: '0',
            },
            {
              value: 'Item 8',
              text: 'Transportes',
              score: '0',
            },
            {
              value: 'Item 9',
              text: 'Educación',
              score: '0',
            },
          ],
          showOtherItem: true,
          otherText: 'Otros (describa)',
        },
        {
          type: 'radiogroup',
          name: 'question111',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'Las actividades económicas realizadas en el último año están relacionadas en el RUT',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question112',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene Ingresos por otras actividades ¿cuál?',
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: 'Intereses',
              score: '0',
            },
          ],
          showOtherItem: true,
          otherText: 'Otros (describa)',
        },
        {
          type: 'radiogroup',
          name: 'question113',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Recibe ingresos de ventas por anticipado',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question114',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Realiza venta de mercancías en consignación',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question115',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Recibe subvenciones del gobierno',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question116',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question115} = 'true'",
          title: 'Cual es el concepto de las subvenciones del gobierno',
          isRequired: true,
          requiredIf: "{question115} = 'true'",
          choices: [
            {
              value: 'Item 1',
              text: 'Regalias',
              score: '0',
            },
          ],
          showOtherItem: true,
          otherText: 'Otros (describa)',
        },
        {
          type: 'radiogroup',
          name: 'question117',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Recibe ingresos de ventas al exterior',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question118',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Recibe pagos en moneda extranjera',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question119',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Cuál es la política de recaudo de los ingresos',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Contado',
              score: '3',
            },
            {
              value: 'false',
              text: 'Credito',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question119} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Lo ideal para una empresa es que sus ventas se han de contado así tendrá mayor flujo de liquidez. Tener ventas con un plazo de crédito mayor a 30 días generar una afectación muy fuerte en la liquidez de la empresa viéndose abocado a conseguir financiación con los bancos e incrementar gastos por intereses para poder operar.  ',
        },
        {
          type: 'radiogroup',
          name: 'question120',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'Ha realizado devoluciones en ventas en el último periodo mayores al 10% de los ingresos del periodo',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'radiogroup',
          name: 'question121',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question120} = 'true'",
          title: 'Causas de las devoluciones en ventas',
          requiredIf: "{question120} = 'true'",
          choices: [
            {
              value: 'Item 1',
              text: 'Errores de facturación',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'Requerimientos del cliente',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question122',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question120} = 'true'",
          title:
            '% de las devoluciones en ventas frente a los ingresos totales',
          requiredIf: "{question120} = 'true'",
          choices: [
            {
              value: 'Item 1',
              text: '0%',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'Hasta 10%',
              score: '0',
            },
            {
              value: 'Item 3',
              text: 'Mayor de 10%',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question122} = 'Item 3'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Tener devoluciones superiores al 10% de los ingresos es un indicador no favorable para la empresa porque puede ser susceptible de investigación por parte de la Dian para corroborar las causas que originaron esas devoluciones y cuando la Dian realiza una fiscalización audita todos los movimientos de la empresa y eso puede ser riesgoso para la empresa si tiene inconsistencias en sus operaciones económicas. ',
        },
        {
          type: 'radiogroup',
          name: 'question123',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Todas las ventas la realizan por factura electrónica',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question123} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando no se trasmiten todas las facturas de manera electrónica estando obligado a realizarlo sera objeto de sanciones contempladas en el artículo 651 ET y puede llegar hasta el cierre del establecimiento. ',
        },
        {
          type: 'radiogroup',
          name: 'question124',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question123} = 'true'",
          title:
            'La factura electrónica cumple con todos los requisitos establecidos en la resolución 42 de 2020',
          isRequired: true,
          requiredIf: "{question123} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question124} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "El incumplimiento de algunos de los 16 requisitos según la resolución 42 de 2020 puede ser rechazada electrónicamente y si no llegase a ocurrir el rechazo tampoco seria validad para descontar costos y gastos o cuando se  va solicitar devolución de impuesto de IVA. ',
        },
        {
          type: 'radiogroup',
          name: 'question125',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene ingresos por ganancias ocasionales',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question126',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question125} = 'true'",
          title: 'De que fuente provienen las ganancias ocasionales',
          isRequired: true,
          requiredIf: "{question125} = 'true'",
          choices: [
            {
              value: 'Item 1',
              text: 'Venta de activos',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'Donaciones',
              score: '0',
            },
            {
              value: 'Item 3',
              text: 'Indeminizaciones',
              score: '0',
            },
          ],
          showOtherItem: true,
          otherText: 'Otros (describa)',
        },
      ],
      title: 'Ingresos',
      description: {
        es: 'Preguntas para comprender el estado de ingresos, ya sean pasivos, activos etc y su condición para la empresa.',
      },
    },
    {
      name: 'page7',
      elements: [
        {
          type: 'checkbox',
          name: 'question127',
          requiredErrorText: "Por favor elige una o varias opciones",
          title: 'Que tipo de costos maneja',
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: 'Costos de la Mercancía vendida',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'Costos de la Prestación de servicios',
              score: '0',
            },
            {
              value: 'Item 3',
              text: 'Costos en Construcciones de obras',
              score: '0',
            },
            {
              value: 'Item 4',
              text: 'Costos de Producción o de Operación',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '📝 "Es importante aplicar correctamente los costos por varias razones: Permite tomar mejores decisiones, incrementa la eficiencia operativa,  me vuelve mas competitivo, incremento la rentabilidad, me permite planificarme financieramente; una gestion adecuada de los costos es fundamental para el exito y la sostenibilidad de la empresa. ',
        },
        {
          type: 'radiogroup',
          name: 'question128',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'Realiza compras a personas no obligadas a facturar electrónicamente',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'radiogroup',
          name: 'question129',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question128} = 'true'",
          title:
            'Las compras a personas no obligadas a facturar electrónicamente les hacen documento soporte',
          isRequired: true,
          requiredIf: "{question128} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question129} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "No generar y trasmitir el documentos soporte en compras a sujetos no obligados a facturar puede tener serias implicaciones negativas, tanto desde el punto de vista fiscal como operativo como problemas fiscales, perdida de deducciones fiscales, riesgo de auditoria, problemas contables,  deterioro de la reputacion empresarial. ',
        },
      ],
      title: 'Costos',
      description: {
        es: 'Condición de los costos manejados por la empresa.',
      },
    },
    {
      name: 'page8',
      elements: [
        {
          type: 'radiogroup',
          name: 'question130',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene gasto de personal/nomina',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question131',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Esta al día en los pagos de nomina',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question131} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "El retraso en el pago de la nómina para una empresa puede tener diversas implicaciones negativas, incluyendo: renuncia de los empleados,embargo de bienes, problemas laborales, repercusiones legales, sanciones financieras, perdida de reputacion, el retraso en el pago de las nóminas puede tener un impacto negativo significativo en una empresa, que va desde la pérdida de empleados talentosos hasta problemas legales y sanciones financieras. ',
        },
        {
          type: 'radiogroup',
          name: 'question132',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene gastos por honorarios o Prestación de servicios',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question133',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'Al momento de pagar los honorarios o servicios personales solicita el pago de la seguridad social',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question133} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "No solicitar el pago de seguridad social para los honorarios o servicios personales de un contratista o trabajador independiente puede tener varias implicaciones negativas: como sanciones legales, problemas para el empleador, riesgos para el trabajador independiente y un impacto en la seguridad laboral y la reputación de la empresa. ',
        },
        {
          type: 'radiogroup',
          name: 'question134',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'Realiza debidamente las retenciones en la fuente al momento de las compras',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question134} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "No realizar las retenciones en la fuente de ley estando obligado se configura incumplimiento a la norma y a su ves lo hace solidario del pago de las retenciones no practicadas esto genera un gasto por retenciones asumidas mostrando una deficiente planeación y se puede ver avocado a auditoria y fiscalizacion por parte de la dian. ',
        },
        {
          type: 'radiogroup',
          name: 'question135',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene gastos de Arrendamientos',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question136',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene gastos por contribuciones y afiliaciones',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question137',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question136} = 'true'",
          title: 'Que contribuciones y afiliaciones tiene',
          isRequired: true,
          requiredIf: "{question136} = 'true'",
          choices: [
            {
              value: 'Item 1',
              text: 'Superintendencias',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'Afiliaciones y sostenimiento',
              score: '0',
            },
          ],
          showOtherItem: true,
          otherText: 'Otros (describa)',
        },
        {
          type: 'radiogroup',
          name: 'question138',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question136} = 'true'",
          title: 'Esta al día en el pago de las contribuciones',
          isRequired: true,
          requiredIf: "{question136} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question138} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "El incumplimiento en el pago de las contribuciones pueden generar sanciones e intereses de mora afectando la rentabilidad de la empresa además de ser un indicador de deficiente planeación. ',
        },
        {
          type: 'radiogroup',
          name: 'question139',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Realiza depreciaciones',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question139} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "las depreciaciones son un gasto que ayuda a disminuir la renta de la empresa no realizar depreciaciones lleva a tener que pagar un mayor impuesto de renta. ',
        },
        {
          type: 'checkbox',
          name: 'question140',
          requiredErrorText: "Por favor elige una o varias opciones",
          visibleIf: "{question139} = 'true'",
          title: 'Cuales depreciaciones realiza',
          isRequired: true,
          requiredIf: "{question139} = 'true'",
          choices: [
            {
              value: 'Item 1',
              text: 'Construcciones y Edificaciones',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'Equipo de Oficina',
              score: '0',
            },
            {
              value: 'Item 3',
              text: 'Equipo de Computación y Comunicación',
              score: '0',
            },
            {
              value: 'Item 4',
              text: 'Flota y Equipo de Transporte',
              score: '0',
            },
            {
              value: 'Item 5',
              text: 'Maquinaria y Equipos',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question141',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Realiza provisiones de nómina y prestaciones sociales',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question141} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "No realizar provisiones de nómina y prestaciones sociales puede afectar negativamente la salud financiera de la empresa, dar lugar a sanciones legales, conflictos laborales y problemas contables y fiscales. ',
        },
        {
          type: 'radiogroup',
          name: 'question142',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Realiza otras provisiones',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question142} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando no se realizan Las provisiones se pierden beneficios como poder llevar a gastos estos valores y disminuir el impuesto de renta, dos poder tener una cartera que refleja la realidad de su cobrabilidad  ',
        },
        {
          type: 'radiogroup',
          name: 'question143',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question142} = 'true'",
          title: 'Cuales provisiones realiza',
          isRequired: true,
          requiredIf: "{question142} = 'true'",
          choices: [
            {
              value: 'Item 1',
              text: 'Cuentas Deudores',
              score: '0',
            },
          ],
          showOtherItem: true,
          otherText: 'Otros (describa)',
        },
        {
          type: 'radiogroup',
          name: 'question144',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Realiza amortizaciones',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question144} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando no se realizan Las amortizaciones se pierden beneficios como poder llevar a gastos estos valores y disminuir el impuesto de renta. ',
        },
        {
          type: 'radiogroup',
          name: 'question145',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question144} = 'true'",
          title: 'Cuales Amortizaciones realiza',
          isRequired: true,
          requiredIf: "{question144} = 'true'",
          choices: [
            {
              value: 'Item 1',
              text: 'Intangibles',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'Cargos Diferidos',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question146',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Maneja gastos de ventas',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question147',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene gastos Financieros',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'checkbox',
          name: 'question148',
          requiredErrorText: "Por favor elige una o varias opciones",
          visibleIf: "{question147} = 'true'",
          title: 'Que gastos financieros tiene',
          isRequired: true,
          requiredIf: "{question147} = 'true'",
          choices: [
            {
              value: 'Item 1',
              text: 'Intereses',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'Comisiones',
              score: '0',
            },
            {
              value: 'Item 3',
              text: 'Gastos Bancarios',
              score: '0',
            },
            {
              value: 'Item 4',
              text: 'Diferencia en Cambio',
              score: '0',
            },
            {
              value: 'Item 5',
              text: 'Impuestos Asumidos',
              score: '0',
            },
            {
              value: 'Item 6',
              text: 'Gastos de Ejercicios Anteriores',
              score: '0',
            },
            {
              value: 'Item 7',
              text: 'Retiro de Propiedades Planta y Equipos',
              score: '0',
            },
            {
              value: 'Item 8',
              text: 'Litigios, Demandas y Sanciones',
              score: '0',
            },
            {
              value: 'Item 9',
              text: 'Donaciones',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question147} = 'true'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "El uso incorrecto de los gastos financieros pueden ocasionar: un aumento de los costos operativos, presion sobre la liquidez de la empresa, impactar la rentabilidad de manera negativa, tener menor capacidad de endeudamiento  Es fundamental para las empresas gestionar y controlar estos gastos de manera efectiva para asegurar su estabilidad financiera a largo plazo. ',
        },
        {
          type: 'radiogroup',
          name: 'question149',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene gastos pagados por anticipados o diferidos',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'radiogroup',
          name: 'question150',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Realiza provisión del impuesto de Renta y complementarios',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question150} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando no se realiza provisión de impuesto de rentas y complementarios se afectan periodos posteriores con los gastos de impuesto, es importante para determinar el impuesto real del periodo fiscal se debe realizar conciliación fiscal. ',
        },
      ],
      title: 'Gastos',
      description: {
        es: 'Analisis de condiciones, pagos, obligaciones y gastos para el uso de la empresa.',
      },
    },
    {
      name: 'page9',
      elements: [
        {
          type: 'radiogroup',
          name: 'question151',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene saldo en las cuentas de orden Deudoras',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question151} = 'true'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Revelación de hechos y circunstancias: Las cuentas de orden se utilizan para cuantificar y revelar hechos o circunstancias que pueden generar derechos . Esto proporciona una visión completa de las transacciones comerciales relacionadas con terceros. ',
        },
        {
          type: 'radiogroup',
          name: 'question152',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene saldo en las cuentas de orden Acreedoras',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question152} = 'true'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Revelación de hechos y circunstancias: Las cuentas de orden se utilizan para cuantificar y revelar hechos o circunstancias que pueden generar obligaciones  Esto proporciona una visión completa de las transacciones comerciales relacionadas con terceros',
        },
      ],
      title: 'Cuentas de Orden',
    },
    {
      name: 'page10',
      elements: [
        {
          type: 'radiogroup',
          name: 'question153',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Se trasmite oportunamente la nómina electrónica',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question153} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "La falta de emisión de nómina electrónica conforme a la resolución 013 de 2021  por incumplimiento de informar hay  implicaciones negativas, que incluyen: como sanciones y multas, perdida de beneficios fiscales, no tener nómina electrónica en una empresa puede conllevar sanciones financieras, problemas contables, pérdida de beneficios fiscales y desventajas competitivas, lo que impacta negativamente en la eficiencia y la salud financiera de la empresa. ',
        },
        {
          type: 'radiogroup',
          name: 'question154',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Todos los empleados están en nómina electrónica',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question155',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'La empresa tiene procesos de investigación',
          isRequired: true,
          choices: [
            {
              value: 'false',
              text: 'Si',
              score: '0',
            },
            {
              value: 'true',
              text: 'No',
              score: '3',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question155} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Una investigación es un proceso que puede llevar a la empresa a tener gasto que no hacen parte de su operación y en caso de ser condenado el valor del fallo en contra no se puede llevar como gastos que disminuye la renta. Ademas de el deterioro de la reputacion. ',
        },
        {
          type: 'radiogroup',
          name: 'question156',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question155} = 'false'",
          title: 'Valor de las demandas en contra actuales',
          isRequired: true,
          requiredIf: "{question155} = 'false'",
          choices: [
            {
              value: 'Item 1',
              text: '0% de los ingresos del año anterior',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'Hasta 10% de los ingresos del año anterior',
              score: '0',
            },
            {
              value: 'Item 3',
              text: 'Entre el 10% - 20% de los ingresos del año anterior',
              score: '0',
            },
            {
              value: 'Item 4',
              text: 'Mayor del 20% de los ingresos del año anterior',
              score: '0',
            },
          ],
        },
        {
          type: 'panel',
          name: 'panel1',
          elements: [
            {
              type: 'descriptivetext',
              name: 'advice',
              visibleIf: "{question156} anyof ['Item 2', 'Item 3']",
              textSize: 'small',
              caption:
                '🔔 "Un fallo en contra donde la sentencia sea entre el 10% y el 20% de sus ingresos brutos genera unas afectaciones: 1) En la estabilidad financiera de la empresa. 2) Los gastos no serán deducibles de la renta. 3 afectara el flujo de caja. 4 afectara la planeación de la empresa y su operación. ',
            },
            {
              type: 'descriptivetext',
              name: 'advice',
              visibleIf: "{question156} = 'Item 4'",
              textSize: 'small',
              caption:
                '🔔 "Un fallo en contra donde la sentencia sea mayor al 20% de sus ingresos brutos genera una inestabilidad profunda de la operación de la empresa que la puede llevar hasta el cierre de operaciones por su incapacidad para operar. ',
            },
          ],
          startWithNewLine: false,
        },
        {
          type: 'radiogroup',
          name: 'question157',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'La empresa tiene demandas a favor',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'radiogroup',
          name: 'question158',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question157} = 'true'",
          title: 'Valor de las demandas a favor actuales',
          isRequired: true,
          requiredIf: "{question157} = 'true'",
          choices: [
            {
              value: 'Ingreso1',
              text: '0% de los ingresos del año anterior',
              score: '0',
            },
            {
              value: 'Ingreso2',
              text: 'Hasta 10% de los ingresos del año anterior',
              score: '0',
            },
            {
              value: 'Ingreso3',
              text: 'Mayor 10% de los ingresos al año anterior',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice158',
          visibleIf: "{question157} = 'true' and {question158} anyof ['Ingreso1', 'Ingreso2', 'Ingreso3']",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Un fallo a favor donde la sentencia sea favorable para la empresa le genera unos ingresos que pueden ayudar a dinamizar la liquidez de la empresa. ',
        },
        {
          type: 'radiogroup',
          name: 'question159',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'La empresa ha sido sancionada por una autoridad tributaria o ente de control en los últimos dos periodos fiscales',
          isRequired: true,
          choices: [
            {
              value: 'false',
              text: 'Si',
              score: '0',
            },
            {
              value: 'true',
              text: 'No',
              score: '3',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question159} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Ser sancionado implica incurrir en gastos que no hace parte de la operación afectando la estabilidad financiera y reputacional de la empresa ademas de la liquidez y rentabilidad, ademas de perdida de beneficios fiscales. ',
        },
        {
          type: 'radiogroup',
          name: 'question160',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question159} = 'false'",
          title:
            'Valor de las sanciones recibida en los últimos tres periodos fiscales',
          isRequired: true,
          requiredIf: "{question159} = 'false'",
          choices: [
            {
              value: 'Item 1',
              text: '0% de los ingresos del año anterior',
              score: '0',
            },
            {
              value: 'Item 2',
              text: 'Hasta 10% de los ingresos del año anterior',
              score: '0',
            },
            {
              value: 'Item 3',
              text: 'Mayor 10% de los ingresos al año anterior',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question161',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'El representante legal de la empresa tiene investigaciones judiciales',
          isRequired: true,
          choices: [
            {
              value: 'false',
              text: 'Si',
              score: '0',
            },
            {
              value: 'true',
              text: 'No',
              score: '3',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question161} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Si el gerente de la entidad tiene investigaciones en cursos o fallos donde fue condenado, es un riesgo reputacional muy alto para la empresa que este funcionario continue representándola. ',
        },
        {
          type: 'radiogroup',
          name: 'question162',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'Alguno de los socios de la empresa tiene investigaciones judiciales',
          isRequired: true,
          choices: [
            {
              value: 'false',
              text: 'Si',
              score: '0',
            },
            {
              value: 'true',
              text: 'No',
              score: '3',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question162} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Si algunos de los socios de la entidad tienen investigaciones en cursos o fallos donde fue condenado, es un riesgo reputacional muy alto para la empresa., se deben tomar acciones para no afectar la imagen de la empresa. ',
        },
        {
          type: 'radiogroup',
          name: 'question163',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'Ha cumplido con el RUB registro único de beneficiarios finales',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question163} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "No rendir informe como el RUB le puede ocasionar a la empresa sanciones que afectan su rentabilidad y liquidez aparte de ser un reflejo de deficiente planeación. ',
        },
        {
          type: 'radiogroup',
          name: 'question164',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'Está obligado a rendir informes a entidades de control como super intendencias',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'radiogroup',
          name: 'question165',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question164} = 'true'",
          title:
            'Ha cumplido con los informes a entidades de control como super intendencias',
          isRequired: true,
          requiredIf: "{question164} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question165} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "El incumplimiento en la rendición de informes a entes de control genera sanciones que afectaran la liquidez y la rentabilidad asi como la reputacion de la empresa además que estos gastos por lo general no se pueden deducir de la renta. ',
        },
        {
          type: 'radiogroup',
          name: 'question166',
          requiredErrorText: "Por favor seleccione una opción",
          title:
            'La empresa maneja pólizas, de cumplimiento, de garantía y demás',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'radiogroup',
          name: 'question167',
          requiredErrorText: "Por favor seleccione una opción",
          visibleIf: "{question166} = 'true'",
          title: 'Esta al día en el pago de las pólizas',
          isRequired: true,
          requiredIf: "{question166} = 'true'",
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question167} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "El incumplimiento en los pagos de las pólizas deja expuesta a la empresa en caso de algún evento adverso la aseguradora no cubre el daño afectando la estabilidad financiera de la empresa además del reflejo de una deficiente planeación. ',
        },
        {
          type: 'radiogroup',
          name: 'question168',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Realiza compras en efectivo',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'question169',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Todas las compras son bancarizadas',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question169} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Las compras que son no son bancarizada no se podrán deducir de la renta incrementando el impuesto a pagar. ',
        },
        {
          type: 'radiogroup',
          name: 'question170',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Todas las "compras" cumplen la aplicación de la norma',
          isRequired: true,
          choices: [
            {
              value: 'false',
              text: 'Si',
              score: '0',
            },
            {
              value: 'true',
              text: 'No',
              score: '3',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question170} = 'true'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando las compras no cumplen todo el proceso de trazabilidad estas no podrá llevarse como deducible de renta incrementando el impuesto a pagar o verse inmerso en posibles sanciones. ',
        },
        {
          type: 'radiogroup',
          name: 'question171',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Todas las "ventas" cumplen con la aplicación de la norma',
          isRequired: true,
          choices: [
            {
              value: 'false',
              text: 'Si',
              score: '0',
            },
            {
              value: 'true',
              text: 'No',
              score: '3',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question171} = 'true'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "Cuando las ventas no cumplen todo el proceso de trazabilidad pueden ser objeto de auditoria por parte de la autoridad tributaria y acarrear posibles sanciones. ',
        },
        {
          type: 'radiogroup',
          name: 'question172',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Tiene implementado el sistema de seguridad en el trabajo',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '3',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
          showNoneItem: true,
          noneText: {
            es: 'No aplica',
          },
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question172} = 'false'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "La falta de implementación de un sistema de seguridad en el trabajo (SG-SST) puede tener varias implicaciones negativas, que van desde riesgos para la salud y seguridad de los empleados hasta consecuencias legales y financieras como sanciones legales, perdida de contratos, cierre de la empresa. ',
        },
        {
          type: 'radiogroup',
          name: 'question173',
          requiredErrorText: "Por favor seleccione una opción",
          title: 'Maneja contrato de Leasing',
          isRequired: true,
          choices: [
            {
              value: 'true',
              text: 'Si',
              score: '0',
            },
            {
              value: 'false',
              text: 'No',
              score: '0',
            },
          ],
        },
        {
          type: 'descriptivetext',
          name: 'advice',
          visibleIf: "{question173} = 'true'",
          textSize: 'small',
          startWithNewLine: false,
          caption:
            '🔔 "El leasing es una opción atractiva para las empresas, ya que les permite adquirir activos sin un desembolso inicial significativo, mantener la flexibilidad financiera y adaptar los términos del contrato a sus necesidades específicas. ',
        },
      ],
      title: 'Información Adicional',
    },
  ],
  sendResultOnPageNext: true,
  showQuestionNumbers: 'off',
  questionErrorLocation: 'bottom',
  showProgressBar: 'bottom',
  showTOC: true,
  tocLocation: 'right',
  "widthMode": "responsive",
  startSurveyText: {
    es: 'Iniciar',
  },
  pagePrevText: {
    es: 'Anterior',
  },
  pageNextText: {
    es: 'Siguiente',
  },
  completeText: {
    es: 'Completar',
  },
  previewText: {
    es: 'Revisar',
  },
  editText: {
    es: 'Editar',
  },
};