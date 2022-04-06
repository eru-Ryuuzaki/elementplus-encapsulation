import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as Icons from "@element-plus/icons";
import { toLine } from "./utils";
import mUI from "./components";
import "./mock";

const app = createApp(App);

// 全局注册图标
for (let i in Icons) {
  //   console.log(`el-icon-${toLine(i)}`);
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i]);
}

app.use(router).use(ElementPlus).use(mUI);
app.mount("#app");
