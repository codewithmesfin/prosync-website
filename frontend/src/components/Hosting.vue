<template>
	<div>
		<div class="py-1">
			<h1 class="py-2 mb-6 text-center text-2xl md:text-3xl font-bold text-white">
				1. Shared Hosting
			</h1>
			<table class="min-w-full border border-gray-700 rounded divide-y divide-gray-700">
				<thead class="bg-gray-800">
					<tr>
						<th
							v-for="(col, i) in option.sharedCols"
							:key="i"
							scope="col"
							class="px-4 py-3.5 text-sm text-left text-gray-300"
						>
							ETB {{ col }}
						</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200 divide-gray-800 bg-gray-700">
					<tr v-for="(row, i) in option.shared" :key="i">
						<td
							v-for="item in row.cols"
							:key="item"
							class="px-4 py-3 text-sm text-gray-400 whitespace-nowrap"
						>
							<span v-if="item === true"><icon path="done" /> </span>
							<span v-else-if="item === false"></span>
							<span v-else>{{ item }}</span>
						</td>
					</tr>
					<tr>
						<td class="px-4 py-3 text-sm text-gray-400 whitespace-nowrap">Try now</td>
						<td class="px-4 py-3 text-sm whitespace-nowrap">
							<router-link to="" class="text-green-600">Sign up</router-link>
						</td>
						<td class="px-4 py-3 text-sm whitespace-nowrap">
							<router-link to="" class="text-green-600">Sign up</router-link>
						</td>
						<td class="px-4 py-3 text-sm whitespace-nowrap">
							<router-link to="" class="text-green-600">Sign up</router-link>
						</td>
						<td class="px-4 py-3 text-sm whitespace-nowrap">
							<router-link to="" class="text-green-600">Sign up</router-link>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="py-10">
			<h1 class="py-2 mb-6 text-center text-2xl md:text-3xl font-bold text-white">
				2. Dedicated Hosting
			</h1>
			<table class="min-w-full border border-gray-700 rounded divide-y divide-gray-700">
				<thead class="bg-gray-800">
					<tr>
						<th
							v-for="(col, i) in option.deddicatedCols"
							:key="i"
							scope="col"
							class="px-4 py-3.5 text-sm font-semibold text-left text-gray-300"
						>
							ETB {{ col }}
						</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200 divide-gray-800 bg-gray-700">
					<tr v-for="(row, i) in option.deddicated" :key="i">
						<td
							v-for="item in row.cols"
							:key="item"
							class="px-4 py-3 text-sm text-gray-400 whitespace-nowrap"
						>
							<span v-if="item === true"><icon path="done" /> </span>
							<span v-else-if="item === false"></span>
							<span v-else>{{ item }}</span>
						</td>
					</tr>
					<tr>
						<td class="px-4 py-3 text-sm text-gray-400 whitespace-nowrap">Try now</td>
						<td class="px-4 py-3 text-sm whitespace-nowrap">
							<router-link to="" class="text-green-600">Sign up</router-link>
						</td>
						<td class="px-4 py-3 text-sm whitespace-nowrap">
							<router-link to="" class="text-green-600">Sign up</router-link>
						</td>
						<td class="px-4 py-3 text-sm whitespace-nowrap">
							<router-link to="" class="text-green-600">Sign up</router-link>
						</td>
						<td class="px-4 py-3 text-sm whitespace-nowrap">
							<router-link to="" class="text-green-600">Sign up</router-link>
						</td>
						<td class="px-4 py-3 text-sm whitespace-nowrap">
							<router-link to="" class="text-green-600">Sign up</router-link>
						</td>
						<td class="px-4 py-3 text-sm whitespace-nowrap">
							<router-link to="" class="text-green-600">Sign up</router-link>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script setup>
import Icon from "../components/icon.vue";
import { ref } from "vue";

const option = {
	sharedCols: ["Pricing per Month", "840", "1,560", "3,000", "5,880"],
	shared: [
		{ cols: ["Tranfer", "1 TB", "2 TB", "3 TB", "4 TB"] },
		{ cols: ["RAM", "1 GB", "2 GB", "2 GB", "4 GB"] },
		{ cols: ["SSD Disk", "25 GB", "50 GB", "60 GB", "80 GB"] },
		{ cols: ["CPU", "1", "1", "2", "2"] },
		{ cols: ["App Upgrades", false, false, true, true] },
		{ cols: ["Automated backups", false, false, false, true] },
		{ cols: ["SSH Accesses", false, false, false, true] },
		{ cols: ["Prosync Support", false, true, true, true] },
	],
	deddicatedCols: [
		"Pricing per Month",
		"5,760",
		"11,400",
		"22,680",
		"45,240",
		"90,360",
		"135,480",
	],
	deddicated: [
		{ cols: ["Tranfer", "4 TB", "5 TB", "6 TB", "7 TB", "9 TB", "11 TB"] },
		{ cols: ["RAM", "4 GB", "8 GB", "16 GB", "32 GB","64 GB","96 GB"] },
		{ cols: ["SSD Disk", "50 GB", "100 GB", "200 GB", "400 GB","800 GB","1.17 TB"] },
		{ cols: ["CPU", "2", "4", "8", "16","32","48"] },
		{ cols: ["App Upgrades", true, true, true, true,true,true] },
		{ cols: ["Automated backups", true, true, true, true,true,true] },
		{ cols: ["SSH Accesses", true, true, true, true,true,true] },
		{ cols: ["Prosync Support", true, true, true, true,true,true] },
	],
};
</script>
