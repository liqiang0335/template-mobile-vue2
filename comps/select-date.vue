<template>
  <div>
    <van-field
      clearable
      readonly
      placeholder="请选择"
      v-model="value"
      @click="showPicker = true"
      v-bind="$attrs"
    />
    <yn-pop v-model="showPicker">
      <van-datetime-picker
        v-model="pickerValue"
        type="date"
        title="选择日期"
        @confirm="confirm"
        @cancel="showPicker = false"
        :formatter="formatter"
      />
    </yn-pop>
  </div>
</template>
<script>
import formatTime from "ynw/time/formatTime";
/**
 * ----------------------------------------
 * 日期弹窗
 * @param {Function} change(data:String)
 * ----------------------------------------
 */
export default {
  props: {
    init: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      pickerValue: new Date(),
      showPicker: false,
      value: "",
    };
  },
  watch: {
    init: {
      immediate: true,
      handler(v) {
        if (v) {
          this.value = v;
          this.$emit("change", v);
        }
      },
    },
  },
  methods: {
    confirm(val) {
      const value = formatTime(val, "YYYY-MM-DD");
      this.showPicker = false;
      this.value = value;
      this.$emit("change", value);
    },
    formatter(type, value) {
      const table = { year: "年", month: "月", day: "日" };
      return table[type] ? value + table[type] : value;
    },
  },
};
</script>
<style scoped lang="scss">
</style>
