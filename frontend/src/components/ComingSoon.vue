<template>
	<div class="bg-gray-900 h-screen">
		<div class="py-32 w-[90%] md:max-w-3xl mx-auto">
            <h2 class="text-center text-orange-600 text-4xl py-3">{{$route.path }} </h2>
			<h1 class="text-4xl md:text-8xl font-extrabold text-center text-white">
				Coming Soon !
			</h1>
			<p class="py-10 text-white text-center">
				Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as " pain
				itself." Lorem ipsum presents the sample font and orientation of writing on web
				pages and other software applications where content is not the main concern of the
				developer.
			</p>
			<div class="text-center">
                <router-link to="/" class="text-orange-600 text-center">Return to Home</router-link>
            </div>
		</div>
	</div>
</template>

