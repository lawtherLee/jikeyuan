import request from "../../utils/request";

export const loginAPI = (data) => {
  return request({
    url: "/v1_0/authorizations",
    method: "post",
    data,
  });
};

export const getUserInfoAPI = () => {
  return request({
    url: "/v1_0/user/profile",
  });
};
