<template>
	<div class="w-full">
		<section class="bg-gray-900 pt-10">
			<div class="">
				<div class="w-[90%] mx-auto py-16">
					<h1 class="py-2 text-center text-3xl md:text-5xl font-bold text-white">
						100% Free Frappe products
					</h1>
					<p class="text-gray-400 text-center py-2">
						Extend functionality of your Frappe sites by finding an app that suits you
						and install it in a few steps.
					</p>
				</div>
			</div>
		</section>
		<section class="bg-gray-800">
			<div class="">
				<div class="w-[90%] md:w-[80%] mx-auto pt-10 pb-16">
					<div id="app" class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
						<div
							v-for="(item, i) in items"
							:key="i"
							@click="$router.push({ name: item.name })"
						>
							<div
								class="border border-gray-700 cursor-pointer h-full p-5 rounded hover:shadow hover:bg-gray-700"
							>
								<div class="h-full flex items-center space-x-3">
									<img :src="item.image" alt="" class="w-10 h-10" />
									<div>
										<h1 class="text-lg text-gray-200 font-semibold">
											{{ item.title }}
										</h1>
										<p class="line-clamp-2 text-gray-300 text-sm">
											{{ item.description }}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
import { ref } from "vue";

const items = [
	{
		name: "ERPNext",
		image: "https://frappecloud.com/files/erpnext-logo77b63d.png",
		title: "ERPNext",
		description: "World's best free and open source Enterprise Software Solution",
	},
	{
		name: "Insights",
		image: "https://frappecloud.com/files/Layer_1InsightsLogoNew.svg",
		title: "Insights",
		description: "Free and Open Source Data Analytics Tool for your Frappe Sites",
	},
	{
		name: "CRM",
		image: "https://frappecloud.com/files/FrappeCRM.png",
		title: "Frappe CRM",
		description:
			"Modern and 100% Open-source CRM solution to supercharge your sales operations...",
	},
	{
		name: "Builder",
		image: "https://frappecloud.com/files/builder_logo_hd.png",
		title: "Frappe Builder",
		description: "Low-code website builder for designers and developers",
	},
	{
		name: "Gameplan",
		image: "https://frappecloud.com/files/Gameplan%20Logo.png",
		title: "Gameplan",
		description: "Delightful, open-source, work communication tool for remote teams",
	},
	{
		name: "Twilio",
		image: "https://i0.wp.com/siliconspectra.com/wp-content/uploads/2019/10/logobtwiliobvector-1571991405cl84p.png?fit=700%2C700&ssl=1",
		title: "Contact Center",
		description: "Automation of your Call Center",
	},
	{
		name: "Raven",
		image: "https://frappecloud.com/files/ravicon.png",
		title: "Raven",
		description: "Simple, open source work messaging tool",
	},
	{
		name: "School",
		image: "https://frappecloud.com/files/lms-logo.png",
		title: "Education",
		description: "Easy to Use, Open Source Learning Management System",
	},
	{
		name: "HRMS",
		image: "https://frappecloud.com/files/Layer_1%20(1).png",
		title: "Frappe HR",
		description:
			"Open Source, modern, and easy-to-use HR and Payroll Software for all organizations.",
	},
	{
		name: "Whatsapp",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/800px-WhatsApp.svg.png",
		title: "Whatsapp Chat",
		description: "Chat app to Send and receive WhatsApp messages.",
	},
	{
		name: "Telegram",
		image: "https://frappecloud.com/files/Logo.png",
		title: "Telegram",
		description: "Telegram Integration for ERPNext",
	},
	{
		name: "Healthcare",
		image: "https://frappecloud.com/files/Screenshot%202021-12-14%20at%2011.19.56.png",
		title: "Healthcare",
		description:
			"One stop solution for all your Healthcare Information System(HIS) & Electronics Medical Records(EMR) needs.",
	},
];
</script>
