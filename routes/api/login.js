const router = require("express").Router();
const loginController = require("../../controllers/loginController");
var passport = require("../../config/passport");
var bcrypt = require("bcryptjs");

router.route("/")
  .post(passport.authenticate("local"), function(req, res) {
    console.log(req);
    res.json(req.user);
  },loginController.login)

  module.exports = router;