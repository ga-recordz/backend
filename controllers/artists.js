const Artist = require('../models/Artist');
const express = require('express');
const router = express.Router();

//----------------GET ALL ARTISTS----------------------------
router.get('/', (req, res, next) => {
	Artist.find({})
		.then((artists) => {
			res.json(artists);
		})
		.catch(next);
});

router.get('/:id', (req, res, next) => {
	Artist.findById({ _id: req.params.id })
		.then((artists) => {
			res.json(artists);
		})
		.catch(next);
});

//Add Debate
router.put('/:artistId', (req, res, next) => {
	// get the debate data from the body of the request
	const debate = req.body.debate;
	// find the artist by its id
	Artist.findById(req.params.artistId)
		.then((artist) => {
			// add debate to artist
			artist.debates.push(debate);
			// save artist
			return artist.save();
		})
		// send response with updated artist in it back to client
		.then((artist) => res.status(201).json({ artist: artist }))
		.catch(next);
});

//Delete Debate
// router.put('/:id', (req, res, next) => {
// 	const debate = req.body.debate;
// 	Artist.findById({ _id: req.params.id })
// 		.then((artist) => {
// 			const delIndex = artist.debates.findIndex((d) => d === debate);
// 			artist.debates.splice(delIndex, 1);
// 			return artist.save();
// 		})
// 		.then((artist) => res.status(201).json({ artist: artist }))
// 		.catch(next);
// });

module.exports = router;
