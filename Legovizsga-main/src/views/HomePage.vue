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
    </div>
    <!-- További tartalom itt, ha szükséges -->
  </div>
</template>

<script setup>
</script>

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

.search-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px;
}

.search-input {
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.content {
  margin-top: 20px;
}
</style>
