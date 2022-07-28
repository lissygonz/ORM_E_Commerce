//import models
const Product = require('../models/Product');
const Category = require('../models/Category');
const Tag = require('../models/Tag');
const ProductTag = require('../models/ProductTag');

//Product belongs to Category
Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(Product, {
    foreignKey:'category_id'
});

Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id',
});

Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id',
});

module.exports ={ Product, Category, Tag, ProductTag, };
