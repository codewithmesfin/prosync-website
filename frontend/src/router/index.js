import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Marketplace from "../views/Marketplace.vue";
import authRoutes from './auth';
import Pricing from "../views/Pricing.vue";

const routes = [
  {
	path: "/",
	name: "Home",
	component: Home,
  },
  {
    path: "/marketplace",
    name: "Marketplace",
    component: Marketplace,
    },
    {
      path: "/pricing",
      name: "Pricing",
      component: Pricing,
      },
  ...authRoutes,
];

const router = createRouter({
  base: "/frontend/",
  history: createWebHistory(),
  routes,
});

export default router;
