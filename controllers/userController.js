const db = require("../models");
var passport = require("../config/passport");
var bcrypt = require("bcryptjs");

module.exports ={
    login: function(res,req){
    db.User.post(passport.authenticate("local"), function(req, res) {
        res.json(req.user);
    });
},
    signup:function(res,req){
        db.User.create({
                email: req.body.email,
                password: req.body.password  
            })
            .then(function(response) {
                return res.json(response);
            })
            .catch(function(err) {
                console.log('error:', err);
                return res.status(401).json(err);
            });
    
}
 


}