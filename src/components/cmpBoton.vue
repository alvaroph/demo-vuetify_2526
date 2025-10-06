<script setup>
import { ref } from 'vue'

const count = ref(0)
defineProps(['colorBoton'])
</script>

<template>
  <v-btn :color="colorBoton" @click="count++">You clicked me {{ count }} times.</v-btn>
</template>
