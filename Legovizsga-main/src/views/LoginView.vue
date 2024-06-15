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
  <div class="container" p-2>
    <div class="p-3"><h4 class="honk fs-1">BEJELENTKEZÉS</h4></div>
    <div class="container">
      <form class="row g-3" @submit.prevent="login">
        <div class="col-md-12">
          <label for="inputEmail" class="form-label">Email:</label>
          <input v-model="email" required type="email" class="form-control" id="inputEmail" autocomplete="email"
            placeholder="Kérem ide írja be az email címét: pl 123@gmail.com">
        </div>
        <br>
        <div class="col-md-12">
          <label for="inputPassword" class="form-label">Jelszó:</label>
          <input v-model="password" required type="password" class="form-control" id="inputPassword" autocomplete="current-password"
            placeholder="Kérem írja be a jelszavát!">
        </div>
        <div class="col-12 p-3">
          <button type="submit" class="honk fs-5 btn btn-dark">Bejelentkezés</button>
        </div>
      </form>
      <div class="success" v-if="successMessage">{{ successMessage }}</div>
      <div class="error" v-if="error">{{ error }}</div>
    </div>
  </div>
</template>

<style scoped>
/* Add any necessary styling here */
.success {
  color: green;
}
.error {
  color: red;
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