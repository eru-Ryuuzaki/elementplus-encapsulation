import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    chunkSplitPlugin({
      // 指定拆包策略
      customSplitting: {
        // 1. 支持填包名。`react` 和 `react-dom` 会被打包到一个名为`render-vendor`的 chunk 里面(包括它们的依赖，如 object-assign)
        "element-plus": ["element-plus"],
        "element-plus-icons": ["@element-plus/icons"],
        // 2. 支持填正则表达式。src 中 components 和 utils 下的所有文件被会被打包为`component-util`的 chunk 中
        "components-util": [/src\/components/, /src\/utils/],
      },
    }),
  ],
  base: "./",
});
