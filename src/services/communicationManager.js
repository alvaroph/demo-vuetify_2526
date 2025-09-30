const API_KEY = '19f8a30e' // Reemplazar con tu API key de OMDB
const BASE_URL = 'http://www.omdbapi.com/'

export async function searchMovies (searchTerm) {
  try {
    const response = await fetch(`${BASE_URL}?s=${searchTerm}&apikey=${API_KEY}`)
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.error('Error buscando películas:', error)
    throw error
  }
}

export async function getMovieDetails (movieId) {
  try {
    const response = await fetch(`${BASE_URL}?i=${movieId}&apikey=${API_KEY}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error obteniendo detalles de la película:', error)
    throw error
  }
}
