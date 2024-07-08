<template>
	<div>
		<section class="bg-gray-900">
			<div class="w-[90%] mx-auto py-10">
				<div class="py-6">
					<h1 class="py-6 text-center text-3xl md:text-8xl font-extrabold text-gray-100">
						Simple to use, <br />
						100% free open source <br />
						<span class="text-green-600">Learning Management System</span>
					</h1>
					<div>
						<img
							src="https://camo.githubusercontent.com/f1b3476302386de13bf6e6143b1175bcc9f4b6163b7c426b532d5738c30608c0/68747470733a2f2f6672617070656c6d732e636f6d2f66696c65732f62616e6e65722e706e67"
							alt=""
						/>
					</div>
					<div class="py-10 md:mt-16">
						<h1 class="text-gray-100 text-center text-3xl md:text-8xl font-extrabold">
							Features
						</h1>
						<div class="grid grid-cols-1 grid-cols-4 gap-4 md:gap-10 my-10">
							<div v-for="item in items" :key="item.title">
								<div class="flex space-x-3">
									<span class="text-green-500">
										<icon path="done" />
									</span>
									<p class="text-gray-300 md:text-lg">{{ item }}</p>
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
	"Create online courses. 📚",
	"Add detailed descriptions and preview videos to the course. 🎬",
	"Add videos, quizzes, and assignments to your lessons and make them interesting and interactive 📝",
	"Discussions section below each lesson where instructors and students can interact with each other. 💬",
	"Create batches to group your students based on courses and track their progress 🏛",
	"Statistics dashboard that provides all important numbers at a glimpse. 📈",
	"Job Board where users can post and look for jobs. 💼",
	"People directory with each person's profile page 👨‍👩‍👧‍👦",
	"Set cover image, profile photo, short bio, and other professional information. 🦹🏼‍♀️",
	"Simple layout that optimizes readability 🤓",
	"Delightful user experience in overall usage ✨",
];
</script>
