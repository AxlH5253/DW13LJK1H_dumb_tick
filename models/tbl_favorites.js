'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_favorites = sequelize.define('tbl_favorites', {
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {});
  tbl_favorites.associate = function(models) {
    // associations can be defined here
  };
  return tbl_favorites;
};