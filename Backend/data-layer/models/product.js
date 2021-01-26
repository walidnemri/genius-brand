'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //models.Category.hasMany(models.Product, { foreignKey: "category_id"})
      Product.belongsToMany(models.Size, { through: 'Products_sizes' })
    }
  };
  Product.init({
    id: { type: DataTypes.STRING, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};





