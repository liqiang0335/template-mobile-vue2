import { Promise } from "es6-promise";
window.Promise = Promise;

import promiseFinally from "promise.prototype.finally";
promiseFinally.shim();

import "ynw/style/reset.css";
import "./style/common.scss";

import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: h => h(App)
});
