const express = require("express");
const {
  createGame,
  getGames,
  getSingleGame,
  updateGame,
  deleteGame,
} = require("../controllers/gameController");

const router = express.Router();

router.route("/games").get(getGames).post(createGame);
router
  .route("/games/:id")
  .get(getSingleGame)
  .put(updateGame)
  .delete(deleteGame);

module.exports = router;
