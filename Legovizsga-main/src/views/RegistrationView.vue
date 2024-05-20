<script setup>
  
import {ref} from 'vue'

const userName = ref("")
const email = ref("")
const password = ref("")
const error = ref("")
const buttonDisabled = ref(false)
const ell = ()=> {
  console.log('ok')
  if(password.value.length >= 8)
  buttonDisabled.value = false
}
const ellenor = ()=>{
  console.log('ok ok ok')
  if (password.value.length < 8){
    error.value("A jelszónak ki kell lenni töltve!")
    // buttonDisabled.value= true
  }
else{
  buttonDisabled.value = false
  error.value = ""
}

}



</script>


<template>
  <div class="container">
    <div>Regisztrációs oldal</div>
    <div class="conatiner">
      <form class="row g-3" @submit.prevent="onsubmit">
      <div class="col-md-12">
        <label for="inputEmail4" class="form-label">Username:</label>
        <input v-model="userName" required type="text" class="form-control" id="inputEmail4">
      </div>
      <br>
      <div class="col-md-12">
        <label for="inputEmail4" class="form-label">Email:</label>
        <input  v-model="email" required type="email" class="form-control" id="inputEmail4">
      </div>
      <br>
      <div class="col-md-12">
        <label for="inputPassword4" class="form-label">Password:</label>
        <input  @keyup="ell" v-model="password" required type="password" class="form-control" id="inputPassword4">
      </div>
    
      <div class="col-12">
        <button :disabled="buttonDisabled"   @click="ellenor" type="submit" class="btn btn-primary">Sign in</button>
      </div>
      </form>

      <div class="success">{{ error }}</div>
    </div>
  </div>
</template>
