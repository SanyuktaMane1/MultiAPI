const Artwork = require("../models/Artwork");

exports.createArtwork = async (req, res) => {
  try {
    const artwork = await Artwork.create(req.body);
    res.status(201).json({ success: true, data: artwork });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.getAllArtworks = async (req, res) => {
  try {
    const artworks = await Artwork.find();
    res.status(200).json({ success: true, data: artworks });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getArtworkById = async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id);
    if (!artwork) {
      return res
        .status(404)
        .json({ success: false, message: "Artwork not found" });
    }
    res.status(200).json({ success: true, data: artwork });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateArtwork = async (req, res) => {
  try {
    const artwork = await Artwork.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!artwork) {
      return res
        .status(404)
        .json({ success: false, message: "Artwork not found" });
    }
    res.status(200).json({ success: true, data: artwork });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.deleteArtwork = async (req, res) => {
  try {
    const artwork = await Artwork.findByIdAndDelete(req.params.id);
    if (!artwork) {
      return res
        .status(404)
        .json({ success: false, message: "Artwork not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Artwork deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
