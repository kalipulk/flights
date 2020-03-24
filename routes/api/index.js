const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const flightRoutes = require("./flights");
const packingListRoutes= require("./packingList");
const loginRoute = require("./login")


router.use("/users", userRoutes);

router.use("/flights", flightRoutes);

router.use("/packingList", packingListRoutes);

router.use("/login", loginRoute);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
