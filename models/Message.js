const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  comment: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("message", MessageSchema);
