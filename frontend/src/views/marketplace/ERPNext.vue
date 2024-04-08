<template>
	<div>
		<section class="bg-gray-900 pt-10">
			<div class="">
				<div class="w-[90%] mx-auto py-16">
					<div class="py-6">
						<div class="md:flex md:items-center md:space-x-10">
							<div class="w-full md:w-1/2">
								<h1 class="py-2 text-3xl md:text-5xl font-bold text-white">
									Streamline, Manage, Grow with ERPNext!
								</h1>
								<h2 class="text-green-600 text-lg md:text-xl py-2">
									100% Free & Open Source Enterprise Software
								</h2>
								<p class="text-gray-300">
									It a web-based system aimed at small and medium sized
									businesses. It assists companies with accounting, human
									resource management, sales, purchase, inventory, CRM,
									administration, project and task management, manufacturing, and
									even website.
								</p>
							</div>
							<div class="w-full md:w-1/2">
								<img
									src="https://erpnext.com/files/erpnext-hero-compressed.png"
									alt="erpnext"
									class=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="bg-gray-800">
			<div class="">
				<div class="w-[90%] mx-auto py-10">
					<div class="py-6">
						<h1 class="py-2 text-center text-3xl md:text-5xl font-bold text-white">
							Almost everything you need
						</h1>
						<h2 class="text-gray-300 text-lg md:text-xl text-center py-2">
							ERPNext comes with 1000+ objects to help you run your business
						</h2>
					</div>
					<div>
						<div class="grid grid-cols-1 md:grid-cols-4 gap-5">
							<div v-for="(item, i) in items" :key="i">
								<div
									class="bg-gray-700 border border-gray-600 cursor-pointer h-full p-5 rounded hover:shadow hover:bg-gray-600"
								>
									<div class="h-full flex items-center space-x-3">
										<img
											:src="item.img"
											alt=""
											class="w-10 h-10 rounded-full object-cover"
										/>
										<div>
											<h1 class="text-lg text-gray-200 font-semibold">
												{{ item.title }}
											</h1>
											<p class="text-gray-300 text-sm">
												{{ item.subtitle }}
											</p>
										</div>
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
		img: "https://erpnext.com/files/money-coins.svg",
		title: "Financial Accounting",
		subtitle:
			"Get a real-time view of your cash flow. Full-fledged accounting module covering every aspect of bookkeeping.",
	},
	{
		img: "https://img.freepik.com/free-photo/precision-grinding-within-cylindrical-shape_60438-3767.jpg?size=626&ext=jpg&ga=GA1.1.617832925.1708503188&semt=sph",
		title: "Manufacturing",
		subtitle:
			"Effectively maintain and manage multilevel bill of materials, production planning, job cards & inventory.",
	},
	{
		img: "https://nestorbird.com/assets/images/Erpimg5.webp",
		title: "Stock/Inventory",
		subtitle:
			"The Stock or Inventory module in ERPNext helps you to: Maintain details of your products and warehouses. Track receipt, transfer and delivery of materials.",
	},
	{
		img: "https://img.freepik.com/premium-vector/paper-sheet-document-icon-vector-template_917138-1985.jpg?size=626&ext=jpg&uid=R19609540&ga=GA1.1.617832925.1708503188&semt=sph",
		title: "Quotations",
		subtitle:
			"A quotation is an estimated cost of the products/services you're selling to your future/present customer. ",
	},
	{
		img: "https://img.freepik.com/free-photo/3d-render-safe-payment-via-pos-terminal-concept_107791-17433.jpg?size=626&ext=jpg&ga=GA1.2.617832925.1708503188&semt=sph",
		title: "Suppier Management",
		subtitle:
			"Suppliers are companies or individuals who provide you with products or services. ",
	},
	{
		img: "https://img.freepik.com/premium-vector/man-receiving-order-from-online-shop-male-character-happy-get-box-with-goods-bought-internet-personage-with-laptop-showing-trolley-icon-shipment-delivery-products-vector-flat-style_87689-2072.jpg?size=626&ext=jpg&uid=R19609540&ga=GA1.2.617832925.1708503188&semt=sph",
		title: "Order Management",
		subtitle:
			"Increase productivity and lower costs by managing your sales and purchase cycles, from purchase to sales orders",
	},
	{
		img: "https://nestorbird.com/assets/images/Erpimg3.webp",
		title: "Purchase",
		subtitle:
			"Suppliers are companies or individuals who provide you with products or services.",
	},
	{
		img: "https://nestorbird.com/assets/images/Erpimg2.webp",
		title: "Selling",
		subtitle:
			"Suppliers are companies or individuals who provide you with products or services. ",
	},
	{
		img: "https://img.freepik.com/free-photo/3d-render-safe-payment-via-pos-terminal-concept_107791-17433.jpg?size=626&ext=jpg&ga=GA1.2.617832925.1708503188&semt=sph",
		title: "POS",
		subtitle: "Start selling faster with ERPNext Point of Sale! Flexible POS Software",
	},
	{
		img: "https://nestorbird.com/assets/images/Erpimg8.webp",
		title: "CRM",
		subtitle:
			"Win and retain more customers by optimizing the sales process. Track leads, opportunities, and send the quotes on the go.",
	},
	{
		img: "https://nestorbird.com/assets/images/Erpimg4.webp",
		title: "Project Management",
		subtitle:
			"Deliver both internal and external projects on time, budget, and profitability. Track tasks, timesheets, and issues by project.",
	},
	{
		img: "https://img.freepik.com/free-vector/flat-design-credit-assessment-with-businessman_23-2149155223.jpg?size=626&ext=jpg&uid=R19609540&ga=GA1.1.617832925.1708503188&semt=ais",
		title: "Asset",
		subtitle:
			"The Asset Module in ERPNext has features to manage assets , depreciation, and buying, selling assets . ",
	},
	{
		img: "https://img.freepik.com/free-vector/isometric-iso-certification-concept_23-2148688048.jpg?size=626&ext=jpg&uid=R19609540&ga=GA1.1.617832925.1708503188&semt=ais",
		title: "Quality",
		subtitle:
			"ERPNext facilitates robust quality control procedures within the manufacturing process.",
	},
	{
		img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAolBMVEX///+/yclfe3sOR0cNRUUNRkYORkYcUVF3j4/a4uJTc3MAMDAKQEAMRESPo6MAODiis7Pt8vIKPz8LQkIMQ0N3iIgMQkIAMj4DNkAIPEALQUFO5o9J2Ig/v3wwmGkYXk80o21DyYARTUld/6JZ/51a/55Z/5wdaFNR7ZILQEAVVUoohF8jd1oAMDwALTssj2QDNj1P6ZEAHzYAJyfK0tKYp6cKx/GqAAABiElEQVR4AW3QBbaDMBRF0dQFUoqT4Fr3dv5T+/fVVvjlLEHeRhKGev3BEI3QeDwevBtNpjP2bK7pnAAJlYx0bfGcG5wDfAXI12hLvF/jCKJNXmikmaxvcaQSFRlLNrIdVRBR0qfMQbxNFKO7AMjzqUA4NJUi8INA8DfwaC7DCMWJF3jCT7M8ivKkIE0AwhZlRdVN7K3Csn6er4MXsCHsTVlTVVNj2FQ4bZovgPDkFqW7HKTBa/bbLYD/ASQ2lDhso7qMRSA2QQWAdVkukzaSWIKDxDE+HT3OnbMCIKTAEs4OdRYOpQIIeS7ryxF/+8lTAdqcyyYEAFEBTlqA/hb9BxsFII9qA4gnuJ7F5mUscT4S8J5AxwboAOtTsi+OAj982O6TEzbqgHcRgLAAGtrqaHc8JpcaEbBfAAHUr8po/TkFsG0Ai4TIfkvEG1hEzh1JZBAgQm2eSTUCA+tFuo0xZa5hqYSMwrQem90s1GWQZTDGFhA/BtH8dmfocdOMzjQDc8p8uJ31GPoDce1YMsrNDMQAAAAASUVORK5CYII=",
		title: "Education",
		subtitle:
			"Easy to Use, Open Source Learning Management System . Frappe LMS has a simple backend and a clean UI ensuring that the focus remains on learning.",
	},
    {
        img:"https://erpnext.com/files/Support.svg",
        title:"Help Desk",
        subtitle:"Deliver a better service experience with an intuitive issue tracker and an integrated knowledge base."
    },
    {
        img:"https://erpnext.com/files/Website.svg",
        title:"Website",
        subtitle:"ERPNext comes with fully-featured content management with blogs, web pages, and forms."
    }
];
</script>
