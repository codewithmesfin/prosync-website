<template>
	<div>
		<section class="bg-gray-900">
			<div class="w-[90%] mx-auto py-10">
				<div class="py-6">
					<div class="mx-auto w-full md:w-[70%]">
						<h1 class="py-6 text-center text-3xl md:text-7xl font-bold text-gray-200">
							Build a stronger <br />
							company culture with the right HR technology
						</h1>
						<h2 class="text-lg md:text-2xl text-gray-300 text-center">
							HR & Payroll, Your Way: Frappe HR is the key to unlocking excellence
							within your team. This open-source solution offers a modern and
							user-friendly platform that adapts to your specific needs. Simplify HR
							and payroll with Frappe HR.
						</h2>
					</div>
					<div class="py-10">
						<img
							src="https://frappehr.com/files/homepage-hero.png"
							alt=""
							class="h-full w-full"
						/>
					</div>
				</div>
			</div>
		</section>

		<section class="bg-gray-900">
			<div class="w-[90%] mx-auto py-10 bg-gray-700 p-5 md:p-10 rounded-lg">
				<div>
					<h3 class="py-5 text-lg md:text-4xl text-center text-white">Key Features</h3>
					<div class="py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
						<div v-for="item in keyFeatures" :key="item">
							<div class="flex space-x-3 items-center">
								<span class="text-green-600 rounded-full p-1">
									<Icon path="done"
								/></span>
								<p class="text-gray-300">{{ item }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="bg-gray-900">
			<div class="w-[90%] mx-auto py-10">
				<div>
					<h3 class="py-5 text-3xl md:text-8xl text-center text-white font-extrabold">
						Why you <br />
						choose Frappe HRMS ?
					</h3>
					<div class="py-5 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
						<div v-for="item in reasons" :key="item">
							<div class="flex space-x-3 items-center">
								<span class="text-green-600 rounded-full p-1">
									<img :src="item.img" alt="" class="h-8 w-8 rounded-full" />
								</span>
								<h2 class="text-gray-200 text-lg md:text-xl">{{ item.title }}</h2>
							</div>
							<div class="py-2">
								<p class="text-gray-300">{{ item.subtitle }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="bg-gray-700">
			<div class="w-[90%] mx-auto py-10">
				<div class="">
					<h1 class="text-green-300 text-lg md:text-xl text-center py-2">
						We're Innovating
					</h1>
					<h1 class="py-2 text-gray-200 text-2xl md:text-5xl font-extrabold text-center">
						Try ProSync today
					</h1>
					<div class="py-5 flex justify-center">
						<router-link
							to="/contact"
							class="rounded-xl bg-[#27A167] md:text-lg font-semibold text-white px-5 py-2 shadow-xl"
						>
							Meet the Team
						</router-link>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
import Icon from "../../components/icon.vue";
const keyFeatures = [
	"Employee Management",
	"Employee Lifecycle",
	"Leave and Attendance",
	"Shift Management",
	"Expense Claims and Advances",
	"Hiring",
	"Performance Management",
	"Fleet Management",
	"Training",
	"Payroll",
	"Taxation",
	"Compensation",
	"Analytics",
];

const reasons = [
	{
		img: "https://frappehr.com/files/open-source.webp",
		title: "100% Open Source",
		subtitle:
			"Everything we do is out in the open. With the flexibility that Open Source software provides, backed up by a community that will support you, there will never be a struggle for solutions.",
	},
	{
		img: "https://frappehr.com/files/easy.webp",
		title: "Simple to use, easier to manage",
		subtitle:
			"Automate mundane tasks, and take charge of your processes. Frappe HR helps you manage complex workflows, structure your assignments and set up payroll with ease.",
	},
	{
		img: "https://frappehr.com/files/freedom.webp",
		title: "We believe in the freedom of choice",
		subtitle:
			"Built on the flexible Frappe Framework, Frappe HR lets you configure and customize to your liking. Create reports, forms, custom fields, print formats, and change layouts on the fly!",
	},
	{
		img: "https://frappehr.com/files/hr.webp",
		title: "Affordability",
		subtitle:
			"Frappe HR is built for everyone in the organization: Employees, Team, and Company. Deliver the best employee and HR experience with affordable pricing.",
	},
	{
		img: "https://frappehr.com/files/brew.webp",
		title: "Perfectly made for you",
		subtitle:
			"With frequent updates, consistent support, and a user-first approach, we go above and beyond to deliver the product you need.",
	},
	{
		img: "https://frappehr.com/files/clutter-free.webp",
		title: "Beautifully designed",
		subtitle:
			"With a clean UI, powerful navigation, and easy communication tracking, Frappe HR provides a delightful experience by making processes less overwhelming.",
	},
];
</script>
