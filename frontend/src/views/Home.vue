<template>
	<div>
		<div class="w-full h-scren">
			<section class="bg-gray-900">
				<div class="bg-[url(/files/bg1.png)] bg-no-repeat bg-cover">
					<div class="w-[90%] mx-auto py-10">
						<div class="md:flex items-center justify-center md:space-x-10">
							<div class="w-full md:w-1/2">
								<h1
									class="py-2 text-center text-3xl md:text-5xl font-bold text-gray-100"
								>
									Explore the limitless possibilities with ProSync.
								</h1>
								<p class="py-2 text-center text-gray-400 text-md md:text-lg">
									Get the perfect fit for your business. We'll customize
									<span class="text-green-400 font-extrabold text-2xl"
										>Frappe and ERPNext</span
									>
									with our expertise to ensure your success.
								</p>
								<div class="py-3 pt-10 flex justify-center">
									<router-link
										to="/contact"
										class="rounded-lg rounded-tr-[15px] bg-[#27A167] shadow-lg md:text-lg font-semibold text-white px-20 py-2"
									>
										Get Started
									</router-link>
								</div>
							</div>
							<div class="w-full md:w-1/2 flex justify-end py-10 md:py-1">
								<img src="/img1.png" alt="" class="h-full max-h-[500px]" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="bg-gray-800 pt-10 pb-3 h-full">
				<div class="w-full md:w-[90%] mx-auto h-full">
					<h1
						class="py-4 bg-[url(https://erp.techethio.com/files/Vector%201.png)] bg-no-repeat bg-bottom text-center text-3xl md:text-5xl font-bold text-white"
					>
						Get started with <br />
						100% free Enterprise Software
					</h1>
					<div class="p-5 md:bg-gray-700 my-10">
						<div class="grid grid-cols-1 md:grid-cols-3">
							<div
								v-for="(item, i) in items"
								:key="i"
								class="flex space-x-3 border border-gray-600 p-5"
							>
								<div class="text-green-500">
									<icon path="done" />
								</div>
								<div>
									<h1 class="text-gray-300">{{ item.title }}</h1>
									<p class="text-sm text-gray-400">{{ item.subtitle }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- <section class="hidden md:block bg-gray-800 py-10 h-full">
				<div class="w-[90%] mx-auto h-full">
					<img
						src="https://erpnext.com/files/erpnext-comic400604.png"
						alt=""
						class="h-full max-h-[700px]"
					/>
				</div>
			</section> -->

			<section class="bg-gray-900">
				<div class="py-10">
					<div class="w-[90%] mx-auto">
						<div class="mb-10">
							<h1
								class="py-4 bg-[url(https://erp.techethio.com/files/Vector%201.png)] bg-no-repeat bg-bottom text-center text-3xl md:text-5xl font-bold text-white"
							>
								What we do?
							</h1>
						</div>
						<div class="md:flex md:space-x-10 items-end">
							<div
								class="my-3 py-3 bg-gray-800 hover:bg-gray-700 px-5 md:px-10 rounded"
							>
								<div class="flex items-center space-x-2">
									<span class="text-white"><icon path="code" radius="3" /></span>
									<h1 class="py-2 text-2xl md:text-3xl font-bold text-white">
										Development & Customization
									</h1>
								</div>
								<p class="text-gray-200">
									Streamline your ERPNext/Frappe system with ProSync's
									customization experts. We tailor existing features and develop
									new functionalities to perfectly align with your business
									requirements. ProSync can customize workflows, interfaces, and
									reports to match your unique needs. Need a new feature or
									module? Our team builds powerful extensions to fit your
									specific requirements. Unlock the full potential of
									ERPNext/Frappe with ProSync. Contact us today to discuss your
									project.
								</p>
								<div class="py-3 pt-5">
									<router-link
										to="/contact"
										class="rounded-lg rounded-tr-[15px] bg-[#27A167] md:text-lg font-semibold text-white px-10 py-2 shadow-xl"
									>
										Meet Experts
									</router-link>
								</div>
							</div>
							<div
								class="my-2 py-3 bg-gray-800 hover:bg-gray-700 px-5 md:px-10 rounded"
							>
								<div class="flex items-center space-x-2">
									<span class="text-white"
										><icon path="sCheck" radius="2"
									/></span>
									<h1 class="py-2 text-2xl md:text-3xl font-bold text-white">
										Hosting
									</h1>
								</div>
								<p class="text-gray-200">
									We have extensive experience in hosting enterprise systems on
									various cloud computing platforms. Our team can streamline your
									hosting and deployment processes, whether you're on-premises or
									off-premises. As an official DigitalOcean partner, we can help
									you leverage their services at a discounted rate.
								</p>
								<div class="py-3 pt-5">
									<router-link
										to="/contact"
										class="rounded-lg rounded-tr-[15px] bg-[#27A167] md:text-lg font-semibold text-white px-10 py-2 shadow-xl"
									>
										Get Started
									</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="bg-gray-800">
				<div class="py-16">
					<div class="w-[90%] mx-auto">
						<div class="md:flex md:space-x-10 items-end">
							<div class="py-3">
								<h1 class="py-2 text-3xl md:text-5xl font-bold text-[#27A167]">
									The # 1 Enterprise Software
								</h1>
								<h1 class="py-2 text-3xl md:text-5xl font-bold text-white">
									Solution for Small and Medium Sized businesses.
								</h1>
								<div class="py-3 pt-5">
									<router-link
										to="/contact"
										class="rounded-lg rounded-tr-[15px] bg-[#27A167] md:text-lg font-semibold text-white px-10 py-2 shadow-xl"
									>
										Try ERPNext
									</router-link>
								</div>
							</div>
							<div class="flex justify-center">
								<img
									src="https://erp.techethio.com//files/erpnext.png"
									alt="ERPNext"
									class="rounded-xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script setup>
import Icon from "../components/icon.vue";
const items = [
	{
		title: "Affordability",
		subtitle:
			"It is a Free and Open Source Software, freely available to download and install",
	},
	{ title: "Completeness", subtitle: "All necessary modules are available" },
	{
		title: "Customization",
		subtitle: "It is easy to add fields, or add more features",
	},
	{
		title: "Efficiency",
		subtitle: "Computing requirements are relatively low (cheaper to host and manage)",
	},
	{
		title: "Wholesomeness",
		subtitle:
			"A single system and database that allows multiple users to record transactions or extract data simultaneously",
	},
	{
		title: "Easy to add new feature",
		subtitle:
			"Thanks to Frappe, adding a new feature(module) is a game, no need of IT expereince.",
	},
	{
		title: "Simple to use",
		subtitle:
			"Modern web-like user interface will keep your users happy and in familiar territory",
	},
	{
		title: "Support Experts",
		subtitle:
			"The team behing ProSync has proven expereince working on Enterprise grade softwares.",
	},
	{
		title: "Pay only if you need",
		subtitle: "Extra Customization, Hosting, Support, Training, New Feature(Module)",
	},
];
</script>
