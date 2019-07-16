const mongoose = require('mongoose');

const wordsListItemSchema = new mongoose.Schema({
	es: {type: String, required: true, trim: true},
	timestamp: Number,
	favorite: Boolean,
	color: Boolean,
	examples: [String],
	translations: {
		eng: [{
			type: String,
			required: () => this.translations.pol.length === 0
		}],
		pol: [{
			type: String,
			required: () => this.translations.eng.length === 0
		}]
	}
}, {
	collection: 'WordsListItems'
});

module.exports = mongoose.model('WordsListItem', wordsListItemSchema);
