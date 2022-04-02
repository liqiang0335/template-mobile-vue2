import axios from "axios";
const transformRequest = data => new URLSearchParams(data).toString();

const http = axios.create({
  baseURL: "/",
  timeout: 30000,
  headers: {},
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
