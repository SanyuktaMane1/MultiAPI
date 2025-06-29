const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Game title is required"],
    },
    genre: {
      type: String,
      required: [true, "Genre is required"],
    },
    platform: {
      type: String,
      required: [true, "Platform is required"],
    },
    releaseDate: {
      type: Date,
    },
    developer: {
      type: String,
      required: [true, "Developer name is required"],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
        },
        name: String,
        rating: Number,
        comment: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Game", gameSchema);
