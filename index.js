import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store/index";

import "./style/reset.css";
import "./style/common.css";
import "./script/register";
import "./script/vant";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  el: "#app",
  render: h => h(App),
});
