<template>
	<div>
		<div class="w-full">
			<section class="bg-gray-900">
				<div class="">
					<div class="w-[90%] mx-auto pt-16 pb-8">
						<div class="py-3 mx-auto w-full md:max-w-4xl">
							<h1
								class="py-4 bg-[url(https://erp.techethio.com/files/Vector%201.png)] bg-no-repeat bg-bottom text-center text-3xl md:text-5xl font-bold text-white"
							>
								Get to Know ProSync Better
							</h1>
							<p class="text-gray-300 md:text-xl text-center py-8">
								<span class="text-green-400">Meet ProSync</span>, a team working
								hard to deliver products of exceptional quality to small and medium
								sized businesses in Ethiopia and provide a real value to the world.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section class="bg-gray-900">
				<div class="w-[90%] mx-auto">
					<img
						src="https://prosync.site/files/about.jpg"
						alt=""
						class="w-full h-full rounded object-contain"
					/>
				</div>
			</section>

			<section class="bg-gray-900">
				<div class="">
					<div class="w-[90%] mx-auto pt-16 pb-8">
						<div class="md:flex items-center md:space-x-10">
							<div class="w-full md:w-1/2">
								<h1 class="py-2 text-3xl md:text-5xl font-bold text-white">
									About ProSync
								</h1>
								<p class="text-gray-300 py-2">
									<span class="text-green-400">ProSync</span> is a team of
									software engineers, AI specialists, and digital marketers
									leveraging the expertise of TechEthio IT Solution plc. <br />
									<span class="text-green-400">ProSync</span>
									boasts a diverse range of expertise, allowing us to develop and
									refine ERPNext and Frappe products specifically for the
									Ethiopian market. We take a collaborative approach, ensuring
									not only perfect alignment with your unique challenges but also
									the creation of innovative solutions.
								</p>
								<p class="text-gray-300 py-2">
									With ProSync, Ethiopian SMEs can harness the power of advanced
									technology to optimize their processes, enhance productivity,
									and stay ahead in today's competitive market. Our commitment to
									excellence, coupled with a passion for innovation, ensures that
									our clients receive solutions that are not just functional, but
									transformative. At TechEthio IT Solution plc, we stand as a
									trusted partner for Ethiopian businesses, driving digital
									evolution and empowering growth every step of the way.
								</p>
							</div>
							<div class="w-full md:w-1/2 py-10 md:py-1">
								<img
									src="https://prosync.site/files/aboutus.png"
									alt=""
									class="rounded"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="bg-gray-800">
				<div class="w-[90%] mx-auto py-10">
					<div class="w-full">
						<h1
							class="py-4 bg-[url(https://erp.techethio.com/files/Vector%201.png)] bg-no-repeat bg-bottom text-center text-3xl md:text-5xl font-bold text-white"
						>
							Why ProSync ?
						</h1>

						<p class="py-4 text-center text-gray-200 text-md md:text-lg">
							We are Creating Great Lives For Great People
						</p>
					</div>
					<div class="py-10">
						<div class="grid grid-cols-1 md:grid-cols-4 gap-5">
							<div v-for="(item, i) in items" :key="i">
								<div class="bg-gray-700 rounded p-5 h-full">
									<div class="flex space-x-3">
										<div class="text-green-400 mt-3">
											<icon path="done" />
										</div>
										<h1
											class="text-green-600 text-md md:text-lg py-2 font-semibold"
										>
											{{ item.title }}
										</h1>
									</div>
									<p class="text-sm text-gray-300">{{ item.subtitle }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="bg-gray-900">
				<div class="w-[90%] mx-auto py-10">
					<div class="md:flex md:space-x-20">
						<div class="w-full md:w-1/2">
							<p class="text-green-500 py-2">MISSION</p>
							<h1 class="py-2 text-xl md:text-3xl font-bold text-white">
								To help small and medium enterprises connect to opportunity and
								positively impact Ethiopia's economy.
							</h1>
						</div>
						<div class="w-full md:w-1/2">
							<p class="text-green-500 py-2">VISION</p>
							<h1 class="py-2 text-xl md:text-3xl font-bold text-white">
								To maximize the potential of every professional globally.
							</h1>
						</div>
					</div>
				</div>
			</section>

			<section class="bg-gray-800">
				<div class="w-[90%] mx-auto py-10">
					<div class="w-full">
						<h2 class="text-center text-green-600">Leadership</h2>
						<h1
							class="py-4 bg-[url(https://erp.techethio.com/files/Vector%201.png)] bg-no-repeat bg-bottom text-center text-3xl md:text-5xl font-bold text-white"
						>
							Meet Our Team
						</h1>

						<p class="py-4 text-center text-gray-200 text-md md:text-lg">
							We are Creating Great Lives For Great People
						</p>
					</div>
					<div class="py-10">
						<div class="grid grid-cols-1 md:grid-cols-3 gap-5">
							<div v-for="(item, i) in team" :key="i">
								<div class="rounded h-full">
									<div class="flex items-center space-x-4 md:space-x-5 py-5">
										<div class="h-full min-h-[200px] max-w-[200px]">
											<img
												:src="item.picture"
												alt=""
												class="w-full h-full object-cover rounded"
											/>
										</div>
										<div class="w-full">
											<h1 class="text-gray-100">
												{{ item.name }}
											</h1>
											<h2 class="text-green-500 py-2 text-sm font-bold">
												{{ item.title }}
											</h2>
											<p class="text-sm text-gray-300">{{ item.bio }}</p>
											<div class="flex space-x-3 py-2">
												<div v-for="(x, j) in item.links" :key="j">
													<a :href="x.href" target="_blank">
														<img
															:src="x.url"
															alt=""
															class="rounded-full h-6 w-6"
														/>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="bg-gray-700">
				<div class="w-[90%] mx-auto py-10">
					<div class="">
						<h1 class="text-green-300 text-lg md:text-xl text-center py-2">
							We're Innovating
						</h1>
						<h1
							class="py-2 text-gray-200 text-2xl md:text-5xl font-extrabold text-center"
						>
							Try ProSync today
						</h1>
						<div class="py-5 flex justify-center">
							<router-link
								to="/contact"
								class="rounded-xl bg-[#27A167] md:text-lg font-semibold text-white px-5 py-2 shadow-xl"
							>
								Meet the Team
							</router-link>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script setup>
import Icon from "../components/icon.vue";

const items = [
	{
		title: "Expertise in Diverse Fields",
		subtitle:
			"Our team comprises professionals with specialized skills in Software Engineering, Artificial Intelligence, and Digital Marketing, allowing us to offer comprehensive solutions tailored to your needs.",
	},
	{
		title: "Customized Solutions for Ethiopian SMEs",
		subtitle:
			"We understand the unique challenges faced by Ethiopian SMEs and develop bespoke ERPNext and Frappe solutions like ProSync, specifically designed to address the intricacies of local industries.",
	},
	{
		title: "Commitment to Innovation",
		subtitle:
			"We are committed to staying at the forefront of technological advancements and continuously innovate to provide cutting-edge solutions that drive growth and efficiency for your business.",
	},
	{
		title: "Local Market Understanding",
		subtitle:
			"With a deep understanding of the Ethiopian market landscape and its nuances, we offer insights and solutions that are not only effective but also culturally and contextually relevant.",
	},
	{
		title: "Transformative Impact",
		subtitle:
			"Our solutions are not just functional but transformative, empowering your business to optimize processes, enhance productivity, and achieve sustainable growth in today's competitive environment.",
	},
	{
		title: "Scalability and Flexibility",
		subtitle:
			"Our solutions are designed to scale alongside your business, ensuring they remain adaptable to evolving needs and growth trajectories, providing long-term value.",
	},
	{
		title: "Responsive Customer Support",
		subtitle:
			"We prioritize excellent customer service, offering responsive support and guidance throughout the implementation process and beyond, ensuring your satisfaction and success.",
	},
	{
		title: "Proven Track Record",
		subtitle:
			"With a history of successful projects and satisfied clients, you can trust in our expertise and reliability to deliver results that exceed your expectations.",
	},
];

const team = [
	{
		picture: "./files/hiwotb.png",
		name: "Hiwot Bogale",
		title: "Product Designer",
		bio: "Hiwot is an emerging product designer, passionate about creating intuitive and visually appealing interfaces that enhance user satisfaction and drive engagement.",
		links: [
			{
				url: "/files/linkedin.png",
				href: "https://www.linkedin.com/in/hiwotbogale/",
			},
		],
	},
	{
		picture: "/files/hiwotz.png",
		name: "Hiwot Zelalem",
		title: "Software Developer",
		bio: " A software engineer skilled in developing, testing, and maintaining high-quality websites. Proficient in various languages and frameworks. Committed to clean, scalable solutions and staying updated with industry trends.",
		links: [
			{
				url: "/files/github.png",
				href: "https://github.com/hiwiehk19",
			},
			{
				url: "/files/linkedin.png",
				href: "https://www.linkedin.com/in/hiwot-zelalem/",
			},
			{
				url: "/files/link.png",
				href: "https://hiwotzelalem.netlify.app/",
			},
		],
	},
	
	{
		picture: "/files/mewded.png",
		name: "Mewded Ketema",
		title: "Marketing Lead",
		bio: "Mewded is a result-oriented marketing professional with a focus on developing and executing effective strategies, supported by advanced skills in social media management and content creation.",
		links: [
			{
				url: "/files/linkedin.png",
				href: "inkedin.com/in/mewded-ketema-a9110621b",
			},
		],
	},
	{
		picture: "/files/netsanet.png",
		name: "Netsanet Mesfin",
		title: "Software Developer",
		bio: "Netsanet possess extensive experience in software development and am dedicated to staying current on technological trends, providing high-quality, user-friendly solutions.",
		links: [
			{
				url: "/files/github.png",
				href: "https://github.com/freedoom16",
			},
			{
				url: "/files/linkedin.png",
				href: "https://www.linkedin.com/in/netsanet-mesfin",
			},
		],
	},
	{
		picture: "/files/yohannes.png",
		name: "Yohannes Paulos",
		title: "Software Developer",
		bio: "Yohannes have extensive experience in developing various types of applications, ranging from social networking web applications to specialized business applications and ERP systems",
		links: [
			{
				url: "/files/github.png",
				href: "https://github.com/Jon21paulos",
			},
			{
				url: "/files/linkedin.png",
				href: "https://www.linkedin.com/in/jon21paulos/",
			},
		],
	},
];
</script>
