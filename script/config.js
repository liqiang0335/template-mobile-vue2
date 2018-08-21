/**
 * 配置文件
 */
export default {
  //正则验证
  validate: {
    phone: {
      regex: /^1[0-9]{10}$/,
      error: "无效的手机号"
    },
    notEmpty: {
      regex: /^[^\s]+$/,
      error: "输入不能为空"
    }
  }
};
