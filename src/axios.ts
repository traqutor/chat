import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://stage-1.azurewebsites.net/api',
});

export default instance;
