'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
     CHANGE DEFAULT VALUE
    */

   return queryInterface.changeColumn(
    'Burgers',
    'devoured',
    {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    });
  
}, down: (queryInterface, Sequelize) => {
    /*
      CHANGE DEFAULT VALUE
    */
   return queryInterface.changeColumn(
    'Burgers',
    'devoured',
    {
      type: Sequelize.BOOLEAN,
      allowNull: false
      
    });
  }
};
