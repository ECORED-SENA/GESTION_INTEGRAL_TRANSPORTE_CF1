<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
     
    figure.mb-5
      img(src="@/assets/curso/banner-intro.jpg", alt="Introducción")

    p.mb-4(data-aos="fade") Se inicia este proceso de aprendizaje sobre los servicios de transporte de pasajeros y de carga en el marco de los diferentes sistemas: aéreo, acuático, carretero, ferroviario, así como sus flujos continuos con sus respectivos modos.

    .row.tarjeta.tarjeta--gris.p-3.p-lg-4.mb-4(data-aos="fade")
      .col-lg-3(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img(src="@/assets/curso/intro-ico1.svg", alt="Prehistoria")
      .col-lg-8(data-aos="fade-left")
        p.mb-0 La prehistoria de la humanidad inicia como seres sedentarios que evitaban los desplazamientos, ya que estaban en una zona de confort. Una vez que son obligados a abandonarla, se inicia el transporte, pues se convierten en nómadas, lo que implica la necesidad de obtención de fuentes de alimentación, condiciones climáticas favorables, consecución de techo y abrigo para lograr la supervivencia; el hambre y la necesidad de protección incitaron al ser humano a moverse.

    .row.tarjeta.tarjeta--gris.p-3.p-lg-4.mb-4(data-aos="fade")
      .col-lg-3(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img(src="@/assets/curso/intro-ico2.svg", alt="Transporte")
      .col-lg-8(data-aos="fade-left")
        p.mb-0 Así, el transporte juega un papel predominante en el desarrollo de la sociedad y a medida en que esta se torna más compleja se ha hecho necesario incrementar la unión de las diferentes actividades que se realizan en lugares separados –orígenes y destinos– en busca de una utilidad o beneficio mediante el transporte de personas y bienes empleando las facilidades que ofrece la telemática. 

    .row.tarjeta.tarjeta--gris.p-3.p-lg-4.mb-4(data-aos="fade")
      .col-lg-3(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img(src="@/assets/curso/intro-ico3.svg", alt="Globalización")
      .col-lg-8(data-aos="fade-left")
        p.mb-0 A medida que la globalización de la economía se va consolidando, se hace necesario contar con recursos suficientes y bien administrados para cumplir con la llegada oportuna de los bienes requeridos y responder de manera eficiente y oportuna a los requerimientos de los clientes. Por lo tanto, en el estudio de los modos de transporte se deben integrar todas las actividades que de una u otra manera tengan relación con la movilidad, especialmente en el transporte de mercancías.

    .row.tarjeta.tarjeta--gris.p-3.p-lg-4.mb-4(data-aos="fade")
      .col-lg-3(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img(src="@/assets/curso/intro-ico4.svg", alt="traslado")
      .col-lg-8(data-aos="fade-left")
        p.mb-0 El traslado de un lugar a otro de familias, animales y objetos permite obtener una definición de transporte, que, para Colombia, está dado en la Ley 336 de 1996, artículo 6, que promulga que: “Por actividad transportadora se entiende un conjunto organizado de operaciones tendientes a ejecutar el traslado de personas o cosas, separada o conjuntamente, de un lugar a otro, utilizando uno o varios modos” (Art. 6°). De la misma manera, en el Código Nacional de Tránsito Terrestre, se menciona que “el transporte es el traslado de personas, animales o cosas de un punto a otro a través de un medio físico” (Ley 769 de 2002).

    .row.tarjeta.tarjeta--gris.p-3.p-lg-4.mb-5(data-aos="fade")
      .col-lg-3(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img(src="@/assets/curso/intro-ico5.svg", alt="Gestión")
      .col-lg-8(data-aos="fade-left")
        p.mb-0 La conceptualización en la manera de administrar la movilización de bienes desde los centros de extracción de las materias primas, pasando por sus procesos de transformación hasta la llegada al consumidor final, ha exigido cambios en la forma de prestar los servicios de transporte y la cobertura de los mismos, adaptándose a las nuevas tecnologías y exigencias normativas de los diferentes países. Como resultado de lo anterior la gestión en las operaciones de los servicios de transporte están directamente relacionadas con la Logística Empresarial en los segmentos del abastecimiento, almacenamiento y distribución.


    p.mb-4(data-aos="fade") Por ello, se requiere mayor eficiencia y gestión de los recursos vinculados a la industria del transporte y, por supuesto, de personal cualificado y apto para ejecutar estas acciones, razones por las cuales este programa apunta a lograr el desarrollo de estas competencias, lo cual se obtendrá realizando las actividades de aprendizaje relacionadas con la conceptualización del transporte en el mundo y en Colombia.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
