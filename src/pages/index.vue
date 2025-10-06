<template>

<v-btn to="/demo" text="Demo Components"></v-btn>
<v-btn to="/cercador" text="Cercador Pelis"></v-btn>
<v-btn to="/tutorialvue" text="Demo de vue"></v-btn>
  <cmp-boton colorBoton="green"></cmp-boton>
  <cmp-boton colorBoton="blue"></cmp-boton>
  <cmp-boton colorBoton="red"></cmp-boton>

  <hr>
  <h2>Datos de la pelicula que hemos pedido mas información  </h2>
  <p>{{ info }}</p>
</template>

<script setup>
  import cmpBoton from './../components/cmpBoton.vue'
  import { useMovieinfoStore } from '@/stores/movieInfo.js'
  const movieinfoStore = useMovieinfoStore()
  const info = movieinfoStore.info;

</script>
