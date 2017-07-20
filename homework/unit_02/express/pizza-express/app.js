const express = require('express');
const hbs = require('hbs');
const app = express();
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
	const greeting = "Welcome to Pizza Express!";
	res.render("index.hbs", {
		message: greeting,
	});
});

app.get('/topping/:type', function (req, res, next) {
	res.render("toppings.hbs", {
		topping: req.params.type,
	});
});

app.get('/order/:quantity/:size', function (req, res, next) {
	res.render("order.hbs", {
		quantity: req.params.quantity,
		size: req.params.size,
	});
});

app.listen(port, function ()  {
	console.log('Listening on port ' + port);
});