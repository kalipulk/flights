const db = require("../models");

module.exports ={
    roundTrip: function(req,res){
        console.log(req.departureCity);
        db.Data.findAll({
            where: {departureCity:req.params.departureCity,
                    arrivalCity:req.params.arrivalCity,
                    departureDate:req.params.departureDate,
                    returnDate:req.params.returnDate}
        }).then(function(response){
            res.json(response);
        });
    }
}