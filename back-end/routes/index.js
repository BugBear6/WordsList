const express = require('express');
const router = express.Router();
const WordsListModel = require('../models/WordsListItem');

router.get('/', (req, res) => {
	res.render('index');
});

router.get('/getWordsAction', (req, res) => {
	WordsListModel.find({}, (err, words) => {
		if (err) return res.status(500).json(err);
		console.log('words ->', words);
		res.status(200).json(words);
	});
});

router.post('/addWordAction', (req, res) => {
	const newWordListItem = new WordsListModel(req.body);
	newWordListItem.save(err => {
		if (err) {
			res.end({
				result: 'Success',
				message: '✅ New word has been added.'
			});
		} else {
			res.end({
				result: 'Failure',
				message: '❌ Now word has not been added.'
			});
		}
	});
});

module.exports = router;
