'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_users = sequelize.define('tbl_users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phonrNumber: DataTypes.STRING,
    img: DataTypes.STRING
  }, {});
  tbl_users.associate = function(models) {
    tbl_users.hasMany(
      models.tbl_favorites, {as : 'users', foreignKey : 'userId'}
    ) 

    tbl_users.hasMany(
      models.tbl_events, {as : 'events', foreignKey : 'userId'}
    ) 
  };
  return tbl_users;
};