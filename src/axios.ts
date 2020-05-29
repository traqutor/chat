import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://stage-1.azurewebsites.net/api',
});

export function setAxiosJWT(jwt: string) {
  instance.defaults.headers.common.Authorization = `Bearer ${jwt}`;
}

export function clearJWT() {
  delete instance.defaults.headers.common.Authorization;
}
