<script setup>
import { RouterView } from "vue-router";



</script>

<template class="backgroundall">
  <div class="background">
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
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">Link</a> -->
              <router-link class="honk nav-link" to="/login">BEJELENTKEZÉS</router-link>
            </li>
          </ul>

          <!-- searchbar -->

          <!-- <div class="container-fluid d-flex  flex-row-reverse">
            <form class="d-flex   " role="search">
              <input class="form-control me-5 w-75 " type="search" placeholder="Keresés"
                aria-label="Search">
              <button class="btn btn-outline-success bg-success text-white" type="submit">Keresés</button>
            </form>
          </div> -->

        </div>
      </div>


    </nav>
    <router-view />
    <div id="carouselExampleDark" class="carousel carousel-dark slide mx-auto">
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

        <!-- <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi bi-facebook" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li> -->
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


  <!-- <router-view /> -->
</template>

<style scoped></style>
