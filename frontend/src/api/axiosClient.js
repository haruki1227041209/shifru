import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  withCredentials: true,
});

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
