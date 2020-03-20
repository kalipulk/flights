const router = require("express").Router();
const flightController = require("../../controllers/flightsController");

// Matches with "/api/google"
router
  .route("/")
  .get(flightController.findFlights)
  .post(flightController.addFlights);

module.exports = router;
