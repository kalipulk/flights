const db = require("../models");
var passport = require("../config/passport");
var bcrypt = require("bcryptjs");

module.exports ={
    login: function(res,req){
        passport.authenticate("local"), function(req, res) {
            res.json(req.user);
          };
    }
}