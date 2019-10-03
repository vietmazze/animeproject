const express = require("express");
const router = express.Router();
const Anime = require("../models/Anime");

// @ route        GET api/animes
// @desc          Get all anime
// @access        Public

router.get("/", async (req, res) => {
  try {
    const animes = await Anime.find({})
      .select("-__v")
      .sort("rank");
    res.json(animes);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
