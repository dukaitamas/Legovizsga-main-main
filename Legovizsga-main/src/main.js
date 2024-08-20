import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from  "./axios";

import App from "./App.vue";
import router from "./router";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './assets/css/style.css';

const app = createApp(App);

axios.defaults.withCredentials = true;

const script = document.createElement('script');
script.src = 'https://assets.calendly.com/assets/external/widget.js';
script.async = true;
document.head.appendChild(script);

app.use(createPinia());
app.use(router);

app.mount("#app");
