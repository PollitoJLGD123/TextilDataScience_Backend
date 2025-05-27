'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('factura', {
      id_comprobante: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'comprobante',
          key: 'id_comprobante',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      ruc_emisor: {
        type: Sequelize.CHAR(11),
        allowNull: false,
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('factura');
  }
};
