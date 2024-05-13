<script setup>
import DataService from "../services/dataservice";
import { ref, onMounted } from "vue";

const kategoriak = ref([]);
   const valamik = ref([]);
const keszletek = ref([]);
const valasztottKategoriaId = ref();
const kiválasztottKeszletek = ref([]);

onMounted(() => {
  // Ez akkor fut le, amikor betöltődik a HomeView komponens
}),
  DataService.getAllThemes()
    .then((resp) => {
      kategoriak.value = resp;
      //console.log(kategoriak.value);
    })
    .catch((err) => {
      console.log(err);
    });

DataService.getAllSets()
  .then((resp) => {
    keszletek.value = resp;
    //console.log(keszletek.value);
  })
  .catch((err) => {
    console.log(err);
  });

const valaszto = () => {
  console.log("ok");
  // Ha a backend-en nincs olyan végpont, ami csak a kiválasztott id-jű elemeket adja vissza,
  // akkor az összes elemet le kell kérni és kiválogatni közülük a megfelelőket:
  // valasztottKategoriaId.value = kategoriak.value.find(
  //   (k) => k.nev === valasztottKategoriaNev.value
  // ).id;
   console.log(keszletek.value);
  kiválasztottKeszletek.value = keszletek.value.filter(
    (v) => v.themeId === valasztottKategoriaId.value
  );
  console.log(kiválasztottKeszletek.value);

  // ha van megfelelő végpont (és kellene, hogy legyen) akkor használjuk azt a következőképpen:
};
</script>

<template>
  <select v-model="valasztottKategoriaId" @change="valaszto">
    <option v-for="kategoria in kategoriak" :value="kategoria.id">{{ kategoria.name }}</option>
    <!-- //:value="kategoria.id az id számait írja ki nem a nevét -->
  </select>
  {{valasztottKategoriaId}}
  <ul class="m-4">
    <li v-for="keszlet in kiválasztottKeszletek">{{ keszlet.setName }}</li>
  </ul>
</template>
