import axios from "axios";
import { getToken, removeToken } from "./storage";
import { message } from "antd";
import history from "./history";

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
  async function (error) {
    if (error.response && error.response.status === 401) {
      await message.error("token过期了");
      // window.location.href = "/login"; 会刷新
      history.push("/login");
      removeToken();
    }
    return Promise.reject(error);
  },
);

export default instance;
