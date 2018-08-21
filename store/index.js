import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [],
  modules: {},
  state: {},
  mutations: {
    setState(state, { key, value }) {
      state[key] = value;
    }
  },
  actions: {}
});

export default store;
