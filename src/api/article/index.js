import request from "../../utils/request";

/**
 * 获取文章列表
 * @returns {*}
 */
export const getArticleListAPI = (params) => {
  return request({
    url: "/v1_0/mp/articles",
    params,
  });
};

/**
 * 删除文章
 * @param id
 * @returns {*}
 */
export const delArticleAPI = (id) => {
  return request({
    url: "/v1_0/mp/articles/" + id,
    method: "delete",
  });
};

export const publicArticleAPI = (data) => {
  return request({
    url: "/v1_0/mp/articles",
    method: "post",
    data,
    params: {},
  });
};
