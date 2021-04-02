const mongoose = require('../db/connection');

const VoteSchema = new mongoose.Schema({
	artistID: {
		// References use the type ObjectId
		type: mongoose.Schema.Types.ObjectId,
		// the name of the model to which they refer
		ref: 'Artist',
	},
	userID: {
		// References use the type ObjectId
		type: mongoose.Schema.Types.ObjectId,
		// the name of the model to which they refer
		ref: 'User',
	},
});

module.exports = VoteSchema;
