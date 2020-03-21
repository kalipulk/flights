const router = require("express").Router();
const flightController = require("../../controllers/flightsController");

// Matches with "/api/google"
router
  .route("/")
  
  .post(flightController.addFlights);
  router
  .route("/:id")
  .get(flightController.findFlights)

module.exports = router;
