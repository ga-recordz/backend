const mongoose = require('./connection');
const User = require('../models/User');
const userSeeds = require('./userSeeds.json');

User.deleteMany({})
	.then(() => {
		return User.insertMany(userSeeds);
	})
	.then(console.log)
	.catch(console.error)
	.finally(() => {
		process.exit();
	});
