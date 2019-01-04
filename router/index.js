import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import Detail from "./Home/Detail";
import List from "./Home/List";

export default new Router({
  routes: [
    { path: "/", redirect: "/login" },
    //要从路由上能看出文件的位置: /home/detail
    //路由级别的组件名称大写
    { path: "/home/detail", component: Detail },
    { path: "/home/list", component: List }
  ]
});
