"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Cart extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// cart ini conjungtion table
			Cart.belongsTo(models.User);
			Cart.belongsTo(models.Product);
		}
	}
	Cart.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			quantity: DataTypes.INTEGER,
			status: DataTypes.BOOLEAN,
		},
		{
			hooks: {
				beforeCreate: (user, options) => {
					user.status = false;
				},
			},
			sequelize,
			modelName: "Cart",
		}
	);
	return Cart;
};
