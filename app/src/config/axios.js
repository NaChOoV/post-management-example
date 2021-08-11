import axios from 'axios';
const { REACT_APP_API_URL } = process.env;

const postApi = axios.create({
  baseURL: REACT_APP_API_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export default postApi;
