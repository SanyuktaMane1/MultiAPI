const mongoose = require("mongoose");

const artworkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  medium: {
    type: String,
  },
  dimensions: {
    type: String,
  },
  creationDate: {
    type: Date,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Artwork", artworkSchema);
