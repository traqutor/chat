import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dev-1.azurewebsites.net',
});

export default instance;
