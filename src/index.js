import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";
import "moment/locale/zh-cn";
import locale from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider locale={locale}>
    <App />
  </ConfigProvider>,
);
