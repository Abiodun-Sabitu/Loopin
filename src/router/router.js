import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/onboarding/Login.vue"),
  },
  {
    path: "/create-account",
    name: "CreateAccount",
    component: () => import("../components/onboarding/CreateAccount.vue"),
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: () => import("../components/onboarding/ResetPassword.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
