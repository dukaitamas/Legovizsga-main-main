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

const isLoggedIn = ref(true);
const router = useRouter();

const logout = () => {
  isLoggedIn.value = false;
  router.replace('/login');
  window.location.replace('/');
};
</script>

<template>
  <div class=" ">
    <div class="top-bar">
      <button @click="logout" class="honk logout-button fs-3 my-0 py-1">Kijelentkezés</button>
    </div>

    <div class="main-content">
      <div class="left-container">
        <div class="calendly-container">
          <CalendlyWidget url="https://calendly.com/tamasdukai7/vizsgadokumentacio-leadas-jedlik-important" />
        </div>
      </div>
      
      <div class="center-container">
        <div class="content">
          <h1>Üdvözöljük a LEGO weboldalon!</h1>
          <p>Itt találja a legjobb LEGO készleteket.</p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, nihil. Molestiae ullam enim neque laborum, et quo quod velit officiis laudantium asperiores,
           amet sint sed totam. Delectus laboriosam doloremque earum.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consequuntur quae eum sint facilis ea pariatur labore, delectus nesciunt nihil tenetur aliquam atque,
            ullam rerum natus necessitatibus quis nemo illum.

        </div>
      </div>

      <div class="right-container">
        <div class="search-container">
          <input type="text" v-model="searchQuery" @input="search" placeholder="Keresés..." class="search-input mb-4" />
          <h3 class="honk">Témák:</h3>
          <ul>
            <li v-for="theme in themes" :key="theme.id">{{ theme.name }}</li>
          </ul>
          <button v-if="themesPagination.next_page_url" @click="loadMoreThemes">Továbbiak betöltése</button>

          <h3 class="honk">Szettek:</h3>
          <ul>
            <li v-for="set in sets" :key="set.id">{{ set.setName }}</li>
          </ul>
          <button v-if="setsPagination.next_page_url" @click="loadMoreSets">Továbbiak betöltése</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>


.honk {
  font-family: "Honk", system-ui;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
    "MORF" 13,
    "SHLN" 22;
    /* élőben variálható a font-morph és a font shadow 
    a MORF és SHLN értékekkel */
    /* a 0-tól ...-ig értékek az index.html headerben vannak a linkek */
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.top-bar {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  background-color: yellow;
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
  width: 100%;
  padding: 20px;
  justify-content: space-between;
}

.left-container {
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.center-container {
  flex: 0 0 60%;
  display: flex;
  justify-content: center;
  align-items: top;
}

.right-container {
  flex: 0 0 20%;
  padding-left: 20px;
}

.search-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.search-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 11px;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.9);
}

.calendly-container {

  width: 100%;
  max-width: 250px;
  padding: 20px;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.9);
  border-radius: 11px;
  background-color: white;
}

.content {
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
}
</style>
