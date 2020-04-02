const router = require("express").Router();
const flightController = require("../../controllers/flightsController");


router
  .route("/")
  .put(flightController.updateFlight)
  .post(flightController.addFlight);
  router
  .route("/:id")
  .get(flightController.findFlights)
  .post(flightController.deleteFlights)

module.exports = router;
