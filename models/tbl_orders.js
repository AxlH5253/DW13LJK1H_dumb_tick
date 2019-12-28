'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_orders = sequelize.define('tbl_orders', {
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    status: DataTypes.STRING,
    totalPrice: DataTypes.INTEGER
  }, {});
  tbl_orders.associate = function(models) {
    // associations can be defined here
  };
  return tbl_orders;
};