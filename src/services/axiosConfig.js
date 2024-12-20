import axios from "axios";

const instance = axios.create({
  baseURL: "https://take-home-test-api.nutech-integrasi.com",
});

instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
