// Packages
const express = require('express');
const hbs = require('hbs');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// App Settings
const app = express();
const port = process.env.PORT || 3000;

// controllers for '/pirates' resource
const PirateController = require('./controllers/pirates.js');

// Log from Morgan
app.use(logger('dev'));
// Body Parser
app.use(bodyParser.urlencoded({
	extended: true
}));
// Method Override
app.use(methodOverride('_method'));

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

