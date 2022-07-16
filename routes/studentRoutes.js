const express = require("express");

const router = express.Router();
const studentController = require("./../controller/studentController");

router
  .route("/")
  .get(studentController.getAllStudent)
  .post(studentController.addStudent);

router
  .route("/:id")
  .get(studentController.getOneStudent)
  .patch(studentController.updateStudent)
  .delete(studentController.deleteStudent);

module.exports = router;
