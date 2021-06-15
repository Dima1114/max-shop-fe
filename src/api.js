import axios from 'axios';

export const publicApi = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_API_URL,
  withCredentials: true
});

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true
});
