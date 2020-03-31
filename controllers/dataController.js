const db = require("../models");

module.exports ={
    roundTrip: function(arrivalAirport,departureAirport,departureDate,arrivalDate){
        db.Data.findAll({
            where: {departureAirport:departureAirport,
                    arrivalAirport:arrivalAirport,
                    arrivalDate:arrivalDate,
                    departureDate:departureDate}
        });
    }
}