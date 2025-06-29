const Game = require("../models/Game");

exports.createGame = async (req, res) => {
  try {
    const game = await Game.create(req.body);
    res
      .status(201)
      .json({ success: true, message: "Game created", data: game });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.getGames = async (req, res) => {
  try {
    const query = {};
    if (req.query.genre) query.genre = req.query.genre;
    if (req.query.platform) query.platform = req.query.platform;

    const games = await Game.find(query);
    res.status(200).json({ success: true, count: games.length, data: games });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getSingleGame = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game)
      return res
        .status(404)
        .json({ success: false, message: "Game not found" });

    res.status(200).json({ success: true, data: game });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateGame = async (req, res) => {
  try {
    let game = await Game.findById(req.params.id);
    if (!game)
      return res
        .status(404)
        .json({ success: false, message: "Game not found" });

    game = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res
      .status(200)
      .json({ success: true, message: "Game updated", data: game });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.deleteGame = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game)
      return res
        .status(404)
        .json({ success: false, message: "Game not found" });

    await Game.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Game deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
