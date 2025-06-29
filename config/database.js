const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${con.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

module.exports = connectDatabase;
