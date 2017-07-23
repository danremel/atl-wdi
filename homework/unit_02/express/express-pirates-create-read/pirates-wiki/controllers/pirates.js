// requirements
const express = require('express');
const router = express.Router();
const data = require('../models/pirates.js');


// Index Pirates
router.get('/', (req, res) => {
	res.render('pirates/index', {
		pirates: data.listOfPirates,
	});
});

// New Pirates
router.get('/new', (req, res) => {
	res.render('pirates/new');
});

// Show Pirates
router.get('/:id', (req, res) => {
		const id = req.params.id;
		const pirates = data.listOfPirates[id];
	res.render('pirates/show', {
  		pirates: pirates,
  		id: id,
	});
});


// exports
module.exports = router;