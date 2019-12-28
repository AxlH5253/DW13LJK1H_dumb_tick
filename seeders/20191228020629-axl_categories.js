'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('tbl_categories', [
        {
          name: 'Music'
        },
        {
          name: 'Meet and Greet'
        },
        {
          name: 'Sport'
        },
        {
          name: 'Stand up comedy'
        },
        {
          name: 'Special Show'
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => { 
    return queryInterface.bulkDelete('tbl_categories', null, {});
  }
};
