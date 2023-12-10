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
