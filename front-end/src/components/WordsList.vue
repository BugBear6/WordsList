<template>
<div class="words-list">
	<ul class="words-list-items">
		<li v-for="(word, index) in this.words" v-bind:key="index">
			<WordsListItem 
				v-bind:word="word"
			/>
		</li>
	</ul>
</div>
</template>

<script>
import WordsListItem from './WordsListItem';
import {getWords} from '../helpers/api.js';


export default {
	name: 'WordsList',
	components: {
		WordsListItem
	},
	data () {
		return {
			words: []
		};
	},
	created() {
		getWords()
			.then(resp => {
				console.log('getWords response =>', resp);
				this.words = resp.data;
		});
	}
};
</script>

<style>
	.words-list-items {
		list-style: none;
	}
</style>


