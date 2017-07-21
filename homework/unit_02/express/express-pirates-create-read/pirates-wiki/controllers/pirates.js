// requirements
const express = require('express');
const router = express.Router();
const pirates = require('../models/pirates.js');


// all routes for /pirate
router.get('/', (req, res) => {
	var greeting = "Testing";
	res.render('pirates/index', {
		message: greeting,
	});
});

router.get('/new', () => {
	
})

router.get('/:id', (req, res) => {
	res.send('pirates/show.hbs', {

	});
});


// exports
module.exports = router;