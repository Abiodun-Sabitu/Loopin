import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import configuredPrimeVue from "./primevue.config";
const app = createApp(App);
configuredPrimeVue(app);
app.mount("#app");
