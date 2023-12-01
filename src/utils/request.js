import axios from "axios";
import { getToken } from "./storage";

const instance = axios.create({
  baseURL: "http://geek.itheima.net/",
  timeout: 5000,
});

// 请求拦截器
instance.interceptors.request.use(
  function (config) {
    const token = JSON.parse(getToken());
    if (token) {
      config.headers.Authorization = "Bearer " + token.token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// 响应拦截器
instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default instance;
