
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
      <CalendlyWidget url="https://calendly.com/tamasdukai7/vizsgadokumentacio-leadas-jedlik-important" />
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
</style>
