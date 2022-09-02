import { RouteRecordRaw } from "vue-router";

const MainRouter: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/login" },

  {
    name: "LoginPage",
    path: "/login",
    component: () => import("../../views/login/Main.vue"),
  },
];

export default MainRouter;
