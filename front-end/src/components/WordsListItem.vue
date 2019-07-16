<template>
	<div class="words-list__item card"
		v-bind:class="{ 'bg-primary text-white': this.word.color }">
		<div class="card-header words-list__header">
			<h4 class="words-list__es"
				v-bind:class="{
					'text-white': this.word.color,
					'text-success': !this.word.color
			}">{{this.word.es}}</h4>
			<WordsListStar
				v-bind:isFavorite="this.word.favorite"
				v-bind:class="{
					'text-white': this.word.color,
					'text-warning': !this.word.color
			}" />
		</div>
		<div class="translation-item-body card-body">
			<ul class="translations-list">
				<li v-if="this.word.translations.eng && this.word.translations.eng.length">
					<h5 class="ang-translations"
						v-bind:class="{
							'text-white': this.word.color,
							'text-primary': !this.word.color
						}">
						{{this.word.translations.eng.join(', ')}}
					</h5>
				</li>
				<li v-if="this.word.translations.pol && this.word.translations.pol.length">
					<h5 class="pol-translations"
						v-bind:class="{
							'text-white': this.word.color,
							'text-warning': !this.word.color
						}">
						{{this.word.translations.pol.join(', ')}}
					</h5>
				</li>
			</ul>
			<ul class="examples-list"
				v-if="this.word.examples && this.word.examples.length">
				<WordsListItemExample
					v-for="(example, index) in this.word.examples"
					v-bind:example="example"
					v-bind:key="index"/>
			</ul>
		</div>
	</div>
</template>

<script>
import WordsListItemExample from './WordsListItemExample';
import WordsListStar from './WordsListStar';

export default {
	name: 'WordsListItem',
	components: {
		WordsListItemExample,
		WordsListStar
	},
	props: {
		word: Object
	}
}
</script>

<style>
	.words-list__item {
		margin-bottom: 10px;
	}
	.words-list__es {
		display: inline-block;
	}
	.words-list__header {
		display: flex;
		justify-content: space-between;
	}
	.translations-list {
		list-style: none;
		padding-left: 5px;
	}
</style>
