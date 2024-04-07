<template>
	  <div class="w-full">
      <section class="bg-gray-900">
        <div
          class="bg-[url(https://erp.techethio.com/files/Group%201.png)] bg-no-repeat bg-cover"
        >
          <div class="w-[90%] mx-auto">
            <div
              class="md:flex flex-col items-center justify-center md:space-x-10"
            >
              <div class="w-full md:w-2/5 h-full py-16">
                <h1
                  class="py-4 bg-[url(https://erp.techethio.com/files/Vector%201.png)] bg-no-repeat bg-bottom text-center text-3xl md:text-5xl font-bold text-gray-200"
                >
                  Escalate Your Business
              </h1>

                <p class="py-4 text-center text-gray-400 text-md md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>


              <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 gap-x-16 gap-y-12 justify-center"
              >
                <div class="relative"
                v-for="(item,i) in 9" :key="i"
                >
                  <div
                    class="absolute inset-0 bg-gray-600 bg-opacity-50 transform -translate-x-4 translate-y-5 shadow-lg rounded-md"
                  ></div>
                  <div
                    class="relative z-10 bg-white flex justify-center items-center rounded-lg"
                  >
                    <div
                      class="px-2 py-4 bg-gray-200 border-2 rounded-md flex flex-row shadow-lg shadow-gray-light"
                    >
                      <div class="md:w-3/5 flex my-4 mx-2 md:py-1">
                        <img
                          src="https://erp.techethio.com/files/Rectangle%2015%20(3).png"
                          alt="asd"
                          class=""
                        />
                      </div>
                      <div>
                        <p class="text-xl font-bold text-gray-800 p-2 pt-8">
                          Manufacturing
                        </p>
                        <p class="p-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed do
                        </p>
                        <div class="text-green-500 flex justify-end py-4 px-2">
                          Learn More
                        </div>
                      </div>
                      <div class="absolute bg-white"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="flex justify-center items-center w-full md:w-2/5 p-16"
              >
                <div class="py-3 flex justify-center items-center">
                  <button
                    class="rounded-lg rounded-tr-[15px] bg-[#27A167] shadow-lg md:text-lg font-semibold text-white px-20 py-2"
                  >
                    Start Demo
                  </button>
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

const items = [];
</script>
