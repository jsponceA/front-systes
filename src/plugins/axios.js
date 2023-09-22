import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const axiosPublic = axios.create({
  baseURL: API_BASE_URL,
});

const axiosPrivate = axios.create({
  baseURL: API_BASE_URL,
});

axiosPrivate.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${123}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosPublic, axiosPrivate };
