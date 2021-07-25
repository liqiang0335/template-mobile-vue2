<template>
  <div class="tip">
    <van-icon name="warning" class="icon" />
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
};
</script>
<style scoped lang='scss'>
.tip {
  padding: 10px;
  color: #797979;
  display: flex;
  background: #feefe3;
  color: #c13b12;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  &:i {
    font-weight: bold;
  }
}
.icon {
  margin-right: 5px;
  font-size: 18px;
}
.content {
  padding-left: 4px;
  flex: 1;
  line-height: 1.5em;
}
</style>