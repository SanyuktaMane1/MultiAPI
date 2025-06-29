const express = require("express");
const {
  getAllStudents,
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/StudentController");

const router = express.Router();

router.route("/students").get(getAllStudents).post(createStudent);

router
  .route("/students/:id")
  .get(getStudentById)
  .put(updateStudent)
  .delete(deleteStudent);

module.exports = router;
