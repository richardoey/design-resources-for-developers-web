import { createRouter, createWebHashHistory } from "vue-router";
import CategoryDetail from "./views/CategoryDetail.vue";
import BaseLayout from "./layout/BaseLayout.vue";

const routes = [
  {
    path: "/",
    name: "BaseLayout",
    component: BaseLayout,
    children: [
      { path: "/category/:category", name: "CategoryDetail", component: CategoryDetail },
    ],
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
