import axios from "axios";

export const BaseApiUrl = 'https://tarmeezacademy.com/api/v1';

const api = axios.create({
  baseURL: BaseApiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 2500,
});

api.interceptors.request.use(
  (config) => {
    const excludeTokenEndpoints = ['/login', '/register'];

    if (config.method !== 'get' && !excludeTokenEndpoints.includes(config.url ? config.url : "")) {
      const token = localStorage.getItem('userToken');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
