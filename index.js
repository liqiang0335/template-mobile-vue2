// Promise
import { Promise } from "es6-promise";
window.Promise = Promise;

import "ynw/style/reset.css";
import "@/style/common.scss";

import Vue from "vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import myToast from "ynw/vue/plugin/web";
Vue.use(myToast);

importVueComps(); //导入comps文件夹下的组件

import App from "./App";

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
