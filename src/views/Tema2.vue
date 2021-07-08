<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Principios del transporte público

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema2.jpg", alt="Principios del transporte público")  

    p.mb-5(data-aos="fade") Por tener la intervención del Estado, la actividad transportadora como transporte público, goza de unos principios enunciados de la siguiente manera: 

    LineaTiempoD.color-secundario.mb-5(data-aos="fade-down")
      .row.align-items-center.justify-content-center(numero="+" titulo="Del acceso al transporte")
        .col-md-1.col-4.mb-4.mb-md-0.pt-2
          figure
            img(src='@/assets/curso/tema1-ico1.svg', alt='Del acceso al transporte')
        .col-md-11
          p Dirigido a autoridades y usuarios sobre la oferta de modos y medios que pueden ser utilizados.
      .row.align-items-center.justify-content-center(numero="+" titulo="Del carácter del servicio público del transporte")
        .col-md-1.col-4.mb-4.mb-md-0.pt-3
          figure
            img(src='@/assets/curso/tema1-ico2.svg', alt='Del carácter del servicio público del transporte')
        .col-md-11
          p El transporte es un servicio público en Colombia, bajo la regulación del Estado en condiciones de calidad, oportunidad y seguridad.
      .row.align-items-center.justify-content-center(numero="+" titulo="De la colaboración entre entidades")
        .col-md-1.col-4.mb-4.mb-md-0.pt-2
          figure
            img(src='@/assets/curso/tema1-ico3.svg', alt='De la colaboración entre entidades')
        .col-md-11
          p Ttodos los organismos del Sistema Nacional de Transporte deben trabajar con criterios de coordinación, planeación, descentralización y participación.
      .row.align-items-center.justify-content-center(numero="+" titulo="De la participación ciudadana")
        .col-md-1.col-4.mb-4.mb-md-0.pt-2
          figure
            img(src='@/assets/curso/tema1-ico4.svg', alt='De la participación ciudadana')
        .col-md-11
          p Todas las personas y organizaciones pueden formular solicitudes, quejas y sugerencias.
      .row.align-items-center.justify-content-center(numero="+" titulo="De las rutas para el servicio público de transporte de pasajeros")
        .col-md-1.col-4.mb-4.mb-md-0.pt-2
          figure
            img(src='@/assets/curso/tema1-ico5.svg', alt='De las rutas para el servicio público de transporte de pasajeros')
        .col-md-11
          p Basados en estudios de oferta y demanda, el Estado otorgará permisos o contratos de concesión para servir rutas origen-destino para cada modo de transporte.
      .row.align-items-center.justify-content-center(numero="+" titulo="De la libertad de empresa")
        .col-md-1.col-4.mb-4.mb-md-0.pt-2
          figure
            img(src='@/assets/curso/tema1-ico6.svg', alt='De la libertad de empresa')
        .col-md-11
          p Para prestar el servicio, los interesados deben estar habilitados por el Estado, que garanticen el cumplimiento de acreditación de condiciones técnicas, operativas, financieras, de seguridad y procedencia del capital aportado.
      .row.align-items-center.justify-content-center(numero="+" titulo="De los permisos o contratos de concesión")
        .col-md-1.col-4.mb-4.mb-md-0.pt-2
          figure
            img(src='@/assets/curso/tema1-ico7.svg', alt='De los permisos o contratos de concesión')
        .col-md-11
          p Quien cumpla con las exigencias que al respecto se establezcan, tendrá derecho a ese permiso o contrato de concesión para prestar el servicio.
      .row.align-items-center.justify-content-center(numero="+" titulo="Del transporte intermodal")
        .col-md-1.col-4.mb-4.mb-md-0.pt-2
          figure
            img(src='@/assets/curso/tema1-ico8.svg', alt='Del transporte intermodal')
        .col-md-11
          p Se promueve el comportamiento intermodal y su adecuada complementación.
      .row.align-items-center.justify-content-center(numero="+" titulo="De los subsidios a determinados usuarios")
        .col-md-1.col-4.mb-4.mb-md-0.pt-2
          figure
            img(src='@/assets/curso/tema1-ico9.svg', alt='De los subsidios a determinados usuarios')
        .col-md-11
          p Las ramas legislativas del Estado podrán establecer subsidios para la población vulnerable.

     

</template>

<script>
export default {
  name: 'Tema2',
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
