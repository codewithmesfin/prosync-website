<template>
	<div v-if="isLoading">
	  Loading articles...
	</div>
	<div v-else-if="error">
	  <p>{{ error }}</p>
	</div>
	<div v-else>
	  <ul>
		<li v-for="article in articles" :key="article.id">
		  {{ article.title }}
		</li>
	  </ul>
	</div>
  </template>
  
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';


const articles = ref([]);
const isLoading = ref(false);
const error = ref(null);

const fetchArticles = async () => {
  isLoading.value = true;
  error.value = null;

  try {
    const response = await axios.get('/api/method/prosync.api.articles');
	console.log(response)
    articles.value = response.data.message;
  } catch (err) {
    console.error('Error fetching articles:', err);
    // error.value = 'Failed to load articles.';
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchArticles);
</script>


