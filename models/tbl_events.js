'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_events = sequelize.define('tbl_events', {
    title: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    img: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    urlMaps: DataTypes.STRING,
    startAt: DataTypes.DATE,
    endAt: DataTypes.DATE
  }, {});
    tbl_events.associate = function(models) {
      tbl_events.belongsTo(models.tbl_categories, {foreignKey : 'categoryId',as:'category'});
      tbl_events.belongsTo(models.tbl_users, {foreignKey : 'userId',as:'createdBy'});
  };
  return tbl_events;
};