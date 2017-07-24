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
  		id: id,
  		pirates: pirates,
	});
});

// Edit Pirates
router.get('/:id/edit', (req, res) => {
	const id = req.params.id;
	const pirates = data.listOfPirates[id];
	res.render('pirates/edit', {
		id: id,
		pirates: pirates,
	});
});

// Update Pirates
router.put('/:id', (req, res) => {
	const id = req.params.id;
	const pirates = data.listOfPirates[id];
	pirates.name = req.body.name,
	pirates.birthplace = req.body.birthplace,
	pirates.death_year = req.body.death_year,
    pirates.base = req.body.base,
    pirates.nickname = req.body.nickname
    res.method = "GET";
    res.redirect('/pirates'); 
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

// Delete Pirates
router.delete('/:id', (req, res) => {
	data.listOfPirates.splice(req.params.id, 1);
	res.redirect('/pirates');
});

// Exports
module.exports = router;