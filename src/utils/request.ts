import axios from "axios";

const createAxiosInstance = (baseURL: string) => {
  const serves = axios.create({
    baseURL,
    timeout: 3000,
  });

  serves.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => Promise.reject(err),
  );

  serves.interceptors.response.use(
    (res) => {
      if (res.data.errCode !== 0) {
        return Promise.reject(res.data);
      }
      return res.data;
    },
    (err) => {
      if (err.message.includes("timeout")) {
        console.error("error", err);
      }
      if (err.message.includes("Network Error")) {
        console.error("error", err);
      }
      return Promise.reject(err);
    },
  );

  return serves;
};

export default createAxiosInstance;
