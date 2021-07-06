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

    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Para analizar la normatividad a nivel de Colombia, se puede afirmar que en el año 1996 se expide la Ley 336 de 1996, “Por la cual se adopta el Estatuto Nacional de Transporte”, cuyo objeto es el de “… unificar los principios y los criterios que servirán de fundamento para la regulación y reglamentación del transporte público aéreo, marítimo, fluvial, férreo, masivo y terrestre y su operación en el territorio nacional”. En esta Ley se reafirma que el transporte es una industria, tal como se había enunciado desde la Ley 105 de 1993, al invocar que: “En todo caso, el Estado regulará y vigilará la industria del transporte en los términos previstos en los artículos 333 y 334 de la Constitución Política”. Igualmente, se hace distinción entre transporte privado que satisface necesidades de movilización personal y transporte público que goza de especial protección del estado considerando que éste tiene prelación del interés general sobre el particular.
        .bloque-texto-b.color-morado2
          .bloque-texto-b__texto
            p.mb-0 Una vez se expide esta Ley, el ejecutivo debe reglamentarla y en el año 1998 se expiden los Decretos 1553, 1554, 1556, 1557 y 1558 con los que se reglamentaban los servicios de transporte por cada modo, pero solo tuvieron vigencia de tres años, al cabo de los cuales, en 2001, se expiden nuevas reglamentaciones para cada modo de transporte siendo los Decretos 170, 171, 172, 173, 174, 175 y 176 los que regulan cada modo de transporte. 
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4-imagen1.svg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Como quiera que aún no se hallaban integrados los otros modos de transporte, en el año 2015 se expidió el Decreto 1079 que es el Decreto Único Reglamentario del Sector Transporte, en donde se incluye la reglamentación de todos los modos de transporte público, estructurado en transporte terrestre automotor; de la aviación civil – modo aéreo; transporte marítimo y fluvial; transporte férreo; transporte por cable; transporte masivo; consideraciones para la accesibilidad al transporte y Zonas Especiales de Transporte (ZET), como se puede observar en la siguiente figura.

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-lg-10
        .tarjeta.color-primario.py-3.px-lg-5.px-4
          .row.justify-content-center.align-items-center
            .col-lg-1
            .col-3.col-sm-2.col-lg-2.px-lg-4
              img.px-lg-2(src="@/assets/curso/diagrama-de-flujo.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.texto-blanco
                  h3.mb-1 Figura 1
                  p.mb-0.text-small Estructura del Decreto 1079 del Sector Transporte en Colombia. 
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-negro(:href="obtenerLink('/downloads/Decreto_1071.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download   


    p.mb-5(data-aos="fade") Como complemento y aclaración de la normatividad existente para el transporte de carga en el territorio colombiano, se relacionan las reglamentaciones que son básicas para su mejor comprensión.

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 
            strong Tabla 1. 
            | Reglamentaciones transporte de carga
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--morada" data-aos="fade-down")      
          .row.justify-content-center(titulo="MARCO NORMATIVO GENERAL")
            .col-md-11.col-12.mb-md-0
              .tabla-b.color-primario
                table
                  thead.tabla-b__header
                    tr
                      td.p-2
                        h5.mb-0 Normatividad
                      td.p-2
                        h5.mb-0 Descripción 
                  tbody  
                    tr
                      td Constitución Nacional, artículos 56, 58, 333, 334, 336 y 365.
                      td Derechos y deberes, actividad económica.
                    tr
                      td Código de comercio, artículos 981 a 1035.
                      td Contratos de transporte.
                    tr
                      td Ley 105 de 1993.
                      td Disposiciones básicas del sector transporte.
                    tr
                      td Ley 336 de 1996.
                      td Disposiciones Generales para los Modos de Transporte – Estatuto Nacional del Transporte. 
                    tr
                      td Ley 769 de 2002.
                      td Código Nacional de Tránsito.
                    tr
                      td Ley 1383 de 2010.
                      td Reforma al CNT – Licencias de conducción y revisión tecnicomecánica.
                    tr
                      td Decreto 1079 de 2015.
                      td Decreto Único Reglamentario del Sector Transporte - terrestre - aéreo - marítimo y fluvial - férreo - por cable - masivo - accesibilidad - Zonas Especiales de Transporte.       
          div(titulo="ESTRUCTURA EMPRESARIAL")
            .row.justify-content-center
              .col-md-11.col-12.mb-md-0
                .tabla-b.color-primario
                  table
                    thead.tabla-b__header
                      tr
                        td.p-2
                          h5.mb-0 Normatividad
                        td.p-2
                          h5.mb-0 Descripción 
                    tbody  
                      tr
                        td Decreto 2044 de 1988.
                        td Transporte de productos especiales.
                      tr
                        td Decreto 173 de 2001.
                        td Reglamenta el servicio público de transporte terrestre automotor de carga - condiciones de habilitación y de prestación del servicio.
                      tr
                        td Resolución 2465 de 2002.
                        td Obligaciones especiales de cooperativas ante Supertransporte.
                      tr
                        td Decreto 2868 de 2006.
                        td Capital empresas cooperativas.
                      tr
                        td Decreto 1499 de 2009.
                        td Respecto a manifiesto de carga en área urbana.
                      tr
                        td Resolución 1552 de 2009.
                        td Registro Único Nacional de Tránsito (RUNT).
          div(titulo="CONDICIONES DE EQUIPOS – CHATARRIZACIÓN")
            .row.justify-content-center
              .col-md-11.col-12.mb-md-0
                .tabla-b.color-primario
                  table
                    thead.tabla-b__header
                      tr
                        td.p-2
                          h5.mb-0 Normatividad
                        td.p-2
                          h5.mb-0 Descripción 
                    tbody  
                      tr
                        td Decreto 2085 de 2008.
                        td Establece condiciones para registro inicial de vehículos vía chatarrización o vía póliza.
                      tr
                        td Resolución 3253 de 2006.
                        td Reglamenta condiciones para chatarrización.
                      tr
                        td Resolución 4160 de 2006.
                        td Requisitos para iniciar proceso de postulación para reconocimiento económico por chatarrización.
                      tr
                        td Resoluciones 0497, 618, 1056, 1886, 2614, 3088 y 4776 de 2009.
                        td Postulación y pago por chatarrización.           
          div(titulo="PESOS Y DIMENSIONES")
            .row.justify-content-center
              .col-md-11.col-12.mb-md-0
                .tabla-b.color-primario
                  table
                    thead.tabla-b__header
                      tr
                        td.p-2
                          h5.mb-0 Normatividad
                        td.p-2
                          h5.mb-0 Descripción 
                    tbody  
                      tr
                        td Resolución 4100 de 2004, Resolución 2888 de 2005.
                        td Límites de pesos y dimensiones en los vehículos de transporte terrestre automotor.
                      tr
                        td Resolución 3752 de 2015. 
                        td Medidas y requisitos para los sistemas de seguridad activa y pasiva para uso en vehículos automotores, remolques y semirremolques.
                      tr
                        td Resolución 1572 de 2019.
                        td Reglamento para la instalación y uso de cintas reflectivas en vehículos.
                      tr
                        td Resolución 4959 de 2006.
                        td Permisos carga extradimensionada.
                      tr
                        td Resolución 5081 de 2006.
                        td Reglamenta permisos carga extradimensionada.
                      tr
                        td Resolución 5280 de 2006.
                        td Reglamenta permisos carga extradimensionada.
                      tr
                        td Resolución 4193 de 2007.
                        td Reglamenta permisos carga extradimensionada.
                      tr
                        td Resolución 1782 de 2009.
                        td Modifica la Resolución 4100 de 2004 (peso en vehículos tipo 2).
                      tr
                        td Resolución 5967 de 2009.
                        td Reglamenta equipos especiales.         
          div(titulo="REPOTENCIACIÓN")
            .row.justify-content-center
              .col-md-11.col-12.mb-md-0
                .tabla-b.color-primario
                  table
                    thead.tabla-b__header
                      tr
                        td.p-2
                          h5.mb-0 Normatividad
                        td.p-2
                          h5.mb-0 Descripción 
                    tbody  
                      tr
                        td Resolución 2502 de 2002.
                        td Requisitos para el reconocimiento de la transformación o repotenciación de los vehículos destinados al Servicio Público de Transporte Terrestre Automotor de Carga.
          div(titulo="ESPECIFICACIÓN EN MANEJO DE CONTENEDORES")
            .row.justify-content-center
              .col-md-11.col-12.mb-md-0
                .tabla-b.color-primario
                  table
                    thead.tabla-b__header
                      tr
                        td.p-2
                          h5.mb-0 Normatividad
                        td.p-2
                          h5.mb-0 Descripción 
                    tbody  
                      tr
                        td Resolución 9606 de 2003.
                        td Requisitos técnicos de seguridad para los dispositivos especiales de sujeción de contenedores.
          div(titulo="SEGURIDAD DE EQUIPOS")
            .row.justify-content-center
              .col-md-11.col-12.mb-md-0
                .tabla-b.color-primario
                  table
                    thead.tabla-b__header
                      tr
                        td.p-2
                          h5.mb-0 Normatividad
                        td.p-2
                          h5.mb-0 Descripción 
                    tbody  
                      tr
                        td Resolución 2394 de 2009.
                        td Disposiciones sobre seguridad de equipos de transporte.
          div(titulo="TRANSPORTE DE ALIMENTOS")
            .row.justify-content-center
              .col-md-11.col-12.mb-md-0
                .tabla-b.color-primario
                  table
                    thead.tabla-b__header
                      tr
                        td.p-2
                          h5.mb-0 Normatividad
                        td.p-2
                          h5.mb-0 Descripción 
                    tbody  
                      tr
                        td Decreto 3075 de 2007.
                        td Definiciones referentes al transporte de alimentos.   
                      tr
                        td Resolución 2505 de 2004.
                        td Condiciones que deben cumplir los vehículos para transportar carne, pescado o alimentos fácilmente corruptibles. 
          div(titulo="DOCUMENTOS EN TRANSPORTE DE CARGA")
            .row.justify-content-center
              .col-md-11.col-12.mb-md-0
                .tabla-b.color-primario
                  table
                    thead.tabla-b__header
                      tr
                        td.p-2
                          h5.mb-0 Normatividad
                        td.p-2
                          h5.mb-0 Descripción 
                    tbody  
                      tr
                        td Resolución 4496 de 2011. Modificada por resolución 1272 de 2012.
                        td Manifiesto de carga electrónico.   
          div(titulo="RELACIONES ECONÓMICAS")
            .row.justify-content-center
              .col-md-11.col-12.mb-md-0
                .tabla-b.color-primario
                  table
                    thead.tabla-b__header
                      tr
                        td.p-2
                          h5.mb-0 Normatividad
                        td.p-2
                          h5.mb-0 Descripción 
                    tbody  
                      tr
                        td Ley 1231 de 2006.
                        td Reglamenta régimen de facturas en Colombia.   
                      tr
                        td Decreto 2092 de 2011.
                        td Regulación relaciones económicas. 
                      tr
                        td Resolución 2113 de 1997. Modificada por Resolución 870 de 1998.
                        td Condiciones de cargue y descargue.             
          div(titulo="TRÁNSITO ADUANERO")
            .row.justify-content-center
              .col-md-11.col-12.mb-md-0
                .tabla-b.color-primario
                  table
                    thead.tabla-b__header
                      tr
                        td.p-2
                          h5.mb-0 Normatividad
                        td.p-2
                          h5.mb-0 Descripción 
                    tbody  
                      tr
                        td Decreto 2685 de 1999.
                        td Estatuto Aduanero.
                      tr
                        td Decreto 390 de 2016.
                        td Modifica Estatuto Aduanero.
          div(titulo="TRANSPORTE MULTIMODAL")
            .row.justify-content-center
              .col-md-11.col-12.mb-md-0
                .tabla-b.color-primario
                  table
                    thead.tabla-b__header
                      tr
                        td.p-2
                          h5.mb-0 Normatividad
                        td.p-2
                          h5.mb-0 Descripción 
                    tbody  
                      tr
                        td Código de Comercio, artículo 987.
                        td Transporte multimodal.
                      tr
                        td Decreto 2295 de 1996.
                        td Reglamento transporte multimodal. 
          div(titulo="TRANSPORTE INTERNACIONAL")
            .row.justify-content-center
              .col-md-11.col-12.mb-md-0
                .tabla-b.color-primario
                  table
                    thead.tabla-b__header
                      tr
                        td.p-2
                          h5.mb-0 Normatividad
                        td.p-2
                          h5.mb-0 Descripción 
                    tbody  
                      tr
                        td Decisión 837 de 2019 – Comunidad Andina de Naciones – CAN.
                        td Actualización del reglamento transporte internacional de mercancías por carretera.
                      tr
                        td Decisión 399 de 1997 – Comisión del Acuerdo de Cartagena. Reglamentada por Resolución 300.
                        td Reglamento transporte internacional de mercancías por carretera.                        
                      tr
                        td Decisión 398 de 1997 – Comisión del Acuerdo de Cartagena. 
                        td Reglamento transporte internacional de pasajeros por carretera.
                      tr
                        td Decisión 467 – CAC.
                        td Régimen de sanciones en transporte internacional.
                      tr
                        td Decisión 331. Modificada por Decisión 393.
                        td Transporte multimodal.
                      tr
                        td Decisión 327 – CAC.
                        td Tránsito aduanero internacional.
                      tr
                        td Decisión 617 – CAC.
                        td Tránsito aduanero internacional.
                      tr
                        td Decisión 491 – CAC.
                        td Pesos y dimensiones.
                      tr
                        td Decisión 467 – CAC.
                        td Régimen de sanciones en transporte internacional de mercancías.
                      tr
                        td Decisión 290 – CAC.
                        td Seguro de responsabilidad civil para el transporte internacional.
                      tr
                        td Resolución 272.
                        td Certificado de idoneidad.
          div(titulo="TRANSPORTE DE MERCANCÍAS PELIGROSAS")
            .row.justify-content-center
              .col-md-11.col-12.mb-md-0
                .tabla-b.color-primario
                  table
                    thead.tabla-b__header
                      tr
                        td.p-2
                          h5.mb-0 Normatividad
                        td.p-2
                          h5.mb-0 Descripción 
                    tbody  
                      tr
                        td Decreto 1609 de 2002.
                        td Transporte terrestre de mercancías peligrosas.
                      tr
                        td Resolución 1223 de 2014.
                        td Requisitos del curso básico obligatorio de capacitación para los conductores de vehículos de carga que transportan mercancías peligrosas y se dicta una disposición. 
                      tr
                        td Resolución 2328 de 2016.
                        td Duración del curso y actualizaciones.
                      tr
                        td Norma Técnica Colombiana – NTC1692-2012.
                        td Transporte de mercancías peligrosas. Definiciones, clasificación, marcado, etiquetado y rotulado.
                      tr
                        td Organización de Naciones Unidas – 2011.
                        td Reglamento tipo de las Naciones Unidas para el transporte de mercancías peligrosas (libro naranja).
          div(titulo="NORMAS DE TRÁNSITO – MARCO NORMATIVO GENERAL")
            .row.justify-content-center
              .col-md-11.col-12.mb-md-0
                .tabla-b.color-primario
                  table
                    thead.tabla-b__header
                      tr
                        td.p-2
                          h5.mb-0 Normatividad
                        td.p-2
                          h5.mb-0 Descripción 
                    tbody  
                      tr
                        td Acuerdo 051 de 1993.
                        td Equipo de carretera.
                      tr
                        td Decreto 4116 de 2004.
                        td Condiciones para cambio de servicio.                       
                      tr
                        td Resolución 0319 de 2008.
                        td Cambio de servicio (volquetas).
                      tr
                        td Resolución 1050 de 2004.
                        td Señalización vial.
                      tr
                        td Resolución 1384 de 2010.
                        td Establece límites de velocidad.
                      tr
                        td Resolución 3027 de 2010.
                        td Por la cual se actualiza la codificación de las infracciones de tránsito, de conformidad con lo establecido en la Ley 1383 de 2010, se adopta el Manual de Infracciones y se dictan otras disposiciones.
                      tr
                        td Ley 1503 de 2011.
                        td Se promueve la formación de hábitos, comportamientos y conductas seguras en la vía.
                      tr
                        td Ley 1702 de 2013.
                        td Creación de Agencia Nacional de Seguridad Vial.
                      tr
                        td Resolución 2851 de 2013.
                        td Reglamenta los planes estratégicos de seguridad vial.
                      tr
                        td Resolución 1885 de 2015.
                        td Manual de señalización vial.
                      tr
                        td Decreto Ley 2106 de 2019.
                        td Normas para simplificar, suprimir y reformar trámites, procesos y procedimientos innecesarios existentes en la administración pública.
                      tr
                        td Ley 2050 de 2020.
                        td Por medio de la cual se modifica y adiciona la Ley 1503 de 2011 y se dictan otras disposiciones en seguridad vial y tránsito.

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
