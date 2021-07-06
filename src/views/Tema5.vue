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




</template>

<script>
export default {
  name: 'Tema5',
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
