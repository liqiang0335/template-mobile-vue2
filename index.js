// Promise
import { Promise } from "es6-promise";
window.Promise = Promise;

import promiseFinally from "promise.prototype.finally";
promiseFinally.shim();

import "ynw/style/reset.css";
import "@/style/common.scss";

import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

import "./script/register";
import plugin from "./script/plugin";
Vue.use(plugin);

// import router from "./router";
// import store from "./store";

new Vue({
  el: "#app",
  // router,
  // store,
  render: h => h(App)
});
