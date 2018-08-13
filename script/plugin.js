export default {
  install(Vue) {
    // prototype
    // Vue.prototype.$some

    //mixin
    Vue.mixin({
      methods: {
        go(url) {
          this.$router.push(url);
        }
      }
    });
  }
};
