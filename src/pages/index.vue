<template>

<v-btn to="/cercador" text="Cercador Pelis"></v-btn>

<hr>
  <h2>Dades de la pel·licula de la que hem demanat més informació: </h2>
  <p>{{ info }}</p>
</template>

<script setup>
  import { useMovieinfoStore } from '@/stores/movieInfo.js'
  const movieinfoStore = useMovieinfoStore()
  const info = movieinfoStore.info;

</script>
