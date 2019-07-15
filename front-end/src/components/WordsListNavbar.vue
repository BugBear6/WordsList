<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
		<router-link to="/">
			<a class="navbar-brand"
				href="#"><i class="fas fa-book"></i> WordsList</a>
		</router-link>
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
					<router-link to="/">
						<a class="nav-link"
							href="#">Browse</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/add">
						<a class="nav-link"
							href="#">Add</a>
					</router-link>
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
</template>

<script>

export default {
	name: 'WordsListNavbar'
};
</script>
