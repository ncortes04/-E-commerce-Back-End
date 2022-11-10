const Product = require('./Product')
const ProductTag = require('./ProductTag')
const Category = require('./Category')
const Tag = require('./Tag')

Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});

Product.belongsTo(Category, {
    foreignKey: 'category_id',
})

Product.belongsToMany(Tag, {
    through: 'ProductTag'
})
Tag.belongsToMany(Product, {
    through:'ProductTag'
})
// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
  };