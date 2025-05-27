'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('pago', {
      id_pago: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      fecha_pago: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      id_nomina: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'nomina',
          key: 'id_nomina',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      monto: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: false,
      },
      metodo_pago: {
        type: Sequelize.STRING(50),
        allowNull: false,
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('pago');
  }
};
