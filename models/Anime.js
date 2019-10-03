const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimeSchema = new Schema({
  mal_id: {
    type: Number
  },
  title: {
    type: String
  },

  score: {
    type: Number
  },
  rank: {
    type: Number
  },

  episodes: {
    type: Number
  },
  image_url: {
    type: String
  }
});

module.exports = mongoose.model("anime", AnimeSchema);
