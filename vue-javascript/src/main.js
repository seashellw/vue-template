import App from "@/App.vue";
import { router } from "@/router/router";
import "@/style/index.css";
import { createPinia } from "pinia";
import { createApp } from "vue";

const app = createApp(App);

app.use(createPinia()).use(router);

app.mount("#app");
