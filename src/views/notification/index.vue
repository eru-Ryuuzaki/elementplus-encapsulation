<template>
  <div>
    <!-- <m-notification :value="50"></m-notification>
    <br />
    <br />
    <m-notification :value="50" :max="30"></m-notification>
    <br />
    <br />
    <m-notification :value="50" isDot></m-notification>
    <br />
    <br />
    <m-notification icon="ChatRound" :value="50"></m-notification>-->
    <m-notification :value="50">
      <template #default>
        <m-list
          @clickItem="clickItem"
          @clickAction="clickAction"
          :list="list1"
          :actions="actions"
        ></m-list>
      </template>
    </m-notification>
  </div>
</template>

<script lang="ts" setup>
import { list, actions } from "./data";
import { reactive } from "vue";
let list1 = reactive(list);
let clickItem = (val: any) => {
  console.log(val);
};
let clickAction = (val: any) => {
  if (val.item.text === "清空待办") {
    console.log("清空待办");
    console.log(list1);
    list1.forEach((item, index) => {
      if (item.title === "待办") {
        item.content = [];
      }
    });
    console.log(list1);
  }
  console.log(val);
};
</script>

<style lang="scss" scoped></style>
