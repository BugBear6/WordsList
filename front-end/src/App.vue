<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
			<a class="navbar-brand"
				href="#"><i class="fas fa-book"></i> WordsList</a>
			<button class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarColor01"
				aria-controls="navbarColor01"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse"
				id="navbarColor01">
				<ul class="navbar-nav mr-auto justify-content-center">
					<li class="nav-item active">
						<a class="nav-link"
							href="#">Browse <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item">
						<a class="nav-link"
							href="#">Add</a>
					</li>
				</ul>
				<form class="form-inline my-2 my-lg-0">
					<input class="form-control mr-sm-2"
						type="text"
						placeholder="Search">
					<button class="btn btn-secondary my-2 my-sm-0"
						type="submit">Search</button>
				</form>
			</div>
		</nav>
		<div id="app" class="container">
			<WordsList v-bind:words="this.words" />
		</div>
	</div>
</template>

<script>
import WordsList from './components/WordsList.vue';
import {getWords} from './helpers/api.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

export default {
	name: 'WordsListApp',
	components: {
		WordsList
	},
	data () {
		return {
			words: []
		};
	},
	created() {
		console.log('Component created')
		getWords()
			.then(resp => {
				console.log(resp);
				this.words = resp;
		});
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
