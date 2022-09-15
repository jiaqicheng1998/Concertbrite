'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Likes', [
      {
        user_id: 1,
        event_id: 1
      },
      {
        user_id: 2,
        event_id: 3,
      },
      {
        user_id: 3,
        event_id: 5,
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Likes', null, {})
  }
};
