'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      eventId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_events',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      totalPrice: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbl_orders');
  }
};