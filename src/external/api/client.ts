import * as Axios from 'axios';

export const Api = Axios.default.create({
  baseURL: 'http://localhost:3333',
  timeout: 10000,
});
