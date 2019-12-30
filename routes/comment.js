const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

const User = require("../models/User");
const Message = require("../models/Message");
const Anime = require("../models/Anime");

// @route       GET api/message:id
// @desc        Get all message for user
// @access      Private

// @route       POST api/message:id
// @desc        Create message for user
// @access      Public

router.post("/", auth, async (req, res) => {
  const { comment } = req.body;
  try {
    const newMessage = new Message({
      user: req.user.id,
      comment
    });

    const message = await newMessage.save();
    res.json(message);
  } catch (err) {
    res.status(400).send("Server Error");
  }
});

module.exports = router;
