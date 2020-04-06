module.exports = function(sequelize, DataTypes) {
    var Data = sequelize.define("Data", {
    departureCity: {
        type: DataTypes.STRING
    },
    arrivalCity:{
        type: DataTypes.STRING
    },

     departureAirport:{
        type: DataTypes.STRING
     },
      arrivalAirport:{
        type: DataTypes.STRING
      }, 
      departureTime:{
        type: DataTypes.STRING
      }, 
      arrivalTime:{
        type: DataTypes.STRING
      }, 
      departureDate:{
        type: DataTypes.STRING
      }, 
      returnDate:{
        type: DataTypes.STRING
      }, 
      price:{
        type: DataTypes.INTEGER
      }, 
      returnDepartureTime:{
        type: DataTypes.STRING
      }, 
      
      returnArrivalTime:{
        type: DataTypes.STRING
      }, 
      
      class:{
        type: DataTypes.STRING
      }, 
      airline:{
        type: DataTypes.STRING
      }, 
      stops:{
        type: DataTypes.INTEGER
      }, 
      gate:{
        type: DataTypes.INTEGER
      }, 
      totalFlightTime:{
        type: DataTypes.STRING
      }
    });
    return Data;
};