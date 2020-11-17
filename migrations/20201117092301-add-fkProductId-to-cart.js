'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn("Carts", "ProductId", {
					type: Sequelize.INTEGER,
					references: {
						model: "Products",
						key: "id",
					},
					onUpdate: "CASCADE",
					onDelete: "CASCADE",
				});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.deleteColumn("Carts", "ProductId")
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
