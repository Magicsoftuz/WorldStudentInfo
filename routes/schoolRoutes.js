const express = require("express");

const router = express.Router();
const schoolController = require("./../controller/schoolController");

router
  .route("/")
  .get(schoolController.getAllSchool)
  .post(schoolController.addSchool);

router
  .route("/:id")
  .get(schoolController.getOneSchool)
  .patch(schoolController.updateSchool)
  .delete(schoolController.deleteSchool);

module.exports = router;
