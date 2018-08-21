<template>
  <div>
    <input type="text" v-model="phone" placeholder="请输入手机号">
    <button @click="submit">提交</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phone: ""
    };
  },
  computed: {},
  watch: {},
  methods: {
    async submit() {
      //表单验证
      await this.$fn.validate({
        value: this.phone.trim(),
        key: "phone"
      });

      //设置State
      this.$setState("userId", 100);
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "~@/style/common.scss";
</style>

