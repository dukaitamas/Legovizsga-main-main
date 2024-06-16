
<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const isLoggedIn = ref(true); // Ez legyen true, ha be van jelentkezve a felhasználó
const router = useRouter();

const logout = () => {
  isLoggedIn.value = false;
  //  kijelentkezési logika 
  // router.push('/login');

   // URL history reset
   router.replace('/login');
  window.location.replace('/'); 
  // Frissíti az oldalt, és törli az előző oldalakat a history-ból
};
</script>




<template>

  
  <div class="homepage-container">

    <div class="search-content-container">
    
      <div class="search-container">
        <input type="text" placeholder="Keresés..." class="search-input my-0" />
      </div>
     
      <div class="logout-container">
        <button @click="logout" class=" honk logout-button fs-3 my-0 py-1">Kijelentkezés</button>
      </div>

      <div class="content">
      <h1>Üdvözöljük a LEGO weboldalon!</h1>
      <p>Itt találja a legjobb LEGO készleteket.</p>
    </div>

    </div>
    
    
  </div>
</template>



<style scoped>
.homepage-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  text-align: center;
}

.search-content-container {
  width: 100%;
}

.search-container, .logout-container{
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px;
}

.search-input, .logout-button{
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
}




.logout-button {
  padding: 10px 20px;
  border: none;
  background-color: #ff4d4d;
  color: white;
  border-radius: 8px;
  cursor: pointer;
}

.logout-button:hover {
  background-color: #da1818;
}

.content {
  margin-top: 10px;
}

</style>
