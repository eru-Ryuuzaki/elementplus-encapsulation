import { App } from "vue";
import menu from "./menu";
import chooseIcon from "./chooseIcon";
import chooseArea from "./chooseArea";
import trend from "./trend";
import notification from "./notification";
import list from "./list";
import progress from "./progress";
import chooseDate from "./chooseDate";
import chooseCity from "./chooseCity";
import calendar from "./calendar";
const components = [
  menu,
  chooseIcon,
  chooseArea,
  trend,
  notification,
  list,
  progress,
  chooseDate,
  chooseCity,
  calendar,
];

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
