const express = require('express');
const routes = require('./routes/index');
const path = require('path');
const frontEndPath = path.join(__dirname, '../front-end/dist');
const app = express();

app.use(express.static(frontEndPath));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

module.exports = app;
