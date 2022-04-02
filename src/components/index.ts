import { App } from "vue";
import menu from "./menu";
import chooseIcon from "./chooseIcon";
import chooseArea from "./chooseArea";
const components = [menu, chooseIcon, chooseArea];

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
