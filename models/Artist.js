const mongoose = require('../db/connection');
const User = require('./User');

const ArtistSchema = new mongoose.Schema({
	name: String,
	photo: String,
	likes: [],
});

const Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
