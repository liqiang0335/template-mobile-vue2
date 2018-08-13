import Vue from "vue";
import Vuex from "vuex";

import { setter, logger } from "ynw/vue/vuexHelper";

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [logger],
  modules: {},
  state: {},
  mutations: {
    setState: setter
  },
  actions: {}
});

export default store;
