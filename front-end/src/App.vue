<template>
	<div>
		<AppNavbar v-bind:routeName="routeName" />
		<div id="app" class="container">
			<router-view />
		</div>
	</div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

export default {
	name: 'WordsListApp',
	data() {
		return {
			routeName: ''
		};
	},
	components: {
		AppNavbar
	},
	created() {
		this.setRouteName();
	},
	watch: {
		$route: {
			handler() {
				this.setRouteName();
			}
		}
	},
	methods: {
		setRouteName() {
			this.routeName = this.$route.name || '';
		}
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
