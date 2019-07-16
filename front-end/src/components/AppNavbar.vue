<template>
	<nav class="navbar navbar-expand-lg navbar-dark"
		v-bind:class="{
			'bg-success': routeName === 'AddWord',
			'bg-primary': routeName !== 'AddWord'
			}">
		<router-link to="/">
			<a class="navbar-brand"
				href="#"><i class="fas fa-book"></i> WordsList</a>
		</router-link>
		<button class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarColor01">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse"
			id="navbarColor01">
			<ul class="navbar-nav mr-auto justify-content-center">
				<li class="nav-item"
					v-bind:class="{active: routeName === 'WordsList'}">
					<router-link class="nav-link"
						to="/">Browse
					</router-link>
				</li>
				<li class="nav-item"
					v-bind:class="{active: routeName === 'AddWord'}">
					<router-link class="nav-link"
						to="/add">Add
					</router-link>
				</li>
			</ul>
			<form class="form-inline my-2 my-lg-0 d-none">
				<input class="form-control mr-sm-2"
					type="text"
					placeholder="Search">
				<button class="btn btn-secondary my-2 my-sm-0"
					type="submit">Search</button>
			</form>
		</div>
	</nav>
</template>

<script>

export default {
	name: 'WordsListNavbar',
	props: {
		routeName: String
	}
};
</script>
