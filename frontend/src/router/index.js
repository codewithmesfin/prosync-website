import { createRouter,  createWebHashHistory } from "vue-router";
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
import Insights from '../views/marketplace/Insights.vue'
import CRM from '../views/marketplace/CRM.vue'
import HRMS from '../views/marketplace/HRMS.vue'
import Healthcare from '../views/marketplace/Healthcare.vue'
import Twilio from '../views/marketplace/Twilio.vue'
import LMS from '../views/marketplace/LMS.vue'
import Builder from '../views/marketplace/Builder.vue'
import Gameplan from '../views/marketplace/Gameplan.vue'
import Raven from '../views/marketplace/Raven.vue'
import Whatsapp from '../views/marketplace/Whatsapp.vue'
import Telegram from '../views/marketplace/Telegram.vue'

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
			{
				path: "insights",
				name: "Insights",
				component: Insights,
			},
			{
				path: "crm",
				name: "CRM",
				component: CRM,
			},
			{
				path: "hrms",
				name: "HRMS",
				component: HRMS,
			},
			{
				path: "healthcare",
				name: "Healthcare",
				component: Healthcare,
			},
			{
				path: "twilio",
				name: "Twilio",
				component: Twilio,
			},
			{
				path: "school",
				name: "School",
				component: LMS,
			},
			{
				path: "builder",
				name: "Builder",
				component: Builder,
			},
			{
				path: "gameplan",
				name: "Gameplan",
				component: Gameplan,
			},
			{
				path: "raven",
				name: "Raven",
				component:Raven,
			},
			{
				path: "whatsapp",
				name: "Whatsapp",
				component:Whatsapp,
			},
			{
				path: "telegram",
				name: "Telegram",
				component:Telegram,
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
