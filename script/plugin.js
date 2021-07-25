/**
 * ----------------------------------------
 * 校验表单: 默认检验 this.form
 * 支持校验输入的参数对象
 * ----------------------------------------
 */
const ynvalidate = function (target) {
  return new Promise((resolve, reject) => {
    const _target = target || this.form;
    for (let key in _target) {
      const value = _target[key];
      if ((value === "" || value === undefined) && this.errors[key]) {
        this.$notify(this.errors[key]);
        return reject("@表单校验失败");
      }
    }
    return resolve();
  });
};
/**
 * ----------------------------------------
 * 操作确认
 * ----------------------------------------
 */
const ynconfirm = function (message = "确定要提交吗") {
  return this.$dialog.confirm({
    title: "操作确认",
    message: message,
  });
};

export default {
  install(Vue) {
    Vue.prototype.ynvalidate = ynvalidate;
    Vue.prototype.ynconfirm = ynconfirm;
  },
};
