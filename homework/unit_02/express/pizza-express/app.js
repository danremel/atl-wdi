const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
	const greeting = "Welcome to Pizza Express!";
	res.send(greeting);
});



app.listen(port, () => {
	console.log('Listening on port ' + port);
});