<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';


// State variables
const email = ref("");
const password = ref("");
const error = ref("");
const successMessage = ref("");

// Router instance
const router = useRouter();

// Methods
const login = () => {
  // Clear previous messages
  error.value = "";
  successMessage.value = "";

  axios.post('http://127.0.0.1:8000/api/login', {
    email: email.value,
    password: password.value,
  })
  .then(response => {
    console.log('Login successful', response.data);
    successMessage.value = 'Sikeres bejelentkezés!';
    // Handle successful login, e.g., redirect the user, store token, etc.
    router.push({ name: 'Loginolva' });
    // ez a router push hívja meg a  { path: '/home',
    //   name: "Loginolva",
    //    component: HomePage } az index.js-ből amikor a belépés gombra kattintva HomePage.vue-ra visz az oldal

  })
  .catch(err => {
    if (err.response && err.response.status === 401) {
      error.value = 'Érvénytelen bejelentkezési adatok! Kérjük módosítsa az adatokat!';
    } else {
      error.value = 'Hiba történt a bejelentkezés során. Kérjük, próbálja újra később.';
    }
  });
};
</script>

<template>
  <div class="login-page" p-2>
    <div class="form-container">
      <h4 class="honk fs-1 bg-light bg-opacity-10 p-0 m-0 " id="LoginText">BEJELENTKEZÉS</h4>

    <div class="container w-25">
      <form class="row g-3" @submit.prevent="login">
        <div class="col-md-12">
          <label for="inputEmail" class="form-label fs-5 text-light fw-bold">Email:</label>
          <input v-model="email" required type="email" class="form-control" id="inputEmail" autocomplete="email"
            placeholder="Kérem ide írja be az email címét: pl 123@gmail.com">
        </div>
        <br>
        <div class="col-md-12">
          <label for="inputPassword" class="form-label fs-5 text-light fw-bold">Jelszó:</label>
          <input v-model="password" required type="password" class="form-control" id="inputPassword" autocomplete="current-password"
            placeholder="Kérem írja be a jelszavát!">
        </div>
        <div class="col-12 p-3">
          <button type="submit" class="honk  login-button fs-5 btn btn-dark">Bejelentkezés</button>
        </div>
      </form>
      <div class="success" v-if="successMessage">{{ successMessage }}</div>
      <div class="error" v-if="error">{{ error }}</div>
    </div>
  </div>
  </div>
</template>

<style scoped>
/* csak erre az oldalra vonatkozik az itt megadott stlye ha scopedre van állítva */
/* Add any necessary styling here */



#LoginText {
  text-align: center;
  margin-bottom: 20px;
}

input {
  border-radius: 11px;
  color: white;
  background-color: antiquewhite, 0.1;
  border: 0.1px solid rgba(191, 202, 202, 0.5);
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.9);
  border-width: 4px 1.25em;
  border-style: solid;
}

.login-button {
  background-color: black;
  opacity: 0.8;
}

.form-container {
  background-color: transparent; 
  /* Átlátszó háttérszín */
  opacity: 94%;
  width: 100vw;
}

.form-control {
  background-color: gray;
  opacity: 0.9;
}

.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('@/assets\css\images\space satellite.png');
  /* C:\Users\tomi2\Legovizsga-main-main\Legovizsga-main\src\assets\css\images\space satellite.png */
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
}

/* .form-container {
  background-color: rgba(255, 255, 255, 0.8);  */
  /* Fehér háttér, hogy kiemelje a formot */
  /* padding: 20px;
  border-radius: 10px;
  z-index: 2;
  position: relative;
} */

.success {
  color: rgb(45, 216, 45);
  height: 150px;
  text-size-adjust: 100%;
  font-size: 125px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: 300;
}

.error {
  color: rgb(247, 4, 4);
  text-size-adjust: 100%;
  font-size: 45rem;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: 300;
}

.success,
.error {
  padding-bottom: 10px; 
  font-size: 18px; 
}

</style>




<!-- <template>
    <div class="container" >
      <div class="p-3"><h4>BEJELENTKEZÉS</h4></div>
      <div class="conatiner">
      <form class="row g-3">
      <div class="col-md-12">
        <label for="inputEmail4" class="form-label">Email:</label>
        <input required type="email" class="form-control" id="inputEmail4" autocomplete="email">
      </div>
      <br> -->
      <!-- <div class="col-md-12">
        <label for="inputEmail4" class="form-label">Email:</label>
        <input type="email" class="form-control" id="inputEmail4">
      </div>
      <br> -->
      <!-- <div class="col-md-12">
        <label for="inputPassword4" class="form-label">Jelszó:</label>
        <input required type="password" class="form-control" id="inputPassword4" autocomplete="current-password">
      </div>
      
      <div class="col-12 p-3" >
        <button type="submit" class="btn btn-dark" >Bejelentkezés</button>
      </div>
      </form>
        </div>
    </div>
  </template> -->