module.exports = function(sequelize, DataTypes) {
    var Data = sequelize.define("Data", {
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
      arrivalDate:{
        type: DataTypes.STRING
      }, 
      price:{
        type: DataTypes.INTEGER
      }, 
      returnDepartureTime:{
        type: DataTypes.STRING
      }, 
      returnDepartureDate:{
        type: DataTypes.STRING
      }, 
      returnArrivalTime:{
        type: DataTypes.STRING
      }, 
      returnArrivalDate:{
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
        type: DataTypes.STRING
      }, 
      totalFlightTime:{
        type: DataTypes.INTEGER
      }
    });
    return Data;
};