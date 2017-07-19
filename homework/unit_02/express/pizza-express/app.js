const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
	const greeting = "Welcome to Pizza Express!";
	res.send(greeting);
});

app.get('/topping/:type', function (req, res, next) {
	res.send(`${req.params.type} pizza, good choice!`);
});

app.get('/order/:quantity/:size', function (req, res, next) {
	res.send(`Your order for ${req.params.quantity} ${req.params.size} pizzas will be ready in 1 minute!`);
});

app.listen(port, () => {
	console.log('Listening on port ' + port);
});