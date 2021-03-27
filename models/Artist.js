const mongoose = require("../db/connection");

const artistSchema = new mongoose.Schema({
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
