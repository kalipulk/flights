module.exports = function(sequelize, DataTypes) {
    var PackingList = sequelize.define("PackingList", {
        items:{
            type:DataTypes.STRING,
        }
    });
    PackingList.associate = function(models) {
        PackingList.belongsTo(models.Flight, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return PackingList;
};