import axios from 'axios';

const postApi = axios.create({
  baseURL: 'http://192.168.0.7:5000/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export default postApi;
