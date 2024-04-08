<template>
	<table class="min-w-full border border-gray-700 rounded divide-y divide-gray-700 mb-10">
		<thead class="bg-gray-800">
			<tr>
				<th
					v-for="(col, i) in customization.cols"
					:key="i"
					scope="col"
					class="px-4 py-3.5 font-semibold text-left text-gray-500"
				>
					{{ col }}
				</th>
			</tr>
		</thead>
		<tbody class="divide-y divide-gray-200 divide-gray-800 bg-gray-700">
			<tr v-for="(row, i) in customization.rows" :key="i">
				<td class="px-4 py-3 text-sm text-gray-400 whitespace-nowrap">
					{{ row.title }}
				</td>
				<td class="px-4 py-3 text-sm text-gray-400 whitespace-nowrap">
					{{ row.subtitle }}
				</td>
				<td class="px-4 py-3 text-sm text-gray-200 whitespace-nowrap">
					{{ row.price }}
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script setup>
const customization = {
	cols: ["Modules", "Description", "Price(ETB)"],
	rows: [
		{
			title: "Layout",
			subtitle: "Customization of the Admin Panel layout to look like a professional one.",
			price: "2,000",
		},
		{
			title: "Accounting",
			subtitle: "Customization of accounting components to fit your country's standards.",
			price: "10,500",
		},
		{
			title: "Taxes and Withholdings",
			subtitle: "Tax and Withholding customization based on your country's regulations.",
			price: "7,500",
		},
		{
			title: "HRMS",
			subtitle: "Human Resource Module Customization",
			price: "9,000",
		},
		{
			title: "Payroll",
			subtitle: "Customization of payroll per your country's standards.",
			price: "15,000",
		},
		{
			title: "Frappe CRM",
			subtitle: "Setup and Customization of Frappe CRM",
			price: "12,000",
		},
		{
			title: "Whatsapp integration",
			subtitle: "Integration of Whatsapp to enable whatsapp messaging",
			price: "5,000",
		},
		{
			title: "Telegram integration",
			subtitle: "Integration of Telegram Messenger to enable Telegram messaging",
			price: "7,000",
		},
		{
			title: "Manufacturing",
			subtitle: "Customization of Manufacturing module to meet your preference",
			price: "13,8000",
		},
		{
			title:"Insights",
			subtitle:"Customization of Frappe Business Intelligence Tool",
			price:"10,000"
		},
		{
			title:"Raven/Gameplan",
			subtitle:"Customization of Raven or Gameplan communication and collaboration tool",
			price:"6,500"
		},
	],
};
</script>
