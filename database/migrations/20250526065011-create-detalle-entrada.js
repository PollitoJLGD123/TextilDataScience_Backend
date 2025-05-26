'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('detalle_entrada', {
      id_detalle_entrada: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_entrada: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'entrada',
          key: 'id_entrada',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_prenda: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'prenda',
          key: 'id_prenda',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      precio_compra: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('detalle_entrada');
  },
};
