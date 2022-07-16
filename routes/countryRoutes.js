const express = require("express");

const router = express.Router();
const countryController = require("./../controller/countryController");

router
  .route("/")
  .get(countryController.getAllCountry)
  .post(countryController.addCountry);

router
  .route("/:id")
  .get(countryController.getOneCountry)
  .patch(countryController.updateCountry)
  .delete(countryController.deleteCountry);

module.exports = router;
