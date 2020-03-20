module.exports = function(sequelize, DataTypes) {
    var Flight = sequelize.define("Flight", {
        to: {
            type: DataTypes.STRING,
            unique: true
        },
        from: {
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