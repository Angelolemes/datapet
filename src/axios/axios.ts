//En este lugar lo que hacemos es crear una instacia de AXIOS
//Esta es una libreria que nos ayuda a hacer peticiones a nuestro backend
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api',//Acá tenemos nuestro backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
