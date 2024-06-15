<!-- <script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const kategoriak = ref([]);
const valasztottKategoriaId = ref('');
const kivalasztottTema = ref({});
const kiválasztottKeszletek = ref([]);
const sets = ref([]);
const pagination = ref({ next_page_url: null });
const currentPage = ref(1);

// Kategóriák lekérése (themes)
const fetchCategories = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/themes');
    console.log('Fetched categories:', response.data.data);
    kategoriak.value = response.data.data || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

// Készletek lekérése paginációval
const fetchSets = async (page = 1) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/sets?page=${page}`);
    console.log('Fetched sets:', response.data.data);
    sets.value = response.data.data || [];
    pagination.value = response.data.meta || { next_page_url: null };
  } catch (error) {
    console.error('Error fetching sets:', error);
  }
};

// További készletek betöltése
const loadMoreSets = async () => {
  if (pagination.value.next_page_url) {
    currentPage.value++;
    try {
      const response = await axios.get(pagination.value.next_page_url);
      console.log('Loaded more sets:', response.data.data);
      sets.value.push(...(response.data.data || []));
      pagination.value = response.data.meta || { next_page_url: null };
    } catch (error) {
      console.error('Error loading more sets:', error);
    }
  }
};

// Kategóriák és készletek lekérése a komponens mountolásakor
onMounted(() => {
  fetchCategories();
  fetchSets();
});

// Kategória kiválasztás kezelése
const valaszt = () => {
  console.log('Selected category ID:', valasztottKategoriaId.value);
  kivalasztottTema.value = kategoriak.value.find(kategoria => kategoria.id === valasztottKategoriaId.value) || {};
  console.log('Selected theme:', kivalasztottTema.value);

  // Frissíti a kiválasztott készleteket a sets-ből
  kiválasztottKeszletek.value = sets.value.filter(keszlet => keszlet.themeId === valasztottKategoriaId.value) || [];
  console.log('Filtered sets:', kiválasztottKeszletek.value);
};
</script>

<template>
  <div class="text-center mx-auto fs-4 bg-primary w-100 py-2 fst-italic">
    <select class="nabla bg-success p-2 text-dark bg-opacity-75 border-warning border border-3 rounded-2" v-model="valasztottKategoriaId" @change="valaszt">
      <option disabled value="">Kérem válasszon a témák közül!</option>
      <option v-for="kategoria in kategoriak" :key="kategoria.id" :value="kategoria.id">
        🗂️{{ kategoria.id }} 𓏠 {{ kategoria.name }} 👷
      </option>
    </select>
  </div>

  <div id="image" class="container text-center mx-auto" v-if="kivalasztottTema && kivalasztottTema.IMAGEURL">
    <img :src="kivalasztottTema.IMAGEURL" class="img-fluid" alt="Kép">
  </div>

  <div class="container text-center">
    <div class="row">
      <div v-for="keszlet in kiválasztottKeszletek" :key="keszlet.id" class="col">
        <div class="list" style="width: 18rem;">
          <div class="card-body p-4">
            <h5 class="honk card-title bold fs-2 fst-italic shadow-lg border-success border border-3 rounded-2 bg-dark bg-opacity-10">Szettnév: {{ keszlet.setName }}</h5>
            <p class="card-text">Altéma: {{ keszlet.subtheme }}</p>
            <p class="card-text">Év: {{ keszlet.year }}</p>
            <p class="card-text">Téma azonosító: {{ keszlet.themeId }}</p>
            <p class="card-text">Szett száma: {{ keszlet.number }}</p>
            <p class="card-text">Legofigurák száma: {{ keszlet.minifigs }}</p>
            <p class="card-text">Lego darabszám: {{ keszlet.pieces }}</p>
            <p class="card-text"><strong>Azonosító:</strong> {{ keszlet.id }}</p>
          </div>
        </div>
      </div>
    </div>

    <button v-if="pagination.next_page_url" @click="loadMoreSets">Load More</button>
    <p v-else>No more pages</p>
  </div>
</template> -->



<!-- <script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';

const kategoriak = ref([]);
const valasztottKategoriaId = ref('');
const kivalasztottTema = ref({});
const kiválasztottKeszletek = ref([]);
const sets = ref([]);
const pagination = ref({ next_page_url: null });
const currentPage = ref(1);

// Kategóriák lekérése (themes)
const fetchCategories = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/themes');
    console.log('Fetched categories:', response.data.data);
    kategoriak.value = response.data.data || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

// Készletek lekérése paginációval
const fetchSets = async (page = 1, themeId = null) => {
  try {
    let url = `http://127.0.0.1:8000/api/sets?page=${page}`;
    if (themeId) {
      url = `http://127.0.0.1:8000/api/sets?themeId=${themeId}&page=${page}`;
    }
    const response = await axios.get(url);
    console.log('Fetched sets:', response.data.data);
    if (page === 1) {
      sets.value = response.data.data || [];
    } else {
      sets.value.push(...(response.data.data || []));
    }
    pagination.value = response.data.meta || { next_page_url: null };
  } catch (error) {
    console.error('Error fetching sets:', error);
  }
};

// További készletek betöltése
const loadMoreSets = async () => {
  if (pagination.value.next_page_url) {
    currentPage.value++;
    await fetchSets(currentPage.value, valasztottKategoriaId.value);
  }
};

// Kategóriák és készletek lekérése a komponens mountolásakor
onMounted(() => {
  fetchCategories();
  fetchSets();
});

// Kategória kiválasztás kezelése
const valaszt = () => {
  console.log('Selected category ID:', valasztottKategoriaId.value);
  kivalasztottTema.value = kategoriak.value.find(kategoria => kategoria.id === valasztottKategoriaId.value) || {};
  console.log('Selected theme:', kivalasztottTema.value);
  currentPage.value = 1; // Reset the current page
  fetchSets(currentPage.value, valasztottKategoriaId.value); // Fetch sets for the selected theme
};

// Watcher to update sets when a new category is selected
watch(valasztottKategoriaId, (newId) => {
  if (newId) {
    valaszt();
  }
});
</script>

<template>
  <div class="text-center mx-auto fs-4 bg-primary w-100 py-2 fst-italic">
    <select class="nabla bg-success p-2 text-dark bg-opacity-75 border-warning border border-3 rounded-2" v-model="valasztottKategoriaId" @change="valaszt">
      <option disabled value="">Kérem válasszon a témák közül!</option>
      <option v-for="kategoria in kategoriak" :key="kategoria.id" :value="kategoria.id">
        🗂️{{ kategoria.id }} 𓏠 {{ kategoria.name }} 👷
      </option>
    </select>
  </div>

  <div id="image" class="container text-center mx-auto" v-if="kivalasztottTema && kivalasztottTema.IMAGEURL">
    <img :src="kivalasztottTema.IMAGEURL" class="img-fluid" alt="Kép">
  </div>

  <div class="container text-center">
    <div class="row">
      <div v-for="keszlet in sets" :key="keszlet.id" class="col">
        <div class="list" style="width: 18rem;">
          <div class="card-body p-4">
            <h5 class="honk card-title bold fs-2 fst-italic shadow-lg border-success border border-3 rounded-2 bg-dark bg-opacity-10">Szettnév: {{ keszlet.setName }}</h5>
            <p class="card-text">Altéma: {{ keszlet.subtheme }}</p>
            <p class="card-text">Év: {{ keszlet.year }}</p>
            <p class="card-text">Téma azonosító: {{ keszlet.themeId }}</p>
            <p class="card-text">Szett száma: {{ keszlet.number }}</p>
            <p class="card-text">Legofigurák száma: {{ keszlet.minifigs }}</p>
            <p class="card-text">Lego darabszám: {{ keszlet.pieces }}</p>
            <p class="card-text"><strong>Azonosító:</strong> {{ keszlet.id }}</p>
          </div>
        </div>
      </div>
    </div>

    <button v-if="pagination.value.next_page_url" @click="loadMoreSets" class="btn btn-primary mt-4">Load More</button>
    <p v-else>No more pages</p>
  </div>
</template> -->


<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';

const kategoriak = ref([]);
const valasztottKategoriaId = ref('');
const kivalasztottTema = ref({});
const kiválasztottKeszletek = ref([]);
const sets = ref([]);
const pagination = ref({ next_page_url: null });
const currentPage = ref(1);

// Kategóriák lekérése (themes)
const fetchCategories = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/themes');
    console.log('Fetched categories:', response.data.data);
    kategoriak.value = response.data.data || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

// Készletek lekérése paginációval
const fetchSets = async (page = 1, themeId = null) => {
  try {
    let url = `http://127.0.0.1:8000/api/sets?page=${page}`;
    if (themeId) {
      url = `http://127.0.0.1:8000/api/sets?themeId=${themeId}&page=${page}`;
    }
    const response = await axios.get(url);
    console.log('Fetched sets:', response.data.data);
    if (page === 1) {
      sets.value = response.data.data || [];
    } else {
      sets.value.push(...(response.data.data || []));
    }
    // Ellenőrizzük, hogy van-e pagination adat, és inicializáljuk, ha szükséges
    pagination.value = response.data.meta || { next_page_url: null };
  } catch (error) {
    console.error('Error fetching sets:', error);
  }
};

// További készletek betöltése
const loadMoreSets = async () => {
  if (pagination.value.next_page_url) {
    currentPage.value++;
    await fetchSets(currentPage.value, valasztottKategoriaId.value);
  }
};

// Kategóriák és készletek lekérése a komponens mountolásakor
onMounted(() => {
  fetchCategories();
  fetchSets();
});

// Kategória kiválasztás kezelése
const valaszt = () => {
  console.log('Selected category ID:', valasztottKategoriaId.value);
  kivalasztottTema.value = kategoriak.value.find(kategoria => kategoria.id === valasztottKategoriaId.value) || {};
  console.log('Selected theme:', kivalasztottTema.value);
  currentPage.value = 1; // Reset the current page
  fetchSets(currentPage.value, valasztottKategoriaId.value); // Fetch sets for the selected theme
};

// Watcher to update sets when a new category is selected
watch(valasztottKategoriaId, (newId) => {
  if (newId) {
    valaszt();
  }
});
</script>


<template>
  <div class="text-center mx-auto fs-4 bg-primary w-100 py-2 fst-italic">
    <select class="nabla bg-success p-2 text-dark bg-opacity-75 border-warning border border-3 rounded-2" v-model="valasztottKategoriaId" @change="valaszt">
      <option disabled value="">Kérem válasszon a témák közül!</option>
      <option v-for="kategoria in kategoriak" :key="kategoria.id" :value="kategoria.id">
        🗂️{{ kategoria.id }} 𓏠 {{ kategoria.name }} 👷
      </option>
    </select>
  </div>

  <div id="image" class="container text-center mx-auto" v-if="kivalasztottTema && kivalasztottTema.IMAGEURL">
    <img :src="kivalasztottTema.IMAGEURL" class="img-fluid" alt="Kép">
  </div>

  <div class="container text-center">
    <div class="row">
      <div v-for="keszlet in sets" :key="keszlet.id" class="col">
        <div class="list" style="width: 18rem;">
          <div class="card-body p-4">
            <h5 class="honk card-title bold fs-2 fst-italic shadow-lg border-success border border-3 rounded-2 bg-dark bg-opacity-10">Szettnév: {{ keszlet.setName }}</h5>
            <p class="card-text">Altéma: {{ keszlet.subtheme }}</p>
            <p class="card-text">Év: {{ keszlet.year }}</p>
            <p class="card-text">Téma azonosító: {{ keszlet.themeId }}</p>
            <p class="card-text">Szett száma: {{ keszlet.number }}</p>
            <p class="card-text">Legofigurák száma: {{ keszlet.minifigs }}</p>
            <p class="card-text">Lego darabszám: {{ keszlet.pieces }}</p>
            <p class="card-text"><strong>Azonosító:</strong> {{ keszlet.id }}</p>
          </div>
        </div>
      </div>
    </div>

    <button v-if="pagination.value.next_page_url" @click="loadMoreSets" class="btn btn-primary mt-4">Load More</button>
    <p v-else>No more pages</p>
  </div>
</template>




