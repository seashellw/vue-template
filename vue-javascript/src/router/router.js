import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
      children: [
        {
          path: "home",
          component: () => import("../pages/PageHome.vue"),
        },
      ],
    },
  ],
});
