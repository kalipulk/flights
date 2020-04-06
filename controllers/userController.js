const db = require("../models");

module.exports ={
  
    signup:function(req,res){
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
    
    },
    findEmailById: function(req, res) {
        db.User.findOne({
            where: { id: req.params.id },
        }).then(function(response) {
            res.json(response);
        });
    }
 }