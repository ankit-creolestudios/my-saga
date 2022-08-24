import axios from "axios";
const makeApi = (url: string) => {
  const api = axios.create({ url });
  api.interceptors.request.use(
    (config) => {
      if (localStorage.getItem("auth-token")) {
        config.headers = {
          ...config.headers,
          Authorization: `Brearer ${localStorage.getItem("auth-token")}`,
        };
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  api.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
  );
  return api;
};
export default makeApi;
