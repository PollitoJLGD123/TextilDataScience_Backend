'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('comprobante', {
      id_comprobante: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      fecha_emision: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cliente',
          key: 'id_cliente',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_empleado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'empleado',
          key: 'id_empleado',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      tipo: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
          isIn: [['boleta', 'factura']],
        },
      },
      total: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: false,
      },
      serie: {
        type: Sequelize.STRING(4),
        allowNull: false,
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('comprobante');
  }
};
