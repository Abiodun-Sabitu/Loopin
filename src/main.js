import "./assets/main.css";
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import Rider from "@/components/onboarding/Rider.vue";
import router from "./router/router.js";
import { registerIconsGlobally } from "../src/assets/icons";

const app = createApp(App);
app.use(ElementPlus);
app.component("Rider", Rider);
registerIconsGlobally(app);
app.use(router);

app.mount("#app");
