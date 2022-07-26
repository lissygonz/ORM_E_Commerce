// import models

const { Model, DataTypes } = require('sequelize');

//import our database connection from config
const sequelize = require('../config/connection');


class Product extends Model {}
// Products belongsTo Category

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
            validate: {
                isDecimal: true
            },
        },

       stock: {
           type: DataTypes.INTEGER,
           allowNull: false,
           validate: {
               isNumeric:true,
           },
       },
       category_id: {
           type: DataTypes.INTEGER,
           references: {
               model: 'category',
               key: 'id'
           },
       },
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
    
);



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};