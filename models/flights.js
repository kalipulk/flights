module.exports = function(sequelize, DataTypes) {
    var Flight = sequelize.define("Flight", {
        arrivalCity: {
            type: DataTypes.STRING,
            
        },
        departureCity: {
            type: DataTypes.STRING,
            
        },
        departureAirport:{
            type:DataTypes.STRING,
        },
        arrivalAirport:{
            type: DataTypes.STRING
        },
        price:{
            type: DataTypes.INTEGER
        },
        purchased:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        departureDate:{
            type: DataTypes.STRING
        },
        arrivalDate:{
            type: DataTypes.STRING
        },
        departureTime:{
            type: DataTypes.STRING
        },
        returnDepartureTime:{
            type: DataTypes.STRING
        },
        returnDepartureDate:{
            type: DataTypes.STRING
        }

    });
    Flight.associate = function(models) {
        Flight.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Flight.hasMany(models.PackingList, {
            onDelete: "cascade"
        });
    };
    return Flight;
};