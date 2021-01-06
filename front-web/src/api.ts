import axios from "axios";

const base_url = 'https://dsdeliverbackend.herokuapp.com';

export function fetchProducts(){
  return axios(`${base_url}/products`)
}