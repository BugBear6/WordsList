<template>
	<span class="star-container">
		<i
			v-on:mouseover="starOnHover = true" 
			v-on:mouseleave="starOnHover = false" 
			v-bind:class="{
				'fas': isFavorite || starOnHover,
				'far': !isFavorite && !starOnHover,
				'fa-star': !starOnHover,
				'fa-star-half-alt': starOnHover
			}"></i>
	</span>
</template>

<script>
import WordsListItem from "./WordsListItem";

export default {
	name: "WordsListStar",
	data() {
		return {
			starOnHover: false
		};
	},
	props: {
		isFavorite: Boolean
	},
	methods: {
		log() {
			console.log('mousover')
		}
	}
};
</script>

<style>
	.star-container {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		font-size: 20px;
		cursor: pointer;
	}
</style>


