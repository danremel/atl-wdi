// Packages
const express = require('express');
const hbs = require('hbs');
const logger = require('morgan');
const bodyParser = require('body-parser');

// App Settings
const app = express();
const port = process.env.PORT || 3000;

// controllers for '/pirates' resource
const PirateController = require('./controllers/pirates.js');

// Log from Morgan
app.use(logger('dev'));

app.use(bodyParser.urlencoded({
	extended: true
}));

// views
app.set('view engine', 'hbs');
// app.use('views', 'pirates-wiki/views');
app.use("/pirates", PirateController);


// Home
app.get('/', (req, res) => {
	res.send("home page");
});


// Start server
app.listen(port, () => {
	console.info(`Server listening on port ${port}`);
});

