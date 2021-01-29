'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Orders', 'address_id', {
      type:Sequelize.INTEGER,
      allowNull:true,
      references: {
      model: {tableName:'Addresses'},
      key: 'id'
      },
      onUpdate:'CASCADE',
      onDelete:'SET NULL',
      defaultValue:null
      });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Orders', 'address_id');
  }
};
