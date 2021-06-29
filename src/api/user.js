import $axios from './config.instance';


export const apiGetUser = () => $axios.$get(`/usuarios`);

export const apiSendUser = (data) => $axios.$post(`/usuarios`, data);

