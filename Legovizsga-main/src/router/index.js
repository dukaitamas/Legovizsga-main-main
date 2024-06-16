import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Registration from "../views/RegistrationView.vue";
import Login from "../views/LoginView.vue";
import HomePage from "../views/HomePage.vue";
// import StartPage from "/index.html";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    
    {
      path: "/registration",
      name: "Registration",
      component: Registration,
    },


    {
      path: "/login",
      name: "Login",
      component: Login,
    },


    {
      path: "/home",
      name: "Loginolva",
      component: HomePage,
    },// Új oldal útvonala a login gombra kattintva


    // {
    //   path: "/en-hu",
    //   name: "EnHu",
    //   component: StartPage,
    //  } // Or the specific component you want to render for this path
  ],

});

export default router;




// import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import Registration from "../views/RegistrationView.vue";
// import Login from "../views/LoginView.vue";
// import LanguageSwitcher from "../views/LanguageSwitcher.vue"; // Ezt importáld, vagy hozz létre egy új komponenst
// import NotFound from "../views/NotFound.vue"; // Ezt importáld, vagy hozz létre egy új komponenst

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: "/",
//       name: "Home",
//       component: HomeView,
//     },
//     {
//       path: "/registration",
//       name: "Registration",
//       component: Registration,
//     },
//     {
//       path: "/login",
//       name: "Login",
//       component: Login,
//     },
//     {
//       path: "/en-hu",
//       name: "LanguageSwitcher",
//       component: LanguageSwitcher, // Hozz létre egy megfelelő komponenst ehhez az útvonalhoz
//     },
//     {
//       path: "/:pathMatch(.*)*",
//       name: "NotFound",
//       component: NotFound, // Hozz létre egy NotFound komponenst
//     },
//   ],
// });

// export default router;

