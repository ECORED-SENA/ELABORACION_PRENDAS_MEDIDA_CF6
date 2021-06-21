<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Proceso de levantamiento y construcción de básicos masculino

    figure.mb-4
      img(src="@/assets/curso/tema4-imagen1.png", alt="")

    p.mb-5 Cuando se habla de prendas sastre o más específicamente chaqueta sastre masculina, se debe tener en cuenta que el enfoque principal va hacia el ajuste y la horma. En masculino, el volumen o el ajuste de pinzas se trabaja hacia la parte posterior, teniendo en cuenta que el ancho de espalda es uno de los puntos más protuberantes en la parte superior de la silueta masculina.
      br
      br
      | En el manual de patronaje básico SENA, se identifica como punto de partida, en la página 71, el trazo base para chaqueta sastre masculina, el cual consiste en un básico con ciertas modificaciones o traslados de los puntos base del cuerpo, para obtener una mejor forma y ajuste sobre la estructura o silueta característica de las prendas sastre.

    .row.justify-content-center.mb-5
      .col-9
        .row
          .col-md-auto
            figure
              img(src="@/assets/curso/tema4-imagen2.svg", alt="")
          .col-md
            p.mb-0 Para el trazo de una chaqueta sastre, en las páginas 73 y 76 de este mismo manual, se identifica una serie de sugerencias o especificaciones frente a las modificaciones en plano que se pueden trabajar para el desarrollo de este mismo tipo de chaqueta, para lo cual se debe tener en cuenta que en masculino no solamente se trabaja por silueta sino por ocasión de uso, es decir, que cada prenda o cada diseño tiene unas especificaciones diferentes. A nivel general, se puede categorizar la finalidad de la prenda por la cantidad de botones, el ancho de la solapa, la forma en la división del cuello y solapa, el ancho de una tapa de bolsillo, la forma de una boca de bolsillo, los ribetes, el canto o la forma del largo, el forro, los acabados en las partes internas de la prenda; incluso hasta la cantidad de aberturas o cajas corresponden o suplen necesidades diferentes. Por esto se recomienda desde patronaje siempre trabajar la parte funcional de la prenda, dejando de lado la segmentación o el nombre comercial.
        .rectangle-2.color-acento-botones.mb-5(style="height: 100px")

    .cajon.color-secundario.p-4.mb-4
      p En el desarrollo de productos para la línea masculina, se identifican diferentes tipos de variaciones, dependiendo del costo de producción o línea de venta. En esta ocasión se va a hacer el desarrollo de una chaqueta bomber. Si bien la <strong>chaqueta bomber</strong> es una prenda informal o que puede ser categorizada dentro de un rango de prendas casuales, en esta ocasión se va a hacer el desarrollo partiendo desde la base sastre masculina. A la hora de patronar o desarrollar un producto, se debe tener en cuenta siempre el requerimiento de la empresa o cliente. Si lo que se busca es un estándar de calidad mayor o un costo de producción más elevado, lo ideal es asegurar la horma y el ajuste desde patronaje. Por eso, en esta ocasión se trabajará el desarrollo de la chaqueta partiendo desde una base sastre y no desde una base normal. Ver Videos 14, 15, 16 y 17.

    .titulo-sexto.color-acento-contenido
      h5 Video 14
      br
      span Base sastre masculina
    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/b3g9qtFgeLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Nota. Tomado de SENA (2021a).

    .titulo-sexto.color-acento-contenido
      h5 Video 15
      br
      span Trazo de chaqueta sastre masculina
    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ervMRxzneGY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Nota. Tomado de SENA (2020k).

    .titulo-sexto.color-acento-contenido
      h5 Video 16
      br
      span Interpretación de chaqueta bomber
    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/A8DwMHDCWXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Nota. Tomado de (2020i).

    .titulo-sexto.color-acento-contenido
      h5 Video 16
      br
      span Generalidades de pantalón sastre masculino interpretación
    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/be_WSq_gwFo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Nota. Tomado de SENA (2020h).
    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    //- Muestras

</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema4',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
