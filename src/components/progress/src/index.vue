<template>
  <el-progress
    :percentage="p"
    v-bind="$attrs"
    :text-inside="props.inside"
  ></el-progress>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

// 标识动画加载过程中改变的值
let p = ref<number>(0);
// 动画达到一定条件后后面的图标发生变化
const format = (percentage: number) =>
  percentage === 100 ? "Full" : `${percentage}%`;
let props = defineProps({
  // 进度条进度
  percentage: {
    type: Number,
    required: true,
  },
  // 是否有动画效果
  isAnimate: {
    type: Boolean,
    default: false,
  },
  // 动画时长(毫秒)
  time: {
    type: Number,
    default: 6000,
  },
  // 文字显示在里面还是外面
  // 显示在里面的话，如果显示条太细就会看不清楚文字
  // text-inside 属性不能和 status 一块使用
  inside: {
    type: Boolean,
    default: false,
  },
});

onMounted(() => {
  if (props.isAnimate) {
    // 后半段变快了，到时候找一下原因(1. 之前都是每次调用两次 Date, 最后一次只调用了一次(然而好像并不是这个原因))
    // 规定时间内加载完成
    // let t = Math.ceil(props.percentage / props.time);
    // let t = Math.ceil(props.time / props.percentage);
    // let timer = setInterval(() => {
    //   p.value += 1;
    //   if (p.value >= props.percentage) {
    //     p.value = props.percentage;
    //     clearInterval(timer);
    //   }
    // }, t);
    // 用 requestAnimationFrame 改造一下
    // const startTime = Date.now();
    // const raf = function () {
    //   if (Date.now() - startTime >= props.time) {
    //     p.value = props.percentage;
    //   } else {
    //     p.value = +(
    //       ((Date.now() - startTime) / props.time) *
    //       props.percentage
    //     ).toFixed(0);
    //     requestAnimationFrame(raf);
    //   }
    //   // console.log(p.value);
    // };
    const startTime = Date.now();
    const raf = function () {
      const nowTime = Date.now();
      if (nowTime - startTime >= props.time) {
        p.value = props.percentage;
      } else {
        p.value = +(
          ((nowTime - startTime) / props.time) *
          props.percentage
        ).toFixed(0);
        requestAnimationFrame(raf);
      }
      // console.log(p.value);
    };
    raf();
  }
});
</script>

<style lang="scss" scoped></style>
