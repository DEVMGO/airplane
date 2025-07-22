import axios from "axios";
import jsCookie from "js-cookie";
import { toast } from "react-toastify";

export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const authHttpService = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const publicHttpService = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

authHttpService.interceptors.request.use(
  (config) => {
    const token = jsCookie.get("token") as string;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authHttpService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      jsCookie.remove("token");
      window.location.href = "/";
      toast.error("Token expired.");
    }
    return Promise.reject(error);
  }
);
