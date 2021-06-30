export default {
  global: {
    componenteFormativo: 'Sastrería básica, trazo y corte',
    descripcionCurso:
      'En la creación de prendas de vestir con técnicas manuales, se agrega valor y calidad en las terminaciones de las piezas, generando un aporte fundamental para el gremio del modisto y el sastre, donde, articulado al tizado, el extendido y el corte, se ejecutará el análisis de acuerdo con el tipo de tela, estampado y orientación de las piezas. En concordancia, se vivenciarán desafíos con el objeto de efectuar la experimentación de la forma y la silueta.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        titulo: 'Tizado, trazo y corte',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Las herramientas, insumos y espacio en el trazo y corte',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Proceso del extendido',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Proceso de tizado',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Proceso de corte',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas básicas de sastrería',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Introducción a la sastrería',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Preparación y detalles en las piezas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tipos de entretela y uso',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Proceso de levantamiento y construcción de básicos superiores femenino con técnica de sastrería',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Manga básico de la manga sastre',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Molde base superior sastre femenino',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Procedimiento manual del sastre',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Interpretaciones de prendas',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Proceso de levantamiento y construcción de básicos masculino',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
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
        'Celestecielo, G. (2018). Puntadas a mano. El Rincón De Celestecielo.',
      link:
        'https://elrincondecelestecielo.blogspot.com/2018/11/puntadas-mano.html',
    },
    {
      referencia:
        'Delego, D. (1983). Elegantisima la enciclopedia práctica de la moda de Donato Delego. Donato Delego.',
    },
    {
      referencia: 'De Duarte, N. (1983). Conocimientos básicos de corte. SENA.',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/1432/conocimientos.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Flo. (2020). Un blazer inspirado en Balmain – Parte 1. Copycat.',
      link:
        'https://thecopycat.blog/2020/07/10/un-blazer-inspirado-en-balmain-parte-1/',
    },
    {
      referencia:
        'Gutiérrez, L., Moncayo, A., Tanaka, K., Kimura, F. y Moreno, D. (2011). Manual de patronaje básico e interpretación de diseños. SENA y JICA.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000025496',
    },
    {
      referencia: 'Hymsa. (1991). Corte confección y sastrería.',
    },
    {
      referencia: 'Kinderley. (2005). Manual completo de costura.',
    },
    {
      referencia:
        'López, J. [Puntadas Country]. (2020, 16 junio). 11 puntadas a mano básicas!!! 🤩 Puntadas básicas para bordar a mano [Vídeo]. YouTube.',
      link: 'https://youtu.be/d-8rJrzXRIQ',
    },
    {
      referencia:
        'Luis, N. (2017). Con los pantalones bien puestos: 36 veces que una mujer nos inspiró llevando un traje sastre | Actualidad, Moda. S Moda EL PAÍS.',
      link:
        'https://smoda.elpais.com/moda/traje-sastre-esmoquin-iconicos-historia/',
    },
    {
      referencia:
        'Manos Maravillosas. (2019). Costura. 10 tipos de puntadas a mano.',
      link:
        'https://manosmaravillosas.com/2019/09/11/costura-tipos-de-puntadas-a-mano/',
    },
    {
      referencia:
        'Momita. (2018). Cómo cortar tela con cutter y base de corte. Momita’s blog.',
      link: 'http://momitablog.com/como-cortar-cutter-base-corte/',
    },
    {
      referencia:
        'Ooobop! London. (2011). Butterick 5007: Men’s vintage western shirt – progress update. Ooobop!',
      link: 'https://ooobop.wordpress.com/2011/08/',
    },
    {
      referencia:
        'SENA. (2020a, septiembre 7). Introducción trazo y corte [Vídeo]. YouTube.',
      link: 'https://youtu.be/lPY6Ffc509c',
    },
    {
      referencia:
        'SENA. (2020b, septiembre 7). Proceso de extendido [Vídeo]. YouTube.',
      link: 'https://youtu.be/Mnnt4AAnKJQ',
    },
    {
      referencia:
        'SENA. (2020c, septiembre 9). Características del material desde trazo y corte [Vídeo]. YouTube.',
      link: 'https://youtu.be/OfsjJ8VdU8A',
    },
    {
      referencia:
        'SENA. (2020d, 29 diciembre). Abrigo asimétrico [Vídeo]. YouTube.',
      link: 'https://youtu.be/-t2RPXBUsLA',
    },
    {
      referencia:
        'SENA. (2020e, diciembre 29). Análisis e interpretación de pantalón sudadera [Vídeo]. YouTube.',
      link: 'https://youtu.be/xcUi9S-ZqzI',
    },
    {
      referencia:
        'SENA. (2020f, diciembre 29). Chaqueta cuello alto traslados de pinza [Vídeo]. YouTube.',
      link: 'https://youtu.be/yKwVapWExPo',
    },
    {
      referencia:
        'SENA. (2020g, diciembre 29). Despiece chaqueta sastre femenina [Vídeo]. YouTube.',
      link: 'https://youtu.be/AK2wuIOJLXI',
    },
    {
      referencia:
        'SENA. (2020h, diciembre 29). Generalidades de pantalón sastre masculino interpretación [Vídeo]. YouTube.',
      link: 'https://youtu.be/be_WSq_gwFo',
    },
    {
      referencia:
        'SENA. (2020i, diciembre 29). Interpretación de chaqueta bomber [Vídeo]. YouTube.',
      link: 'https://youtu.be/A8DwMHDCWXk',
    },
    {
      referencia:
        'SENA. (2020j, diciembre 29). Interpretación de pantalón sastre femenino [Vídeo]. YouTube.',
      link: 'https://youtu.be/8d20OBO4tHI',
    },
    {
      referencia:
        'SENA. (2020k, diciembre 29). Trazo de chaqueta sastre masculina [Vídeo]. YouTube.',
      link: 'https://youtu.be/ervMRxzneGY',
    },
    {
      referencia:
        'SENA. (2020l, diciembre 29). Trazo manga chaqueta sastre femenina [Vídeo]. YouTube.',
      link: 'https://youtu.be/xD5YtPY_GCw',
    },
    {
      referencia:
        'SENA. (2020m, diciembre 29). Análisis e interpretación de capas [Vídeo]. YouTube.',
      link: 'https://youtu.be/ZbGipLzdDTY',
    },
    {
      referencia:
        'SENA. (2021a, 9 febrero). Base sastre masculina [Vídeo]. YouTube.',
      link: 'https://youtu.be/b3g9qtFgeLM',
    },
    {
      referencia:
        'SENA. (2021b, febrero 9). Ejemplo de tipos de tendido con diferentes características del material [Vídeo]. YouTube.',
      link: 'https://youtu.be/AQuKp0yivEw',
    },
    {
      referencia:
        'SENA. (2021c, febrero 10). Trazo de chaqueta tipo sastre [Vídeo]. YouTube.',
      link: 'https://youtu.be/B7qyE5ySUII',
    },
    {
      referencia:
        'SUMAR Capacitación. (2019). Curso corte y confección de prendas de vestir para niños y adultos. SUMAR Capacitación | Organismo Técnico de Capacitación.',
      link:
        'https://sumarcapacitacion.cl/programas-sociales/corte-y-confeccion-de-prendas-de-vestir-para-ninos-y-adultos/',
    },
    {
      referencia:
        'Únicosé. (2019). DIY Tutorial de camisa básica - Hcam1901. Únicosé La Moldería.',
      link:
        'https://www.moldesunicose.com/otros-paises/blog/diy-tutorial-de-camisa-basica-hcam1901-b469.html',
    },
  ],
  glosario: [
    {
      termino: 'Abertura montada',
      significado:
        'aberturas del bajo o en los puños de una chaqueta o un abrigo sastre.',
    },
    {
      termino: 'Afinar una costura',
      significado:
        'recortar las capas de tela en los márgenes de costura para que abulte menos la costura y quede aplastada.',
    },
    {
      termino: 'Alfombrilla de corte',
      significado:
        'alfombrilla de goma con dibujo de cuadrícula que se utiliza para proteger la superficie de trabajo al cortar una tela.',
    },
    {
      termino: 'Cutter giratorio',
      significado:
        'instrumento con cuchillas circulares intercambiables para cortar limpiamente bordes rectos en una tela.',
    },
    {
      termino: 'Piquetes',
      significado:
        'Línea corta en dirección perpendicular al molde, señalada en el patrón con el fin de facilitar la operación de confección al indicar ubicaciones y guiar al unir cortes.',
    },
    {
      termino: 'Procedimiento',
      significado:
        'descripción precisa de los pasos para realizar un proceso. Es la respuesta al cómo hacer el proceso.',
    },
    {
      termino: 'Proceso',
      significado:
        'descripción general de los pasos de una actividad o conjunto de operaciones.',
    },
    {
      termino: 'Punzón',
      significado:
        'instrumento de punta afilada que se utiliza para perforar una tela antes de hacer un ojete o un ojal.',
    },
    {
      termino: 'Talla',
      significado:
        'expresión normalizada que permite identificar a las personas para el uso de prendas de vestir.',
    },
  ],
  complementario: [
    {
      texto: 'SENA.  (2021). Cojín de sastre.',
      tipo: 'PDF',
      descarga: '/downloads/CF6_Anexo1_Cojines_Sastre_A4.pdf',
    },
    {
      texto: 'SENA.  (2021).  El traje básico del sastre.',
      tipo: 'PDF',
      descarga: '/downloads/CF6_Anexo2_Construcción_Traje_Sastre.pdf',
    },
    {
      texto: 'SENA.  (2021). Las entretelas y los forros en la sastrería.',
      tipo: 'PDF',
      descarga: '/downloads/CF6_Anexo3_Entretelas_Y_Forros.pdf',
    },
    {
      texto: 'SENA.  (2021). Construcción de las pinzas y prenses.',
      tipo: 'PDF',
      descarga: '/downloads/CF6_Anexo4_Pinzas_Y_Prenses.pdf',
    },
    {
      texto: 'SENA.  (2021).  Como hacer ojales manuales y presillas.',
      tipo: 'PDF',
      descarga: '/downloads/CF6_Anexo5_Ojales_Y_Presillas.pdf',
    },
    {
      texto: '123 Dream it. (2015). Tutorial puntadas a mano [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ClIjTl9ltak',
    },
    {
      texto:
        'López, A. [PatternCos por Andrea López]. (2020). DIrecto IG | Cómo hacer un cojín de sastre [Vídeo]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=2B2eQ5jthLc&ab_channel=PatternCosporAndreaL%C3%B3pez',
    },
    {
      texto:
        'López, A. [PatternCos por Andrea López]. (2020). Directo IG | Cómo hacer un cojín de sastre. Modelo 2 [Vídeo]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=H_XirctviKk&ab_channel=PatternCosporAndreaL%C3%B3pez',
    },
    {
      texto: 'SENA. (2021). Interpretación de prendas, chaqueta cuello alto.',
      tipo: 'PDF',
      descarga: '/downloads/CF6_Anexo8_Cuello_Alto.pdf',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Oscar Julian Marquez Sanabria',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sergo Omar Camacho Orduz',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
