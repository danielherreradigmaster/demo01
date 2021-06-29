import axios from 'axios';

const $axios = axios.create({//https://my-json-server.typicode.com/danielherreradigmaster/demo01/db
  baseURL: 'https://my-json-server.typicode.com/danielherreradigmaster/demo01/',
  //timeout: 1000,
});

$axios.interceptors.request.use((config) => {
  //config.headers = { ...config.headers, auth_token: getAuthToken() };
  //config.headers.Authorization = `Bearer ${your_token}`;
  /* const apiToken = sessionStorage.getItem("token");
    if (apiToken) {
      config.headers = { "x-rapidapi-key": apiToken };
    } */
  return config;
}, (error) => {
  return Promise.reject(error);
});

$axios.interceptors.response.use((response) => {
  if(response.status === 401) {
      // your failure logic
  }
  return response.data;
}, (error) => {
  /* if (error.response.status === 401) {
    //place your reentry code
   } */
  return Promise.reject(error);
});


const _axios = {
  $get: $axios.get,
  $post: $axios.post,
  $put: $axios.put,
  $delete: $axios.delete,
  $patch: $axios.patch,
};
export default _axios;