import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "@/router/router";
import "@/style/index.css";
import App from "@/App.vue";
import { ElMessage } from "element-plus";

const app = createApp(App);
app.component(ElMessage.name, ElMessage);
app.use(createPinia()).use(router);

app.mount("#app");
