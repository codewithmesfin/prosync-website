<template>
	<div>
		<section class="bg-gray-900">
			<div class="w-full md:w-[90%] mx-auto py-10">
				<div class="py-6">
					<h1 class="py-6 text-center text-3xl md:text-8xl font-bold text-gray-100">
						<span class="font-extrabold text-green-500"> Raven </span> <br />
						Simple, open source team messaging platform
					</h1>
					<div class="w-full w-[80%] mx-auto">
						<p class="text-lg md:text-xl text-gray-300 md:text-center">
							Raven is a simple work messaging tool that is built using Frappe and
							can be installed on any new or existing Frappe site (e.g. in addition
							to ERPNext or FrappeHR). It is designed to help teams collaborate and
							communicate with each other and get work done. Teams can create their
							own channels (publically viewable or private) and send messages,
							emojis, files and images.
						</p>
					</div>
					<div class="bg-black p-10 my-16 h-full rounded-xl">
						<img
							src="https://github.com/The-Commit-Company/Raven/raw/develop/screenshots/private-channel.png"
							alt=""
							class="object-cover h-full w-full rounded-xl"
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
	'Send messages to all members in your organization (in an "open" channel), or just in your team in a private channel',
	"Create new channels for your team and your team members",
	"Send text messages 💬, code blocks 💻, emojis 😆, files 📑 and images 📸",
	'Mention users in your messages with "@"',
	"React to messages with emojis 🎉",
	"Preview image/PDF files 📁",
	"Comprehensive search 🔍 functionality for all your messages, files, channels and users",
	"Don't strain your eyes 👀 - Raven supports dark mode 🌙",
];
</script>
