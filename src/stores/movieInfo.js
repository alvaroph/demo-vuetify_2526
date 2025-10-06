//Importamos las funciones necesarias defineStore de pinia y ref de vue
import { defineStore } from "pinia"
import { ref } from "vue"

//definimos un almacen de datos
export const useMovieinfoStore = defineStore('infoStore', () => {
  const info = ref({})
  return { info }
})
