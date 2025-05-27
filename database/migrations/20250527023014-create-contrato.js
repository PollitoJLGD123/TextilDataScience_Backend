'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('contrato', {
      id_contrato: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      fecha_inicio: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      fecha_fin: {
        type: Sequelize.DATE,
        allowNull: true, // Puede ser nulo si el contrato es indefinido
      },
      tipo_contrato: {
        type: Sequelize.STRING(50),
        allowNull: false, // Por ejemplo, "Indefinido", "Temporal", etc.
      },
      sueldo: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: false,
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
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('contrato');
  }
};
