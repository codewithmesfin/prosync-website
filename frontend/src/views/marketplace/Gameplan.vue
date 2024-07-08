<template>
	<div>
		<section class="bg-gray-900">
			<div class="w-full md:w-[90%] mx-auto py-10">
				<div class="py-6">
					<h1 class="py-6 text-center text-3xl md:text-8xl font-bold text-gray-100">
						<span class="font-extrabold text-green-500"> G A M E P L A N </span> <br />
						Delightful, open-source, work communication tool for remote teams
					</h1>
					<div class="w-full w-[80%] mx-auto">
						<p class="text-lg md:text-xl text-gray-300 md:text-center">
							Gameplan is a work communication tool for teams who mostly work remote
							and prefer having meaningful discussions in an async format. We built
							it for ourselves because we were finding it difficult to keep track of
							so many conversations in our chat tool. Chat forces you to be online
							all the time and doesn't really have any concept of threaded
							discussions. Gameplan allows you to categorize your discussions around
							projects and teams. It also doubles up as your team's knowledge
							archive. You can surface important information and conclusions from
							your discussions into the readme's of your projects and teams.
						</p>
					</div>
					<div>
						<img
							src="https://user-images.githubusercontent.com/9355208/190922102-daff8e9f-e34f-4129-a520-dcf834e92958.png"
							alt=""
						/>
					</div>
					<div class="py-10 md:mt-16">
						<h1 class="text-gray-100 text-center text-3xl md:text-8xl font-extrabold">
							Features
						</h1>
						<div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-10 my-10 h-full">
							<div v-for="item in items" :key="item" class="h-full">
								<div class="bg-gray-600 flex items-center rounded p-5 h-full">
									<div class="flex space-x-3">
										<span class="text-green-500">
											<icon path="done" />
										</span>
										<div>
											<p class="text-gray-200 md:text-lg">
												{{ item }}
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
import Icon from "../../components/icon.vue";
const items = [
"Organize discussions into projects which in turn are part of a team 🗄",
    "Surface important information for your project and team in the Readme 📝",
    "Simple layout that optimizes readability of discussions 🤓",
    "People directory with each person's profile page 👨‍👩‍👧‍👦",
    "Set cover image, profile photo, short bio and an 'About me' section 🦹🏼‍♀️",
    "Powerful search capabilities to find older discussions 🔍",
    "A common discussions feed that shows discussions from across projects and teams 📚",
    "Delightful user-experience in overall usage ✨"
];
</script>
