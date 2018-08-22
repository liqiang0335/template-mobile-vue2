// Promise
import { Promise } from "es6-promise";
window.Promise = Promise;

window.log = (...arg) => {
  if (process.env.NODE_ENV === "production") return;
  console.log(
    "%c Debug ",
    "background-color:green;color:white;padding:2px;border-radius:2px;",
    ...arg
  );
};

import "ynw/style/reset.css";
import "@/style/common.scss";

import Vue from "vue";
import App from "./App";
Vue.config.productionTip = false;

import plugin from "@/script/plugin";
Vue.use(plugin);

importVueComps();

// import router from "./router";
// import store from "./store";

new Vue({
  el: "#app",
  // router,
  // store,
  render: h => h(App)
});
