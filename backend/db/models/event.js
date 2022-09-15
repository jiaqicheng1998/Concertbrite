'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: {
      type:DataTypes.STRING(250),
      allowNull:false
    },
    description: {
      type:DataTypes.TEXT,
      allowNull:false
    },
    img_url: {
      type:DataTypes.STRING,
      allowNull:false
    },
    img_url_two: {
      type:DataTypes.STRING,
      allowNull:false
    },
    location: {
      type:DataTypes.STRING(250),
      allowNull:false
    },
    user_id: {
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    time: {
      type: DataTypes.DATE, 
      allowNull: false
    },
    tag: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    Event.belongsTo(models.User, { foreignKey: 'user_id' })
    Event.hasMany(models.Ticket, { foreignKey: 'event_id', onDelete:'CASCADE', hooks:true })
    Event.hasMany(models.Like, { foreignKey: 'event_id', onDelete:'CASCADE', hooks:true })
  };
  return Event;
};