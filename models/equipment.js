const Sequelize=require('sequelize');
const sequelize=require('../util/db.js');


const Equipment= sequelize.define('Equipment',{
    Name:{
        type: Sequelize.TEXT,
    },
    Model: {
    type:Sequelize.STRING,
    allowNull:true
    },
    SerialNO:{
        type: Sequelize.STRING,
        primaryKey:true
    },
    DueDate:{
        type:Sequelize.DATE,
        allowNull:false
    },
    Department:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    preVenM:{
        type: Sequelize.TEXT,
        allowNull: true
    },
    frequency:{
        type:Sequelize.TEXT,
        allowNull:true
    }
})


module.exports=Equipment;