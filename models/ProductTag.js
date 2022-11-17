const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProductTag extends Model {}
//Product model with id, product_id, tag_id as fields

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model:'product',
        key:'id'
      }
    },
    tag_id: {
        type: DataTypes.INTEGER,
        references: {
            model:'Tag',
            key:'id'
          }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ProductTag'
  }
);

module.exports = ProductTag;