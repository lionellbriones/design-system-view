import { createApp } from "vue";
import "@toruslabs/vue-components/style.css";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Buttons from "./views/Buttons.vue";
import Primary from "./views/Primary.vue";
import Dropdown from "./views/Dropdown.vue";
import Select from "./views/Select.vue";
import TextField from "./views/TextField.vue";
import { createIcons } from "@toruslabs/vue-components";

import icons from "./icons";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Primary",
      component: Primary,
    },
    {
      path: "/Buttons",
      name: "Buttons",
      component: Buttons,
    },
    {
      path: "/Select",
      name: "Select",
      component: Select,
    },
    {
      path: "/TextField",
      name: "TextField",
      component: TextField,
    },
    {
      path: "/Dropdown",
      name: "Dropdown",
      component: Dropdown,
    },
  ],
});

createApp(App).use(router).use(createIcons(icons)).mount("#app");
