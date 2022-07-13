<template>
  <div class="list-tabs__item">
    <el-tabs>
      <el-tab-pane
        v-for="(item, index) in props1.list"
        :key="index"
        :label="item.title"
      >
        <el-scrollbar max-height="300px">
          <div v-if="item.content.length > 0">
            <div
              class="container"
              @click="clickItem(item1, index1)"
              v-for="(item1, index1) in item.content"
              :key="index1"
            >
              <div class="avatar" v-if="item1.avatar">
                <el-avatar size="small" :src="item1.avatar"></el-avatar>
              </div>
              <div class="content">
                <div v-if="item1.title" class="title">
                  <div>{{ item1.title }}</div>
                  <el-tag v-if="item1.tag" size="mini" :type="item1.tagType">{{
                    item1.tag
                  }}</el-tag>
                </div>
                <div class="time" v-if="item1.desc">{{ item1.desc }}</div>
                <div class="time" v-if="item1.time">{{ item1.time }}</div>
              </div>
            </div>
          </div>
          <div v-else class="no-content-tips">当前没有新通知</div>
        </el-scrollbar>
        <div class="actions">
          <!-- 通过判断是否是最后一个选项的方式来增加分割线 -->
          <div
            class="a-item"
            :class="{ border: i !== actions.length }"
            v-for="(action, i) in actions"
            :key="i"
            @click="clickAction(action, i)"
          >
            <div class="a-icon" v-if="action.icon">
              <component :is="`el-icon-${toLine(action.icon)}`"></component>
            </div>
            <div class="a-text">{{ action.text }}</div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { ListOptions, ActionOptions, ListItem } from "./types";
import { toLine } from "../../../utils";
import { reactive } from "vue";
let props = defineProps({
  // 列表的内容
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true,
  },
  // 操作的内容
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => [],
  },
});
let props1 = reactive(props);
let emits = defineEmits(["clickItem", "clickAction"]);

let clickItem = (item: ListItem, index: number) => {
  emits("clickItem", { item, index });
};
let clickAction = (item: ActionOptions, index: number) => {
  emits("clickAction", { item, index });
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  &:hover {
    background: #e6f6ff;
  }
  .avatar {
    flex: 1;
  }
  .content {
    flex: 3;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .time {
      font-size: 12px;
      color: #999;
      margin-top: 4px;
    }
  }
}
.actions {
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  .a-item {
    height: 50px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .a-icon {
      margin-right: 4px;
      position: relative;
      top: 2px;
    }
  }
}
.border {
  border-right: 1px solid #eee;
}
svg {
  width: 1.5em;
  height: 1.5em;
}
.no-content-tips {
  margin: 1em;
  text-align: center;
}
</style>
