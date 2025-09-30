<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="searchTerm"
            label="Buscar películas"
            @keyup.enter="searchMovies"
          ></v-text-field>
          <v-btn color="primary" @click="searchMovies">Buscar</v-btn>
        </v-col>
      </v-row>

      <v-row v-if="movies.length > 0">
        <v-col v-for="movie in movies" :key="movie.imdbID" cols="12" md="4">
          <v-card>
            <v-img
              cover
              height="300"
              :src="movie.Poster"
            ></v-img>
            <v-card-title>{{ movie.Title }}</v-card-title>
            <v-card-subtitle>{{ movie.Year }}</v-card-subtitle>
            <v-card-actions>
              <v-btn @click="showMovieDetails(movie.imdbID)">Ver detalles</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-dialog v-model="showDialog" max-width="500">
        <v-card v-if="selectedMovie">
          <v-card-title>{{ selectedMovie.Title }}</v-card-title>
          <v-card-text>
            <p><strong>Director:</strong> {{ selectedMovie.Director }}</p>
            <p><strong>Actores:</strong> {{ selectedMovie.Actors }}</p>
            <p><strong>Trama:</strong> {{ selectedMovie.Plot }}</p>
            <p><strong>Calificación:</strong> {{ selectedMovie.imdbRating }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="showDialog = false">Cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { getMovieDetails, searchMovies as searchMoviesApi } from '../services/communicationManager'

  const searchTerm = ref('')
  const movies = ref([])
  const showDialog = ref(false)
  const selectedMovie = ref(null)

  async function searchMovies () {
    if (!searchTerm.value) return
    try {
      const response = await searchMoviesApi(searchTerm.value)
      if (response.Search) {
        movies.value = response.Search
      }
    } catch (error) {
      console.error('Error al buscar películas:', error)
    }
  }

  async function showMovieDetails (movieId) {
    try {
      const details = await getMovieDetails(movieId)
      selectedMovie.value = details
      showDialog.value = true
    } catch (error) {
      console.error('Error al obtener detalles de la película:', error)
    }
  }
</script>
