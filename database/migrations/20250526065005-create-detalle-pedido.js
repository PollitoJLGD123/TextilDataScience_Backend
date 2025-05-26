'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('detalle_pedido', {
      id_detalle_pedido: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_pedido_proveedor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'pedido_proveedor',
          key: 'id_pedido_proveedor',
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('detalle_pedido');
  },
};
