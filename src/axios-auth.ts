import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_AUTH_URL,
  headers: { Authorization: 'Basic cm8uY2xpZW50OnNlY3JldA==' },
});


export default instance;
