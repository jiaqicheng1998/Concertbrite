'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tickets', [
      {
        user_id: 1,
        event_id: 1,
        phone: '4086086666',
        need_parking: 'no need'
      },
      {
        user_id: 2,
        event_id: 3,
        phone: '4086089999',
        need_parking: 'no need'
      },
      {
        user_id: 3,
        event_id: 5,
        phone: '4088886666',
        need_parking: 'need parking'
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tickets', null, {});
  }
};
