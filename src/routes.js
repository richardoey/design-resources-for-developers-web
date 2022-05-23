import { createRouter, createWebHashHistory } from "vue-router";
import CategoryDetail from "./views/CategoryDetail.vue";
import BaseLayout from "./layout/BaseLayout.vue";
import HomePage from './pages/HomePage.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/category",
    name: "CategoryDetail",
    component: BaseLayout,
    children: [
      { path: "/category/:category/:pageNumber", name: "CategoryDetail", component: CategoryDetail },
    ],
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
