import Axios from "axios";
Axios.defaults.baseURL = "http://localhost:8000";
// ez a backend laravel portja

// Axios.defaults.baseURL = "http://localhost:3000";
// npm i json-server és npx json-server C:\Users\tomi2\Legovizsga-main-main\Legovizsga-main\legoJo.json
// npx i json-server legoJo.json frontend fake backend database server

export default {
  getAllThemes() {
    return Axios.get("/api/themes")
    // return Axios.get("/themes")  // Axios.defaults.baseURL = "http://localhost:3000"; for fake backend json server
      .then((resp) => {
        // console.log(resp.data);
        return resp.data;
      })
      .catch((err) => {
        //console.log(err);
        return Promise.reject(err);
      });
  },
  getAllSets() {
    return Axios.get("/api/sets")
    // return Axios.get("/sets")//  Axios.defaults.baseURL = "http://localhost:3000"; for fake backend json server
      .then((resp) => {
        // console.log(resp.data);
        return resp.data;
      })
      .catch((err) => {
        //console.log(err);
        return Promise.reject(err);
      });
  },
  getSetsById(id) {
    return Axios.get(`/api/sets/${id}`)
      .then((resp) => {
        console.log(resp.data);
        return resp.data;
      })
      .catch((err) => {
        //console.log(err);
        return Promise.reject(err);
      });
  },
  // saveUser(újobjektum) {
  //  return Axios.post("/valamik", újobjektum).then(() => {});
  // },
  // updateUser(módosítottObjektum, id) {
  //   return Axios.put(`/valamik/${id}`, módosítottObjektum).then(() => {});
  // },
  
};

// const API_URL = 'http://127.0.0.1:8000/api';

