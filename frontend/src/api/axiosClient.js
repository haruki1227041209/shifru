import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/v1",
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token"); // ログイン後に保存したJWTを取り出す
    if (token) {
      // "Authorization: Bearer <token>" ヘッダを付与
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        window.location.href = "/login";
      } else if (status === 403) {
        window.location.href = "/login";
      } else if (status === 404) {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
