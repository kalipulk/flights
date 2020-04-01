const router = require("express").Router();
const dataController = require("../../controllers/dataController");

router
  .route("/:departureCity/:arrivalCity/:departureDate/:returnDate")
  .get(dataController.roundTrip);

  module.exports = router;