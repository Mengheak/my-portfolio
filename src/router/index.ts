import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"; 
import Login from "../views/Login.vue";
// import Signup from "../views/Signup.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
  // { path: "/signup", name: "Signup", component: Signup },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
