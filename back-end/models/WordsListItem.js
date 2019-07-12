const mongoose = require('mongoose');

const wordsListItemSchema = new mongoose.Schema({
	entry: {
		type: String,
		trim: true
	},
	tags: [String],
	timestamp: {
		type: Number,
		trim: true
	},
	translations: {
		ang: [{
			entry: {
				type: String,
				trim: true
			},
			examples: [{
				es: [String],
				ang: [String]
			}]
		}],
		pol: [{
			entry: {
				type: String,
				trim: true
			},
			examples: [{
				es: [String],
				ang: [String]
			}]
		}]
	}
}, {
	collection: 'WordsListItems'
});

module.exports = mongoose.model('WordsListItem', wordsListItemSchema);
