const Qs = require("querystring");
const axios = require("axios");

const http = axios.create({
  baseURL: "http://www...",
  timeout: 30000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
  },
  transformRequest: params => Qs.stringify(params)
});

//拦截请求
http.interceptors.request.use(config => {
  // 处理config
  return config;
});

//拦截响应
http.interceptors.response.use(
  // 成功 : err.code >=200 || err.code <=300
  function(res) {
    const body = res.data;

    if (body.status != 1) {
      alert("处理服务器返回的错误码: ErrorCode");
      return Promise.reject();
    }

    //处理服务器返回的数据
    return Promise.resolve(body);
  },

  // 失败: status > 300
  function(err) {
    if (err.code === "ECONNABORTED") {
      alert("处理网络超时...");
    }
    if (err.response) {
      const res = err.response;
      console.log(res.status); // 404, 500...
      if (res.status == "500") {
        alert("处理服务器异常: 500...");
      }
    }
    return Promise.reject(err);
  }
);
