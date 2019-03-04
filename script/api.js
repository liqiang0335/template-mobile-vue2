import http from "./http";

/**
 * Get请求示例
 * @param {Object} option
 * @param {Number} option.id - 用户ID
 * @param {Number, Optional} option.currentPage - 页码
 * @param {Number, Optional} option.pageSize - 每页数量
 *
 * @return {Promise} Array
 */
export async function getRequest(option) {
  const url = "/some/url";
  const params = {
    currentPage: 1,
    pageSize: 10,
    ...option
  };
  const res = await http.get(url, { params });
  return res.data;
}

/**
 * POST请求示例
 * @param {Number} id - 参数注释
 * @return {Promise} Object
 */
export async function postRequest(option) {
  const url = "/some/url";
  const params = {
    currentPage: 1,
    pageSize: 10,
    ...option
  };
  const res = await http.post(url, params);
  return res.data;
}
