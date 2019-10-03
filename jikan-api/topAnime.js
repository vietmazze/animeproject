const axios = require("axios");
const connectDB = require("../config/db");
const Anime = require("../models/Anime");

connectDB();

const animeSearch = async () => {
  try {
    const res = await axios.get("https://api.jikan.moe/v3/top/anime/1/airing");
    res.data.top.map(async item => {
      const { mal_id, rank, title, image_url, episodes, score } = item;
      const anime = new Anime({
        mal_id,
        title,
        image_url,
        episodes,
        score,
        rank
      });
      await anime.save();
    });
  } catch (err) {
    console.log(err.error);
  }
};

animeSearch();
