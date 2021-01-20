'use strict';

const products = [
  {
    name:'sweat-1',
    price: 130,
    category_id:2

  },
  {
    name: 't-shirt-2',
    price:140,
    category_id:1
  },
  {
    name: 't-shirt-4',
    price:130,
    category_id:1
  },
  {
    name: 't-shirt-6',
    price:130,
    category_id:1
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Products', products)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  }
};

