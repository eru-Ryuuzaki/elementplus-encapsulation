import { App } from "vue";
import menu from "./menu";
import chooseIcon from "./chooseIcon";
import chooseArea from "./chooseArea";
import trend from "./trend";
import notification from "./notification";
import list from "./list";
import progress from "./progress";
const components = [
  menu,
  chooseIcon,
  chooseArea,
  trend,
  notification,
  list,
  progress,
];

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
