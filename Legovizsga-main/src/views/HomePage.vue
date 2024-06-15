
<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const isLoggedIn = ref(true); // Ez legyen true, ha be van jelentkezve a felhasználó
const router = useRouter();

const logout = () => {
  isLoggedIn.value = false;
  // További kijelentkezési logika itt
  router.push('/login');
};
</script>


<template>
  <div class="homepage-container">
    <div class="search-content-container">
      <div class="search-container">
        <input type="text" placeholder="Keresés..." class="search-input" />
      </div>
      <div class="content">
        <h1>Üdvözöljük a LEGO weboldalon!</h1>
        <p>Itt találja a legjobb LEGO készleteket.</p>
      </div>
      <div class="logout-container">
        <button @click="logout" class="logout-button">Kijelentkezés</button>
      </div>
    </div>
    <!-- További tartalom itt, ha szükséges -->
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

.search-container  .logout-container{
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px;
}

.search-input  .logout-button{
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}


.logout-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.logout-button {
  padding: 10px 20px;
  border: none;
  background-color: #ff4d4d;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.logout-button:hover {
  background-color: #ff1a1a;
}

.content {
  margin-top: 20px;
}

</style>
