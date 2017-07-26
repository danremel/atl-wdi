const express = require('express');

const User = require('../models/user');
const Item = require('../models/item');

const router = express.Router({mergeParams: true});

router.get('/', (req, res) => {
	const userIdToFind = req.params.userId;
	User.findById(userIdToFind)
		.then((user) => {
			res.render(
				'items/index',
				{	
					userId: user._id,
					userName: user.first_name,
					items: user.items
				}
			)
		})
});

router.get('/:itemId', (req, res) => {
	const userId = req.params.userId;
	const itemId = req.params.itemId;

	User.findById(userId)
		.then((user) => {
			const foundItem = user.items.find((item) => {
				return item.id === itemId
			});
			res.render(
				'items/show',
				{ 	
					userId,
					userName: user.first_name,
					itemId:foundItem.id,
					itemName:foundItem.name 
				}
			)
		})
		.catch((error) => {
			console.log("Failed to find user");
		})
});

// RENDER THE NEW FORM
router.get('/new', (req, res) => {
	res.render('items/new',
		{ userId }
		);
});

router.post('/', (req, res) => {
	const userId = req.params.userId;
	const newItemInfo = req.body;

	User.findById(userId)
		.then((user) => {
			const newItem = new Item(newItemInfo)

			user.items.push(newItem);
			user.save()
				.then((user) => {
					console.log("Saved new user with ID of " + userId);
				})
		})
	
});
// ROUTE THAT RENDERS THE EDIT FORM
router.get('/:itemId/edit', (req, res) => {
	const itemId = req.params.itemId;
	const userId = req.params.userId;
	res.render('items/edit',
		{
			userId,
			item: foundItem
		});
});

// UPDATE
router.put('/:itemId', (req, res) => {
	const userId = req.params.userId;
	const itemId = req.params.itemId;

	User.findById(userId)
		.then((user) => {
			const foundItem = user.items.find((item) => {
				return item.id === itemId;
			})
			foundItem.name = req.body.name;

			user.save()
				.then((user)=> {
					console.log("updated user with ID of " + user._id)

					res.render(
						'items/index',
						{
							userId: user._id,
							userName: user.first_name,
							items: user.items
						}
					)
				})
		})
});

// DELETE
router.delete('/:itemId', (req, res) => {
	const userId = req.params.userId;
	const itemId = req.params.itemId;

	User.findById(userId)
		.then((user) => {
			const itemToDelete = user.items.find((item) => {
				return item.id === itemId;
			})

			const indexToDelete = user.items.indexOf(itemToDelete);
			user.items.splice(indexToDelete, 1);
			res.send("worked!");
		})
})



module.exports = router;