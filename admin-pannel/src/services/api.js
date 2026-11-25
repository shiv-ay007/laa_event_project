import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
});

// Automatically attach admin token
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("laf_admin_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle expired or invalid token
api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (
      error.response?.status === 401 &&
      error.config?.url !== "/admin/login"
    ) {
      sessionStorage.removeItem("laf_admin_token");

      window.dispatchEvent(
        new Event("admin-session-expired")
      );
    }

    return Promise.reject(error);
  }
);

export default api;