<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca
    .row.p-4.p-md-5
      .col
        .titulo-principal
          .titulo-principal__numero
            span 2
          h1 Técnicas básicas de sastrería

        figure.mb-4
          img(src="@/assets/curso/tema2-imagen1.png", alt="")

        p La elaboración de prendas de vestir femeninas y masculinas exteriores, basadas en las medidas deducidas de cada cliente y en cuya construcción se aplican técnicas manuales específicas, recibe el nombre de sastrería. Los inicios de la sastrería datan de la antigua Roma, cuando era vista como un tarea simple realizada por los artesanos; su fin era satisfacer los caprichos de la clase dominante, conocida como los patricios. Ya durante la edad media, desaparece la túnica y se introducen prendas más ajustadas, generando la necesidad de ser más precisos en el calce y concibiendo desafíos para las personas que desempeñaban esta labor. Es en esos tiempos donde el sastre alcanza un nivel más artístico, pero es durante el renacimiento cuando los sastres y costureros llegan a ser considerados especialistas del arte de vestir. Sin embargo, aparece en el año 1820 el francés M. Guillermo Campaugne, con un método de corte y normas que transformaron por completo el oficio de sastre.

        Separador

        #t_2_1.titulo-segundo
          h2 2.1  Introducción a la sastrería

        p.mb-5 Durante la línea de tiempo desde la antigua Roma hasta el día de hoy, la sastrería ha ido combinando sus procesos artesanales con avances tecnológicos que facilitan su desempeño, como son las planchas de vapor, las máquinas de coser sin pedal, puntadas programables y otros sistemas más desarrollados. En concordancia con lo expuesto, los procesos operativos que se desarrollan en este módulo siguen el método de construcción de un sastre mezclado con técnicas utilizadas a nivel industrial para facilitar la realización de las prendas.

        .row.justify-content-center
          .col-md-7
            SlyderB.mb-5(:datos="datosSlyder")

        .titulo-sexto.color-acento-contenido
          h5 Video 5
          br
          span Puntadas básicas para bordar a mano

        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/d-8rJrzXRIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Nota. Tomado de López (2020).

        .h4 Pasos para realizar un ruedo con roulette
        p.mb-5 El término roulette viene del verbo francés rouler, que significa ‘rodar’. Este tipo de costura es utilizada para hacer dobladillos en prendas finas de tejidos livianos. Se tienen dos opciones: con técnica manual o con máquina de coser. A continuación, se presenta el paso a paso para realizarlo.

        .row.mb-5
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.number(src='@/assets/curso/tema2-imagen1.svg')
              .tarjeta.border-acento-contenido
                .px-4.py-1
                  figure.mb-2
                    img(src="@/assets/curso/tema2-imagen4.png", alt="")
                  p Con los dedos pulgar e índice se debe doblar 3 mm del ruedo de la tela e introducir la aguja en el borde superior del doblez, tomando 1 mm de tela y sacándola en la misma dirección. Esta misma acción se debe repetir, pero ya hacia la izquierda, sin tensionar el hilo.
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.number(src='@/assets/curso/tema2-imagen2.svg')
              .tarjeta.border-acento-botones
                .px-4.py-1
                  figure.mb-2
                    img(src="@/assets/curso/tema2-imagen5.png", alt="")
                  p Una vez cosidos 3 cm de borde, se debe presionar con los dedos el inicio del doblez y tirar suavemente el hilo hasta que las puntadas queden tensas. Al tirar el hilo las puntadas se irán ocultando, formando automáticamente el roulette.

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.number(src='@/assets/curso/tema2-imagen3.svg')
              .tarjeta.border-secundario
                .px-4.py-1
                  figure.mb-2
                    img(src="@/assets/curso/tema2-imagen6.png", alt="")
                  p Se debe repetir esta acción hasta terminar el ruedo e ir tirando siempre el hilo cada 3 cm para lograr una mejor tensión del ruedo.

        .row.justify-content-center
          .col-9
            .row
              .col-md-9
                .h4 Cojines de sastre
                p Los cojines de sastre son soportes de apoyo para planchar costuras e ir generando las curvas requeridas en la tela. Vienen en diferentes tamaños y formas. Generalmente, están forrados en tela de algodón y rellenados con picadillo de tela o aserrín. El cojín en forma de lágrima y el cojín rodillo tienen las mismas funciones, su utilización va a depender principalmente de la pieza o necesidad requerida.
              .col-md-3
                .titulo-sexto.color-acento-contenido
                  h5 Figura 27
                  br
                  span Cojines de sastre
                figure.mb-2
                  img(src="@/assets/curso/tema2-figure27.svg", alt="")
                  figcaption Nota. Tomada de Patronfy (2021).

        Separador

        #t_2_2.titulo-segundo
          h2 2.2  Preparación y detalles en las piezas

        p.mb-5 La preparación de insumos y de detalles en las piezas es un proceso que se va realizando antes del armado, son pasos característicos en el quehacer de un sastre. Buscan no solo la adaptación perfecta de la tela en el cuerpo, sino que cada insumo se adapte de forma precisa en el momento de adherirse a la prenda o pieza textil. Existen varios pasos que se deben seguir para su preparación, entre ellos se encuentran la realización de cambrado del cierre, planchado de costuras y pinzas, y colocación de broches. A continuación, se puede observar información relacionada:

        .row.justify-content-center
          .col-lg-9

            p.mb-4
              strong Pasos para realizar un cambrado del cierre
              | .Conoce cómo se realiza el cambrado de un cierre.

            .tarjeta-avatar-b.mb-5
              img.number(src='@/assets/curso/tema2-imagen7.svg' alt='AvatarTop')
              .tarjeta.color-secundario
                .row.py-4.align-items-center
                  .col-4
                    img(src='@/assets/curso/tema2-imagen10.svg' alt='AvatarTop')
                  .col-8
                    p.mb-0 Para iniciar este proceso, se debe humedecer la tela del cierre.

            .tarjeta-avatar-b.mb-5
              img.number(src='@/assets/curso/tema2-imagen13.svg' alt='AvatarTop')
              .tarjeta.color-secundario
                .row.py-4.align-items-center
                  .col-4
                    img(src='@/assets/curso/tema2-imagen11.svg' alt='AvatarTop')
                  .col-8
                    p.mb-0 Luego, colocar la plancha teniendo cuidado de no quemarlo.
                      br
                      br
                      | Con la mano contraria, se estira el cierre hasta que vaya cediendo y genere ondulación.
                      br
                      br
                      | Este paso se debe realizar en ambos lados.

            .tarjeta-avatar-b.mb-5
              img.number(src='@/assets/curso/tema2-imagen14.svg' alt='AvatarTop')
              .tarjeta.color-secundario
                .row.py-4.align-items-center
                  .col-4
                    img(src='@/assets/curso/tema2-imagen12.svg' alt='AvatarTop')
                  .col-8
                    p.mb-0 De este modo el cierre se ajustará perfectamente a la curvatura del cuerpo.

            hr.m-5

            p.mb-4
              strong Pasos para planchado de costuras y pinzas
              | .Conoce cómo se realiza el planchado de costuras.

            .tarjeta-avatar-b.mb-5
              img.number(src='@/assets/curso/tema2-imagen15.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido
                .row.py-4.align-items-center
                  .col-4
                    img(src='@/assets/curso/tema2-imagen17.svg' alt='AvatarTop')
                  .col-8
                    p.mb-0.pe-4 Se inicia humedeciendo la prenda y ubicándola sobre una pieza plana de madera, mármol o fornica.
                      br
                      br
                      | Los dedos deben anteponerse cerca de la plancha para ir presionando la costura y así evitar imperfecciones en el planchado.
                      br
                      br
                      | Para las telas que puedan tener brillo se debe utilizar un paño húmedo.


            .tarjeta-avatar-b.mb-5
              img.number(src='@/assets/curso/tema2-imagen16.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido
                .row.py-4.align-items-center
                  .col-4
                    img(src='@/assets/curso/tema2-imagen18.svg' alt='AvatarTop')
                  .col-8
                    p.mb-0 Las pinzas se doblan en dirección a los costados y se deben planchar siguiendo los pasos anteriores.

            hr.m-5

            p.mb-4
              strong Pasos para la colocación de broches
              | .Conoce cómo se realiza la colocación de los broches.

            .tarjeta-avatar-b.mb-5
              img.number(src='@/assets/curso/tema2-imagen19.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones
                .row.py-4.align-items-center
                  .col-4
                    img(src='@/assets/curso/tema2-imagen21.svg' alt='AvatarTop')
                  .col-8
                    p.mb-0.pe-4 Ubica el broche evitando que sobrepase el borde de la pieza y que el ojo superior apoye en la costura, si la hay. Cubrir ambos ojos con puntadas seguidas del centro hacia afuera. No cortar el hilo.

            .tarjeta-avatar-b.mb-5
              img.number(src='@/assets/curso/tema2-imagen20.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones
                .row.py-4.align-items-center
                  .col-4
                    img(src='@/assets/curso/tema2-imagen22.svg' alt='AvatarTop')
                  .col-8
                    p.mb-0 Después de haber fijado la parte posterior del broche (los ojos), sin cortar el hilo, realizar 3 puntadas en el otro extremo del broche.

        p.mb-5 Para dar continuidad al proceso de preparación y detalles de las piezas, es hora de conocer el molde para las hombreras. A continuación, se muestra el procedimiento que se debe seguir:

        .row.align-items-center
          .col-4
            .titulo-sexto.color-acento-contenido
              h5 Figura 28
              br
              span Molde para hombreras
            figure.mb-2
              img(src="@/assets/curso/tema2-figure28.svg", alt="")
              figcaption Nota. Tomada de Delego (1983).
          .col-8.columna-reglones.py-4
            p.py-4 Ubicar el molde frente abajo, como lo indica el esquema, y girar el molde de la espalda con el cuello hacia abajo. Calcarlos unidos por los hombros. Tener presente no tener incorporados los centímetros de costura en las líneas de hombro.
            p.py-4 Del punto escote/hombro (A), bajar por toda la línea de hombro 2/3.
            p.py-4 Del punto hombro/sisa (B), bajar hacia el frente 1/3 del perímetro sisa frente, quedando ubicado el punto D.
            p.py-4 Del punto hombro/sisa (B), subir por la espalda ½ del perímetro de la sisa espalda, donde quedará ubicado el punto E.
            p.py-4 Dibujar la forma de la hombrera como lo indica el esquema; recortar y agregar los cm de costura según la terminación deseada.

        Separador

        #t_2_3.titulo-segundo
          h2 2.3  Tipos de entretela y uso

        figure.mb-4
          img(src="@/assets/curso/tema2-imagen23.png", alt="")

        p.mb-5 Para alcanzar un buen calce en la prenda y una perfecta caída de la tela, no basta con realizar buenos moldes, pues no solo el tejido y la construcción son importantes, sino también, en gran medida, la forma como se utilizan las entretelas. Aunque no se puede ver este refuerzo en el derecho de la tela, en el momento de usar dicha prenda, marcará la diferencia. Para chaquetas y abrigos ligeros, se recomienda utilizar una entretela de tejido fino; para telas gruesas, se recomienda elegir una entretela de crin o lana.

    .row.p-4.p-md-5.seccion-primaria.mb-4
      .col
        .py-2
          .h4 Tipos de entretelas
          p.mb-5 Las entretelas tienen como propósito lograr resultados con alta calidad. Al ser usadas aportan a reforzar y a estructurar ciertas partes de la prenda para mantener su forma y mejorar los acabados. Debemos tener en cuenta que su aplicación modifica el tacto y la durabilidad de la prenda; también nos permite coser con agilidad y, si es empleada en tejidos con elastómeros, hace que pierdan parcialmente su elasticidad.

          .row.justify-content-center
            .col-10
              .row.mb-5
                .col-md-8
                  p Las entretelas se fabrican de diferentes tipos de fibras y grosores; dependiendo de la prenda, se pueden utilizar varios tipos de entretela. Otra cosa para tener en cuenta para la selección es el grosor de la tela, el cual dependerá de la caída que se desee en la misma.
                    br
                    br
                    | En el mercado textil existe una gran variedad de entretelas con diferentes usos. Algunas son para termo-fijar con calor (son más utilizadas a nivel industrial), otras para coserse a la prenda y otras varias entretelas son específicas para campos como los tejidos elásticos, cuero o pieles. También existe una inmensa gama de artículos de ayuda, como cintas, cintas perforadas y formas troqueladas, que aseguran una producción económica. A continuación, se relaciona la clasificación de entretelas:
                .col-md-4
                  figure
                    img(src="@/assets/curso/tema2-imagen24.png", alt="")
              .row.mb-5
                .col-2
                  figure
                    img(src="@/assets/curso/tema2-imagen25.svg", alt="")
                .col-10
                  ul.lista-ul--color.lista-ul--separador.borders-list
                    li
                      i.lista-ul__vineta
                      p.mb-0
                        strong Tela
                        | : las telas usadas como entretelas pueden ser tejidas, no tejidas o de punto. Las características de la construcción de estas darán diferentes propiedades a las telas. En este sentido, no todas las que se utilizan como entretelas son producidas para tal fin. Hay algunos tipos de forros, batistas, muselinas, e inclusive la misma tela exterior, que pueden usarse como entretela.
                    li
                      i.lista-ul__vineta
                      p.mb-0
                        strong Entretelas no tejidas
                        | : por lo general, están hechas de poliéster, rayón, nailon o una mezcla de diferentes fibras, las cuales son distribuidas al azar y juntadas por acción química o térmica. Ya que no tienen una dirección de hilo o grano, no se desmechan y pueden ser cortadas en cualquier dirección o ángulo. Hay que ser muy cuidadoso para seleccionar la más apropiada.
                    li
                      i.lista-ul__vineta
                      p.mb-0
                        strong Entretelas fusionables
                        | : son diseñadas para proveer las ventajas de la entretela cuando esté unida a la superficie interna de la tela externa, bajo la influencia de temperatura, tiempo y presión. De hecho, la adherencia de la entretela fusionable a la tela externa produce un laminado nuevo a la tela, en el cual las características de la entretela se agregan a las de la tela externa.
                    li
                      i.lista-ul__vineta
                      p.mb-0
                        strong Entretelas de punto o malla
                        | : están disponibles por inserción de trama, inserción de urdimbre y tricota. Las de nailon tienen estiramiento a lo ancho y estabilidad a lo largo. Este tipo añade forma y cuerpo a prácticamente cualquier tela, tejida o de punto.
                    li
                      i.lista-ul__vineta
                      p.mb-0
                        strong Entretelas tejidas
                        | : pueden ser de algodón, rayón, lana, poliéster o mezclas de fibras. Se tejen de la misma forma que las telas normales (urdimbre / trama). Usualmente, cuando se cortan al sesgo, estiran más y se utilizan entonces para dar forma. Son ideales para aplicar en tejidos de algodón, piqué, lino, lonetas, etc.

              p.mb-5 Además de conocer la clasificación de entretelas, también es importante conocer las más utilizadas. A continuación, se relacionan algunos nombres:

              .row.mb-5
                .col-2
                  figure
                    img(src="@/assets/curso/tema2-imagen26.svg", alt="")
                .col-10
                  ul.lista-ul--color.lista-ul--separador.borders-list
                    li
                      i.lista-ul__vineta
                      p.mb-0
                        strong Friselina
                        | : primero se adhiere con calor al primer tejido, se retira el papel y se vuelve a aplicar la plancha para adherirse a la otra tela.
                    li
                      i.lista-ul__vineta
                      p.mb-0
                        strong Sidó
                        | : es el tejido de poliéster, viscosa, pelo de animal y lana, que se presenta en una amplia variedad de gramajes. Posee un muy buen rebote y recuperación, por lo que es utilizado para la construcción de plastrones, refuerzo de plastrones y cabezas de manga.
                    li
                      i.lista-ul__vineta
                      p.mb-0
                        strong Plastrón
                        | : tejido de poliéster, viscosa, pelo de animal y lana, que se presenta en una amplia variedad de gramajes. Posee un muy buen rebote y recuperación, por lo que es utilizado para la construcción de plastrones, refuerzo de plastrones y cabezas de manga.
                    li
                      i.lista-ul__vineta
                      p.mb-0
                        strong Entretelas afieltradas
                        | : con textura similar al fieltro, sirven para aplicar sobre tejidos gruesos, como abrigos. Son muy útiles, ya que por su disposición permiten ser aplicadas de forma sencilla sobre la tela final sin que esta se aplaste, pues se pegan con total facilidad. Al observar, tienen dos caras, una con una textura «de pelo» y otra donde se aprecia el pegamento que fijará a la tela.
                    li
                      i.lista-ul__vineta
                      p.mb-0
                        strong Hidrosolubles
                        | : se trata de unas entretelas «mágicas», pues desaparecen con el lavado, al ser solubles en agua. Es un tejido muy fino que se puede aplicar sobre telas delicadas o para realizar bordados. Se fija sobre la tela base, por el revés, y cuando hemos terminado la labor, se lava, desapareciendo por completo y dejando únicamente el tejido final.
                    li
                      i.lista-ul__vineta
                      p.mb-0
                        strong Papel o para bordados
                        | : se utilizan como refuerzos en las labores de bordar, sirviendo de base para las mismas. Una vez se ha finalizado la labor, se retira fácilmente rasgando la entretela.
                    li
                      i.lista-ul__vineta
                      p.mb-0
                        strong Cinturilla y bordes
                        | : ideales para realizar cinturillas, puños, bajos, solapas e incluso asas de bolsos. Tienen aspecto de cinta con pequeñas perforaciones lineales que sirven de guía. Son termoadhesivas.
                    li
                      i.lista-ul__vineta
                      p.mb-0
                        strong Boatina
                        | : es similar al plastrón. De trama de algodón o lana, o ambos, entrelazada de cabello de diferentes animales. También se emplea para plastrones. Al tener un tacto más suave, se coloca en la posición más cercana al cuerpo.
                    li
                      i.lista-ul__vineta
                      p.mb-0
                        strong Percalina
                        | : su composición es 100 % algodón y su principal función es endurecer. Las hay termofijables o de coser, de trama cerrada o trama abierta. Se emplean como entretela base para delantero y las diferentes piezas.
                    li
                      i.lista-ul__vineta
                      p.mb-0
                        strong Beta de algodón
                        | : cinta de algodón termoadhesiva de un ancho de unos 3 a 5 mm, que se emplea en el canto de ciertas costuras que requieren refuerzo en el momento de la confección.

          p.mb-5
            strong A continuación, se relacionan algunos consejos para el uso de entretelas:

          .row.mb-4
            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img.number(src='@/assets/curso/tema2-imagen27.svg')
                .tarjeta.tarjeta-secundario.w-100(style="border-bottom-left-radius: 0; border-bottom-right-radius: 0;")
                  .px-4.py-1
                    p.text-center
                      strong Tejidos ligeros
                    p.mb-5 Entretelas no tejidas y finas, el adhesivo debe ser sin gránulos.

            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img.number(src='@/assets/curso/tema2-imagen28.svg')
                .tarjeta.tarjeta-secundario.w-100(style="border-bottom-left-radius: 0; border-bottom-right-radius: 0;")
                  .px-4.py-1
                    p.text-center
                      strong Tejidos gruesos
                    p.mb-5 Grano grueso de adhesivo.

            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img.number(src='@/assets/curso/tema2-imagen29.svg')
                .tarjeta.tarjeta-secundario.w-100(style="border-bottom-left-radius: 0; border-bottom-right-radius: 0;")
                  .px-4.py-1
                    p.text-center
                      strong Tejidos de punto o elásticos
                    p.mb-5 Entretelas de punto para que no pierdan elasticidad.

          .row.mb-5
            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img.number(src='@/assets/curso/tema2-imagen30.svg')
                .tarjeta.tarjeta-secundario.w-100(style="border-top-left-radius: 0; border-top-right-radius: 0;")
                  .px-4.py-1
                    p.text-center
                      strong Tejidos no elásticos
                    p Entretelas tejidas respetando la dirección del hilo de la pieza.

            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img.number(src='@/assets/curso/tema2-imagen31.svg')
                .tarjeta.tarjeta-secundario.w-100(style="border-top-left-radius: 0; border-top-right-radius: 0;")
                  .px-4.py-1
                    p.text-center
                      strong Entretela tejida
                    p Se encoge con los lavados; debido a esto, se aconseja que sean humedecidas, lavadas o planchadas con vapor antes de su aplicación.

            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img.number(src='@/assets/curso/tema2-imagen32.svg')
                .tarjeta.tarjeta-secundario.w-100(style="border-top-left-radius: 0; border-top-right-radius: 0;")
                  .px-4.py-1
                    p.text-center
                      strong Entretela tradicional
                    p Se corta del mismo tamaño que la pieza a entretelar; en el caso de la entretela termoadhesiva, se debe cortar entre 0,5 a 1 cm más pequeña.

          .row.etiqueta.color-secundario.py-3.mb-5
            .col
              p.text-center.mb-0.text-white Las entretelas se suelen encontrar en rollos de diferentes anchos que van desde 0,9 a 1,5 m habitualmente.

    .row.p-4.p-md-5.seccion-gris.mb-4
      .col
        .py-2
          .h4 Preparación del cuello
          p.mb-5 El cuello es una de las piezas que necesita firmeza para conservar su estructura; por este motivo, requiere entretelarse. Este proceso también es el utilizado para bandas, solapas, perillas, charreteras, puños, pretinas y tapas de bolsillos que necesitan, igualmente, obtener mejor resistencia, tanto en cuerpo como en fricción. Después de cortar el molde del cuello en el textil correspondiente y en la entretela elegida, según el tipo de necesidad, se aplica una técnica de picado utilizada en la sastrería, que aporta un mejor comportamiento y funcionalidad para la prenda.
          Buttons.mb-5(:items="items")

          .row.etiqueta.color-botones.py-2.mb-5
            .col
              p.text-center.mb-0 A continuación, se puede visualizar el proceso para picar piezas como el cuello .

          .row.mb-4
            .col-md-3.d-flex
              .bg-white.p-4(style="border-radius: 15px")
                img.mb-4(src='@/assets/curso/tema2-imagen42.svg')
                p Marcar en forma de flecha hacia el centro del cuello con puntadas irregulares.
            .col-md-3.d-flex
              .bg-white.p-4(style="border-radius: 15px")
                img.mb-4(src='@/assets/curso/tema2-imagen43.svg')
                p Comenzar a picar en la nueva marca hacia la parte de debajo de la pieza.
                  br
                  br
                  | Intentar formar espigas con las puntadas.
            .col-md-3.d-flex
              .bg-white.p-4(style="border-radius: 15px")
                img.mb-4(src='@/assets/curso/tema2-imagen44.svg')
                p Avanzar hasta completar el nuevo cuello, para marcar sin sobrepasar el borde de un centímetro que debe quedar libre de costura.
            .col-md-3.d-flex
              .bg-white.p-4(style="border-radius: 15px")
                img.mb-4(src='@/assets/curso/tema2-imagen45.svg')
                p Hacer espigas con mucho cuidado en las puntas de la pieza, sin sobrepasar el centímetro que se debe dejar libre.
                  br
                  br
                  | Se termina de picar con las puntadas el resto del cuello.
          .row.mb-4
            .col-md-3.d-flex
              .bg-white.p-4(style="border-radius: 15px")
                img.mb-4(src='@/assets/curso/tema2-imagen46.svg')
                p Humedecer la pieza y asentar con la plancha el cuello, del lado de la entretela, sin estirar.
                  br
                  br
                  | De esta forma quedará totalmente plana.
            .col-md-3.d-flex
              .bg-white.p-4(style="border-radius: 15px")
                img.mb-4(src='@/assets/curso/tema2-imagen47.svg')
                p Apreciar el cuello en su totalidad.
            .col-md-3.d-flex
              .bg-white.p-4(style="border-radius: 15px")
                img.mb-4(src='@/assets/curso/tema2-imagen48.svg')
                p Humedecer y estirar con la plancha suavemente.
            .col-md-3.d-flex
              .bg-white.p-4(style="border-radius: 15px")
                img.mb-4(src='@/assets/curso/tema2-imagen49.svg')
                p Planchar girando levemente la totalidad del ancho del cuello.
          .row.mb-4
            .col-md-3.d-flex
              .bg-white.p-4(style="border-radius: 15px")
                img.mb-4(src='@/assets/curso/tema2-imagen50.svg')
                p Recortar un centímetro de entretela en toda la longitud de la pieza como se muestra en la imagen.
            .col-md-3.d-flex
              .bg-white.p-4(style="border-radius: 15px")
                img.mb-4(src='@/assets/curso/tema2-imagen51.svg')
                p Doblar el centímetro de la tela para sostenerlo con costuras manuales de hilván y punto atrás en todo el recorrido.
                  br
                  br
                  | Finalizar con el planchado.

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    //- Muestras

</template>

<script>
import Buttons from '../components/Buttons'
export default {
  name: 'Tema2',
  components: {
    Buttons,
  },
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Costuras manuales',
        texto:
          'Para iniciar con el proceso de formación de un sastre, es preciso conocer y dominar los principales tipos de puntadas a mano, donde solo se requiere una aguja, el hilo y la tela. Son técnicas artesanales que se emplean en la construcción de la prenda y en sus acabados. En este cuadro se pueden visualizar las costuras manuales más importantes.',
        imagen: require('@/assets/curso/tema2-figure10.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Costuras manuales',
        texto:
          'Para iniciar con el proceso de formación de un sastre, es preciso conocer y dominar los principales tipos de puntadas a mano, donde solo se requiere una aguja, el hilo y la tela. Son técnicas artesanales que se emplean en la construcción de la prenda y en sus acabados. En este cuadro se pueden visualizar las costuras manuales más importantes.',
        imagen: require('@/assets/curso/tema2-figure11.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Costuras manuales',
        texto:
          'Para iniciar con el proceso de formación de un sastre, es preciso conocer y dominar los principales tipos de puntadas a mano, donde solo se requiere una aguja, el hilo y la tela. Son técnicas artesanales que se emplean en la construcción de la prenda y en sus acabados. En este cuadro se pueden visualizar las costuras manuales más importantes.',
        imagen: require('@/assets/curso/tema2-figure12.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Costuras manuales',
        texto:
          'Para iniciar con el proceso de formación de un sastre, es preciso conocer y dominar los principales tipos de puntadas a mano, donde solo se requiere una aguja, el hilo y la tela. Son técnicas artesanales que se emplean en la construcción de la prenda y en sus acabados. En este cuadro se pueden visualizar las costuras manuales más importantes.',
        imagen: require('@/assets/curso/tema2-figure13.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Costuras manuales',
        texto:
          'Para iniciar con el proceso de formación de un sastre, es preciso conocer y dominar los principales tipos de puntadas a mano, donde solo se requiere una aguja, el hilo y la tela. Son técnicas artesanales que se emplean en la construcción de la prenda y en sus acabados. En este cuadro se pueden visualizar las costuras manuales más importantes.',
        imagen: require('@/assets/curso/tema2-figure14.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Costuras manuales',
        texto:
          'Para iniciar con el proceso de formación de un sastre, es preciso conocer y dominar los principales tipos de puntadas a mano, donde solo se requiere una aguja, el hilo y la tela. Son técnicas artesanales que se emplean en la construcción de la prenda y en sus acabados. En este cuadro se pueden visualizar las costuras manuales más importantes.',
        imagen: require('@/assets/curso/tema2-figure15.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Costuras manuales',
        texto:
          'Para iniciar con el proceso de formación de un sastre, es preciso conocer y dominar los principales tipos de puntadas a mano, donde solo se requiere una aguja, el hilo y la tela. Son técnicas artesanales que se emplean en la construcción de la prenda y en sus acabados. En este cuadro se pueden visualizar las costuras manuales más importantes.',
        imagen: require('@/assets/curso/tema2-figure16.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Costuras manuales',
        texto:
          'Para iniciar con el proceso de formación de un sastre, es preciso conocer y dominar los principales tipos de puntadas a mano, donde solo se requiere una aguja, el hilo y la tela. Son técnicas artesanales que se emplean en la construcción de la prenda y en sus acabados. En este cuadro se pueden visualizar las costuras manuales más importantes.',
        imagen: require('@/assets/curso/tema2-figure17.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Costuras manuales',
        texto:
          'Para iniciar con el proceso de formación de un sastre, es preciso conocer y dominar los principales tipos de puntadas a mano, donde solo se requiere una aguja, el hilo y la tela. Son técnicas artesanales que se emplean en la construcción de la prenda y en sus acabados. En este cuadro se pueden visualizar las costuras manuales más importantes.',
        imagen: require('@/assets/curso/tema2-figure18.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Costuras manuales',
        texto:
          'Para iniciar con el proceso de formación de un sastre, es preciso conocer y dominar los principales tipos de puntadas a mano, donde solo se requiere una aguja, el hilo y la tela. Son técnicas artesanales que se emplean en la construcción de la prenda y en sus acabados. En este cuadro se pueden visualizar las costuras manuales más importantes.',
        imagen: require('@/assets/curso/tema2-figure19.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Costuras manuales',
        texto:
          'Para iniciar con el proceso de formación de un sastre, es preciso conocer y dominar los principales tipos de puntadas a mano, donde solo se requiere una aguja, el hilo y la tela. Son técnicas artesanales que se emplean en la construcción de la prenda y en sus acabados. En este cuadro se pueden visualizar las costuras manuales más importantes.',
        imagen: require('@/assets/curso/tema2-figure20.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Costuras manuales',
        texto:
          'Para iniciar con el proceso de formación de un sastre, es preciso conocer y dominar los principales tipos de puntadas a mano, donde solo se requiere una aguja, el hilo y la tela. Son técnicas artesanales que se emplean en la construcción de la prenda y en sus acabados. En este cuadro se pueden visualizar las costuras manuales más importantes.',
        imagen: require('@/assets/curso/tema2-figure21.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Costuras manuales',
        texto:
          'Para iniciar con el proceso de formación de un sastre, es preciso conocer y dominar los principales tipos de puntadas a mano, donde solo se requiere una aguja, el hilo y la tela. Son técnicas artesanales que se emplean en la construcción de la prenda y en sus acabados. En este cuadro se pueden visualizar las costuras manuales más importantes.',
        imagen: require('@/assets/curso/tema2-figure22.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Costuras manuales',
        texto:
          'Para iniciar con el proceso de formación de un sastre, es preciso conocer y dominar los principales tipos de puntadas a mano, donde solo se requiere una aguja, el hilo y la tela. Son técnicas artesanales que se emplean en la construcción de la prenda y en sus acabados. En este cuadro se pueden visualizar las costuras manuales más importantes.',
        imagen: require('@/assets/curso/tema2-figure23.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Costuras manuales',
        texto:
          'Para iniciar con el proceso de formación de un sastre, es preciso conocer y dominar los principales tipos de puntadas a mano, donde solo se requiere una aguja, el hilo y la tela. Son técnicas artesanales que se emplean en la construcción de la prenda y en sus acabados. En este cuadro se pueden visualizar las costuras manuales más importantes.',
        imagen: require('@/assets/curso/tema2-figure24.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Costuras manuales',
        texto:
          'Para iniciar con el proceso de formación de un sastre, es preciso conocer y dominar los principales tipos de puntadas a mano, donde solo se requiere una aguja, el hilo y la tela. Son técnicas artesanales que se emplean en la construcción de la prenda y en sus acabados. En este cuadro se pueden visualizar las costuras manuales más importantes.',
        imagen: require('@/assets/curso/tema2-figure25.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Costuras manuales',
        texto:
          'Para iniciar con el proceso de formación de un sastre, es preciso conocer y dominar los principales tipos de puntadas a mano, donde solo se requiere una aguja, el hilo y la tela. Son técnicas artesanales que se emplean en la construcción de la prenda y en sus acabados. En este cuadro se pueden visualizar las costuras manuales más importantes.',
        imagen: require('@/assets/curso/tema2-figure26.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    items: [
      {
        imagen: require('@/assets/curso/tema2-imagen33.svg'),
        text:
          'Se deben ubicar los moldes sobre la tela para recortar dos piezas de cuello y dos piezas de banda.',
        nota: 'Nota. Adaptado de  "Elegantisima" páginas 102 a la 104',
      },
      {
        imagen: require('@/assets/curso/tema2-imagen34.svg'),
        text:
          'Se continúa con la ubicación de los moldes sobre la entretela, para recortar dos piezas de cuello y dos piezas de banda.<br><br>Para cada uno de los cortes se debe incluir un centímetro para realizar la costura.',
        nota: 'Nota. Adaptado de  "Elegantisima" páginas 102 a la 104',
      },
      {
        imagen: require('@/assets/curso/tema2-imagen35.svg'),
        text:
          'Se une con hilván recto a un centímetro del borde, es decir, un cuello en tela con un cuello en entretela.<br><br>Este procedimiento se debe realizar con las demás piezas.',
        nota: 'Nota. Adaptado de  "Elegantisima" páginas 102 a la 104',
      },
      {
        imagen: require('@/assets/curso/tema2-imagen36.svg'),
        text:
          'Se unen con hilván flojo ambos cuellos enfrentados derecho con derecho de la tela.<br><br>Se deja sin costura la base por donde irá la banda.<br><br>Antes de coser a máquina, se humedecen las costuras recién hechas y se planchan para evitar imperfecciones.<br><br>Se da la vuelta al cuello y se hilvana la base del cuello que queda abierta, se humedece y se plancha nuevamente.',
        nota: 'Nota. Adaptado de  "Elegantisima" páginas 102 a la 104',
      },
      {
        imagen: require('@/assets/curso/tema2-imagen37.svg'),
        text:
          'Se sostiene con hilván recto la cara externa de la banda, por la base del cuello, partiendo de la mitad de ambas piezas.',
        nota: 'Nota. Adaptado de  "Elegantisima" páginas 102 a la 104',
      },
      {
        imagen: require('@/assets/curso/tema2-imagen38.svg'),
        text:
          'Se hilvana la otra cara de la banda quedando el cuello en el centro de las bandas.<br><br>Posterior se cose tomando como guía la costura manual.',
        nota: 'Nota. Adaptado de  "Elegantisima" páginas 102 a la 104',
      },
      {
        imagen: require('@/assets/curso/tema2-imagen39.svg'),
        text:
          'Se retiran los hilvanes dando vuelta a las bandas mostrando el lado derecho de las piezas.<br><br>Se pasa un hilván suelto alrededor de la banda para sostener mientras se realiza el planchado.',
        nota: 'Nota. Adaptado de  "Elegantisima" páginas 102 a la 104',
      },
      {
        imagen: require('@/assets/curso/tema2-imagen40.svg'),
        text:
          'Se hilvana el escote a un centímetro del borde, para realizar un pequeño doblez en la base de la banda con puntada de hilván, humedeciendo y planchando.<br><br>Se une de forma manual la banda a la prenda que ya está armada con frentes, espalda y cartera por el lado externo de la prenda.<br><br>En esta acción se deben tomar como guía las costuras de la banda y la del escote.',
        nota: 'Nota. Adaptado de  "Elegantisima" páginas 102 a la 104',
      },
      {
        imagen: require('@/assets/curso/tema2-imagen41.svg'),
        text:
          'Se hilvana la parte interna de la banda con la parte interna de frente y espalda.<br><br>Se finaliza planchando con un paño humedecido.',
        nota: 'Nota. Adaptado de  "Elegantisima" páginas 102 a la 104',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
