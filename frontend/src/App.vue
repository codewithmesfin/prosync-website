<template>
	<div>
		<Navbar />
		<div class="h-full">
			<router-view />
		</div>
		<Footer />
	</div>
</template>

<script>
import Navbar from "./components/layout/navbar.vue";
import Footer from "./components/layout/footer.vue";

export default {
	inject: ["$auth"],
	components: {
		Navbar,
		Footer
	},
};
</script>
