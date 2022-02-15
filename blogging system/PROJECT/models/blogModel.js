const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  //   image: { type: String, required: true },
  creator: { type: String },
});

module.exports = mongoose.model("Blog", blogSchema);
