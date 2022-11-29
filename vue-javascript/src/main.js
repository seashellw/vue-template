import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "@/router/router";
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/style/style.css";

import App from "@/App.vue";

const app = createApp(App);

app.use(createPinia()).use(router);

app.mount("#app");
