'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cliente_juridico', {
      id_cliente: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'cliente',
          key: 'id_cliente',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      ruc: {
        type: Sequelize.STRING,
        allowNull: false
      },
      razon_social: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('cliente_juridico');
  }
};
