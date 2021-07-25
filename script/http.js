import Qs from "querystring";
import axios from "axios";

const http = axios.create({
  baseURL: "/",
  timeout: 30000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
  transformRequest: params => Qs.stringify(params),
});

export default http;

http.interceptors.request.use(config => {
  return config;
});

http.interceptors.response.use(
  function (res) {
    const body = res.data;
    return body;
  },
  function (err) {
    if (err.response) {
      const res = err.response;
      console.log(res.status);
      if (res.status == 500) {
        console.log("服务器异常");
      }
    }
    if (err.code === "ECONNABORTED") {
      console.log("网络超时");
    }
    return Promise.reject(err);
  }
);
