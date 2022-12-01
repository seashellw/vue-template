import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    redirect: "/home",
    children: [
      {
        path: "home",
        component: () => import("../pages/PageHome.vue"),
        meta: {
          keepAlive: true,
        },
      },
      {
        path: "top",
        component: () => import("../pages/PageTop.vue"),
        meta: {
          keepAlive: true,
        },
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});
