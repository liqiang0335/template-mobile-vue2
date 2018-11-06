import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import modules from "./modules";

const store = new Vuex.Store({
  modules,
  plugins: [],
  state: {},
  mutations: {
    setState(state, { key, value }) {
      state[key] = value;
    }
  },
  actions: {}
});

export default store;
