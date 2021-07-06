<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Modos y medios de transporte

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema5.png", alt="Modos y medios de transporte")  

    p(data-aos="fade") Cada modo se caracteriza por un conjunto de tipologías técnicas, de infraestructura, operacionales, de marcos legales y comerciales que permiten su operación en los países y entre los países. 

    Separador


    // 5.1
    #t_5_1.titulo-segundo(data-aos="fade-right")
      .h2 5.1.	Quienes los regulan 

    p.mb-5(data-aos="fade") Entre las organizaciones que ayudan en la reglamentación y regulación de la actividad transportadora internacional, están las siguientes:

    .row
      .col-lg-4.mb-4
        .content  
          .content-overlay
          .btn-numero
            h3.text-white 1
          img(src="@/assets/curso/tema-5-1-img1.svg", alt="OMI") 
          .tarjeta-details.fadeIn-top.p-1
            h4.mb-1.text-white OMI
            p.text-white La Organización Marítima Internacional es el organismo especializado de las Naciones Unidas responsable de la seguridad y protección de la navegación y de prevenir la contaminación del mar por los buques. La OMI es la autoridad mundial encargada de establecer normas para la seguridad, la protección y el comportamiento ambiental que ha de observarse en el transporte marítimo internacional. Su función principal es establecer un marco normativo para el sector del transporte marítimo que sea justo y eficaz, y que se adopte y aplique en el plano internacional.        
      .col-lg-4.mb-4
        .content(@mouseover="mostrarIndicador = false")
          .indicador--click(v-if="mostrarIndicador")
          .content-overlay
          img(src="@/assets/curso/tema-5-1-img2.svg", alt="FIATA") 
          .btn-numero
            h3.text-white 2
          .tarjeta-details.fadeIn-top.p-2
            h4.text-white FIATA
            p.text-white La Federación Internacional de Asociaciones de Transitarios, representa a la industria de transitarios, y es una organización integrada por alrededor de 40.000 empresas de logística y agentes de carga, que emplea a alrededor de 8 a 10 millones de personas en 150 países.
      .col-lg-4.mb-4
        .content
          .content-overlay
          img(src="@/assets/curso/tema-5-1-img3.svg", alt="ICS") 
          .btn-numero
            h3.text-white 3 
          .tarjeta-details.fadeIn-top.p-2
            h4.text-white ICS
            p.text-white La Cámara Marítima Internacional el organismo mundial de navegación que representa el 80% de la flota mercante mundial, lidera la organización de armadores y organizaciones comprometidas con la reducción de emisiones contaminantes en el mar, siendo que ellos realizan la facilitación del comercio en temas como seguridad marítima, estándares de construcción naval y responsabilidad respecto a la carga.
      .col-lg-4.mb-4
        .content  
          .content-overlay
          .btn-numero
            h3.text-white 4
          img(src="@/assets/curso/tema-5-1-img4.svg", alt="SMDG") 
          .tarjeta-details.fadeIn-top.p-1
            h4.text-white SMDG
            p.text-white Ship Mensaje Design Group es un grupo de usuarios para las líneas navieras, terminales de contenedores y autoridades portuarias y desarrolló estándares para la industria de contenedores marítimos, para el intercambio de información de planes de estiba y de movimientos individuales de contenedores marítimos hacia, al interior y desde los puertos (https://tfig.unece.org/SP/contents/international-transport-organizations.htm).
      .col-lg-4.mb-4
        .content(@mouseover="mostrarIndicador = false")
          .indicador--click(v-if="mostrarIndicador")
          .content-overlay
          img(src="@/assets/curso/tema-5-1-img5.svg", alt="OMC") 
          .btn-numero
            h3.text-white 5
          .tarjeta-details.fadeIn-top.p-2
            h4.text-white OMC
            p.text-white La Organización Mundial del Comercio (OMC) es la única organización internacional que se ocupa de las normas que rigen el comercio entre los países. Los pilares sobre los que descansa son los acuerdos de la OMC, que han sido negociados y firmados por la mayoría de los países que participan en el comercio mundial y ratificados por sus respectivos parlamentos. El objetivo es garantizar que los intercambios comerciales se realicen de la forma más fluida, previsible y libre posible
      .col-lg-4.mb-4
        .content
          .content-overlay
          img(src="@/assets/curso/tema-5-1-img6.svg", alt="IATA") 
          .btn-numero
            h3.text-white 6
          .tarjeta-details.fadeIn-top.p-2
            h4.text-white IATA
            p.text-white La Asociación Internacional de Transporte Aéreo se esfuerza por garantizar que las personas, la carga y el correo transiten por la red mundial de líneas aéreas con la misma facilidad que si estuvieran en un solo país, y que las aeronaves de los miembros operen de manera segura, protegida, eficiente y económica con arreglo a normas claramente definidas y bien comprendidas por todos.  
      .col-lg-4.mb-4
        .content  
          .content-overlay
          .btn-numero
            h3.text-white 7
          img(src="@/assets/curso/tema-5-1-img7.svg", alt="OACI") 
          .tarjeta-details.fadeIn-top.p-1
            h4.text-white OACI
            p.text-white La Organización de Aviación Civil Internacional es la agencia de la Organización de las Naciones Unidas creada en 1944 por el Convenio sobre Aviación Civil Internacional para estudiar los problemas de la aviación civil internacional y promover los reglamentos y normas únicos en la aeronáutica mundial.
      .col-lg-4.mb-4
        .content(@mouseover="mostrarIndicador = false")
          .indicador--click(v-if="mostrarIndicador")
          .content-overlay
          img(src="@/assets/curso/tema-5-1-img8.svg", alt="OTIF") 
          .btn-numero
            h3.text-white 8
          .tarjeta-details.fadeIn-top.p-2
            h4.text-white OTIF
            p.text-white Organización Intergubernamental para los Transportes Internacionales por Ferrocarril, es un organismo internacional que se dedica al transporte internacional ferroviario. Está formada por más de 50 países y tiene su sede en Berna; esta asociación solo tiene presencia en Europa.
      .col-lg-4.mb-4
        .content
          .content-overlay
          img(src="@/assets/curso/tema-5-1-img9.svg", alt="IRU") 
          .btn-numero
            h3.text-white 9
          .tarjeta-details.fadeIn-top.p-2
            h4.text-white IRU
            p.text-white La Organización Internacional para el Transporte por Carretera, más conocida por IRU es la asociación mundial de los profesionales de transporte por carretera; agrupa y representa al conjunto de asociaciones y federaciones de transporte internacional por carretera.


    Separador


    // 5.2
    #t_5_2.titulo-segundo(data-aos="fade-right")
      .h2 5.2.	Condiciones para la operación 

    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Para la operación de empresas de transporte se requiere tener permisos o concesiones de los países y condiciones especiales para cada modo de transporte. Una de las principales es el patrimonio o capital vinculado a la actividad transportadora.
        p Estos requerimientos normativos se pueden consultar desde el Decreto Único Reglamentario del Sector Transporte 1079 de 2015, para Colombia.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5-2.svg', alt='Condiciones para la operación')


    Separador


    // 5.3
    #t_5_3.titulo-segundo(data-aos="fade-right")
      .h2 5.3.	Estructura organizacional 

    p.mb-4(data-aos="fade") Toda estructura organizacional de las empresas de transporte tiene la particularidad que deben poseer unos órganos jerarquizados que ostenten los tres poderes públicos como son:

    TabsB.color-secundario.mb-5
      .py-4.py-md-5(titulo="Poder legislativo" :icono="require('@/assets/curso/tema5-3-ico1.svg')")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Poder legislativo
            p Legisla y promulga las leyes, siendo a nivel nacional el Congreso, a nivel departamental las asambleas, a nivel municipal los consejos y a nivel de empresa u organización están la junta directiva o consejo de administración.
          .col-md-5
            figure
              img(src='@/assets/curso/tema5-3-img1.jpg', alt='Poder legislativo')
      .py-4.py-md-5(titulo="Poder ejecutivo" :icono="require('@/assets/curso/tema5-3-ico2.svg')")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Poder ejecutivo
            p Encargado de la conducción del Estado o empresa y administrador de sus bienes. Es, a su vez, el ejecutor de las disposiciones del poder legislativo. Se tiene a nivel nacional al Presidente de la República; a nivel departamental a los gobernadores; a nivel municipal a los alcaldes y a nivel empresarial a los gerentes o representantes legales. 
          .col-md-5
            figure
              img(src='@/assets/curso/tema5-3-img2.jpg', alt='Poder ejecutivo')
      .py-4.py-md-5(titulo="Poder judicial" :icono="require('@/assets/curso/tema5-3-ico3.svg')")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Poder judicial
            p Encargado de hacer cumplir las leyes y de resolver conflictos entre los demás poderes públicos. A nivel nacional está la Corte Suprema de Justicia; a nivel departamental están los tribunales administrativos; a nivel municipal los jueces municipales o en los municipios pequeños los jueces promiscuos municipales y a nivel empresarial están los revisores fiscales o juntas de vigilancia.
          .col-md-5
            figure
              img(src='@/assets/curso/tema5-3-img3.jpg', alt='Poder judicial')                
      
    .row.justify-content-center
      .col-lg-10 
        .titulo-sexto.color-acento-contenido.mt-3.mb-4
          p.mb-0 
            strong Figura 2.  
            | Modelo de distribución de los tres poderes públicos en las organizaciones
        figure
          img(src='@/assets/curso/tema5-3-figura2.svg', alt='Modelo de distribución de los tres poderes públicos en las organizaciones')    


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    mostrarIndicador: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
