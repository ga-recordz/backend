const mongoose = require('../db/connection');

const DebateSchema = require('./Debate');
const VoteSchema = require('./Vote.js');

const ArtistSchema = new mongoose.Schema({
	artist: String,
	bio: String,
	votes: [String],
	likes: [String], //<-- take this out
	debates: [DebateSchema],
	album: [
		{
			name: String,
			yearReleased: String,
			albumsSold: String,
			certification: String,
			stream: String,
		},
	],
	photo: String,

	mixTape: [
		{
			albumName: String,
			yearReleased: String,
		},
	],
	recordLabel: String,
	genre: String,
	yearsActive: String,
	awards: [
		{
			grammys: Number,
			billBoardMusicAwards: String,
		},
	],
});

const Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
