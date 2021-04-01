const mongoose = require("../db/connection");

const ArtistSchema = new mongoose.Schema({
  artist: String,
  bio: String,
  likes: [String],
  debates: [String],
  image: String,
  album: [
    {
      albumName: String,
      yearReleased: String,
      albumSold: String,
      certification: String,
      stream: String,
    },
  ],
  photo: String,

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

const Artist = mongoose.model("Artist", ArtistSchema);

module.exports = Artist;
