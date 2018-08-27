import config from "@/script/config";

/**
 * 验证规则
 * @param <String> value : 要验证的值
 * @param <String> key : 配置(config.js)中的字段
 * @param <Function> handler : 验证失败时执行(默认弹出提示)
 * @param <String> error : 自定义的错误信息
 *
 * 使用:
 *  await this.$fn.validate({ value: this.phone, key: "phone" });
 */
export const validate = function({ value, key, handler, error }) {
  if (!value) value = "";
  const item = config.validate[key];
  if (!item) {
    const tip = `没有在配置中找到${key}字段`;
    alert(tip);
    throw new Error(tip);
  }
  const { regex } = item;
  const errorMessage = error || item.error;

  //regex字段可以是正则或者函数
  const test = (regex, value) => {
    const isFunction = typeof regex == "function";
    return isFunction ? regex(value) : regex.test(value);
  };

  if (test(regex, value)) {
    return Promise.resolve();
  }
  if (typeof handler == "function") {
    return handler(errorMessage);
  }
  alert(errorMessage);
  return Promise.reject(errorMessage);
};

/**
 * 选择部分对象的属性
 */
export const pick = (obj, arr) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});

/**
 * 仅继承source中有的属性
 */
export const extend = function(source, target) {
  if (!target) {
    return source;
  }
  for (var key in source) {
    if (target[key] !== undefined) {
      source[key] = target[key];
    }
  }
  return source;
};
