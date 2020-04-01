const router = require("express").Router();
const dataController = require("../../controllers/dataController");

router
  .route("/:arrivalCity/:departureCity/:departureDate/:arrivalDate")
  .get(dataController.roundTrip);

  module.exports = router;