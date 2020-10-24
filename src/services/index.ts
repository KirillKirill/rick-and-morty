import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

const http = axios.create({
  baseURL: API_URL,
});

export default http;
