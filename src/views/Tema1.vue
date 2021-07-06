<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Estructura del sector y Sistema Nacional de Transporte

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema1.jpg", alt="Estructura del sector y Sistema Nacional de Transporte")  

    p(data-aos="fade") Se especifica en la Ley 105 de 1993, que el sector transporte está integrado por el Ministerio de Transporte, sus organismos adscritos o vinculados y la Dirección General Marítima del Ministerio de Defensa Nacional, en cuanto estará sujeta a una relación de coordinación con el Ministerio de Transporte.
    p.mb-4(data-aos="fade") Por su parte, la Ley dice que conforman el Sistema Nacional de Transporte, para el desarrollo de las políticas de transporte además de los organismos indicados en el inciso anterior, los organismos de tránsito y transporte, tanto terrestre, aéreo y marítimo e infraestructura de transporte de las entidades territoriales y demás dependencias de los sectores central o descentralizado de cualquier orden que tengan funciones relacionadas con esta actividad, teniendo en cuenta las siguientes entidades:  
  
    .row.justify-content-center.mb-4.align-items-center
      .col-lg-6.align-items-center(data-aos="fade-right")
        .nav-holder2.align-items-center
          img(src="@/assets/curso/tema1-hover.svg", alt="Entidades adscritas al Ministerio de Transporte")
          .text.p-lg-3.p-4
            .row.px-lg-4.mb-3.mb-lg-2
              .col-lg-2.col-3
                img(src="@/assets/curso/tema1-hover2-ico2.svg", alt="Entidades adscritas al Ministerio de Transporte")
              .col-lg-10.col-9 
                h3.mb-3 Entidades adscritas al Ministerio de Transporte
            ul.lista-ul--color.lista-morada.px-lg-4
              li
                i.fas.fa-square
                p.mb-0 Dirección General Marítima y Portuaria – DIMAR.
              li
                i.fas.fa-square
                p.mb-0 Agencia Nacional de Infraestructura – ANI.
              li
                i.fas.fa-square
                p.mb-0 Instituto Nacional de Vías - INVÍAS.
              li
                i.fas.fa-square
                p.mb-0 Unidad Administrativa Especial de Aeronáutica Civil – AEROCIVIL.
              li
                i.fas.fa-square
                p.mb-0 Superintendencia de Puertos y Transporte – SUPERTRANSPORTE.    
              
      .col-lg-6.align-items-center(data-aos="fade-left")
        .nav-holder2.align-items-center(@mouseover="mostrarIndicador = false")
          .indicador--click(v-if="mostrarIndicador")
          img(src="@/assets/curso/tema1-hover2.svg", alt="Órganos de asesoría y coordinación sectorial")
          .text.p-lg-3.p-4
            .row.align-items-center.px-lg-4.mb-3.mb-lg-2
              .col-lg-2.col-3
                img(src="@/assets/curso/tema1-hover2-ico1.svg", alt="Órganos de asesoría y coordinación sectorial")
              .col-lg-10.col-9
                h3.mb-3 Órganos de asesoría y coordinación sectorial
            ul.lista-ul--color.lista-morada.px-lg-4
              li
                i.fas.fa-square
                p.mb-0 Comité de Coordinación permanente entre el Ministerio de Transporte y la Dirección General Marítima, Dimar.
              li
                i.fas.fa-square
                p.mb-0 Consejo Consultivo de Transporte.
              li
                i.fas.fa-square
                p.mb-0 Superintendencia de Industria y Comercio – SIC.
              li
                i.fas.fa-square
                p.mb-0 Ministerio de Minas y Energía. 
              li
                i.fas.fa-square
                p.mb-0 Unidad de Planeación Minero Energética – UPME.
              li
                i.fas.fa-square
                p.mb-0 Dirección de Impuestos y Aduanas Nacionales – DIAN. 
              li
                i.fas.fa-square
                p.mb-0 Ministerio de Ambiente y Desarrollo Sostenible.
                      

    p.mb-4(data-aos="fade") Igualmente, la Ley 105 de 1993 legisló y estableció que el transporte ya no se considera como una actividad, sino como una industria, diferenciando entre transporte privado y transporte público, con las siguientes particularidades:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-2.col-6(data-aos="fade-right")
        figure.mb-3
          img(src="@/assets/curso/tema1-imagen1.svg", alt="Transporte privado")  
      .col-lg-10(data-aos="fade-left")
        h4.mb-0 Transporte privado
        p De acuerdo con el artículo 5° de la Ley 336 de 1996, es aquel que tiende a satisfacer necesidades de movilización de personas o cosas dentro del ámbito de las actividades exclusivas de las personas naturales o jurídicas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-6(data-aos="fade-right")
        figure.mb-3
          img(src="@/assets/curso/tema1-imagen2.svg", alt="Transporte público")  
      .col-lg-10(data-aos="fade-left")
        h4.mb-0 Transporte público
        p De conformidad con el artículo 3° de la Ley 105 de 1993, es una industria encaminada a garantizar la movilización de personas o cosas, por medio de vehículos apropiados, en condiciones de libertad de acceso, calidad y seguridad de los usuarios, sujeto a una contraprestación económica.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
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

<style lang="sass" scoped>
.nav-holder2
  color: #FFF
  display: inline-block
  margin: 10px 5px
  overflow: hidden
  position: relative
  -webkit-transform: translateZ(0)
  transform: translateZ(0)

.nav-holder2 *, .nav-holder2 *:before, .nav-holder2 *:after
  -webkit-box-sizing: border-box
  box-sizing: border-box
  -webkit-transition: all 0.45s ease
  transition: all 0.45s ease

.nav-holder2:before
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  content: ''
  background-color: #FFBA5B
  opacity: 0.8
  -webkit-transition: all 0.45s ease
  transition: all 0.45s ease

.nav-holder2:before
  -webkit-transform: translateY(100%)
  transform: translateY(100%)

.nav-holder2:hover:before
  -webkit-transform: translateY(0)
  transform: translateY(0)
  opacity: 1
  -webkit-transition-delay: 0.1s
  transition-delay: 0.1s

.nav-holder2
  .text
    position: absolute
    top: 100%
    bottom: 0px
    left: 0px
    right: 0px
    z-index: 100
    bottom: 0
    padding: 1em
  img
    backface-visibility: hidden
    max-width: 100%
    vertical-align: top
  p, h4, i, li, ul
    margin: 0
    opacity: 0

.nav-holder2:hover
  .text
    top: 0
  h4, p, i, li, ul
    opacity: 1;
    -webkit-transition-delay: 0.2s
    transition-delay: 0.2s

@media (max-width: $bp-max-md)
  .nav-holder2
    height: 455px
    background-color: #c3b5ec
</style>
