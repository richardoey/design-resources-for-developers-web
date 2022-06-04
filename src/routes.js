import { createRouter, createWebHashHistory } from "vue-router";
import CategoryDetail from "./views/CategoryDetail.vue";
import SearchResult from "./views/SearchResult.vue";
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
  {
    path: "/search",
    name: "SearchResult",
    component: BaseLayout,
    children: [
      { path: "/search/:filter/:keyword", name: "SearchResult", component: SearchResult },
    ],
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
