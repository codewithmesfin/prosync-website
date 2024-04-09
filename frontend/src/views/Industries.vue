<template>
	  <div class="w-full">
      <section class="bg-gray-900 py-16">
        <div
          class="bg-[url(https://erp.techethio.com/files/Group%201.png)] bg-no-repeat bg-cover"
        >
          <div class="w-[90%] mx-auto">
            <div
              class="md:flex flex-col items-center justify-center md:space-x-10"
            >
              <div class="w-full md:w-2/5 h-full pb-10">
                <p
                  class="py-4 bg-[url(https://erp.techethio.com/files/Vector%201.png)] bg-no-repeat bg-bottom text-center text-3xl md:text-5xl font-bold text-white"
                >
                Escalate Your Business
                </p>

                <p class="py-4 text-center text-gray-200 text-md md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-4 gap-x-16 gap-y-8 justify-center"
              >
                <div class="relative" v-for="(item,i) in items" :key="i">
                  <div
                    class="absolute inset-0 bg-gray-600 bg-opacity-50 transform -translate-x-4 translate-y-5 shadow-lg rounded-md"
                  ></div>
                  <div
                    class="relative z-10 bg-white flex justify-center items-center rounded-lg"
                  >
                    <div
                      class="bg-gray-200 border-2 rounded-md flex flex-row shadow-lg shadow-gray-light"
                    >
                      <div
                        class="bg-gray-100 md:w-3/5 flex w-1/4 mx-8 my-6 rounded-full overflow-hidden justify-center items-center md:py-1"
                      >
                        <img
                          :src="item.img"
                          alt="asd"
                          class="w-12 h-12"
                        />
                      </div>
                      <div class="pr-4 py-4">
                        <p class="text-lg font-bold text-gray-800 p-2">
                         {{ item.title }}
                        </p>
                        <p class="p-2">
                          {{ item.subtitle }}
                        </p>
                        <div class="text-green-600 text-sm flex justify-end">
                          Learn More
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

    </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import icon from "../components/icon.vue";

const options = ["Customization", "Hosting"];
const defaultOption = ref(options[0]);

const toggleOption = (option) => {
	defaultOption.value = option;
};

const items = [
  {
    img:"https://img.freepik.com/free-photo/view-worker-grinding-piece-metal_268835-4092.jpg?size=626&ext=jpg&uid=R19609540&ga=GA1.1.617832925.1708503188&semt=sph",
    title:"Manufacturing",
    subtitle:"Streamline Manufacturing, Automate Workflows, & Boost Business Efficiency",
    link:"/manufacturing"
  },
  {
img:"https://img.freepik.com/free-vector/purchasing-habits-abstract-concept_335657-2995.jpg?w=1380",
title:"Retail",
subtitle:"Sell ​​effectively and grow sales with ERPNext's retail management software."
  },
  {
    img:"https://erp.techethio.com/files/Vector2.png",
    title:"School",
    subtitle:"The ERPNext Education Module helps you in organizing your entire set-up."
  },
  {
    img:"https://erp.techethio.com/files/Vector2.png",
    title:"Supply Chain",
    subtitle:"Link all points of a supply chain network with our open source software"
  },
  {
    img:"https://erp.techethio.com/files/Vector2.png",
    title:"Healthcare",
subtitle:"ERPNext Healthcare allows you to manage multiple Medical Code Standards"
  },
  {
    img:"https://erp.techethio.com/files/Vector2.png",
    title:"Information Technology",
    subtitle:"Manage your Tech company with ERPNext process automation tolls."
  }
];
</script>
