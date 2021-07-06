<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Estatuto Nacional del Transporte y regulación por modos y medios de transporte

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema4.png", alt="Estatuto Nacional del Transporte y regulación por modos y medios de transporte")  


    Separador





</template>

<script>
export default {
  name: 'Tema4',
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
