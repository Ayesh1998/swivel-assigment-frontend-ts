import axios, { AxiosInstance } from "axios";

const http = (headers: object = {}): AxiosInstance => {
  let url = process.env.BASE_URL ?? "http://localhost:5000/";
  // let url = process.env.BASE_URL ?? "https://swivel-assignment1-backend.herokuapp.com/";

  const axiosInstance = axios.create({
    baseURL: url,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers = {
        ...config.headers,
        ...headers,
      };
      return config;
    },

    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(undefined, (err) => {
    return Promise.reject(err);
  });

  return axiosInstance;
};

export default http;
