const db = require("../models");

module.exports ={
    roundTrip: function(arrivalCity,departureCity,departureDate,arrivalDate){
        console.log("test");
        db.Data.findAll({
            where: {departureCity:departureCity,
                    arrivalCity:arrivalCity,
                    arrivalDate:arrivalDate,
                    departureDate:departureDate}
        });
    }
}