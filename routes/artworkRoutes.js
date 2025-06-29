const express = require("express");
const {
  getAllArtworks,
  createArtwork,
  getArtworkById,
  updateArtwork,
  deleteArtwork,
} = require("../controllers/artworkController");

const router = express.Router();

router.route("/artworks").get(getAllArtworks).post(createArtwork);

router
  .route("/artworks/:id")
  .get(getArtworkById)
  .put(updateArtwork)
  .delete(deleteArtwork);

module.exports = router;
