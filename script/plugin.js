import { Message, MessageBox } from "element-ui";

import config from "@/script/config";
import * as api from "@/script/api";
import * as Types from "@/script/types";
import * as fn from "@/script/fn";

export default {
  install(Vue) {
    //prototype
    Vue.prototype.$fn = fn;
    Vue.prototype.$config = config;
    Vue.prototype.$types = Types;
    Vue.prototype.$api = api;

    //提示信息
    Vue.prototype.$error = message => Message({ type: "error", message });
    Vue.prototype.$success = message => Message({ type: "success", message });
    Vue.prototype.$confirm = message =>
      MessageBox.confirm(message, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      });

    //mixin
    Vue.mixin({
      methods: {
        $setState(key, value) {
          this.$store.commit("setState", { key, value });
        }
      }
    });
  }
};
