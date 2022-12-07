import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import ElementPlus from "unplugin-element-plus/vite";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus({}),
  ],
  base: "/vue/",
  resolve: {
    alias: {
      "@": resolve("./src"),
    },
  },
  build: {
    sourcemap: true,
  },
  css: {
    devSourcemap: true,
  },
});
