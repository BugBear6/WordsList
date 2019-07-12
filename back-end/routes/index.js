const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const WordsListModel = require('../models/WordsListItem');

router.get('/', (req, res) => {
	// res.send('It works!');
	res.render('index');
});

router.get('/words', (req, res) => {
	WordsListModel.find({}, (err, words) => {
		if (err) return res.status(500).json(err);
		console.log('words ->', words);
		res.status(200).json(words);
	});
});

/*
router.get('/words', (req, res) => {
	res.setHeader('Content-Type', 'application/json');

	WordsListItem.find()
		.then((words) => {
			console.log('words ->', words)
			res.send(words);
		})
		.catch((e) => {
			console.log(e)
			res.send('Sorry! Something went wrong.');
		});
	// res.end(JSON.stringify({
	// 	a: 1
	// }));
});
*/

module.exports = router;
