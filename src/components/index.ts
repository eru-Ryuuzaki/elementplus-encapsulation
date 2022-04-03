import { App } from "vue";
import menu from "./menu";
import chooseIcon from "./chooseIcon";
import chooseArea from "./chooseArea";
import trend from "./trend";
const components = [menu, chooseIcon, chooseArea, trend];

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
