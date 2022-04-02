import { App } from "vue";
import menu from "./menu";

const components = [menu];

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
