<template>
	<div>
		<WordsListNavbar />
		<div id="app" class="container">
			<router-view />
		</div>
	</div>
</template>

<script>
import WordsListNavbar from './components/WordsListNavbar.vue';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

export default {
	name: 'WordsListApp',
	components: {
		WordsListNavbar
	}
};
</script>

<style>
body {
	/* display: flex; */
	justify-content: center;
	font-weight: 500;
	/* font-family: Lato, "Segoe UI", "Helvetica Neue", Arial, sans-serif; */
}
#app {
	/* width: 800px; */
	margin-top: 25px;
}


</style>
