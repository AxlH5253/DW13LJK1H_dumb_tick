'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_categories = sequelize.define('tbl_categories', {
    name: DataTypes.STRING
  }, {});
  tbl_categories.associate = function(models) {
    // associations can be defined here
  };
  return tbl_categories;
};