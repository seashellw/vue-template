import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    redirect: "/home",
    children: [
      {
        path: "home",
        component: () => import("../pages/PageHome.vue"),
      },
      {
        path: "top",
        component: () => import("../pages/PageTop.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});
