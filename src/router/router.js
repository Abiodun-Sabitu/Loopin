import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/LandingPage.vue";
import Dashboard from "@/views/Dashboard.vue";
import Login from "@/components/onboarding/Login.vue";
import CreateAccount from "@/components/onboarding/CreateAccount.vue";
import ResetPassword from "@/components/onboarding/ResetPassword.vue";
import OTP from "@/components/onboarding/OTP.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/landing",
    component: LandingPage,
    children: [
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/create-account",
        name: "CreateAccount",
        component: CreateAccount,
      },
      {
        path: "/reset-password",
        name: "ResetPassword",
        component: ResetPassword,
      },

      {
        path: "/otp",
        name: "OTP",
        component: OTP,
      },
    ],
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
