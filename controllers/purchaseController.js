const db = require("../models");
module.exports={
    // purchaseFlight: function(req,res){
    //     db.Flight.create(req.body).then(function(flight) {
    //     res.json(flight);
    // });

    // },
    buyOffWishList:function(req,res){
        var id = req.params.id
        db.Flight.update({
            purchased:true
        },
        {
            where: {id:id}
        }).then(function(response){
            console.log("flight purchased");
            res.json(response);
        })
    },
    deleteWishlistItem: function(req,res){
        var id = req.params.id;
        db.Flight.destroy({
            where: {id: id}
        }).then(function(response){
            console.log("flight deleted");
            res.json(response);
        })
    },

}