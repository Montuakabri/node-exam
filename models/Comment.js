const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  article: { type: mongoose.Schema.Types.ObjectId, ref: "Article" },
});

module.exports = mongoose.model("Comment", commentSchema);
