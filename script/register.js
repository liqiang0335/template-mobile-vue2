import Vue from "vue";

const compContext = require.context("../page", true, /\.vue$/);
const getCompPathName = path => {
  const match = path.match(/\w+?(?=\/)/g);
  if (!match) return "";
  return match.map(item => item.replace(/\//g, "")).join("-") + "-";
};

compContext.keys().forEach(p => {
  //大小字母开头为路由
  //小写字母开头为组件
  const name = p.match(/([\w\-]+)\.vue$/)[1];
  if (/^[A-Z]/.test(name)) {
    return;
  }
  const folder = getCompPathName(p).toLowerCase();
  const option = compContext(p).default;
  const final = "yn-" + folder + name;
  Vue.component(final, option);
});
