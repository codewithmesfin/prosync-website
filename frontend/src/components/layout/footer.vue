<template>
    <div>
      <div class="bg-gray-900 bottom-0">
        <div class="mx-auto md:w-[90%] py-4">
          <div class="md:flex md:justify-evenly">
            <div class="flex flex-wrap justify-center px-3">
              <div
                v-for="(nav, i) in navigation"
                :key="i"
                class="py-1 text-white"
              >
                <router-link
                  :to="nav.href"
                  :target="nav.name === 'Curriculum Vitae' ? '_blank' : ''"
                  class="p-3 text-sm"
                >
                  {{ nav.name }}
                </router-link>
              </div>
            </div>
            <h1 class="text-sm text-center text-gray-200 p-3">
              Powered by
              <NuxtLink
                class="text-white font-extrabold"
                href="https://techethio.com"
                target="_blank"
                >TechEthio IT Solution plc</NuxtLink
              >
              - 2023
            </h1>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const navigation = [
  { name: "Home", href: "/", current: true },
	{ name: "About", href: "/about", current: false },
	{ name: "Marketplace", href: "/marketplace", current: false },
	{ name: "Pricing", href: "/pricing", current: false },
	{ name: "Docs", href: "/docs", current: false },
	{ name: "Demo", href: "/demo", current: false },
	{ name: "Blog", href: "/blog", current: false },
    {name:"Contact us",href:"/contact",current:false}
  ];
  </script>
  
  <style></style>