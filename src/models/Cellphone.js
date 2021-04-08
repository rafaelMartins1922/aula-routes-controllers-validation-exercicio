const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Cellphone = sequelize.define('Cellphone',{
    purchase_date: {
        type:DataTypes.DATEONLY,
        allowNull:true
    },
    model_name: {
        type:DataTypes.STRING,
        allowNull:true
    },
    chip_amount: {
        type:DataTypes.NUMBER,
        allowNull:true
    },
    manufacturer: {
        type:DataTypes.STRING,
        allowNull: true
    },
    hasNfc: {
        type:DataTypes.BOOLEAN,
        allowNull:true
    }
});

Cellphone.associate = function(models) {
    Cellphone.belongsTo(models.User);
}

module.exports = Cellphone;