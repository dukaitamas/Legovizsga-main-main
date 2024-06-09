<template>
    <div class="container" >
      <div class="p-3"><h4>BEJELENTKEZÉS</h4></div>
      <div class="conatiner">
      <form class="row g-3">
      <div class="col-md-12">
        <label for="inputEmail4" class="form-label">Email:</label>
        <input required type="email" class="form-control" id="inputEmail4" autocomplete="email">
      </div>
      <br>
      <!-- <div class="col-md-12">
        <label for="inputEmail4" class="form-label">Email:</label>
        <input type="email" class="form-control" id="inputEmail4">
      </div>
      <br> -->
      <div class="col-md-12">
        <label for="inputPassword4" class="form-label">Jelszó:</label>
        <input required type="password" class="form-control" id="inputPassword4" autocomplete="current-password">
      </div>
      
      <div class="col-12 p-3" >
        <button type="submit" class="btn btn-dark" >Bejelentkezés</button>
      </div>
      </form>
        </div>
    </div>
  </template>