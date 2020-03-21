const db = require("../models");

module.exports ={
  
    signup:function(res,req){
        console.log(req.body);
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