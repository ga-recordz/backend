const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema({
	email: String,
	password: String,
	userName: String,
	
	hasVoted: { type: Boolean, default: false },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
