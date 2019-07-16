<template>
<form id="addWordForm"
	novalidate="true"
	v-on:submit.prevent="handleFormSubmit()">
	<div class="addWordForm__form-section card card-body">
		<div class="form-group">
		<h5 class="text-success"><label for="es">New Word</label></h5>
			<input type="text"
				class="form-control"
				id="es"
				v-model="formModel.es"
				v-bind:class="{ 'is-invalid': errors.es }"
				placeholder="Enter word">
		</div>
		<small
			v-if="errors.es"
			class="form-text text-danger">This field is required.</small>
	</div>	
	<div class="addWordForm__form-section card card-body">
		<h5 class="text-success">Translations</h5>
		<small class="form-text text-muted">
			<p>Use an coma <mark><code>,</code></mark> to introduce different translations.</p>
		</small>
		<div class="form-group">
			<label for="englishTranslations">English Translations</label>
			<input type="text"
				v-model="formModel.translations.eng"
				class="form-control"
				id="englishTranslations"
				v-bind:class="{ 'is-invalid': errors.translations }"
				placeholder="Enter English Translations">
		</div>
		<div class="form-group">
			<label for="polishTranslations">Polish Translations</label>
			<input type="text"
				v-model="formModel.translations.pol"
				class="form-control"
				id="polishTranslations"
				v-bind:class="{ 'is-invalid': errors.translations }"
				placeholder="Enter Polish Translations">
		</div>
		<small
			v-if="errors.translations"
			class="form-text text-danger">At least one translation is required.</small>
	</div>
	<div class="addWordForm__form-section card card-body">
		<h5 class="text-success">Examples</h5>
		<small class="form-text text-muted">
			<p>Examples should be written in Spanish.<br>
			You can wrap a word with <mark><code>{b}{/b}</code></mark> tag pair to bold selected word.</p>
		</small>
		<div class="form-group"
			v-for="(example, exampleIndex) in formModel.examples"
			v-bind:key="exampleIndex">
			<label for="example1">Example #{{exampleIndex + 1}}</label>
			<textarea
				class="form-control"
				id="example1"
				v-model="formModel.examples[exampleIndex]"
				rows="2">
			</textarea>
		</div>
		<button type="button"
			v-on:click="addAnotherExample()"
			class="btn btn-outline-secondary">Add Another</button>
	</div>
	<div class="addWordForm__form-section card card-body">
		<h5 class="text-success">Translation Properties</h5>
		<div class="form-group form-check">
			<input type="checkbox"
				v-model="formModel.favorite"
				class="form-check-input"
				id="favorite">
			<label class="form-check-label"
				for="favorite">Mark as Favorite</label>
		</div>
		<div class="form-group form-check">
			<input type="checkbox"
				v-model="formModel.color"
				class="form-check-input"
				id="color">
			<label class="form-check-label"
				for="color">Add Color</label>
		</div>
	</div>
	<button type="submit"
		class="btn btn-success">Submit</button>
	</form>
</template>

<script>
import {addWord} from '../helpers/api';

export default {
	name: 'AddWord',
	data() {
		return {
			errors: {
				es: false,
				translations: false
			},
			formModel: {
				es: '',
				favorite: false,
				color: false,
				examples: [''], // ✋ filter Array before send
				translations: {
					eng: '', // ✋ convert to Array before send
					pol: ''  // ✋ convert to Array before send
				}
				// ✋ add timestamp before send
			}
		};
	},
	methods: {
		addAnotherExample() {
			if (this.formModel.examples.length < 3) {
				this.formModel.examples.push('');
			}
		}, 
		handleFormSubmit() {
			const isFormValid = this.validateAddWordForm();
			if (isFormValid) {
				const newFormModel = this.prepareFormModel(Object.assign({}, this.formModel));
				addWord(newFormModel);
				this.resetForm();
			}
		},
		validateAddWordForm() {
			let isFormValid = true;

			if (!this.formModel.es) {
				this.errors.es = true;
				isFormValid = false;
			} else {
				this.errors.es = false
			}

			if (!this.formModel.translations.eng && !this.formModel.translations.pol) {
				this.errors.translations = true;
				isFormValid = false;
			} else {
				this.errors.translations = false;
			}

			return isFormValid;
		},
		prepareFormModel(newFormModel) {

			// prepare Spanish word
			newFormModel.es = newFormModel.es.trim();

			// prepare English translations
			if (newFormModel.translations.eng) {
				newFormModel.translations.eng = newFormModel.translations.eng
					.split(',')
					.filter(translation => translation)
					.map(translation => translation.trim())
			} else {
				newFormModel.translations.eng = [];
			}

			// prepare Polish translations
			if (newFormModel.translations.pol) {
				newFormModel.translations.pol = newFormModel.translations.pol
					.split(',')
					.filter(translation => translation)
					.map(translation => translation.trim())
			} else {
				newFormModel.translations.pol = [];
			}

			// prepare examples
			newFormModel.examples = newFormModel.examples
				.filter(example => example)
				.map(example => example.trim());

			// prepare timestamp
			newFormModel.timestamp = Date.now();

			return newFormModel;
		},
		resetForm() {
			this.errors = {
				es: false,
				translations: false
			},
			this.formModel = {
				es: null,
				favorite: false,
				color: false,
				examples: [''],
				translations: {
					eng: '',
					pol: ''
				}
			}
		}
	}
};
</script>

<style>
#addWordForm {
	margin-bottom: 20px;
}
.addWordForm__form-section {
	margin-bottom: 8px;
}
#addWordForm .btn {
	max-width: 150px;
}
</style>


