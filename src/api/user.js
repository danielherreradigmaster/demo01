import $axios from './config.instance';


export const apiGetUser = (data) => $axios.$post(`/usuarios`, data);
