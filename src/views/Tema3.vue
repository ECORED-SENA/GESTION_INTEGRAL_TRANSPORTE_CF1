<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Marco normativo internacional para la logística del transporte

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema3.png", alt="Marco normativo internacional para la logística del transporte")  

    p(data-aos="fade") A nivel internacional existen organizaciones que regulan los servicios aéreos y marítimos; los demás modos, como el férreo, el carretero y el fluvial están reglamentados localmente por cada uno de los países. Para realizar un análisis minucioso del marco normativo internacional del transporte de mercancías por carretera es preciso enunciar y conocer las normas de este servicio en Colombia y en los países de la región.

    Separador


    // 3.1
    #t_3_1.titulo-segundo(data-aos="fade-right")
      .h2 3.1.	Dinámica Empresarial

    p(data-aos="fade") La Ley 336 de 1996, establece que:

    .row.justify-content-center.mb-4
      .col-lg-10
        .bloque-texto-b.color-gris.p-4
          .bloque-texto-b__texto
            .row
              .col-lg-1.comilla-inicial
                i.fas.fa-quote-left
              .col-lg-10
                p.mb-0 A nivel internacional existen organizaciones que regulan los servicios aéreos y marítimos; los demás modos, como el férreo, el carretero y el fluvial están reglamentados localmente por cada uno de los países. Para realizar un análisis minucioso del marco normativo internacional del transporte de mercancías por carretera es preciso enunciar y conocer las normas de este servicio en Colombia y en los países de la región.
              .col-lg-1.comilla-final
                i.fas.fa-quote-right       

    p(data-aos="fade") Los interesados en habilitarse como empresas de transporte por cada modo (aéreo, marítimo, fluvial, férreo y carretero), deben demostrar condiciones mínimas en materia de organización, técnica, de seguridad, jurídica y capacidad financiera y origen de los recursos. Esta información y sus requisitos pueden consultarse en el Decreto Único Reglamentario del Sector Transporte 1079 de 2015.

    Separador


    // 3.2
    #t_3_2.titulo-segundo(data-aos="fade-right")
      .h2 3.2. Transporte internacional de mercancías por carretera

    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Los primeros pasos para crear una reglamentación internacional para el transporte de mercancías en el área andina, se inicia en 1969 con la creación de la llamada Comisión del Acuerdo de Cartagena. Organización que sentó las bases para establecer regulaciones que permitieran transportar mercancías en esta zona andina, ajustando normas, reglas, condiciones de seguridad e igualdad en sus países miembros. La más importante de estas es la Decisión del Acuerdo de Cartagena 399 de 1996, la cual considerando que el “mercado internacional cada día más exigente requiere de normas que aseguren la eficiencia del servicio, determinando en forma clara y precisa las condiciones del contrato y la responsabilidad que debe tener tanto el transportista como el usuario y el destinatario”, decidió desde 1989 expedir el Reglamento Internacional de Transporte de Mercancías por Carretera, el cual ha sigue vigente con las correspondientes actualizaciones. 
        .bloque-texto-b.color-morado2
          .bloque-texto-b__texto
            p.mb-0 La Asociación Latinoamericana de Integración, Aladi, es un organismo internacional de ámbito regional, cuyo objetivo final es el establecimiento de un mercado común latinoamericano, creado el 12 de agosto de 1980 por el Tratado de Montevideo, sustituyendo a la Asociación Latinoamericana de Libre Comercio creada en 1960 cuyo objetivo, entre otros, era el de reducir y eliminar gradualmente las trabas al comercio recíproco de sus países miembros.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3-2-imagen1.png', alt='3.2. Transporte internacional de mercancías por carretera')


    .tarjeta.tarjeta--gris.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/acuerdo-internacional.svg")

        .col-md.col-lg-6
          h3 Acuerdo sobre Transporte Internacional Terrestre (ATIT)
          p.mb-4 Actualmente son 13 los países miembros: República Argentina, Estado Plurinacional de Bolivia, República Federativa del Brasil, República de Chile, República de Colombia, República del Ecuador, Estados Unidos Mexicanos, República del Paraguay, República del Perú, República Oriental del Uruguay, República Bolivariana de Venezuela, República de Cuba y República de Panamá.
          
          a.boton.color-acento-contenido(:href="obtenerLink('/downloads/Acuerdo_Tranporte_Internacional_terrestre.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download


    Separador


    // 3.3
    #t_3_3.titulo-segundo(data-aos="fade-right")
      .h2 3.3. Comunidad Andina de Naciones CAN

    p.mb-4(data-aos="fade") La Comisión del Acuerdo de Cartagena, creada en 1969, derivó en el año 1996 en llamarse Comunidad Andina de Naciones, CAN, cuyos países integrantes son Colombia, Perú, Ecuador y Bolivia, habiéndose retirado Venezuela en 2006.

    .row.justify-content-center(data-aos="fade-down") 
      .col-lg-10
        .tarjeta.color-primario.py-3.px-lg-5.px-4
          .row.justify-content-center.align-items-center
            .col-lg-1
            .col-3.col-sm-2.col-lg-2.px-lg-4
              img.px-lg-2(src="@/assets/curso/tema3-3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.texto-blanco
                  h3.mb-1 Línea de tiempo
                  p.mb-0.text-small La CAN en la historia. 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Linea_de_tiempo_La_CAN.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download   

    Separador


    // 3.4
    #t_3_4.titulo-segundo(data-aos="fade-right")
      .h2 3.4.	Marco normativo del transporte internacional terrestre de la CAN

    .row.justify-content-center(data-aos="fade-down") 
      .col-lg-10
        .row.border-bottom.pb-3
          .col-lg-6
            p Dentro de este marco y en previsión del transporte fronterizo, existen normas internacionales que se llaman decisiones de los países expedidas por la CAN, la última de las cuales es la Decisión 837 de 2019 que sustituye la Decisión 399 sobre Transporte Internacional de Mercancías por Carretera. 
          .col-lg-6
            a.anexo.mb-4(:href="obtenerLink('/downloads/Decision_837.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p 
                  strong Anexo. 
                  | Decisión 837 Transporte Internacional de mercancías por carretera. 
        .row.mt-4
          .col-lg-6
            p También existe la Decisión 398 de la Comisión del Acuerdo de Cartagena, que es la decisión de los países miembros de regular el transporte internacional de pasajeros por carretera, expedida en enero de 1997, donde se destacan internacional y migración, entre otros.     
          .col-lg-6     
            a.anexo.mb-4(:href="obtenerLink('/downloads/Decision_398_399.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p 
                  strong Anexo. 
                  | Decisión 898 y 399 aspectos normativos referentes a habilitación empresarial, contrato de transporte, derechos y obligaciones, tránsito aduanero internacional y migración.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
