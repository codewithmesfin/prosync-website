<template>
	<div>
		<section class="bg-gray-900">
			<div class="w-full md:w-[90%] mx-auto py-10">
				<div class="py-6">
					<h1 class="py-6 text-center text-3xl md:text-8xl font-bold text-gray-100">
						<span class="text-green-500">Telegram</span> <br> Integration and Notifications for Frappe & ERPNext
					</h1>
					<div class="w-full w-[80%] mx-auto">
						<p class="text-lg md:text-xl text-gray-300 md:text-center">
							Telegram Bot Manager for Frappe. This is a wrapper around
							python-telegram-bot tuned for frappe. Please go through the
							documentations of python-telegram-bot to easily customize your bot.
						</p>
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
	"Frappe Context for each incoming Updates",
	"Multi Bot support",
	"Runs the bot independently from the web server process",
	"Custom Bot implementations via Hooks",
	"Frappe User Login",
	"Frappe User signup",
	"Tracks Chats and contained messages",
	"Supports sending messages from bot via frappe hooks / controller methods",
	"Integration with frappe Notification doctype",
];
</script>
