'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products_size', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER,
        primaryKey:false,
        reference: {
          model:{tableName:'Products'},
          key: 'product_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',

      },
      size_id: {
        type: Sequelize.INTEGER,
        primaryKey:false,
        reference: {
          model:{tableName:'Sizes'},
          key: 'size_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products_size');
  }
};
