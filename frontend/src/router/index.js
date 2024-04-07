import { createRouter,  createWebHashHistory, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Marketplace from "../views/marketplace/Index.vue";
import authRoutes from "./auth";
import Pricing from "../views/Pricing.vue";
import About from "../views/About.vue";
import Docs from "../views/Docs.vue";
import Demo from "../views/Demo.vue";
import Contact from "../views/Contact.vue";
import ERPNext from "../views/marketplace/ERPNext.vue";
import Blog from '../views/blog/Blogs.vue'
import Industries from '../views/Industries.vue'

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/marketplace",
		children: [
			{
				path: "",
				name: "Marketplace",
				component: Marketplace,
			},
			{
				path: "erpnext",
				name: "ERPNext",
				component: ERPNext,
			},
		],
	},
	{
		path: "/article",
		children: [
			{
				path: "",
				name: "Blog",
				component: Blog,
			},
			
		],
	},
	{
		path: "/pricing",
		name: "Pricing",
		component: Pricing,
	},
	{
		path: "/industries",
		name: "Industries",
		component: Industries,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
	{
		path: "/docs",
		name: "Docs",
		component: Docs,
	},
	{
		path: "/demo",
		name: "Demo",
		component: Demo,
	},
	{
		path: "/contact",
		name: "Contact",
		component: Contact,
	},
	...authRoutes,
];

const router = createRouter({
	base: "/frontend/",
	history: createWebHashHistory(),
	// history:createWebHistory(),
	routes,
	scrollBehavior() {
		return { top: 0, left: 0 }
	  }
});

export default router;
