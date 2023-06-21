// Este arquivo faz um papel de API Client/Rest usando o Axios

import axios from 'axios'

const api = axios.create({
  baseURL: 'https://json-food-commerce.vercel.app/',
})

// https://seusite.com/api/burgers
export const getBurgers = ()=> api.get('/burgers');

// https://seusite.com/api/pizzas
export const getPizzas = ()=> api.get('/pizzas');

// https://seusite.com/api/bebidas
export const getBebidas = ()=> api.get('/bebidas');

// https://seusite.com/api/sobremesas
export const getSobremesas = ()=> api.get('/sobremesas');


export default api;
