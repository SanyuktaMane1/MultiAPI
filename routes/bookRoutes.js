const express = require("express");
const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

const router = express.Router();

router.route("/books").get(getBooks).post(createBook);
router.route("/books/:id").get(getBookById).put(updateBook).delete(deleteBook);

module.exports = router;
