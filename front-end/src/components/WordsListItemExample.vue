<template>
	<li class="example-body">
		<blockquote class="blockquote"
			v-if="this.example">
			<p
				v-html="insertHtmlTags(this.example)">
			</p>
		</blockquote>
	</li>
</template>

<script>
export default {
	name: 'WordsListItemExample',
	props: {
		example: String
	},
	methods: {
		insertHtmlTags(phrase, toReplace = 'b', replaceWith = 'strong') {
			if (!phrase) return '';
			const toReplaceStart = `{${toReplace}}`;
			const toReplaceEnd = `{/${toReplace}}`;
			const toReplaceWithStart = `<${replaceWith}>`;
			const toReplaceWithEnd = `</${replaceWith}>`;

			const toReplaceStartSearch = `/${toReplaceStart}/g`;
			const toReplaceEndcloseSearch = `/${toReplaceEnd}/g`;

			const toReplaceStartSearchResult = phrase.match(toReplaceStartSearch);
			const toReplaceEndSearchResult = phrase.match(toReplaceEndcloseSearch);

			const toReplaceStartSearchResultCount = toReplaceStartSearchResult ? toReplaceStartSearchResult.length : 0;
			const toReplaceEndcloseSearchCount = toReplaceEndcloseSearch ? toReplaceEndcloseSearch.length : 0;
	
			let bReplaced = phrase
				.replace(toReplaceStart, toReplaceWithStart)
				.replace(toReplaceEnd, toReplaceWithEnd);

			// if there are some unclosed {/b} tags
			if (toReplaceStartSearchResultCount && toReplaceStartSearchResultCount > toReplaceEndcloseSearchCount) {
				for (let i = 0; i < toReplaceStartSearchResultCount - toReplaceEndcloseSearchCount; i++) {
					bReplaced += toReplaceWithEnd;
				}
			}

			return bReplaced;
		}
	}
};
</script>
<style>
	.example-body p { margin-bottom: 0;}
	.example-body blockquote { margin-bottom: 5px; }
</style>

