<script setup>
import DataService from "../services/dataservice";
import { ref, onMounted } from "vue";

const kategoriak = ref([]);
//  const valamik = ref([]);
const keszletek = ref([]);
const valasztottKategoriaId = ref();
const kiválasztottKeszletek = ref([]);
const kivalasztottTema = ref({});

// A ref() függvény segítségével Vue.js alkalmazásokban változókat 
// hozhatsz létre, amelyek reaktívak lesznek.
// A kategoriak egy ilyen reaktív változó, amely egy üres tömbre inicializálódik.

onMounted(() => {
  // Ez akkor fut le, amikor betöltődik a HomeView komponens
}),

  DataService.getAllThemes()
    .then((resp) => {
      kategoriak.value = resp.data;
      console.log(kategoriak.value);
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



// DataService.getAllSets()
//   .then((resp) => {
//     keszletek.value = resp.map(keszlet => ({
//       ...keszlet,
//       IMAGEURL: `http://127.0.0.1:8000/storage/images/${keszlet.id}.jpg`
//     }));
//   })
//   .catch((err) => {
//     console.log(err);
//   });


const valaszto = () => {
  console.log("ok");
  // Ha a backend-en nincs olyan végpont, ami csak a kiválasztott id-jű elemeket adja vissza,
  // akkor az összes elemet le kell kérni és kiválogatni közülük a megfelelőket:
  // valasztottKategoriaId.value = kategoriak.value.find(
  //   (k) => k.nev === valasztottKategoriaNev.value
  // ).id;
  console.log(keszletek.value.data);
  kiválasztottKeszletek.value = keszletek.value.data.filter(
    (k) => k.themeId === valasztottKategoriaId.value
  );
  // kiválasztottKeszletek.value = DataService.getSetsById(valasztottKategoriaId.value)
  // console.log(kiválasztottKeszletek.value);
  console.log(valasztottKategoriaId.value);


  kivalasztottTema.value = kategoriak.value.find(k=>k.id === valasztottKategoriaId.value)

  console.log(kivalasztottTema.value);

  // ha van megfelelő végpont (és kellene, hogy legyen) akkor használjuk azt a következőképpen:
};



</script>

<template>
  <select v-model="valasztottKategoriaId" @change="valaszto">
    <option v-for="kategoria in kategoriak" :value="kategoria.id">{{ kategoria.name }} </option>
    <!-- //:value="kategoria.id az id számait írja ki nem a nevét -->
  </select>

  <img :src="kivalasztottTema.IMAGEURL" alt="Kép">
  {{ valasztottKategoriaId }}


  <!-- <ul class="m-4">
    <li v-for="keszlet in kiválasztottKeszletek">{{ keszlet.setName }}</li>
  </ul> -->

  <div class="container text-center">
    <div class="row">
      <div v-for="keszlet in kiválasztottKeszletek" class="col">
        <div class="card" style="width: 18rem;">
          <!-- <img :src="keszlet.IMAGEURL" class="card-img-top img-fluid" alt="..."> -->
          <div class="card-body">
            <h5 class="card-title">{{ keszlet.setName }}</h5>
            <p class="card-text">{{ keszlet.subtheme }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- <ul class="m-4">
      <li v-for="keszlet in kiválasztottKeszletek" :key="keszlet.id">
        <img :src="keszlet.IMAGEURL" alt="Kép">
        <span>{{ keszlet.setName }}</span>
      </li>
    </ul> -->



</template>
