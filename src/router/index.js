import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// You'll create these view files in the next step
const Academic = () => import("../views/Academic.vue");
const ProfessionalGrowth = () => import("../views/ProfessionalGrowth.vue");
const Travel = () => import("../views/Travel.vue");
const Sports = () => import("../views/Sports.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/academic", component: Academic },
  { path: "/work", component: ProfessionalGrowth },
  { path: "/travel", component: Travel },
  { path: "/sports", component: Sports },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }; // Always scroll to top on page change
  },
});
