<script setup>
import { ref } from 'vue'
defineProps(['infoPeli'])


</script>

<template>
            <v-card class="mx-auto" max-width="344" >
              <v-img :src="infoPeli.Poster"  ></v-img>
              <v-card-title> {{infoPeli.Title}} </v-card-title>
              <v-card-subtitle> {{infoPeli.Year}} </v-card-subtitle>
              <v-card-actions>
                <v-btn @click="$emit('mesInfo', infoPeli.imdbID)" color="orange-lighten-2" text="Més Informació" ></v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
</template>

<style>

</style>
