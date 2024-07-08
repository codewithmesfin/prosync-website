<template>
	<div class="w-full md:w-[80%] mx-auto">
		<h1 class="py-2 text-center text-3xl md:text-5xl font-bold text-white">
			Frequently Asked Questions
		</h1>
		<div class="py-4">
			<div v-for="(item, i) in items" :key="i">
				<div class="flex items-center space-x-3 md:space-x-10" @click="toggleFAQ(faq==i?-1:i)">
					<div class="border-b border-gray-800 py-3 w-full">
						<h1 class="text-2xl text-gray-300 py-2">{{ item.title }}</h1>
						<p v-if="faq === i" class="mx-2 text-md text-gray-400">
							{{ item.subtitle }}
						</p>
					</div>
					<div class="cursor-pointer text-white">
						<icon v-if="faq !== i" path="plus" radius="3" />
						<icon v-else path="minus" radius="3" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import icon from "./icon.vue";
import { ref } from "vue";

const faq = ref();

const toggleFAQ = (option) => {
	faq.value = option;
};

const items = [
	{
		title: "Is there a per user limit?",
		subtitle:
			"Sites created with any of the plans do not have any user limit. However, these sites are limited by CPU hours per day. Which means if there are a lot of users using the site, the site may slow down if the CPU usage limit is reached. For a detailed explanation read this blog post on Pricing.",
	},
	{
		title: "Where are the servers hosted and where is the data stored?",
		subtitle:
			"We host servers with Amazon Web Services (AWS EC2). You can choose your datacenter location across 5 continents and 9 countries",
	},
	{
		title:"Is there a free trial?",
		subtitle:"We don't have any free trial, but when you sign up to Frappe Cloud, you'll be given a free credit of $10 after adding your card. You could use these $10 to create sites and explore any apps from the Frappe Cloud Marketplace"
	},
	{
		title:"Can I switch my plan later?",
		subtitle:"Yes, if you are unsure which shared hosting plan is best suited for you. Just start with any plan (e.g., $10/month) and monitor your usage on the Frappe Cloud Dashboard and upgrade only if necessary"
	},
	{
		title:"Will I get Technical support?",
		subtitle:"Prosync provides product warranty (replicable bug fix support) for Framework, Frappe apps for sites on and above ETB 5,700 plans. If you have purchased a dedicated server, then product warranty is available for any five sites hosted on the dedicated server. Please note, that once you switch to a supported plan, you will not be able to switch back for 30 days. If you need consultation or implementation support, you can connect with one of our official partners."
	},
	{
		title:"Can I start with a few modules and add other module(s) later?",
		subtitle:"Yes you can definitely."
	}
];
</script>
