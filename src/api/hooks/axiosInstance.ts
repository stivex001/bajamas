import axios, { AxiosError } from "axios";
import { apiUrl } from "../../constants";
import { useAuthStore } from "../../store/authStore";

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore();
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      const { logout } = useAuthStore();
      logout();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
