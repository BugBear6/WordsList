<template>
<div class="words-list">
	<ul class="words-list-items">
		<li v-for="(word, index) in words" v-bind:key="index">
			<WordsListItem 
				v-bind:word="word"
			/>
		</li>
	</ul>
</div>
</template>

<script>
import WordsListItem from "./WordsListItem";

export default {
	name: "WordsList",
	components: {
		WordsListItem
	},
	props: {
		words: Array
	}
};
</script>

<style>
	.words-list-items {
		list-style: none;
	}
</style>


