'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    user_id: DataTypes.NUMBER,
    event_id: DataTypes.NUMBER
  }, {});
  Like.associate = function(models) {
    // associations can be defined here
    Like.belongsTo(models.User, { foreignKey: 'user_id' })
    Like.belongsTo(models.Event, { foreignKey: 'event_id' })
  };
  return Like;
};