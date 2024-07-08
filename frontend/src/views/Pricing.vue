<template>
	<div class="w-full">
		<section class="bg-gray-900">
			<div class="">
				<div class="w-[90%] mx-auto pt-16 pb-8">
					<h1 class="py-2 text-center text-3xl md:text-5xl font-bold text-white">
						Affordable, Predictable Pricing
					</h1>
					<p class="text-gray-400 text-center py-2">
						Always know what you'll pay with flat pricing across all plans.
					</p>
					<div class="mx-auto w-full md:max-w-[600px] mt-8 mb-5">
						<div class="rounded-xl bg-gray-800">
							<div class="flex justify-center space-x-5 md:space-x-10">
								<button
									v-for="option in options"
									:key="option"
									class="w-1/2 text-white py-3 px-10 rounded-xl"
									:class="defaultOption == option ? 'bg-black' : ''"
									@click="toggleOption(option)"
								>
									{{ option }}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="bg-gray-900 pb-16">
			<div class="">
				<div class="w-[90%] md:w-[80%] mx-auto pt-10 pb-16">
					<div class="w-full overflow-x-auto" v-if="defaultOption == 'Customization'">
						<Customization />
					</div>
					<div v-else class="w-full overflow-x-auto">
						<Hosting />
					</div>
					<div class="pt-10">
						<PricingFAQ />
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
import Customization from "../components/Customization.vue";
import Hosting from "../components/Hosting.vue";
import PricingFAQ from "../components/PricingFAQ.vue";

import { ref } from "vue";

const options = ["Customization", "Hosting"];
const defaultOption = ref(options[0]);

const toggleOption = (option) => {
	defaultOption.value = option;
};
</script>
