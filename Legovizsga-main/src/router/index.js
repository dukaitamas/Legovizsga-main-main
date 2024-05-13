import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Registration from "../views/RegistrationView.vue";
import Login from "../views/LoginView.vue";

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
  ],
});

export default router;
