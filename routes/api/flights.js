const router = require("express").Router();
const flightController = require("../../controllers/flightsController");

// Matches with "/api/google"
router
  .route("/")
  .put(flightController.updateFlight)
  .post(flightController.addFlights);
  router
  .route("/:id")
  .get(flightController.findFlights)
  .post(flightController.deleteFlights)

module.exports = router;
