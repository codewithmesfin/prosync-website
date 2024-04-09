<template>
	<div>
		<div class="w-full h-scren">
			<section class="bg-black">
				<div class="bg-[url(/files/bg1.png)] bg-no-repeat bg-cover">
					<div class="w-[90%] mx-auto py-10">
						<div class="md:flex items-center justify-center md:space-x-10">
							<div class="w-full md:w-2/5">
								<h1
									class="py-2 text-center text-3xl md:text-5xl font-bold text-gray-200"
								>
									Explore the limitless possibilities of your business with
									ProSync
								</h1>
								<p class="py-2 text-center text-gray-400 text-md md:text-lg">
									Leverage our expertise to customize Frappe and ERPNext for your
									success
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
							<div class="w-full md:w-3/5 flex justify-end py-10 md:py-1">
								<img src="/img2.png" alt="" class="h-full max-h-[500px]" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="hidden md:block bg-gray-800 py-10 h-full">
				<div class="w-[90%] mx-auto h-full">
					<img
						src="https://erpnext.com/files/erpnext-comic400604.png"
						alt=""
						class="h-full max-h-[700px]"
					/>
				</div>
			</section>

			<section class="bg-gray-900">
				<div class="py-10">
					<div class="w-[90%] mx-auto">
						<div class="mb-10">
							<h1 class="py-2 text-3xl text-center md:text-5xl font-bold text-white">
								What do we do?
							</h1>
							<div
								class="h-1 rounded-tl-[30px] rounded-br-[30px] mx-auto w-[80px] bg-green-600"
							></div>
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
									<router-link to="/contact"
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
									<router-link to="/contact"
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
									<router-link to="/contact"
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

<script>
import icon from "../components/icon.vue";
export default {
	components: { icon },
	resources: {
		// ping() {
		// 	return {
		// 		method: "frappe.ping", // Method to call on backend
		// 		onSuccess(d) {
		// 			alert(d);
		// 		},
		// 	};
		// },
	},
};
</script>
