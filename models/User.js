const mongoose = require('../db/connection');
const Artist = require('../models/Artist');

const UserSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		userName: {
			type: String,
			required: true,
		},
		// top5: [Artist],
		// goat: Artist,
		// favoriteArtists: [Artist],
	},
	{
		timestamps: true,
		//Created a virtual that will automatically remove the password field any time a toJSON method like JSON.stringify(), Mongoose's .toJSON() method or Express' .json() method is used
		toJSON: {
			virtuals: true,
			// ret is the returned Mongoose document
			transform: (_doc, ret) => {
				delete ret.password;
				return ret;
			},
		},
	}
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
