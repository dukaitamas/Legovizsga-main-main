<script setup>
  
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
</template>
