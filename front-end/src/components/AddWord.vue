<template>
<form id="add-word">
	<div class="add-word__form-section card card-body">
		<div class="form-group">
		<h5 class="text-primary"><label for="exampleInputEmail1">New Word</label></h5>		
			<input type="text"
				class="form-control"
				id="exampleInputEmail1"
				placeholder="Enter word">
		</div>
	</div>	
	<div class="add-word__form-section card card-body">
		<h5 class="text-primary">Translations</h5>
		<small class="form-text text-muted">
			<p>Use an coma <mark><code>,</code></mark> to introduce different translations.</p>
		</small>
		<div class="form-group">
			<label for="exampleInputEmail1">English Translations</label>
			<input type="text"
				class="form-control"
				id="exampleInputEmail1"
				placeholder="Enter English Translations">
		</div>
		<div class="form-group">
			<label for="exampleInputEmail1">Polish Translations</label>
			<input type="text"
				class="form-control"
				id="exampleInputEmail1"
				placeholder="Enter Polish Translations">
		</div>
	</div>
	<div class="add-word__form-section card card-body">
		<h5 class="text-primary">Examples</h5>
		<small class="form-text text-muted">
			<p>Examples should be written in Spanish.<br>
			You can wrap a word with <mark><code>{b}{/b}</code></mark> tag pair to bold selected word.</p>
		</small>
		<div class="form-group">
			<label for="example1">Example #1</label>
			<textarea class="form-control" id="example1" rows="3"></textarea>
		</div>
		<button type="button"
			class="btn btn-outline-secondary">Add Another</button>
	</div>
	<div class="add-word__form-section card card-body">
		<h5 class="text-primary">Translation Properties</h5>
		<div class="form-group form-check">
			<input type="checkbox"
				class="form-check-input"
				id="favorite">
			<label class="form-check-label"
				for="favorite">Mark as Favorite</label>
		</div>
		<div class="form-group form-check">
			<input type="checkbox"
				class="form-check-input"
				id="color">
			<label class="form-check-label"
				for="color">Add Color</label>
		</div>
	</div>
	<button type="submit"
		class="btn btn-primary">Submit</button>
	</form>
</template>

<script>
import WordsListItem from "./WordsListItem";

export default {
	name: 'AddWord'
};
</script>

<style>
#add-word {
	margin-bottom: 20px;
}
.add-word__form-section {
	margin-bottom: 8px;
}
#add-word .btn {
	max-width: 150px;
}
</style>


