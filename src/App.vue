<template>
  <router-view></router-view>
</template>

<style lang="scss">
// 关掉 scope
* {
  margin: 0;
}

svg {
  width: 1em;
  height: 1em;
  // width: 10px;
  // height: 10px;
}

html,
body,
#app,
.common-layout,
.el-container,
.el-menu {
  height: 100%;
}
</style>
