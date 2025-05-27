'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cliente_natural', {
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
      nombre: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      apellido: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      dni: {
        type: Sequelize.CHAR(8),
        allowNull: false,
      },
      fecha_nac: {
        type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('cliente_natural');
  }
};
