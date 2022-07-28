//import models
const Product = require('./Product');
const Category = require('./Category');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');

//Categories have multiple products but products can belong to one category
Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(Product, {
    foreignKey:'category_id'
});

Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey:'product_id',
});

Tag.belongsToMany(Product.addHook, {
    through: ProductTag,
    foreignKey: 'tag_id',
});