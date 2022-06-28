'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    user_id: {
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(10), 
      allowNull: false
    },
    need_parking: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {});
  Ticket.associate = function(models) {
    // associations can be defined here
    Ticket.belongsTo(models.User, { foreignKey: 'user_id' })
    Ticket.belongsTo(models.Event, { foreignKey: 'event_id' })
  };
  return Ticket;
};