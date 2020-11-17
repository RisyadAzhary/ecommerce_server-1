'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
        return queryInterface.addColumn("Carts", "ProductId", {
					type: Sequelize.INTEGER,
					references: {
						model: "Products",
						key: "id",
					},
					onUpdate: "CASCADE",
					onDelete: "CASCADE",
				});
  },

  down:  (queryInterface, Sequelize) => {

    return queryInterface.removeColumn("Carts", "ProductId")
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
