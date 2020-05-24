import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.VUE_APP_URL,
});

export function setJWT(jwt: string) {
  instance.defaults.headers.common.Authorization = `Bearer ${jwt}`;
}

export function clearJWT() {
  delete instance.defaults.headers.common.Authorization;
}
