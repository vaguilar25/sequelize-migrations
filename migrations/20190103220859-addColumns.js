'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      ADD COLUMN
    */

    return queryInterface.addColumn(
      'Burgers',
      'newColumn',
      {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:  Sequelize.fn('NOW')
      }).then(function () {
        return queryInterface.addColumn(
          'Burgers',
          'newColumn2',
        {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:  Sequelize.fn('NOW')
      })
    })
    
  },down: (queryInterface, Sequelize) => {
    

    return queryInterface.removeColumn('Burgers', 'newColumn').then(function () {
    return queryInterface.removeColumn('Burgers', 'newColumn2');
      })
   
  }
};
