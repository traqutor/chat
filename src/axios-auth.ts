import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dev-auth0.azurewebsites.net',
  headers: { Authorization: 'Basic cm8uY2xpZW50OnNlY3JldA==' },
});


export default instance;
