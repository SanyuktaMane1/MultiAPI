const express = require("express");
const {
  createPet,
  getAllPets,
  getPetById,
  updatePet,
  deletePet,
  buyPet,
} = require("../controllers/petController");

const router = express.Router();

router.route("/pets").get(getAllPets).post(createPet);
router
  .route("/pets/:id")
  .get(getPetById)
  .put(updatePet)
  .delete(deletePet)
  .post(buyPet);

module.exports = router;
