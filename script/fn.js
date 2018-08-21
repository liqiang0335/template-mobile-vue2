/**
 * 选择部分对象的属性
 */
export const pick = (obj, arr) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});

/**
 * 仅继承同名的属性
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
