const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the product name."],
      trim: true,
      maxlength: [100, "Product name cannot exceed 100 characters."],
    },
    description: {
      type: String,
      required: [true, "Please enter the product description."],
      maxlength: [1000, "Product description cannot exceed 1000 characters."],
    },
    price: {
      type: Number,
      required: [true, "Please enter the product price."],
      min: [0, "Price cannot be negative."],
      maxLength: [8, "Price cannot exceed 8 figures"],
    },
    category: {
      type: String,
      required: [true, "Please enter the product category."],
      enum: {
        values: [
          "Electronics",
          "Clothing",
          "Footwear",
          "Books",
          "Beauty",
          "Home",
          "Appliances",
          "Other",
        ],
        message: "Please select a valid category.",
      },
    },
    brand: {
      type: String,
      trim: true,
    },
    stock: {
      type: Number,
      default: 0,
      min: [0, "Stock cannot be negative."],
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
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        name: String,
        rating: Number,
        comment: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
