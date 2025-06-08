import { createRouter, createWebHistory } from "vue-router";
import MainHome from "../views/MainHome.vue";
import Login from "../views/Login.vue";
import Personal from "../views/Personal.vue";
// import Signup from "../views/Signup.vue";

const routes = [
  { path: "/", name: "Home", component: MainHome },
  { path: "/login", name: "Login", component: Login },
  { path: "/personal", name: "Personal", component: Personal },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
