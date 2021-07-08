export default {
  global: {
    componenteFormativo: 'Principios rectores del transporte',
    descripcionCurso:
      'Marco normativo del transporte en los diferentes modos, de acuerdo con la definición de las normas regulatorias teniendo en cuenta infraestructura y tipología de la flota.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estructura del sector y sistema de transporte',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Principios del transporte público',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Marco normativo internacional para la logística del transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'La habilitación por parte del Ministerio de Transporte',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Transporte internacional de mercancías por carretera',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Comunidad Andina de Naciones CAN',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Marco normativo del transporte internacional terrestre del CAN',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Estatuto Nacional del Transporte y regulación por modos y medios de transporte',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Modos y medios de transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Quienes los regulan',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Condiciones para la operación',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Estructura organizacional',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Innovación en el servicio y tecnologías en transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Futuros medios de transporte',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Prospectiva de movilidad y el transporte',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Simulación tecnológica',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      //{
      //nombreRuta: 'complementario',
      //icono: 'far fa-folder-open',
      //titulo: 'Material complementario',
      //},
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Cal-Mayor, R. y Cárdenas, J. (1994). Ingeniería de tránsito. Fundamentos y aplicaciones. Alfaomega.',
    },
    {
      referencia:
        'Ministerio de Transporte. (2013). Caracterización del transporte terrestre automotor de carga por carretera en Colombia 2010 -2012. MinTransporte.',
    },
    {
      referencia:
        'Ruibal, H., A. (1994). Gestión logística de la distribución física internacional. Editorial Norma.',
    },
  ],
  glosario: [
    {
      termino: 'Actitudinal',
      significado:
        'término que se utiliza para referirse a todo aquello que tiene por objetivo determinar las disposiciones de ánimo manifestadas de algún modo para realizar ciertas actividades, ya sean de tipo educativas, sociales, laborales, etcétera. No debe confundirse con aptitud, porque es la “capacidad o idoneidad para algo”: «Superará la prueba porque tiene una gran aptitud musical».',
    },
    {
      termino: 'Agente de riesgo',
      significado:
        'condición o acción que potencialmente puede provocar un accidente o generar una enfermedad.',
    },
    {
      termino: 'Contextualización',
      significado:
        'hecho de poner una circunstancia, hecho o discurso en relación con el entorno en que se generó. Así, la expresión se toma principalmente del ámbito discursivo, en donde un texto determinado produce una significación en relación a otros que le rodean.',
    },
    {
      termino: 'Estamento',
      significado:
        'término con origen en el latín stamentum que refiere a un estrato de la sociedad. Dicho estrato o grupo queda delimitado o definido por un estilo de vida común y una función social análoga a todos sus integrantes.',
    },
    {
      termino: 'Estatuto',
      significado:
        'cualquier ordenamiento eficaz para obligar, como un contrato o un testamento. Un segundo significado es el proveniente de los países anglosajones, donde statute significa ley aprobada por un parlamento.',
    },
    {
      termino: 'Multimodal',
      significado:
        'articulación entre diferentes modos de transporte, a fin de realizar más rápida y eficazmente las operaciones de trasbordo de materiales y mercancías.',
    },
    {
      termino: 'Organizacional',
      significado:
        'todo lo referido al establecimiento de un orden para llegar a conseguir un objetivo específico.',
    },
    {
      termino: 'Promulgar',
      significado:
        'publicar una cosa de forma oficial, especialmente una ley u otra disposición de la autoridad, para que sea conocido por todos.',
    },
    {
      termino: 'Prospectiva',
      significado:
        'ciencia que se dedica al estudio de las causas técnicas, científicas, económicas y sociales que aceleran la evolución del mundo moderno, y la previsión de las situaciones que podrían derivarse de sus influencias conjugadas.',
    },
    {
      termino: 'Simulación',
      significado:
        'proceso de diseñar un modelo de un sistema real y llevar a término experiencias con él, con la finalidad de comprender el comportamiento del sistema o evaluar nuevas estrategias –dentro de los límites impuestos por un cierto criterio o un conjunto de ellos– para el funcionamiento del sistema.',
    },
  ],
  complementario: [
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Regulo Castro Barón',
        cargo: 'Experto temático',
        centro:
          'Complejo Tecnológico Agroindustrial, Pecuario y Turístico – CTAPT <br>Regional Antioquia',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño Y Metrología <br>Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro de la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo Lopez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'María Camila Ovalle',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
