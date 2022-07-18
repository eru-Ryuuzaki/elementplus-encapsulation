<template>
  <m-calendar
    :events="events"
    :eventContent="eventContent"
    @date-click="dateClick"
  ></m-calendar>
</template>

<script lang="ts" setup>
import { DateClickArg } from "@fullcalendar/interaction";
import { EventItem } from "../../components/calendar/src/types";
import { ref } from "vue";
import { EventContentArg } from "@fullcalendar/core";
import { useFormatDate } from "../../hooks";

let events = ref<EventItem[]>([
  {
    title: "购物",
    start: useFormatDate("YYYY-MM-DD hh:mm:ss", new Date()),
    end: useFormatDate(
      "YYYY-MM-DD hh:mm:ss",
      new Date(Date.now() + 1000 * 60 * 60)
    ),
    editable: true,
  },
]);
let dateClick = (info: DateClickArg) => {
  console.log(info.dateStr);
  let event = {
    start: `${info.dateStr} 12:01:00`,
    end: `${info.dateStr} 13:00:30`,
    title: "吃饭",
    editable: true,
  };
  events.value.push(event);
  // console.log(info);
};

let eventContent = (arg: EventContentArg) => {
  // console.log("hhh", arg.timeText[0], arg.timeText[1], arg.timeText);
  let el = document.createElement("div");
  let timeTextArr = arg.timeText.split(" - ");
  let start = timeTextArr[0]
    .replace("上午", "")
    .replace("下午", "")
    .replace("时", "");
  let end = timeTextArr[1]
    .replace("上午", "")
    .replace("下午", "")
    .replace("时", "");
  el.innerHTML = `
        <div>${start}-${end} ${arg.event._def.title}</div>
        `;
  return {
    domNodes: [el],
  };
};
</script>

<style lang="scss" scoped></style>
