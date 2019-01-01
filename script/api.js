import http from "./http";

/**
 * Get请求示例
 * @param <Number> id: 参数注释
 * @return <Promise> Array
 */
export async function getRequest(option) {
  const url = "/some/url";
  //指定默认参数
  const def = {
    currentPage: 1,
    pageSize: 10
  };
  const params = Object.assign(def, option);
  const res = await http.get(url, { params });
  return res.data;
}

/**
 * POST请求示例
 * @param <Number> id: 参数注释
 * @return <Promise> Object
 */
export async function postRequest(option) {
  const url = "/some/url";
  //指定默认参数
  const def = {
    currentPage: 1,
    pageSize: 10
  };
  const params = Object.assign(def, option);
  const res = await http.post(url, params);
  return res.data;
}
