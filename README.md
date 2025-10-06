# 🎬 Demo Cercador de Pel·lícules

Aquest projecte és una demostració pràctica de diferents tipus de comunicació entre components en Vue 3, utilitzant l'API de pel·lícules OMDB com a font de dades.

## 📝 Descripció del Projecte

Aquesta aplicació serveix com a exemple de:
- Comunicació pare-fill mitjançant props i emits
- Gestió d'estat global amb Pinia
- Implementació de components reutilitzables
- Integració amb una API externa

## 🔄 Patrons de Comunicació Implementats

### 1. Comunicació Pare-Fill
- **Props**: El component pare (`cercador.vue`) passa informació de la pel·lícula al component fill (`fichaPelicula.vue`) mitjançant la prop `infoPeli`
- **Emits**: El component fill emet l'esdeveniment `mesInfo` quan l'usuari clica el botó "Més Informació", que el pare captura per mostrar els detalls

### 2. Gestió d'Estat Global amb Pinia
- S'utilitza un magatzem Pinia (`movieInfo.js`) per compartir informació entre components
- Quan es selecciona una pel·lícula, els seus detalls s'emmagatzemen al store i són accessibles des de qualsevol component

## 🛠️ Tecnologies Utilitzades

- **Vue 3**: Framework base del projecte
- **Vuetify 3**: Components d'interfície d'usuari
- **Pinia**: Gestió d'estat global
- **Vite**: Eina de desenvolupament

## 🚀 Com Començar

1. Clona el repositori
2. Instal·la les dependències:
```bash
npm install
```

3. Executa el servidor de desenvolupament:
```bash
npm run dev
```

## 📁 Estructura del Projecte

```
src/
├── components/
│   └── fichaPelicula.vue    # Component fill que mostra la targeta de pel·lícula
├── pages/
│   └── cercador.vue         # Component pare que gestiona la cerca
└── stores/
    └── movieInfo.js         # Store de Pinia per gestionar l'estat global
```

## 🔍 Flux de l'Aplicació

1. L'usuari introdueix un terme de cerca al component principal
2. Es mostren els resultats com a targetes individuals (components `fichaPelicula.vue`)
3. En clicar "Més Informació":
   - El component fill emet l'esdeveniment
   - El pare rep l'ID i carrega els detalls
   - La informació s'emmagatzema al store de Pinia
   - Es mostra un diàleg amb la informació detallada

## 📚 Exemples de Comunicació

### Props (Pare → Fill)
```vue
<!-- Al component pare (cercador.vue) -->
<fichaPelicula :infoPeli="actual"></fichaPelicula>

<!-- Al component fill (fichaPelicula.vue) -->
defineProps(['infoPeli'])
```

### Emits (Fill → Pare)
```vue
<!-- Al component fill (fichaPelicula.vue) -->
<v-btn @click="$emit('mesInfo', infoPeli.imdbID)">

<!-- Al component pare (cercador.vue) -->
<fichaPelicula @mesInfo="(id) => demanarMesInfo(id)">
```

### Store Pinia
```javascript
// Definició del store
export const useMovieinfoStore = defineStore('infoStore', () => {
  const info = ref({})
  return { info }
})

// Ús al component
const movieinfoStore = useMovieinfoStore()
movieinfoStore.info = data
```

## 📄 Llicència

[MIT](http://opensource.org/licenses/MIT)
