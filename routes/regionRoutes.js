const express = require("express");

const router = express.Router();
const regionController = require("./../controller/regionController");

router
  .route("/")
  .get(regionController.getAllRegion)
  .post(regionController.addRegion);

router
  .route("/:id")
  .get(regionController.getOneRegion)
  .patch(regionController.updateRegion)
  .delete(regionController.deleteRegion);

module.exports = router;
