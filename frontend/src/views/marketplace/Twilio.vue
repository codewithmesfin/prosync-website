<template>
	<div>
		<section class="bg-gray-900">
			<div class="w-[90%] mx-auto py-10">
				<div class="py-6">
					<h1 class="py-6 text-center text-3xl md:text-8xl font-extrabold text-gray-100">
						Innovative tool <br />
						for automating your <br /><span class="text-green-600">Call Center</span>
					</h1>
					<div class="md:flex md:items-center md:space-x-10 py-10 md:mt-16">
						<div class="w-full md:w-1/2">
							<h2 class="text-gray-200 text-lg md:text-4xl py-2">
								The Power of <span class="text-green-600">Contact Centers</span> in
								a Multi-Channel World
							</h2>
							<p class="text-gray-300 md:text-lg">
								In today’s rapidly evolving customer service landscape, businesses
								must adapt to meet the complex needs of their customers. As
								customer needs and touch-points grow increasingly complex,
								businesses must adapt to meet their expectations. Traditional call
								centers have evolved into contact centers, enabling companies to be
								more accessible and available to customers.
							</p>
							<div class="grid grid-cols-1 grid-cols-3 gap-4 my-10 h-full">
								<div v-for="item in items" :key="item.title" class="h-full">
									<p
										class="md:text-lg shadow bg-gray-700 text-white p-5 rounded h-full items-center flex"
									>
										{{ item }}
									</p>
								</div>
							</div>
						</div>
						<div class="w-full md:w-1/2">
							<img
								src="https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?t=st=1720414804~exp=1720418404~hmac=180d3d269099950f58b13288e54757f14f9faea780a98f836d8dba925381faf2&w=1380"
								alt="erpnext"
								class="rounded-full"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
const items = [
	"Users can make outgoing voice calls by clicking at the phone icon that shows up next to the phone number.",
	"Users can receive Incoming calls either in Phone or in browser.",
	"Users can send notifications through whatsapp.",
];
</script>
