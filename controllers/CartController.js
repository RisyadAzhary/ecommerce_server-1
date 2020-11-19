const { Cart, Product } = require("../models")

class CartController {
	static showCart(req, res, next) {
		Cart.findAll({
			where: {
				UserId: req.userData.id,
			},
			include: Product,
		})
			.then((data) => {
				return res.status(200).json(data);
			})
			.catch((err) => {
				return next(err);
			});
	}
	static addCart(req, res, next) {
		let cart = null;
		Cart.findOne({
			where: {
				UserId: req.userData.id,
				ProductId: req.params.id,
				status: false,
			},
			include: [Product],
		})
			.then((data) => {
				cart = data;
				return Product.findByPk(req.params.id);
			})
			.then((product) => {
				let totalQuantity = cart ? cart.quantity + 1 : 1;
				if (product.stock >= totalQuantity) {
					if (!cart) {
						let params = {
							UserId: req.userData.id,
							ProductId: req.params.id,
							quantity: 1,
						};
						return Cart.create(params);
					} else {
						let params = {
							status: false,
							quantity: cart.quantity + 1,
						};
						return Cart.update(params, {
							where: {
								ProductId: req.params.id,
								UserId: req.userData.id,
								status: false,
							},
							returning: true,
						});
					}
				} else {
					throw { message: "Out of Stock" };
				}
			})
			.then((data) => {
				if (data[0]) {
					return res.status(200).json(data[1][0]);
				} else {
					return res.status(201).json(data);
				}
			})
			.catch((err) => {
				console.log(err);
				return next(err);
			});
	}
	static deleteCart(req, res, next) {
		let options = {
			where: {
				ProductId: req.params.id,
			},
		};
		Cart.destroy(options)
			.then((data) => {
				return res.status(200).json({ message: "Deleted Succesfully", data });
			})
			.catch((err) => {
				return next(err);
			});
	}
	static async checkout(req, res, next) {
		try {
			const cart = await Cart.findAll({
				where: {
					UserId: req.userData.id,
					status: false
				},
				include: Product,
			});

			console.log(cart,'<<<<<<<<<<<<<<<<<<<ini cart')
			for (const sell of cart) {
				// console.log(sell.Product.stock,'<<<<< ini produk stock')
				// console.log(sell.quantity,'<<<<< ini qty di checkout')
				console.log(sell.id , '<<<<<<<<<<<<<<< ini sell ya !')
				let sisaStock = { stock: sell.Product.stock - sell.quantity };

				console.log({stock: sell.Product.stock})

				// console.log(sell.quantity,'<<<<< ini qty di checkout')
				console.log(sisaStock,'<<<<< ini sisa stocknyaaa')
				await Product.update(sisaStock, {
					where: {
						id: sell.ProductId,
					},
				});
				console.log(sell.id, "<<<<<< INI SELL IDnyaaa");
				await Cart.update(
					{
						status: true,
					},
					{
						where: {
							id: sell.id,
						},
					}
				);
			}
			return res.status(200).json(cart);
		} catch (err) {
			return next(err);
		}
	}
	static find(req, res, next) {
		Cart.findByPk(req.params.id)
			.then((data) => {
				return res.status(200).json(data);
			})
			.catch((err) => {
				return next(err);
			});
	}
	static update(req, res, next) {
		let params = {
			quantity: req.body.quantity,
		};
		Cart.update(params, {
			where: {
				id: req.params.id,
			},
			returning: true,
		})
			.then((data) => {
				return res.status(200).json(data);
			})
			.catch((err) => {
				return next(err);
			});
	}
}

module.exports = CartController;