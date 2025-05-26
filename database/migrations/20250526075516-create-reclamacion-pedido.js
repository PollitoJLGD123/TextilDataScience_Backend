'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reclamacion_pedido', {
      id_reclamacion_pedido: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      motivo: {
        type: Sequelize.STRING(400),
        allowNull: false,
      },
      fecha_reclamacion: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      estado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      id_pedido_proveedor: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'pedido_proveedor',
          key: 'id_pedido_proveedor',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('reclamacion_pedido');
  },
};
