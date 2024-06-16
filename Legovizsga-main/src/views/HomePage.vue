<!-- <script setup>
import { useRouter } from 'vue-router';
import { ref , onMounted, computed} from 'vue';
import CalendlyWidget from './CalendlyWidget.vue';


const isLoggedIn = ref(true); // Ez legyen true, ha be van jelentkezve a felhasználó
const router = useRouter();

const logout = () => {
  isLoggedIn.value = false;
  //  kijelentkezési logika 
  // router.push('/login');

   // URL history reset
   router.replace('/login');
  window.location.replace('/'); 
  // Frissíti az oldalt, és törli az előző oldalakat a history-ból
};


</script>


<template>
  <div class="homepage-container">
    <aside class="aside-container">
      <div class="search-container">
        <input type="text" placeholder="Keresés..." class="search-input my-0" />
      </div>
      <div class="logout-container">
        <button @click="logout" class="honk logout-button fs-3 my-0 py-1">Kijelentkezés</button>
      </div>
    </aside>

    <main class="main-container">
      <CalendlyWidget url="https://calendly.com/your-calendly-link" />
      <div class="content">
        <h1>Üdvözöljük a LEGO weboldalon!</h1>
        <p>Itt találja a legjobb LEGO készleteket.</p>
      </div>
    </main>
  </div>
</template>

<style scoped>
.homepage-container {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}

.aside-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 250px; /* Adjust as needed */
  padding: 20px;
  box-shadow: 3px 0 9px rgba(0, 0, 0, 0.2);
}

.search-container, .logout-container {
  width: 100%;
  margin-bottom: 20px;
}

.search-input, .logout-button {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 11px;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.logout-button {
  border: none;
  background-color: #ff4d4d;
  color: white;
}

.logout-button:hover {
  background-color: #da1818;
}

.main-container {
  flex-grow: 1;
  padding: 20px;
  text-align: center;
}

.content {
  margin-top: 10px;
}
</style> -->

<!-- <script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import CalendlyWidget from './CalendlyWidget.vue';

const isLoggedIn = ref(true);
const router = useRouter();

const logout = () => {
  isLoggedIn.value = false;
  router.replace('/login');
  window.location.replace('/');
};
</script>

<template>
  <div class="container">
    <aside class="sidebar">
      <div class="search-container">
        <input type="text" placeholder="Keresés..." class="search-input my-0" />
      </div>
      <div class="logout-container">
        <button @click="logout" class="honk logout-button fs-3 my-0 py-1">Kijelentkezés</button>
      </div>
    </aside>
    <main class="main-content">
      <CalendlyWidget url="https://calendly.com/your-calendly-link" />
      <div class="content">
        <h1>Üdvözöljük a LEGO weboldalon!</h1>
        <p>Itt találja a legjobb LEGO készleteket.</p>
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 20px;
  background-color: #f8f8f8;
  border-right: 1px solid #ccc;
}

.main-content {
  flex: 3;
  padding: 20px;
}

.search-container, .logout-container {
  margin-bottom: 20px;
}

.search-input {
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 11px;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.9);
}

.logout-button {
  width: 200px;
  padding: 10px 20px;
  border: none;
  background-color: #ff4d4d;
  color: white;
  cursor: pointer;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.9);
  border-radius: 11px;
}

.logout-button:hover {
  background-color: #da1818;
}

.content {
  margin-top: 10px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
}
</style> -->


<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import CalendlyWidget from './CalendlyWidget.vue';
import axios from 'axios';


const searchQuery = ref('');

const sets = ref([]);
const themes = ref([]);
const setsPagination = ref({});
const themesPagination = ref({});

const search = async (page = 1) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/search`, {
      params: { query: searchQuery.value, page: page }
    });

    sets.value = response.data.sets.data;
    themes.value = response.data.themes.data;
    setsPagination.value = response.data.sets;
    themesPagination.value = response.data.themes;
  } catch (error) {
    console.error("Error during search:", error);
  }
};

const loadMoreSets = () => {
  if (setsPagination.value.next_page_url) {
    search(setsPagination.value.current_page + 1);
  }
};

const loadMoreThemes = () => {
  if (themesPagination.value.next_page_url) {
    search(themesPagination.value.current_page + 1);
  }
};


// const results = ref({
//   sets: [],
//   themes: [],
// });

// const search = async () => {
//   if (searchQuery.value.length > 2) {
//     const response = await axios.get('http://127.0.0.1:8000/api/search', {
//       params: { query: searchQuery.value },
//     });
//     results.value = response.data;
//   }
// };

const isLoggedIn = ref(true);
const router = useRouter();

const logout = () => {
  isLoggedIn.value = false;
  router.replace('/login');
  window.location.replace('/');
};
</script>

<template>
  <div class="container">

    <div class="top-bar">
      <input type="text" v-model="searchQuery" @input="search" placeholder="Keresés..." class="search-input mb-4" />
      <!-- <div v-if="results.sets.length || results.themes.length"> -->
      <div>
        <h3>Szettek:</h3>
        <!-- <ul v-if="results.sets.length">
          <li v-for="set in results.sets" :key="set.id">{{ set.setName }}</li>
        </ul> -->
        <ul>
          <li v-for="set in sets" :key="set.id">{{ set.setName }}</li>
        </ul>

        <button v-if="setsPagination.next_page_url" @click="loadMoreSets">Továbbiak betöltése</button>
      </div>
    </div>
    <h3>Témák:</h3>
    <!-- <ul v-if="results.themes.length">
          <li v-for="theme in results.themes" :key="theme.id">{{ theme.name }}</li>
        </ul> -->
    <ul>
      <li v-for="theme in themes" :key="theme.id">{{ theme.name }}</li>
    </ul>
    <button v-if="themesPagination.next_page_url" @click="loadMoreThemes">Továbbiak betöltése</button>

  </div>
  


  <div class="logout-container">
    <button @click="logout" class="honk logout-button fs-3 my-0 py-1">Kijelentkezés</button>
  </div>



  <div class="main-content">
    <CalendlyWidget url="https://calendly.com/tamasdukai7/vizsgadokumentacio-leadas-jedlik-important" />
    <div class="content">
      <h1>Üdvözöljük a LEGO weboldalon!</h1>
      <p>Itt találja a legjobb LEGO készleteket.</p>
    </div>
  </div>
  
</template>

<!-- <style scoped>
.container {
  display: flex;
}

.sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 20px;
  background-color: #f8f8f8;
  border-right: 1px solid #ccc;
}

.main-content {
  flex: 3;
  padding: 20px;
}

.search-container,
.logout-container {
  margin-bottom: 20px;
}

.search-input {
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 11px;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.9);
}

.logout-button {
  width: 200px;
  padding: 10px 20px;
  border: none;
  background-color: #ff4d4d;
  color: white;
  cursor: pointer;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.9);
  border-radius: 11px;
}

.logout-button:hover {
  background-color: #da1818;
}

.content {
  margin-top: 10px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
}
</style> -->

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: yellow;
  padding: 10px;
}

.search-input {
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 11px;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.9);
}

.logout-button {
  padding: 10px 20px;
  border: none;
  background-color: #ff4d4d;
  color: white;
  cursor: pointer;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.9);
  border-radius: 11px;
}

.logout-button:hover {
  background-color: #da1818;
}

.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  /* Adjust according to the height of the top bar */
}

.calendly-container {
  max-width: 800px;
  width: 100%;
  padding: 20px;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.9);
  border-radius: 11px;
  background-color: white;
}
</style>
