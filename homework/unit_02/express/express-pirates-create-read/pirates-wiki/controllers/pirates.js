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

// Save Pirates
router.post('/', (req, res) => {
	console.log(req.body);
	const newPirate = {
		name: req.body.name,
	 	birthplace: req.body.birthplace,
	 	death_year: req.body.death_year,
    	base: req.body.base,
    	nickname: req.body.nickname
	};
	data.listOfPirates.push(newPirate);
	res.redirect('/pirates');
});

// exports
module.exports = router;