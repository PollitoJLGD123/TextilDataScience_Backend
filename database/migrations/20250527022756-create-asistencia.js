'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('asistencia', {
      id_asistencia: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      hora_entrada: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      hora_salida: {
        type: Sequelize.TIME,
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
    await queryInterface.dropTable('asistencia');
  }
};
