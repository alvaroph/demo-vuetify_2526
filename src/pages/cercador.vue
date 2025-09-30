<template>
  <v-dialog v-model="dialog"  width="auto">
      <v-card max-width="800" text="Informació detallada"  >

        <v-row>
        <!-- Poster -->
        <v-col cols="12" md="4">
          <v-img
            :src="infoDetallada.Poster"
            :alt="infoDetallada.Title"
            height="100%"
            cover
          ></v-img>
        </v-col>

        <!-- Info detallada -->
        <v-col cols="12" md="8">
          <v-card-title class="text-h5">{{ infoDetallada.Title }}</v-card-title>
          <v-card-subtitle>
            {{ infoDetallada.Year }} · {{ infoDetallada.Runtime }} · {{ infoDetallada.Rated }}
          </v-card-subtitle>

          <v-card-text>
            <!-- Géneros como chips -->
            <div class="mb-2">
              <v-chip
                v-for="genre in infoDetallada.Genre.split(',')"
                :key="genre"
                class="ma-1"
                color="primary"
                variant="tonal"
              >
                {{ genre.trim() }}
              </v-chip>
            </div>

            <!-- Plot -->
            <p>{{ infoDetallada.Plot }}</p>

            <!-- Lista con detalles -->
            <v-list density="compact">
              <v-list-item>
                <v-list-item-title><strong>Director:</strong> {{ infoDetallada.Director }}</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title><strong>Writer:</strong> {{ infoDetallada.Writer }}</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title><strong>Actors:</strong> {{ infoDetallada.Actors }}</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title><strong>Language:</strong> {{ infoDetallada.Language }}</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title><strong>Country:</strong> {{ infoDetallada.Country }}</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title><strong>Awards:</strong> {{ infoDetallada.Awards }}</v-list-item-title>
              </v-list-item>
            </v-list>

           <!-- Ratings -->
            <div class="mt-4">
              <h4 class="text-subtitle-1 mb-2">Ratings</h4>

              <!-- IMDB con estrellas -->
              <div class="mb-3">
                <strong>IMDB:</strong>
                <v-rating
                  :model-value="parseFloat(infoDetallada.imdbRating) / 2"
                  half-increments
                  color="amber"
                  readonly
                  density="compact"
                />
                <span class="ml-2">({{ infoDetallada.imdbRating }}/10)</span>
              </div>

              <!-- Rotten Tomatoes con barra -->
              <div class="mb-3">
                <strong>Rotten Tomatoes:</strong>
                <v-progress-linear
                  :model-value="parseInt(infoDetallada.Ratings.find(r => r.Source === 'Rotten Tomatoes')?.Value)"
                  color="red"
                  height="20"
                  rounded
                  striped
                >
                  <strong>{{ infoDetallada.Ratings.find(r => r.Source === 'Rotten Tomatoes')?.Value }}</strong>
                </v-progress-linear>
              </div>

              <!-- Metacritic con barra -->
              <div class="mb-3">
                <strong>Metacritic:</strong>
                <v-progress-linear
                  :model-value="parseInt(infoDetallada.Ratings.find(r => r.Source === 'Metacritic')?.Value)"
                  color="blue"
                  height="20"
                  rounded
                >
                  <strong>{{ infoDetallada.Ratings.find(r => r.Source === 'Metacritic')?.Value }}</strong>
                </v-progress-linear>
              </div>
            </div>
          </v-card-text>
        </v-col>
      </v-row>

        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Ok"
            @click="dialog = false"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
          <v-text-field v-model="textCerca" />
          <v-btn @click="enviarPeticio">Cercar </v-btn>
        <v-row>
          <v-col cols="4" v-for="actual in pelicules" :key="actual.imdbID">
              <v-card class="mx-auto" max-width="344" >
              <v-img :src="actual.Poster"  ></v-img>
              <v-card-title> {{actual.Title}} </v-card-title>

              <v-card-subtitle> {{actual.Year}} </v-card-subtitle>

              <v-card-actions>
                <v-btn @click="demanarMesInfo(actual.imdbID)" color="orange-lighten-2" text="Més Informació" ></v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>

          </v-row>
</template>
<script setup>
  import { ref, reactive } from 'vue'
  const dialog = ref(false)
  const textCerca = ref('')
  const pelicules = ref([])
  const infoDetallada = ref({})
  const API_KEY = '19f8a30e' // Reemplazar con tu API key de OMDB
  const BASE_URL = 'http://www.omdbapi.com/'

  async function enviarPeticio() {
    const response = await fetch(`${BASE_URL}?s=${textCerca.value}&apikey=${API_KEY}`)
    const data = await response.json()
    pelicules.value = data.Search
  }
  async function demanarMesInfo(id) {
    const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`)
    const data = await response.json()
    console.log(data)
    infoDetallada.value = data
    dialog.value=true
  }
</script>

<style>

</style>
