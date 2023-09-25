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
    const txtAuthStorage = window.localStorage.getItem("auth-storage");
    const authStorage = JSON.parse(txtAuthStorage);

    config.headers.Authorization = `Bearer ${authStorage.state?.token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosPublic, axiosPrivate };
