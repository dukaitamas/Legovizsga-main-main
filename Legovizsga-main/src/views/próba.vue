<template>
    <!-- Pagination controls -->
    <div>
      <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ getLastPage() }}</span>
      <button @click="nextPage" :disabled="currentPage === getLastPage()">Next</button>
    </div>
  
    <!-- Display sets -->
    <div class="container text-center">
      <div class="row">
        <div v-for="keszlet in keszletek" class="col">
          <!-- Set card display -->
          <div class="list" style="width: 18rem;">
            <div class="card-body p-4">
              <h5 class="card-title bold">Szettnév: {{ keszlet.setName }}</h5>
              <p class="card-text">Altéma: {{ keszlet.subtheme }}</p>
              <p class="card-text">Év: {{ keszlet.year }}</p>
              <p class="card-text">Téma azonosító: {{ keszlet.themeId }}</p>
              <p class="card-text">Szett száma: {{ keszlet.number }}</p>
              <p class="card-text">Legofigurák száma: {{ keszlet.minifigs }}</p>
              <p class="card-text">Lego darabszám: {{ keszlet.pieces }}</p>
              <p class="card-text">Azonosító: {{ keszlet.id }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import DataService from "../services/dataservice";
  import { ref, onMounted } from "vue";
  import axios from 'axios';
  
  
  const kategoriak = ref([]);
  const keszletek = ref([]);
  const valasztottKategoriaId = ref('');
  const kiválasztottKeszletek = ref([]);
  const kivalasztottTema = ref({});
  
  const pageSize = 15; // oldalankénti elemek száma
  const currentPage = ref(1); // aktuális oldalszám
  
  const fetchSets = async (page = 1) => {
    try {
      const response = await DataService.getAllSets(page);
      keszletek.value = response.data;
    } catch (error) {
      console.error('Error fetching sets:', error);
    }
  };
  
  const valaszto = () => {
    // Kód a kiválasztott témához tartozó készletek kiválasztásához
  };
  
  const nextPage = () => {
    if (currentPage.value < getLastPage()) {
      currentPage.value++;
      fetchSets(currentPage.value);
    }
  };
  
  const previousPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
      fetchSets(currentPage.value);
    }
  };
  
  const getLastPage = () => {
    return Math.ceil(keszletek.value.total / pageSize);
  };
  
  onMounted(() => {
    fetchSets();
  });
  </script>
  
  <style>
  /* Add your custom styles here */
  </style>
  