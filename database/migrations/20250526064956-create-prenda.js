'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('prenda', {
      id_prenda: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre_prenda: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      descripcion: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      precio: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_categoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'categoria',
          key: 'id_categoria',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_marca: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'marca',
          key: 'id_marca',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_talla: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'talla',
          key: 'id_talla',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_proveedor: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'proveedor',
          key: 'id_proveedor',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('prenda');
  },
};
