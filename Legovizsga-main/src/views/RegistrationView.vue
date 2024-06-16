
<script setup>
import { ref } from 'vue';
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
  if (password.value.length >= 8) {
    buttonDisabled.value = false;
  } else {
    buttonDisabled.value = true;
  }
};

const ellenor = () => {
  if (password.value.length < 8) {
    error.value = 'A jelszónak legalább 8 karakter hosszúnak kell lennie!';
  } else {
    error.value = '';
  }
};

const register = () => {
  ellenor(); // Perform validation before sending the request
  if (!error.value) { // Proceed only if there is no error
    axios.post('http://127.0.0.1:8000/api/register', {
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
          } else {
            errors.value[key] = err.response.data.errors[key];
          }
        }
      }
    });
  }
};
</script>

<template>
  <div class="registration-page p-0 m-0" >
    <div class="form-container  m-5 p-1 bg-dark bg-opacity-75">
      <h4 class="honk form-container2 fs-1 " id="RegistrationText">REGISZTRÁCIÓ</h4></div>
    <div class="container  w-25">
      <form class="row g-3" @submit.prevent="register">
        <div class="col-md-12">
          <label for="inputName" class="form-label fs-5 text-light fw-bold ">Felhasználó neve:</label>
          <input v-model="userName" required type="text" class="form-control " id="inputName" placeholder="Kérem ide írja be a felhasználónevét!">
        </div>
        <br>

        <div class="col-md-12">
          <label for="inputEmail4" class="form-label fs-5 text-light fw-bold">Email:</label>
          <input v-model="email" required type="email" class="form-control " id="inputEmail4" autocomplete="email"
            placeholder="Kérem ide írja be az email címét: pl 123@gmail.com">
        </div>
        <br>

        <div class="col-md-12">
          <label for="inputPassword4" class="form-label fs-5 text-light fw-bold">Jelszó:</label>
          <input @keyup="ell" v-model="password" required type="password" class="form-control" id="inputPassword4" autocomplete="current-password"
            placeholder="A jelszónak legalább 8 karakter hosszúnak kell lennie!">
        </div>
        <br>

        <div class="col-md-12">
          <label for="inputPasswordConfirmation" class="form-label fs-5 text-light fw-bold">Jelszó megerősítése:</label>
          <input v-model="password_confirmation" required type="password" class="form-control" id="inputPasswordConfirmation" autocomplete="current-password"
            placeholder="Kérem erősítse meg a jelszót!">
        </div>
        <br>

        <div class="col-12 p-3">
          <button :disabled="buttonDisabled" type="submit" class=" honk registration-button fs-5 btn btn-dark">Regisztráció</button>
        </div>
      </form>
      <div class="success  " v-if="successMessage">{{ successMessage }}</div>
      <div class="error  " >{{ error }}</div>
      <div v-if="Object.keys(errors).length" class="errors">
        <ul>
          <li v-for="(err, key) in errors" :key="key">{{ err[0] }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any necessary styling here */


#RegistrationText{
  /* border: 10px solid transparent;
  padding: 15px;
  border-image: url(@/assets/images/css/legologo.jpg;) 30 round !important;
  z-index:0;
  background-color: beige; */
  /* background-image: url(@/assets/images/css/legologo.jpg); */
 margin: -14px; 
 /* margin -14px-eé tűnik el a regisztráció mögötti box és nem látszik a z-indexes háttérképen */
  display: block;
}
 

input {
  border-radius: 11cap ;
  color: white;
  /* bottom: 0; */
  background-color: antiquewhite ,0.1;
  border: 0.1cap solid rgba(191, 202, 202, 0.5);
  /* a 0.5 a végén a border opacityt jelenti */
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.9);
  border-width: 4px 1.25em;
  border-style: solid;
  
}

.registration-button{
  background-color: black;
  opacity: 0.8;

}
.form-container {
  /* background-color: black; */
  opacity: 94%;
  /* display: block; */
}

.form-control{
  background-color: gray;
  opacity: 0.9;
  /* display: block; */
}
.registration-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('@/assets/css/images/star-wars warplane.jpeg');
  /* a @ a vue-ben az src mappát jelenti ezért @/assets=src/assets */
  /* background-image: url('@//assets/css/images/space/satellite.png'); */
  /* background-image: url('/Legovizsga-main/src/assets/css/images/space/satellite.png'); */
/* ez pedig az abszolút elérési út ha szükséges lehet tenni egy !important   background-image: url('@/assets/css/images/star-wars warplane.jpeg') !important;
végére */
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
  opacity: 0.87;
}

.form-container {
  background-color: rgba(255, 255, 255, 0.8); /* Fehér háttér, hogy kiemelje a formot */
  padding: 20px;
  border-radius: 10px;
  z-index: 2;
  position: relative;
  /* width: 100%; */
  max-width: 500px;
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
  color: rgb(233, 220, 220);
  text-size-adjust: 100%; 
  font-size: 45rem;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: 300;


}
.errors {
  color: red;
  /* color: rgb(233, 220, 220); */
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


<!-- <script setup>
import { ref } from 'vue';
import axios from 'axios';

// State variables
const userName = ref("");
const email = ref("");
const password = ref("");
const password_confirmation = ref("");
const error = ref("");
const buttonDisabled = ref(true); // Initially set to true to prevent form submission
const errors = ref({});

// Methods
const ell = () => {
  if (password.value.length >= 8) {
    buttonDisabled.value = false;
  } else {
    buttonDisabled.value = true;
  }
};

const ellenor = () => {
  if (password.value.length < 8) {
    error.value = 'A jelszónak legalább 8 karakter hosszúnak kell lennie!';
  } else {
    error.value = '';
  }
};

const register = () => {
  ellenor(); // Perform validation before sending the request
  if (!error.value) { // Proceed only if there is no error
    axios.post('http://127.0.0.1:8000/api/register', {
      name: userName.value,
      email: email.value,
      password: password.value,
      password_confirmation: password_confirmation.value,
    })
    .then(response => {
      console.log('Registration successful', response.data);
      // Handle successful registration, e.g., redirect the user
    })
    .catch(err => {
      if (err.response && err.response.status === 422) {
        errors.value = err.response.data.errors;
      }
    });
  }
};
</script>

<template>
  <div class="container" p-2>
    <div class="p-3"><h4>REGISZTRÁCIÓ</h4></div>
    <div class="container">
      <form class="row g-3" @submit.prevent="register">
        <div class="col-md-12">
          <label for="inputName" class="form-label">Felhasználó neve:</label>
          <input v-model="userName" required type="text" class="form-control" id="inputName" placeholder="Kérem ide írja be a felhasználónevét!">
        </div>
        <br>
        <div class="col-md-12">
          <label for="inputEmail4" class="form-label">Email:</label>
          <input v-model="email" required type="email" class="form-control" id="inputEmail4" autocomplete="email"
            placeholder="Kérem ide írja be az email címét: pl 123@gmail.com">
        </div>
        <br>
        <div class="col-md-12">
          <label for="inputPassword4" class="form-label">Jelszó:</label>
          <input @keyup="ell" v-model="password" required type="password" class="form-control" id="inputPassword4" autocomplete="current-password"
            placeholder="A jelszónak legalább 8 karakter hosszúnak kell lennie!">
        </div>
        <div class="col-md-12">
          <label for="inputPasswordConfirmation" class="form-label">Jelszó megerősítése:</label>
          <input v-model="password_confirmation" required type="password" class="form-control" id="inputPasswordConfirmation" autocomplete="current-password"
            placeholder="Kérem erősítse meg a jelszót!">
        </div>
        <div class="col-12 p-3">
          <button :disabled="buttonDisabled" type="submit" class="btn btn-dark">Regisztráció</button>
        </div>
      </form>
      <div class="error">{{ error }}</div>
      <div v-if="Object.keys(errors).length" class="errors">
        <ul>
          <li v-for="(err, key) in errors" :key="key">{{ err[0] }}</li>
        </ul>
      </div>
    </div>
  </div>
</template> -->



<!-- <script setup>
  
import {ref} from 'vue';
import axios from 'axios';



const userName = ref("");
const email = ref("");
const password = ref("");
const error = ref("");
const buttonDisabled = ref(false);
const password_confirmation = ref('');
const errors = ref({});


const ell = ()=> {
  console.log('ok')
  if(password.value.length >= 8)
  buttonDisabled.value = false
};
// const ellenor = ()=>{
//   console.log('ok ok ok')
//   if (password.value.length < 8){
//     error.value = ("A jelszónak legalább 8 karakter hosszúnak kell lennie!")
//     // buttonDisabled.value= true
//   }
// else{
//   buttonDisabled.value = false
//   error.value = ""
// }}

const ellenor = () => {
  if (password.value.length < 8) {
    error.value = 'A jelszónak legalább 8 karakter hosszúnak kell lennie!';
  } else {
    buttonDisabled.value = false;
    error.value = '';
  }
};

const register = () => {
  axios.post('http://127.0.0.1:8000/api/register', {
    name: userName.value,
    email: email.value,
    password: password.value,
    password_confirmation: password_confirmation.value,
  })
  .then(response => {
    console.log('Registration successful', response.data);
    // Redirect or notify the user about successful registration
  })
  .catch(error => {
    if (error.response && error.response.status === 422) {
      errors.value = error.response.data.errors;
    }
  });
};



// script verzió nem pedig script setup
// import axios from 'axios';

// export default {
//   data() {
//     return {
//       name: '',
//       email: '',
//       password: '',
//       password_confirmation: '',
//       errors: {}
//     };
//   },
//   methods: {
//     register() {
//       axios.post('http://127.0.0.1:8000/api/register', {
//         name: this.name,
//         email: this.email,
//         password: this.password,
//         password_confirmation: this.password_confirmation
//       })
//       .then(response => {
//         console.log('Registration successful', response.data);
//       })
//       .catch(error => {
//         if (error.response.status === 422) {
//           this.errors = error.response.data.errors;
//         }
//       });
//     }
//   }
// };

</script>


<template>
  <div class="container" p-2>
    <div class="p-3"><h4>REGISZTRÁCIÓ</h4></div>
    <div class="conatiner">
      <form class="row g-3" @submit.prevent="onsubmit">
      <div class="col-md-12">
        <label for="inputName" class="form-label">Felhasználó neve:</label>
        <input v-model="userName" required type="text" class="form-control" id="inputName" placeholder="Kérem ide írja be a felhasználónevét!">
      </div>
      <br>
      <div class="col-md-12">
        <label for="inputEmail4" class="form-label">Email:</label>
          <input v-model="email" required type="email" class="form-control" id="inputEmail4" autocomplete="email"
            placeholder="Kérem ide írja be az email címét: pl 123@gmail.com">
      </div>
      <br>
      <div class="col-md-12">
        <label for="inputPassword4" class="form-label">Jelszó:</label>
          <input @keyup="ell" v-model="password" required type="password" class="form-control" id="inputPassword4" autocomplete="current-password"
            placeholder="A jelszónak legalább 8 karakter hosszúnak kell lennie!">
      </div>
    
      <div class="col-12 p-3">
        <button :disabled="buttonDisabled"   @click="ellenor" type="submit" class="btn btn-dark">Regisztráció</button>

      </div>
      </form>

      <div class="success">{{ error }}</div>
    </div>
  </div>
</template> -->
