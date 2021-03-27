const mongoose = require('../db/connection');

const ArtistSchema = new mongoose.Schema({
	artist: String,
	bio: String,
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
	likes: [],
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
