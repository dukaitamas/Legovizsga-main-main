import axios from 'axios';

//axios.defaults.baseURL = 'http://127.0.0.1:8000';
//axios.defaults.withCredentials = true; 
//axios.defaults.method = 'post'; // Győződj meg róla, hogy a POST metódus az alapértelmezett


// axios.interceptors.request.use(config => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// }, error => {
//   return Promise.reject(error);
// });

// axios.interceptors.response.use(response => {
//   return response;
// }, error => {
//   if (error.response.status === 401) {
//     // Redirect to login or show unauthorized message
//   }
//   return Promise.reject(error);
// });


// Alapértelmezett beállítások
axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.withCredentials = true; // Sütik továbbítása kérések során
axios.defaults.method = 'post'; // Győződj meg róla, hogy a POST metódus az alapértelmezett

// Kérés interceptor (köztes lépés a kérés elküldése előtt)
axios.interceptors.request.use(config => {
  // Ha van token a localStorage-ban, beállítjuk az Authorization fejlécet
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // CSRF token kezelése a Laravel számára
  const xsrfToken = document.cookie.split('; ').find(row => row.startsWith('XSRF-TOKEN='));
  if (xsrfToken) {
    config.headers['X-XSRF-TOKEN'] = xsrfToken.split('=')[1];
  }

  return config;
}, error => {
  return Promise.reject(error);
});

// Válasz interceptor (köztes lépés a válasz megérkezése után)
axios.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response && error.response.status === 401) {
    // Ha az API válasza 401, irányítsuk át a felhasználót a bejelentkezési oldalra, vagy mutassunk üzenetet
    // Itt teheted meg az újrairányítást vagy egyéb kezelést
  }
  return Promise.reject(error);
});

export default axios;
