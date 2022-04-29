import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { dom } from "@fortawesome/fontawesome-svg-core";
import { createRouter, createWebHashHistory } from "vue-router";

import Grid from "./pages/Grid.vue";

const app = createApp(App);
const routes = [
  { path: "/category/:category", name: "CategoryDetail", component: Grid },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

library.add(fab);
library.add(fas);
library.add(far);
library.add(faFontAwesome);
dom.watch();
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
