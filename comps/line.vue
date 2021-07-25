<template>
  <div class="aline flex">
    <div class="label">{{ label }}</div>
    <div class="value"></div>
    <slot>--</slot>
  </div>
</template>
<script>
export default {
  props: ["label"],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang='scss'>
.aline {
  padding: 12px 30px;
  background: white;
  align-items: center;
  margin-bottom: 1px;
}
.label {
  margin-right: 2px;
  min-width: 30px;
}
.value {
  flex-grow: 1;
  word-break: break-all;
}
</style>