const mongoose = require('../db/connection');

const DebateSchema = new mongoose.Schema({
	artistID: {
		// References use the type ObjectId
		type: mongoose.Schema.Types.ObjectId,
		// the name of the model to which they refer
		ref: 'Artist',
	},
	debate: String,
});

module.exports = DebateSchema;
