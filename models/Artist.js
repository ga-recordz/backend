const mongoose = require('../db/connection');

const DebateSchema = require('./Debate');
const VoteSchema = require('./Vote.js');

const ArtistSchema = new mongoose.Schema({
	likes: [String], //<-- take this out
	debates: [DebateSchema],
	album: [
		{
			albumName: String,
			yearReleased: String,
			albumsSold: String,
			certification: String,
			stream: String,
		},
	],
	image: String,
	mixTapes: [
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
			grammy: Number,
			billBoardMusicAwards: Number,
			betAwards: Number,
			americanMusicAwards: Number,
			RockandRollHallofFame: String,
			BETHipHopAwards: Number,
			MtvvideoMusicawards: Number,
			academyAward: Number,
			MTVawards: Number,
		},
	],
});

const Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
