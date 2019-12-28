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
    // associations can be defined here
  };
  return tbl_users;
};