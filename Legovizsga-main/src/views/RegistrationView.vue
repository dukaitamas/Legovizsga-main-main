<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// State variables
const userName = ref("");
const email = ref("");
const password = ref("");
const password_confirmation = ref("");
const error = ref("");
const buttonDisabled = ref(true); // Initially set to true to prevent form submission
const errors = ref({});
const successMessage = ref(""); // For success message

// Methods
const ell = () => {
  buttonDisabled.value = password.value.length < 8;
};

const ellenor = () => {
  if (password.value.length < 8) {
    error.value = 'A jelszónak legalább 8 karakter hosszúnak kell lennie!';
  } else {
    error.value = '';
  }
};

const register = () => {
  console.log("Register function called"); // Teszteljük, hogy fut-e a függvény

  ellenor(); // Perform validation before sending the request
  if (!error.value) { // Proceed only if there is no error
    // axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(() => {
    //   axios.post('http://127.0.0.1:8000/api/register', {
        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(() => {
          axios.post('http://localhost:8000/api/register', {
        name: userName.value,
        email: email.value,
        password: password.value,
        password_confirmation: password_confirmation.value,
      })
      .then(response => {
        console.log('Registration successful', response.data);
        successMessage.value = 'A regisztráció sikeres!'; // Set success message
        // Clear form fields
        userName.value = '';
        email.value = '';
        password.value = '';
        password_confirmation.value = '';
      })
      .catch(err => {
        if (err.response && err.response.status === 422) {
          // Customize error messages
          errors.value = {};
          for (const key in err.response.data.errors) {
            if (err.response.data.errors[key].includes("The email has already been taken.")) {
              errors.value[key] = ["Az e-mail már foglalt. Kérem használjon másik email címet!"];
            } else if (err.response.data.errors[key].includes("The password field confirmation does not match.")) {
              errors.value[key] = ["A jelszó megerősítése nem egyezik."];
            } else {
              errors.value[key] = err.response.data.errors[key];
            }
          }
        }
      });
    });
  }
};

</script>

<template>
  <div class="registration-page p-0 m-0">
    <div class="downarrow">↓</div>

    <div class="form-container m-5 p-1">
      <h4 class="honk form-container2 fs-1 mb-5" id="RegistrationText">REGISZTRÁCIÓ</h4>

      <div class="container my-5">
        <div class="row g-3" @submit.prevent="register">
          <div class="col-md-12">
            <label for="inputName" class="form-label fs-5 text-light fw-bold">Felhasználó neve:</label>
            <input v-model="userName" required type="text" class="form-control" id="inputName" placeholder="Kérem ide írja be a felhasználónevét!">
          </div>
          <br>
          <div class="col-md-12">
            <label for="inputEmail4" class="form-label fs-5 text-light fw-bold">Email:</label>
            <input v-model="email" required type="email" class="form-control" id="inputEmail4" autocomplete="email" placeholder="Kérem ide írja be az email címét: pl 123@gmail.com">
          </div>
          <br>
          <div class="col-md-12">
            <label for="inputPassword4" class="form-label fs-5 text-light fw-bold">Jelszó:</label>
            <input @keyup="ell" v-model="password" required type="password" class="form-control" id="inputPassword4" autocomplete="current-password" placeholder="A jelszónak legalább 8 karakter hosszúnak kell lennie!">
          </div>
          <br>
          <div class="col-md-12">
            <label for="inputPasswordConfirmation" class="form-label fs-5 text-light fw-bold">Jelszó megerősítése:</label>
            <input v-model="password_confirmation" required type="password" class="form-control" id="inputPasswordConfirmation" autocomplete="current-password" placeholder="Kérem erősítse meg a jelszót!">
          </div>
          <br>
          <div class="col-12 p-3">
            <button :disabled="buttonDisabled" @click="register" type="submit" class="honk registration-button fs-5 btn btn-dark">Regisztráció</button>
          </div>
        </div>
        <div class="success" v-if="successMessage">{{ successMessage }}</div>
        <div class="error">{{ error }}</div>
        <div v-if="Object.keys(errors).length" class="errors">
          <ul>
            <li v-for="(err, key) in errors" :key="key">{{ err[0] }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any necessary styling here */
.downarrow {
  color: hsl(0, 20%, 95%);
  text-align: center;
  width: 450px;
  position: absolute;
  bottom: 41rem;
  left: calc(50% - 225px);
  margin: 0 auto;
  font-size: 8rem;
  opacity: 1;
  transition: opacity .3s ease;
  font-family: 'Bebas Neue', cursive, sans-serif;
  pointer-events: none;
  z-index: -1;
  transform-origin: center;
  animation: blink 2s infinite, jump 3s cubic-bezier(.37,0,.21,1.02) infinite;
}

@keyframes blink {
  20%, 24%, 55% { color: #111; text-shadow: none; }
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { }
}

@keyframes jump {
  0%, 20%, 50%, 80%, to { transform: translateZ(-2px) translateY(5px); }
  40% { transform: rotateY(180deg) translateZ(-2px) translateY(-35px); }
  60% { transform: translateZ(-2px) translateY(-25px); }
}

#RegistrationText {
  text-align: center;
  margin-bottom: 20px;
}

input {
  border-radius: 11px;
  color: white;
  background-color: antiquewhite;
  border: 0.1px solid rgba(191, 202, 202, 0.5);
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.9);
  border-width: 4px 1.25em;
  border-style: solid;
}

.registration-button {
  border: 2px solid rgb(43, 34, 34, 0.6);
  border-radius: 11px;
  background-color: black;
  opacity: 0.8;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.9);
}

.form-container {
  background-color: transparent;
  opacity: 94%;
  width: 33vw;
}

.form-control {
  background-color: gray;
  opacity: 0.9;
}

.registration-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('@/assets/css/images/star-wars warplane.jpeg');
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
  opacity: 0.87;
}

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

.errors {
  color: rgb(247, 4, 4);
  text-size-adjust: 100%;
  font-size: 20px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: 900%;
}

.success,
.error {
  padding-bottom: 10px;
  font-size: 18px;
}
</style>
