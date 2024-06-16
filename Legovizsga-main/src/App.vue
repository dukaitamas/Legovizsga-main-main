<script setup>

import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isLoggedIn = ref(false);

const isLoginOrRegisterPage = computed(() => {
  return route.path === '/login' || route.path === '/registration';
});

const logout = () => {
  isLoggedIn.value = false;
  // Add logout logic here
};

// import { ref, computed } from 'vue';
// import { defineAsyncComponent } from 'vue';

// import { useRoute } from 'vue-router';

// // import { RouterView } from "vue-router";

// const route = useRoute();

// const HomePage = defineAsyncComponent(() => import('./HomePage.vue'));

// const App2 = defineAsyncComponent(() => import('./App2.vue'));

// const computedValue = computed(() => 'Value');

// export default {
//   setup() {
//     const route = useRoute();
//     const Component = defineAsyncComponent(() => import(`../src/views/${route.name}.vue`));

//     return {
//       Component,
//       computedValue
//     };
//   }
// };

// const isLoginOrRegisterPage = computed(() => {
//   return route.path === '/login' || route.path === '/registration';
// });
</script>


<template class="backgroundall">
  <div class="background" v-if="!isLoginOrRegisterPage">
    <!-- Navigációs sáv és a többi tartalom -->
    <nav class="navbar navbar-expand-lg p-2 my-0 mx-0" id="lel">
      <div class="container-fluid ">
        <a data-test="lego-logo" class="Linksstyles__Anchor-sc-684acv-0 friqQc MainBarstyles__LogoLink-p97gem-2 iWzzPM"
          href="/en-hu"><img src="https://assets.lego.com/logos/v4.5.0/brand-lego.svg" alt="LEGO" width="85" height="85"
            loading="eager" decoding="async"></a>
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse p-3" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2  mb-lg-0 fs-1 fw-semibold">
            <li class="nav-item">
              <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
              <router-link class=" honk nav-link active " to="/">LEGO KÉSZLETEK</router-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">Link</a> -->
              <router-link class=" honk nav-link" to="/registration">REGISZTRÁCIÓ</router-link>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <!-- <a class="nav-link" href="#">Link</a> -->
              <router-link class="honk nav-link" to="/login">BEJELENTKEZÉS</router-link>
            </li>
            <li class="nav-item" v-else>
              <button @click="logout" class="honk nav-link btn btn-link">KILÉPÉS</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />




    <div id="carouselExampleDark" class="carousel carousel-dark slide mx-auto">
      <!-- Carousel tartalma -->
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner" style="min-height: 90vh">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="../src/assets/css/images/Carousel1 (1).jpg" class="d-block  h-100 w-100"
            alt="star-wars themed warplane">
          <!-- <img src="../src/assets/css/images/Carousel1.jpg" class="d-block  h-100 w-100" alt=""> -->
          <div class="carousel-caption d-none d-md-block">
            <h5>Ismerje meg a LEGO témákat és a hozzájuk kapcsolódó szetteket.</h5>
            <p class="carousel-text">Nézzen körül a LEGO városokban, kastélyokban esetleg tekintse meg az űrhajókat is.
            </p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="./assets/css/images/Carousel2 (1).jpg" class="d-block  h-100 w-100" alt="land rover defender">
          <!-- <img src="./assets/css/images/Carousel2.jpg" class="d-block  h-100 w-100" alt=""> -->
          <div class="carousel-caption d-none d-md-block">
            <h5>A fantázia világában szinte nem ismernek lehetetlent a LEGO tervezői.</h5>
            <p class="carousel-text">Találkozhat sárkányokkal, Jedi lovagokkal, csillagrombolókkal vagy éppen egy
              tökéletesen működő távvezérelt vonattal. </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="./assets/css/images/Carousel4.jpg" class="d-block  h-100 w-100" alt="space satellite">
          <!--<img src="/Legovizsga-main/src/assets/css/images/Carousel3.jpg" class="d-block  h-100 w-100" alt=""> -->
          <div class="carousel-caption d-none d-md-block">
            <h5>Több korosztály is megtalálhatja itt a számítását a kisdedtől kezdve a nagyapáig.</h5>
            <p class="carousel-text">Szabadon kiélheti itt a kreativitását gyermek és felnőtt a különböző bonyolultságú
              szettekkel a Duplotól az elektromosan vezérelt Technic LEGO-ig.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>




    <footer
      class="d-flex flex-wrap justify-content-between align-items-center mt-0 py-3 fixed-bottom  border-top border-info border-3"
      id="lol">
      <div class="col-md-4 d-flex align-items-center">
        <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          <svg class="bi" width="30" height="24">
            <use xlink:href="#bootstrap"></use>
          </svg>
        </a>
        <span class="mb-3 mb-md-0 text-body-secondary">© 2024 Lego Inc</span>
      </div>
      <ul class="nav col-md-4 pe-5 justify-content-end list-unstyled d-flex">
        <li class="ms-3"><a class=" links text-body-secondary" href="https://x.com/LEGO_Group" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter-x"
              viewBox="0 0 16 16">
              <path
                d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              <use xlink:href="#"></use>
            </svg>X-Twitter</a></li>


            <li class="ms-3"><a class=" links text-body-secondary" href="https://www.instagram.com/lego/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram"
              viewBox="0 0 16 16">
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048
     4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198
     1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99
      10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136
       0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0
       1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0
       0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044
        2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              <use xlink:href="#"></use>
            </svg>Instagram</a></li>
        <!-- <li class="ms-3"><a class=" links text-body-secondary" href="https://www.instagram.com/lego/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-instagram"
              viewBox="0 0 16 16">
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048
       4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198
       1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99
        10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136
         0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0
         1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0
         0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.281-.11.705-.24
         1.485-.275.843-.038 1.096-.047 3.233-.047zm0 1.44c-2.097 0-2.34.007-3.165.046-.676.031-1.042.145-1.285.24-.322.125-.553.275-.795.518a2.46 2.46 0 0 0-.518.795c-.095.243-.209.609-.24 1.285-.039.825-.046 1.068-.046
         3.165 0 2.097.007 2.34.046 3.165.031.676.145 1.042.24 1.285.125.322.275.553.518.795.242.242.473.393.795.518.243.095.609.209 1.285.24.825.039 1.068.046 3.165.046 2.097 0 2.34-.007 3.165-.046.676-.031
         1.042-.145 1.285-.24.322-.125.553-.275.795-.518.242-.242.393-.473.518-.795.095-.243.209-.609.24-1.285.039-.825.046-1.068.046-3.165 0-2.097-.007-2.34-.046-3.165-.031-.676-.145-1.042-.24-1.285a2.46 2.46 0 0 0-.518-.795 2.46 2.46 0 0 0-.795-.518c-.243-.095-.609-.209-1.285-.24-.825-.039-1.068-.046-3.165-.046zm0 2.084a4.535 4.535 0 1 1 0 9.069 4.535 4.535 0 0 1 0-9.07zm0 1.441a3.095 3.095 0 1 0 0 6.19 3.095 3.095 0 0 0 0-6.19zm5.163-.654a1.056 1.056 0 1 1-2.112 0 1.056 1.056 0 0 1 2.112 0z" />
            </svg>Instagram</a></li> -->
        <!-- <li class="ms-3"><a class=" links text-body-secondary"
            href="https://www.facebook.com/LEGO/?locale=hu_HU" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-facebook"
              viewBox="0 0 16 16">
              <path
                d="M8.051 8.5H6V12H4V8.5H2V7h2V5.583c0-1.654.88-2.583 2.701-2.583H8v2H7.159C6.562 5 6.5 5.209 6.5 5.633V7H8l-.015 1.5z" />
              <path
                d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 1c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7z" />
            </svg>Facebook</a></li> -->

            <li class="ms-3"><a class="links text-body-secondary" href="https://www.facebook.com/LEGO/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook"
              viewBox="0 0 16 16">
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017
     1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              <use xlink:href="#"></use>
            </svg>Facebook</a></li>
      </ul>
    </footer>
  </div>
  <div v-else>
    <router-view />
  </div>
</template>

<style scoped>

#carouselExampleDark{
  box-shadow: 3px 3px 9px 4px rgba(0.9, 0.9, 0.9, 0.9);

}

.navbar{
  box-shadow: 3px 3px 9px 4px rgba(0.9, 0.9, 0.9, 0.9);
}

footer{
  box-shadow: 3px 3px 9px 4px rgba(0.9, 0.9, 0.9, 0.9);

}

</style>
