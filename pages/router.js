import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import HomeDetail from "./Home/Detail";
import HomeList from "./Home/List";

//路由体现文件的位置
//路由级别的组件名称大写
export default new Router({
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/home/detail", component: HomeDetail },
    { path: "/home/list", component: HomeList }
  ]
});
