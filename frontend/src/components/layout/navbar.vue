<template>
	<div class="sticky py-2 z-10 top-0 bg-gray-900">
		<div class="mx-auto md:max-w-[90%] py-1">
			<div class="flex items-center justify-between">
				<div class="flex items-center justify-between w-full">
					<router-link
						to="/"
						class="text-xl flex items-center text-white font-bold lg:ml-2.5"
					>
						<img
							class="ml-3 w-8 h-8 rounded-full"
							src="/logo.png"
							alt="Bordered avatar"
						/>
						<span class="self-center pl-2 whitespace-nowrap">ProSync</span>
					</router-link>
					<button
						@click="toggleSidebar"
						aria-expanded="true"
						aria-controls="sidebar"
						class="lg:hidden mr-2 text-white cursor-pointer p-2"
					>
						<Icon path="menu" />
					</button>
				</div>
				<div class="hidden md:flex items-center md:space-x-10 w-full">
					<div
						class="items-center md:space-x-8 justify-items-start md:justify-items-center md:flex md:pt-2 w-full left-0 top-10 px-5"
					>
						<span
							v-for="(nav, i) in navigation"
							:key="i"
							class="py-1 hover:text-green-600 text-sm text-white"
						>
							<a
								v-if="nav.name == 'Blog'"
								href="/blog"
								:class="
									$route.path === nav.href
										? 'flex brand text-green-600 cursor-pointer transition-colors duration-300'
										: 'flex  cursor-pointer transition-colors duration-300'
								"
							>
								{{ nav.name }}
							</a>
							<router-link
								v-else
								:to="nav.href"
								:target="nav.name === 'Blogs' ? '_blank' : ''"
								:class="
									$route.path === nav.href
										? 'flex brand text-green-600 cursor-pointer transition-colors duration-300'
										: 'flex  cursor-pointer transition-colors duration-300'
								"
							>
								{{ nav.name }}
							</router-link>
						</span>
					</div>
					<router-link
						to="/contact"
						class="bg-white text-gray-600 py-1 w-[130px] text-center rounded shadow"
						>Contact us</router-link
					>
				</div>
			</div>
		</div>
		<div class="flex md:hidden overflow-hidden sidebar">
			<aside
				id="sidebar"
				:class="{
					'hidden lg:flex': sidebarCollapsed,
					'lg:flex': !sidebarCollapsed,
				}"
				class="fixed bg-gray-800 z-50 h-full border-r border-r-gray-700 top-0 left-0 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
				aria-label="Sidebar"
			>
				<div class="relative flex-1 flex flex-col min-h-0 sidebar pt-0">
					<div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
						<div class="flex-1 px-3 sidebar divide-y space-y-1">
							<ul class="space-y-2 pb-2 w-full">
								<li class="flex justify-between items-center">
									<router-link to="/" class="text-xl brand font-bold lg:ml-2.5">
										<span
											class="self-center text-white pl-3 t whitespace-nowrap"
											>ProSync</span
										>
									</router-link>
									<button
										@click="toggleSidebar"
										aria-expanded="true"
										aria-controls="sidebar"
										class="lg:hidden m-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
									>
										<Icon path="close" fill="red" stroke-color="red" />
									</button>
								</li>
								<li v-for="item in navigation" :key="item.name">
									<a
										v-if="item.name == 'Blog'"
										href="/blog"
										class="text-base text-sm rounded-lg flex items-center p-2 group"
										:class="
											$route.path == item.href
												? 'text-green-600'
												: 'text-gray-300'
										"
									>
									<span class="ml-3">{{ item.name }} </span>
									</a>
									<router-link
										v-else
										:to="item.href"
										@click="toggleSidebar"
										:target="item.name === 'sadfd' ? '_blank' : ''"
										class="text-base text-sm rounded-lg flex items-center p-2 group"
										:class="
											$route.path == item.href
												? 'text-green-600'
												: 'text-gray-300'
										"
									>
										<span class="ml-3">{{ item.name }} </span>
									</router-link>
								</li>

								<li>
									<router-link
										to="/contact"
										@click="toggleSidebar"
										class="text-base text-sm rounded-lg flex items-center p-2 group"
										:class="
											$route.path == '/contact'
												? 'text-green-600'
												: 'text-gray-300'
										"
									>
										<span class="ml-3">Contact us</span>
									</router-link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</aside>
		</div>
	</div>
</template>

<script setup>
import Icon from "../../components/icon.vue";

import { ref } from "vue";

const sidebarCollapsed = ref(true);

const toggleSidebar = () => {
	sidebarCollapsed.value = !sidebarCollapsed.value;
};
const navigation = [
	{ name: "Home", href: "/", current: true },
	{ name: "About", href: "/about", current: false },
	{ name: "Marketplace", href: "/marketplace", current: false },
	{ name: "Industries", href: "/industries", current: false },
	{ name: "Pricing", href: "/pricing", current: false },
	{ name: "Blog", href: "/blog", current: false },
];
</script>
