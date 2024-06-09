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
    error.value = ("A jelszónak legalább 8 karakter hosszúnak kell lennie!")
    // buttonDisabled.value= true
  }
else{
  buttonDisabled.value = false
  error.value = ""
}

}



</script>


<template>
  <div class="container" p-2>
    <div class="p-3"><h4>REGISZTRÁCIÓ</h4></div>
    <div class="conatiner">
      <form class="row g-3" @submit.prevent="onsubmit">
      <div class="col-md-12">
        <label for="inputEmail4" class="form-label">Felhasználó neve:</label>
        <input v-model="userName" required type="text" class="form-control" id="inputEmail4" placeholder="Kérem ide írja be a felhasználónevét!">
      </div>
      <br>
      <div class="col-md-12">
        <label for="inputEmail4" class="form-label">Email:</label>
          <input v-model="email" required type="email" class="form-control" id="inputEmail4"
            placeholder="Kérem ide írja be az email címét: pl 123@gmail.com">
      </div>
      <br>
      <div class="col-md-12">
        <label for="inputPassword4" class="form-label">Jelszó:</label>
          <input @keyup="ell" v-model="password" required type="password" class="form-control" id="inputPassword4"
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
