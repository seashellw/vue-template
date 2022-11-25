import { createApp } from "vue";
import "@/style/style.css";
import { createPinia } from "pinia";
import { router } from "@/router/router";
import App from "@/App.vue";

const app = createApp(App);

app.use(createPinia()).use(router);

app.mount("#app");
