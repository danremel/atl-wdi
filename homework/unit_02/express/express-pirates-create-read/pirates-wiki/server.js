const express = require('express');
const hbs = require('hbs');
const logger = require('morgan');

const app = express();

app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;

app.get('/test', (req, res) => {
	var message = "testing";
	res.send('/index.hbs', {
		message: message,
	});
});

// controllers for '/pirates' resource
const PirateController = require('./controllers/pirates.js');
app.use("/pirates", PirateController);

app.use( logger('dev'));

app.listen(port, () => {
	console.log('Listening on port ' + port);
});