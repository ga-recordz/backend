const mongoose = require("../db/connection");

const ArtistSchema = new mongoose.Schema({
  artist: String,
  bio: String,
  likes: [],
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
  recordlabel: String,
  genre: String,
  yearsactive: String,
  awards: [
    {
      grammys: Number,
      billBoardMusicawards: String,
    },
  ],
});

const Artist = mongoose.model("Artist", ArtistSchema);

module.exports = Artist;
