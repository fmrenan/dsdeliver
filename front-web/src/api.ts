import axios from "axios";

const base_url = 'https://dsdeliverbackend.herokuapp.com';
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAPBOX;

export function fetchProducts(){
  return axios(`${base_url}/products`)
}

export function fetchLocalMapBox(local: string){
  return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`);
}