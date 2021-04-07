import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
/**
 * 路由
 * @describe 路由体现文件的位置
 */
export default new Router({
  routes: [{ path: "/", redirect: "/home" }],
});
