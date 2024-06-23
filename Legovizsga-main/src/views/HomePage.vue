<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import CalendlyWidget from './CalendlyWidget.vue';
import axios from 'axios'; // ez a sima axios
//import axios from '@/axios'; //ez az axios.js fájlra mutat

const searchQuery = ref('');

const sets = ref([]);
const themes = ref([]);
const setsPagination = ref({});
const themesPagination = ref({});
const isLoggedIn = ref(true);
const user = ref({});
const router = useRouter();


//user info

// const fetchUser = async () => {
//   try {
//     const response = await axios.get('/api/user');
//     user.value = response.data;
//   } catch (error) {
//     console.error('Error fetching user:', error);
//   }
// };




//szettek és témák
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



const logout = () => {
  isLoggedIn.value = false;
  router.replace('/login');
  window.location.replace('/');
};


// onMounted(() => {
//   fetchUser();
//   search();
// });



</script>

<template>
  <div class=" ">
    <div class="top-bar">
      <button @click="logout" class="honk blog-button fs-3 my-0 py-1 me-5">Tovább a blogra</button>

      <button @click="logout" class="honk logout-button fs-3 my-0 py-1">Kijelentkezés</button>
    </div>

    <div class="main-content ">

      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div class="left-container">
        <div class="calendly-container">
          <CalendlyWidget url="https://calendly.com/tamasdukai7/vizsgadokumentacio-leadas-jedlik-important" />
          <!-- <CalendlyWidget url="https://calendly.com" /> -->

        </div>
      </div>

      <div class="center-container">
        <!-- <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div> -->


        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100%" y2="0">
              <stop stop-color="white" offset="0%" />
              <stop stop-color="#38495a" offset="100%" />
            </linearGradient>
          </defs>
        </svg>

        <div class="content">
          <h1 class="text">Üdvözöljük a LEGO weboldalon!</h1>


          <p class="text">Itt találja a legjobb LEGO készleteket.</p>
          <div class="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, nihil. Molestiae ullam enim neque laborum,
            et
            quo quod velit officiis laudantium asperiores,
            amet sint sed totam. Delectus laboriosam doloremque earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consequuntur quae eum sint facilis ea pariatur
            labore, delectus nesciunt nihil tenetur aliquam atque,
            ullam rerum natus necessitatibus quis nemo illum.
          </div>

        </div>
      </div>

      <div class="right-container">
        <div class="search-container">
          <input type="text" v-model="searchQuery" @input="search" placeholder="Keresés..."
            class="nabla search-input fs-4 px-2 py-1 mb-2 bg-dark bg-opacity-75 border-warning border border-opacity-75 border-3 rounded-2" />
          <h3 class="honk fs-2">Témák:</h3>
          <ul>
            <li v-for="theme in themes" :key="theme.id" style="list-style-type: none;"
              class="nabla fs-5 bg-success p-2  bg-opacity-75 border-warning border border-opacity-75 border-3 rounded-2">
              👷{{ theme.name }}</li>
          </ul>
          <button v-if="themesPagination.next_page_url" @click="loadMoreThemes"
            class="honk fs-3 my-0 py-1 paginationloadmorebutton mb-3">Továbbiak betöltése</button>

          <h3 class="honk fs-2">Szettek:</h3>
          <ul>
            <li v-for="set in sets" :key="set.id" style="list-style-type: none;"
              class="nabla fs-5 bg-success p-2  bg-opacity-75 border-warning border border-opacity-75 border-3 rounded-2">
              👷{{ set.setName }}
              <button v-if="user.role === 'admin'" @click="deleteSet(set.id)" class="delete-button">Törlés</button>

            </li>
          </ul>
          <button v-if="setsPagination.next_page_url" @click="loadMoreSets"
            class="honk fs-3 my-0 py-1 paginationloadmorebutton">Továbbiak betöltése</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "compass-mixins/lib/compass";



// n is number of stars required
@function multiple-box-shadow($n) {
  $value: '#{random(2000)}px #{random(2000)}px #FFF';

  @for $i from 2 through $n {
    $value: '#{$value} , #{random(2000)}px #{random(2000)}px #FFF';
  }

  @return unquote($value);
}

$shadows-small: multiple-box-shadow(700);
$shadows-medium: multiple-box-shadow(200);
$shadows-big: multiple-box-shadow(100);

html {
  height: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
}

#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: $shadows-small;
  animation: animStar 50s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: $shadows-small;
  }
}

#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: $shadows-medium;
  animation: animStar 100s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: $shadows-medium;
  }
}

#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: $shadows-big;
  animation: animStar 150s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: $shadows-big;
  }
}


h1 {
// position: absolute;
background: linear-gradient(white, #38495a);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
//   background-clip: text;
// text-fill-color: transparent;

top: 40%;
left: 0;
right: 0;
color: #fff;
text-align: center;
font-family: 'lato', sans-serif;
font-weight: 300;
font-size: 50px;
letter-spacing: 10px;
margin-top: 10px;
padding-left: 10px;
}

.text {
background: linear-gradient(white, #38495a);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
// background-clip: text;
// text-fill-color: transparent;

// Fallback for browsers that don't support background-clip: text
color: #38495a;
}



// h1 {
//   // position: absolute;

//   top: 40%;
//   left: 0;
//   right: 0;
//   color: #e2bfbf;
//   text-align: center;
//   font-family: 'lato', sans-serif;
//   font-weight: 300;
//   font-size: 50px;
//   letter-spacing: 10px;
//   margin-top: 10px;
//   padding-left: 10px;
// }

// .text{
//  color:#e2bfbf;
// .text {
//   background: linear-gradient(white, #233d57);
//   // -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// color: #ccc;
//   // Fallback for browsers that don't support the WebKit properties
//   color: #38495a;
//   // Additional CSS for SVG mask
//   display: inline-block;
//   mask-image: url(#gradient);
//   -webkit-mask-image: url(#gradient);
// }
// }


// Fallback for browsers that don't support background-clip: text




@keyframes animStar {
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(-2000px);
  }
}




.nabla {
  font-family: "Nabla", system-ui;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
    "EDPT" 60,
    "EHLT" 20;
  /* "EDPT" 100,
    "EHLT" 12; */

  /* legördülő lista betűstílusa állítható élőben 
    a CSS full axis variable-vel EDPT EHLT
    -tól -ig értékei az index.html headerben találhatóak */
}

.honk {
  font-family: "Honk", system-ui;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
    "MORF" 13,
    "SHLN" 22;
  /* "MORF" 13,
    "SHLN" 22; */
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
  /* background-color: yellow; */
  /* background-color: #1a1a1a; */
  /* background: radial-gradient(circle at center,#1a1546,#040411 40%); */
  background-image: url('@/assets/css/images/legobackgroundresized.png');
}

.logout-button {
  padding: 10px 20px;
  border: none;
  background-color: rgb(255, 77, 77, 0.84);
  /* rgb(255, 77, 77, 0.84); 0.84 az opacity érték */
  color: white;
  border: 2px solid #ccc;
  cursor: pointer;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.8);
  border-radius: 11px;
}

.logout-button:hover {
  background-color: #da1818;
}

.blog-button {
  padding: 10px 20px;
  border: none;
  background-color: rgba(128, 13, 236, 0.84);
  /* rgb(255, 77, 77, 0.84); 0.84 az opacity érték */
  color: white;
  border: 2px solid #ccc;
  cursor: pointer;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.8);
  border-radius: 11px;
}


.blog-button:hover {
  background-color: #2e1fb9;
}

.main-content {
  // background-color: #2e1fb9;
  background-color: #0a0349;

  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: space-between;

}


.left-container {
  // border: 4px solid #ccc;
  // border-radius: 11px;
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
  padding-bottom: 200px;
  /* font-family: "Nabla", system-ui; */
  color: yellow;
  font-size: 1rem;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 11px;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.9);
}

.paginationloadmorebutton {
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 11px;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.9);
  background-color: rgba(38, 145, 132, 0.7);
}

.paginationloadmorebutton:hover {
  background-color: rgba(98, 145, 28, 0.5);
}

.calendly-container {

  width: 100%;
  max-width: 250px;
  padding: 4px;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.9);
  border-radius: 11px;
  background-color: rgb(204, 191, 191);
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
