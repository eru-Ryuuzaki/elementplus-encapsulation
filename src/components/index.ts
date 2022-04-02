import { App } from "vue";
import menu from "./menu";
import chooseIcon from "./chooseIcon";

const components = [menu, chooseIcon];

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
