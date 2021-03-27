const mongoose = require("../db/connection");

const artistSchema = new mongoose.Schema({
  Artist: String,
  Bio: String,
  Album: [
    {
      Name: String,
      yearReleased: String,
      albumsSold: String,
      Certification: String,
      stream: String,
    },
  ],
  mixTape: [
    {
      albumName: String,
      yearReleased: String,
    },
  ],
  recordLabel: String,
  genre: String,
  yearsActive: String,
  Awards: [
    {
      Grammys: Number,
      billBoardMusicAwards: String,
    },
  ],
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
