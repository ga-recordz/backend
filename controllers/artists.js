const Artist = require('../models/Artist');
const Debate = require('../models/Debate');
const express = require('express');
const router = express.Router();
const { requireToken } = require('../middleware/auth');

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

// POST/CREATE DEBATE @ --> /artists/artistID
router.post('/:artistID', requireToken, (req, res, next) => {
	// get the debate data from the body of the request
	const debate = req.body.debateData;
	// get the artist id from the body
	const artistID = req.body.artistID;
	// find the artist by its id
	Artist.findById(artistID)
		.then((artist) => {
			// add debate to artist
			artist.debates.push(req.body);
			// save artist
			return artist.save();
		})
		// send responsne back to client
		.then((artist) => {
			return res.status(201).json({ artist: artist });
		})
		.catch(next);
});

// UPDATE/EDIT/PATCH DEBATE @ --> /debates/:id
router.patch('/:id/:debateID', requireToken, (req, res, next) => {
	const id = req.params.debateID;
	const debateData = req.body.debate;

	Artist.findOne({
		'debates._id': id,
	})
		.then((artist) => {
			const debate = artist.debates.id(id);
			debate.set({ debate: debateData });
			return artist.save();
		})
		.then((artist) => {
			return res.status(201).json({ artist: artist });
		})
		.catch(next);
});

// DELETE DEBATE @ --> /artists/:artistID/:debateID
router.delete('/:id/:debateID', requireToken, (req, res, next) => {
	const debateID = req.params.debateID;
	Artist.findOne({ 'debates._id': debateID })
		.then((artist) => {
			artist.debates.id(debateID).remove();
			return artist.save();
		})
		.then((artist) => {
			return res.json(artist);
		})
		.catch(next);
});

module.exports = router;
