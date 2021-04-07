const baseURL = window.path; // 服务器地址
const ErrorCode = {}; //错误码

////////////////////////////////////////////

import { request } from "ynw/lib/axios";
const http = request({ baseURL });
import { Message } from "element-ui";

/**
 * 统一处理错误
 */
const response = body => {
  if (body.status != 1) {
    const message = ErrorCode[body.status];
    Message({ type: "error", message });
    return Promise.reject(body.status);
  } else {
    return body.data;
  }
};

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
  return response(res.data);
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
  return response(res.data);
}
