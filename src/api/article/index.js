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

/**
 * 发布文章
 * @param data
 * @returns {*}
 */

export const publicArticleAPI = (data) => {
  return request({
    url: "/v1_0/mp/articles?draft=" + data.draft,
    method: "post",
    data,
  });
};

/**
 * 获取文章详情
 * @param id
 * @returns {*}
 */
export const getArticleDetailAPI = (id) => {
  return request({
    url: "/v1_0/mp/articles/" + id,
  });
};

/**
 * 编辑文章
 * @param target
 * @returns {*}
 */
export const editArticleAPI = (target) => {
  return request({
    url: "/v1_0/mp/articles/" + target.id + "?draft=" + target.draft,
    method: "put",
    data: target,
  });
};
