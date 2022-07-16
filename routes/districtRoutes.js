const express = require("express");

const router = express.Router();
const districtController = require("./../controller/districtController");

router
  .route("/")
  .get(districtController.getAllDistrict)
  .post(districtController.addDistrict);

router
  .route("/:id")
  .get(districtController.getOneDistrict)
  .patch(districtController.updateDistrict)
  .delete(districtController.deleteDistrict);

module.exports = router;
