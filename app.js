const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

dotenv.config({ path: "./config/config.env" });

connectDatabase();

app.use(express.json());

const productsRoute = require("./routes/productRoutes");
const gameRoutes = require("./routes/gameRoutes");
const bookRoutes = require("./routes/bookRoutes");
const studentRoutes = require("./routes/studentRoutes");
const artworkRoutes = require("./routes/artworkRoutes");
const petRoutes = require("./routes/petRoutes");

app.use("/api/v1", productsRoute);
app.use("/api/v1", gameRoutes);
app.use("/api/v1", bookRoutes);
app.use("/api/v1", studentRoutes);
app.use("/api/v1", artworkRoutes);
app.use("/api/v1", petRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
