import "./style.css";

import { createApp } from "vue";
import { createHead } from "@unhead/vue/client";
import App from "./App.vue";

const app = createApp(App);
const head = createHead();

app.use(head);
app.mount("#app");
