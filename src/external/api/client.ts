import * as Axios from 'axios';

export const Api = Axios.default.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000,
});
