import * as Axios from 'axios';

export const Api = Axios.default.create({
  baseURL: 'https://blue-prism-test.vercel.app/api',
  timeout: 10000,
});
