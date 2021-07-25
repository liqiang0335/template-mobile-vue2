<template>
  <div class="none" v-if="data.length === 0">
    <van-icon name="warning-o" style="margin-right: 5px" /> 暂无数据
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script> 
<style scoped lang='scss'>
.none {
  padding: 30px;
  background: white;
  text-align: center;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>