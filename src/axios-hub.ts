import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://stage-1.azurewebsites.net',
});

export default instance;
