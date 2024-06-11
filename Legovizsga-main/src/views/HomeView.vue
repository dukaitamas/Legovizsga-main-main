<script setup>
import DataService from "../services/dataservice";
import { ref, onMounted } from "vue";
import axios from 'axios';


// pagination próbálkozás
// export default {
//   data() {
//     return {
//       sets: [],
//       pagination: {}
//     }
//   },
//   methods: {
//     async fetchSets(page = 1) {
//       const response = await axios.get(`http://localhost:8000/api/sets?page=${page}`);
//       this.sets = response.data.data;
//       this.pagination = response.data.meta;
//     }
//   },
//   created() {
//     this.fetchSets();
//   }
// }





// const valasztottKategoriaId = ref('');
// const kategoriak = ref([
//   { id: 1, name: 'Téma 1' },
//   { id: 2, name: 'Téma 2' },
//   { id: 3, name: 'Téma 3' }
// ]);
// const kategoriak = ref([]);
// const keszletek = ref([]);

// const kivalasztottTema = ref(null);
// const kivalasztottKeszletek = ref([]);






const kategoriak = ref([]);
const valamik = ref([]);
const keszletek = ref([]);
const valasztottKategoriaId = ref('');
const kiválasztottKeszletek = ref([]);
const kivalasztottTema = ref({});

// function decodeHtmlEntities(str) {
//     var txt = document.createElement("textarea");
//     txt.innerHTML = str;
//     return txt.value;
// }

// let decodedStr = decodeHtmlEntities("This is an example: &#039;");
// console.log(decodedStr);

// A ref() függvény segítségével Vue.js alkalmazásokban változókat 
// hozhatsz létre, amelyek reaktívak lesznek.
// A kategoriak egy ilyen reaktív változó, amely egy üres tömbre inicializálódik.
// function valaszt() {
//   kivalasztottTema.value = kategoriak.value.find(kategoria => kategoria.id === valasztottKategoriaId.value);
//   // Töltsd be a megfelelő készleteket stb.
// };

// const valaszt = () => {
//   kivalasztottTema.value = kategoriak.value.find(kategoria => kategoria.id === valasztottKategoriaId.value);
//   // Töltsd be a megfelelő készleteket stb.
// };

const valaszt = () => {
  kivalasztottTema.value = kategoriak.value.find(kategoria => kategoria.id === valasztottKategoriaId.value);
  kiválasztottKeszletek.value = keszletek.value.filter(keszlet => keszlet.themeId === valasztottKategoriaId.value);
};

onMounted(() => {
  // Ez akkor fut le, amikor betöltődik a HomeView komponens

//   DataService.getAllThemes()
//     .then((resp) => {
//       kategoriak.value = resp.data.map(kategoria => {
//         return {
//           ...kategoria,
//           name: decodeHtmlEntities(kategoria.name)
//         };
//       });
//       console.log(kategoriak.value);
//     })
//     .catch((err) => {
//       console.log(err);
// });
});

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
    // keszletek.value = resp.data.map(keszlet => {
    //     return {
    //       ...keszlet,
    //       setName: decodeHtmlEntities(keszlet.setName),
    //       subtheme: decodeHtmlEntities(keszlet.subtheme)
    //     };
    //   });
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


  kivalasztottTema.value = kategoriak.value.find(k => k.id === valasztottKategoriaId.value)

  console.log(kivalasztottTema.value);

  // ha van megfelelő végpont (és kellene, hogy legyen) akkor használjuk azt a következőképpen:
};





</script>

<template>
  <div class=" text-center mx-auto fs-4 bg-primary w-100 py-2 fst-italic">
    <!-- {{ valasztottKategoriaId }} -->
    <!-- <select  class="fst-italic" placeholder="Kérem válasszon a témák közül!"  v-model="valasztottKategoriaId" @change="valaszto" >  -->
    <select class="fst-italic" v-model="valasztottKategoriaId" @change="valaszto">

      <option disabled value="" > Kérem válasszon a témák közül!</option>
      <option v-for="kategoria in kategoriak" :value="kategoria.id"> 🗂️{{ kategoria.id }}  𓏠 
       {{ kategoria.name }} 👷</option>
      <!-- &xrarr;lightarrow &middot;kicsi pötty ascii kódok , ○ ● ■ ☼   -->
      <!-- 🃟 🃏 🂿 kártyákat ,emojikat engedi betenni a legördülő listába de képet nem pl: <img src="../assets/css/images/lego-piece-14501.png" alt=""> -->

      <!-- <option v-for="kategoria in kategoriak" :value="kategoria.id"> {{ (valasztottKategoriaId) +" "+ kategoria.name }}</option> -->
      <!-- //:value="kategoria.id az id számait írja ki nem a nevét -->
    </select>
  </div>

  <div id="image">
    <div class="container text-center mx-auto" v-if="kivalasztottTema && kivalasztottTema.IMAGEURL">
      <!-- ezzel szúnik meg az ,hogy az üres képet kirakja a végére mikor nincs kiválasztva semmi sem -->
      <img :src="kivalasztottTema.IMAGEURL" alt="Kép">
      <!-- {{ valasztottKategoriaId }} -->
    </div>
  </div>


  <!-- <div id="image">
    <div    class="container text-center mx-auto">
      <img :src="kivalasztottTema.IMAGEURL" alt="Kép" > -->
  <!-- {{ valasztottKategoriaId }} -->
  <!-- </div> -->
  <!-- </div> -->


  <!-- <ul class="m-4">
    <li v-for="keszlet in kiválasztottKeszletek">{{ keszlet.setName }}</li>
  </ul> -->

  <div class="container text-center">
    <div class="row">
      <div v-for="keszlet in kiválasztottKeszletek" class="col">
        <div class="list" style="width: 18rem;">
          <!-- <img :src="keszlet.IMAGEURL" class="card-img-top img-fluid" alt="..."> -->
          <div class="card-body p-4">
            <h5 class="card-title bold">Szettnév: {{ keszlet.setName }}</h5>
            <p class="card-text">Altéma: {{ keszlet.subtheme }}</p>
            <p class="card-text">Év: {{ keszlet.year }}</p>
            <p class="card-text">Téma azonosító: {{ keszlet.themeId }}</p>
            <p class="card-text">Szett száma: {{ keszlet.number }}</p>
            <p class="card-text">Legofigurák száma: {{ keszlet.minifigs }}</p>
            <p class="card-text">Lego darabszám: {{ keszlet.pieces }}</p>
            <p class="card-text">Azonosító: {{ keszlet.id }}</p>



            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
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
