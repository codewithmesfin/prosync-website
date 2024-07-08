<template>
	<div>
		<section class="bg-gray-900">
			<div class="w-full md:w-[90%] mx-auto py-10">
				<div class="py-6">
					<h1 class="py-6 text-center text-3xl md:text-8xl font-extrabold text-gray-100">
						Crafting <span class="text-green-600">Web</span> <br />
						<span class="text-green-600">Pages</span> Made Effortless!
					</h1>
					<div class="w-full w-[70%] mx-auto">
						<p class="text-lg md:text-2xl text-gray-300 md:text-center">
							Frappe Builder is a low-code website builder designed for simplicity,
							speed, and flexibility. Craft beautiful websites effortlessly with an
							intuitive visual builder. Whether you're a designer looking for ease or
							a developer seeking customization, Frappe Builder empowers you. It also
							features a click-to-publish option that gives you the complete
							end-to-end website creation experience.
						</p>
					</div>
					<div>
						<img
							src="https://private-user-images.githubusercontent.com/13928957/293525752-e39f1057-4b60-4d1f-b8e9-049668738da6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjA0MjQxMjIsIm5iZiI6MTcyMDQyMzgyMiwicGF0aCI6Ii8xMzkyODk1Ny8yOTM1MjU3NTItZTM5ZjEwNTctNGI2MC00ZDFmLWI4ZTktMDQ5NjY4NzM4ZGE2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzA4VDA3MzAyMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA2ZTA3Y2ViNzk4NGJmNTQzYTIwZDUxZTQxYTRkNWZhMTc2MjU2NmMzY2E2MTIxMDJkMzYyYzlhNmM0Zjg0OTMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.89ucLhY8Cl8RH06j_zcw7w_NX5iHRxwJj03mkiSCAPg"
							alt=""
						/>
					</div>
					<div class="py-10 md:mt-16">
						<h1 class="text-gray-100 text-center text-3xl md:text-8xl font-extrabold">
							Features
						</h1>
						<div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-10 my-10 h-full">
							<div v-for="item in items" :key="item.title" class="h-full">
								<div class="bg-gray-600 flex items-center rounded p-5 h-full">
									<div class="flex space-x-3">
										<span class="text-green-500">
											<icon path="done" />
										</span>
										<div>
											<p class="text-gray-200 md:text-lg font-semibold">
												{{ item.title }}
											</p>
											<p class="text-gray-300">{{ item.subtitle }}</p>
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
import Icon from "../../components/icon.vue";
const items = [
	{
		title: "Intuitive Visual Builder",
		subtitle: "Simplify your workflow with a Figma-like editor.",
	},
	{
		title: "Responsive Views",
		subtitle: "Ensure your sites look great on any device without the fuss.",
	},
	{
		title: "Frappe CMS Integration",
		subtitle: "Easily fetch data from your database and create dynamic pages.",
	},
	{
		title: "Scripting Capabilities",
		subtitle: "Customize with client scripts, global scripts, and styles.",
	},
	{
		title: "Efficient Workflow",
		subtitle:
			"Use subtle shortcuts like image dropping and streamlined page copying and more to efficiently develop pages.",
	},
	{
		title: "One-Click Publishing",
		subtitle: "Instantly share your creations with the world in a single click.",
	},
	{
		title: "Performance Excellence",
		subtitle:
			"Frappe Builder does not bloat web pages with unnecessary scripts hence pages built with Frappe Builder are highly performant, consistently scoring high on Google Lighthouse tests.",
	},
	{
		title: "SEO optimized",
		subtitle: "Site Engine Optimization meta tags optimized.",
	},
];
</script>
