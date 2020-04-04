const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .post(userController.signup);

router.route("/:id")
  .get(userController.findEmailById)

module.exports = router;
