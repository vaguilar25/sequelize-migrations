'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      UPDATE DB WITH SEED
    */

    return queryInterface.bulkInsert('Burgers', [
      { burger_name: 'Cheese burger', devoured: false, createdAt: new Date(), updatedAt: new Date() },
      {
        burger_name: 'Double cheese burger', devoured: false, createdAt: new Date(), updatedAt: new Date()
      },
      {
        burger_name: 'Bacon burger', devoured: false, createdAt: new Date(), updatedAt: new Date()
      }
    ])

  },

  down: (queryInterface, Sequelize) => {
    /*
     DELETE DATA INSERTED
    */
    return queryInterface.bulkDelete('Burgers', null, {});
  }
};
