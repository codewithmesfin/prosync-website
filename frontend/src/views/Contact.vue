<template>
	<div class="w-full">
		<section class="bg-gray-900">
			<div class="">
				<div class="w-[90%] mx-auto pt-16 pb-8">
					<h1 class="py-2 text-center text-3xl md:text-5xl font-bold text-white">
						Experts are here to help you.
					</h1>
					<p class="text-gray-400 text-center py-2">
						Always know what you'll pay with flat pricing across all plans.
					</p>
				</div>
			</div>
		</section>
		<section class="bg-gray-900 pb-16">
			<div class="">
				<div class="w-[90%] md:w-[80%] mx-auto pt-10 pb-16">
					<div class="md:flex items-center md:space-x-10">
						<div class="w-full md:w-1/2 my-2">
                            <h1 class="text-3xl md:text-5xl text-gray-200">Contact us</h1>
                            <div class="py-3">
                                <div v-for="(item, i) in items" :key="i">
                                    <div class="flex py-2 items-center text-white space-x-3">
                                        <icon path="done" />
                                        <p>{{item.title}} : </p>
                                        <a :href="item.href"
                                        class="text-green-600"
                                        >{{ item.value }} </a>
                                    </div>
                                </div>
                            </div>
                        </div>
						<div class="w-full md:w-1/2 my-2">
							<div class="py-5 px-5 md:px-8 bg-gray-800 rounded">
								<form action="">
									<div class="py-2">
										<p class="py-2 text-gray-300">Full Name</p>
										<input
											type="text"
											placeholder="Enter your name"
											required
											class="w-full py-2 rounded px-3 bg-gray-700 text-gray-400 focus:outline-none"
										/>
									</div>
									<div class="py-2">
										<p class="py-2 text-gray-300">Email</p>
										<input
											type="email"
											placeholder="Enter your email"
											required
											class="w-full py-2 rounded px-3 bg-gray-700 text-gray-400 focus:outline-none"
										/>
									</div>
									<div class="py-2">
										<p class="py-2 text-gray-300">Phone Number</p>
										<input
											type="text"
											pattern="^\+[1-9]\d{1,14}$"
											placeholder="Enter your email"
											required
											class="w-full py-2 rounded px-3 bg-gray-700 text-gray-400 focus:outline-none"
										/>
									</div>
                                    <div class="py-2">
										<p class="py-2 text-gray-300">Message</p>
										<textarea
                                          rows="6"
											placeholder="Write your message here"
											required
											class="w-full py-2 rounded px-3 bg-gray-700 text-gray-400 focus:outline-none"
										/>
									</div>
									<div class="py-2">
										<button class="w-full bg-green-600 py-2 rounded shadow text-white font-semibold">Submit</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section>
			<div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15762.13127313632!2d38.7831875!3d9.0150625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85eb2e952955%3A0x2a0ca568eceaa264!2sTechEthio%20IT%20Solution%20PLC!5e0!3m2!1sam!2set!4v1712343527463!5m2!1sam!2set"
					width="100%"
					height="600"
					style="border: 0"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</section>
	</div>
</template>

<script setup>
import { ref } from "vue";
import icon from "../components/icon.vue";

const options = ["Customization", "Hosting"];
const defaultOption = ref(options[0]);

const toggleOption = (option) => {
	defaultOption.value = option;
};

const items=[
    {
        title:"Phone Number",
        value:"+251911522902",
        href:"tel:+251911522902"
    },
    {
        title:"Email",
        value:"sales@prosync.com",
        href:"mailto:sales@prosync.com"
    },
    {
        title:"Linkedin",
        value:"@prosync",
        href:"https://www.linkedin.com/in/prosync"
    },
    {
        title:"Facebook",
        value:"@prosync",
        href:"https://facebook.com/prosync"
    },
    {
        title:"Address",
        value:"22 Mazoria, Tigat Building, 8th Floor, Addis Ababa, Ethiopia",
        href:"https://maps.app.goo.gl/vxsqBXFZbTwtoTvf6"
    }
]
</script>
