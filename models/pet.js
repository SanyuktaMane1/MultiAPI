const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: Number,
  price: Number,
  isAvailable: { type: Boolean, default: true },
  soldTo: { type: String, default: null },
});

module.exports = mongoose.model("Pet", petSchema);
