require('dotenv').config();

const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
mongoose.connection
	.on('connected', () => {
		console.log(`Mongoose connection open on ${process.env.DATABASE}`);
	})
	.on('error', (err) => {
		console.log(`Connection error: ${err.message}`);
	});

const server = app.listen(7600, () => {
	console.log(`Express is running on port ${server.address().port}`);
});
