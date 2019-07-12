const express = require('express');
const routes = require('./routes/index');
const path = require('path');
const bodyParser = require('body-parser');

const frontEndPath = path.join(__dirname, '../front-end/dist');
const app = express();

app.use(express.static(frontEndPath));

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

module.exports = app;
