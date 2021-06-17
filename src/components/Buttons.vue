<template lang="pug">
  .row
    .col-auto
      .row.mb-3
        .col-auto
          .boton.boton-tabsbuttons(:class="colorButtons + (select === 0 ? ' selected' : '')", @click="changePosition(0)") Paso 1
        .col-auto
          .boton.boton-tabsbuttons(:class="colorButtons + (select === 1 ? ' selected' : '')", @click="changePosition(1)") Paso 2
        .col-auto
          .boton.boton-tabsbuttons(:class="colorButtons + (select === 2 ? ' selected' : '')", @click="changePosition(2)") Paso 3
      .row.mb-3
        .col-auto
          .boton.boton-tabsbuttons(:class="colorButtons + (select === 3 ? ' selected' : '')", @click="changePosition(3)") Paso 4
        .col-auto
          .boton.boton-tabsbuttons(:class="colorButtons + (select === 4 ? ' selected' : '')", @click="changePosition(4)") Paso 5
        .col-auto
          .boton.boton-tabsbuttons(:class="colorButtons + (select === 5 ? ' selected' : '')", @click="changePosition(5)") Paso 6
      .row
        .col-auto
          .boton.boton-tabsbuttons(:class="colorButtons + (select === 6 ? ' selected' : '')", @click="changePosition(6)") Paso 7
        .col-auto
          .boton.boton-tabsbuttons(:class="colorButtons + (select === 7 ? ' selected' : '')", @click="changePosition(7)") Paso 8
        .col-auto
          .boton.boton-tabsbuttons(:class="colorButtons + (select === 8 ? ' selected' : '')", @click="changePosition(8)") Paso 9
    .col
      .py-3.px-3(:style="{ backgroundColor: colorTarjeta }")
        .row.align-items-center
          .col-4.d-flex
            img(:src="items[select].imagen")
          .col-8.d-flex
            p.mb-0(v-html="items[select].text")
      figcaption(v-if="items[select].nota") {{ items[select].nota }}

</template>

<script>
export default {
  name: 'Buttons',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    colorButtons: {
      type: String,
      default: 'boton-color-acento-botones',
    },
    colorTarjeta: {
      type: String,
      default: '#F0DBC5',
    },
  },
  data: () => ({
    // variables de vue
    select: 0,
  }),
  methods: {
    changePosition(position) {
      this.select = position
    },
  },
}
</script>

<style lang="sass" scoped></style>
