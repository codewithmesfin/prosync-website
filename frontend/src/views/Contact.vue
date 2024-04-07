<template>
	<div class="w-full">
		<section class="bg-gray-900">
			<div class="">
				<div class="w-[90%] mx-auto pt-16 pb-8">
					<h1 class="py-2 text-center text-3xl md:text-5xl font-bold text-white">
						Experts are here to help you.
					</h1>
					<p class="text-gray-400 text-center py-2">
						Always know what you'll pay with flat pricing across all plans.
					</p>
				</div>
			</div>
		</section>
		<section class="bg-gray-900">
			<div class="">
				<div class="w-[90%] md:w-[85%] mx-auto pt-10 pb-10">
					<div class="md:flex md:items-center md:space-x-20">
						<div class="w-full md:w-3/5 my-2">
							<div class="py-2 hidden md:block">
								<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div
										class="h-full"
										v-for="(item, i) in supportOptions"
										:key="i"
									>
										<div
											class="border border-gray-800 h-full hover:bg-gray-800 rounded p-5"
										>
											<h1 class="text-md text-gray-200">{{ item.title }}</h1>
											<p class="py-2 text-gray-400 text-sm">
												{{ item.subtitle }}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="w-full md:w-2/5 my-2">
							<div class="py-5 px-5 md:px-8">
								<form @submit.prevent="submit">
									<div class="py-2">
										<p class="py-2 text-gray-300">Full Name</p>
										<input
											type="text"
											placeholder="Enter your name"
											required
											v-model="formData.fullname"
											class="w-full py-2 rounded px-3 bg-gray-700 text-gray-400 focus:outline-none"
										/>
									</div>
									<div class="py-2">
										<p class="py-2 text-gray-300">Email</p>
										<input
											type="email"
											placeholder="Enter your email"
											required
											v-model="formData.email"
											class="w-full py-2 rounded px-3 bg-gray-700 text-gray-400 focus:outline-none"
										/>
									</div>
									<div class="py-2">
										<p class="py-2 text-gray-300">Phone Number</p>
										<input
											type="text"
											pattern="^\+[1-9]\d{1,14}$"
											placeholder="Enter your phone number"
											required
											v-model="formData.phonenumber"
											class="w-full py-2 rounded px-3 bg-gray-700 text-gray-400 focus:outline-none"
										/>
									</div>
									<div class="py-2">
										<p class="py-2 text-gray-300">Message</p>
										<textarea
											rows="6"
											placeholder="Write your message here"
											required
											v-model="formData.message"
											class="w-full py-2 rounded px-3 bg-gray-700 text-gray-400 focus:outline-none"
										/>
									</div>
									<div class="py-2">
										<button
											type="submit"
											class="w-full bg-green-600 py-2 rounded shadow text-white font-semibold"
										>
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="bg-gray-800 py-8">
			<div class="w-[90%] mx-auto">
				<div class="pt-2 md:pt-10">
					<h1 class="text-3xl text-center md:text-5xl text-gray-200">Contact us</h1>
					<div class="py-3 grid grid-cols-1 md:grid-cols-3">
						<div class="f9" v-for="(item, i) in items" :key="i">
							<div class="flex py-2 items-center text-white space-x-3">
								<icon path="done" />
								<p>{{ item.title }}</p>
								<a :href="item.href" class="text-green-600">{{ item.value }} </a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section>
			<div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15762.13127313632!2d38.7831875!3d9.0150625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85eb2e952955%3A0x2a0ca568eceaa264!2sTechEthio%20IT%20Solution%20PLC!5e0!3m2!1sam!2set!4v1712343527463!5m2!1sam!2set"
					width="100%"
					height="600"
					style="border: 0"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</section>
	</div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import icon from "../components/icon.vue";

const options = ["Customization", "Hosting"];
const defaultOption = ref(options[0]);

const toggleOption = (option) => {
	defaultOption.value = option;
};

const items = [
	{
		title: "Phone Number",
		value: "+251911522902",
		href: "tel:+251911522902",
	},
	{
		title: "Email",
		value: "sales@prosync.com",
		href: "mailto:sales@prosync.com",
	},
	{
		title: "Linkedin",
		value: "@prosync",
		href: "https://www.linkedin.com/in/prosync",
	},
	{
		title: "Facebook",
		value: "@prosync",
		href: "https://facebook.com/prosync",
	},
	{
		title: "Address",
		value: "22 Mazoria, Tigat Building, 8th Floor, Addis Ababa, Ethiopia",
		href: "https://maps.app.goo.gl/vxsqBXFZbTwtoTvf6",
	},
];

const supportOptions = [
	{
		title: "Frappe & ERPNext Cofiguration",
		subtitle:
			"We can help you setting up your Frappe/ERPNext project based on your preference.",
	},
	{
		title: "Module Customization",
		subtitle:
			"We can help you customizing frappe and erpnext modules and features to meet your business interest",
	},
	{
		title: "New Feature Development",
		subtitle: "We can develop a completely new Frappe app(s) to meet your requirement.",
	},
	{
		title: "Hosting and Server Management",
		subtitle: "Our DevOps experts are working hard to to make your system hostings smoother.",
	},
	{
		title: "Training",
		subtitle:
			"Our team of Frappe and ERPNext experts can teach your both technical and system training.",
	},
	{
		title: "Maintenance",
		subtitle: "We working hard to keep your system is reliable and running smoother.",
	},
];

const formData = ref({
	fullname: "",
	phonenumber: "",
	email: "",
	linkedin: "",
	message: "",
});
const submit = () => {
	axios
		.post("/api/method/prosync.api.captureLead", formData.value)
		.then((res) => {
			alert("Message has been sent!");
			formData.value = {
				fullName: "",
				email: "",
				phoneNumber: "",
				message: "",
			};
		})
		.catch((err) => alert("Unable to send your message. Try again."));
};
</script>
