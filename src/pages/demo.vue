<script setup>
import { ref } from 'vue'
import cmpBoton from './../components/cmpBoton.vue'
const greeting = ref('Hello World!')
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
  <cmp-boton></cmp-boton>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
