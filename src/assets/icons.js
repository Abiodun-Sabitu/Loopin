// icons.js
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaBars, FaBell, HiSolidX } from "oh-vue-icons/icons";

addIcons(FaBars, FaBell, HiSolidX);

export function registerIconsGlobally(app) {
  app.component("v-icon", OhVueIcon);
}
