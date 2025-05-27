'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cliente', {
      id_cliente: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      tipo: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
          isIn: [['juridico', 'natural']],
        },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      telefono: {
        type: Sequelize.CHAR(9),
        allowNull: false,
      },
      direccion: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      creado_en: {
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('cliente');
  },
};
