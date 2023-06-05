import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Password from "primevue/password";
import Ripple from "primevue/ripple";
import "primevue/resources/themes/saga-blue/theme.css"; // PrimeVue theme CSS
import "primevue/resources/primevue.min.css"; // PrimeVue CSS

export default function configuredPrimeVue(app) {
  app.use(PrimeVue, { ripple: true });
  app.directive("ripple", Ripple);
  app.component("Button", Button);
  app.component("InputText", InputText);
  app.component("Password", Password);
  app.component("InputNumber", InputNumber);
}

const app = createApp(); // You create a separate Vue app instance here.
configuredPrimeVue(app);
