<template>
  <m-choose-area @change="changeArea"></m-choose-area>
</template>

<script lang="ts" setup>
let changeArea = (val: any) => {
  // 输出选择完毕后的信息
  console.log(val);
};
</script>

<style lang="scss" scoped></style>
