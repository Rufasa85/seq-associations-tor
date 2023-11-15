const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Boat extends Model {}

Boat.init({
    name: {
         type: DataTypes.STRING,
         allowNull:false,
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    length:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    crewSize:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            min:1
        }
    }
},{
    sequelize
});

module.exports=Boat