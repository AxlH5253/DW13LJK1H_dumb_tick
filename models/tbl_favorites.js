'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_favorites = sequelize.define('tbl_favorites', {
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {});
  tbl_favorites.associate = function(models) {
    tbl_favorites.belongsTo(models.tbl_users, {foreignKey : 'userId',as:'user'});
    tbl_favorites.belongsTo(models.tbl_events, {foreignKey : 'eventId'});
  };
  return tbl_favorites;
};