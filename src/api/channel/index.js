import request from "../../utils/request";

/**
 * 获取频道
 * @returns {*}
 */
export const getAllChannelsAPI = () => {
  return request({
    url: "/v1_0/channels",
  });
};
