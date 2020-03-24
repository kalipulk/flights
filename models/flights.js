module.exports = function(sequelize, DataTypes) {
    var Flight = sequelize.define("Flight", {
        arrival: {
            type: DataTypes.STRING,
            unique: true
        },
        departure: {
            type: DataTypes.STRING,
            unique: true
        },
        airport:{
            type:DataTypes.STRING,
        },
        price:{
            type: DataTypes.INTEGER
        },
        purchased:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
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