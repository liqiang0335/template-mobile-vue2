import Vue from "vue";

const compContext = require.context("../comps", true, /\.vue$/);
const getCompPathName = path => {
  const match = path.match(/\w+?(?=\/)/g);
  if (!match) return "";
  return match.map(item => item.replace(/\//g, "")).join("-") + "-";
};

compContext.keys().forEach(p => {
  const name = p.match(/([\w\-]+)\.vue$/)[1];
  const folder = getCompPathName(p).toLowerCase();
  const option = compContext(p).default;
  const final = "yn-" + folder + name;
  Vue.component(final, option);
});
