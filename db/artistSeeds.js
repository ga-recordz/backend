const mongoose = require('./connection');
const Artist = require('../models/Artist');
const artistSeeds = require('./artistSeeds.json');

Artist.deleteMany({})
	.then(() => {
		return Artist.insertMany(artistSeeds);
	})
	.then(console.log)
	.catch(console.error)
	.finally(() => {
		process.exit();
	});
