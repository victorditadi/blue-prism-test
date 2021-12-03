import * as Axios from 'axios';

export const Api = Axios.default.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://blue-prism-test.vercel.app/api'
      : 'http://localhost:3000/api',
  timeout: 5000,
});
