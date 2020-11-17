const { User } = require("../models");
const { comparePass } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");

class UserController {
	static login(req, res, next) {
		let options = {
			where: {
				email: req.body.email,
			},
		};
		User.findOne(options)
			.then((data) => {
				console.log(data, " <<<<<<<< ini data ");

				if (data) {
					let isValid = comparePass(req.body.password, data.password);
					if (isValid) {
						const access_token = generateToken(data);
						return res.status(200).json({ access_token, email: data.email });
					} else {
						throw {
							message: "Invalid email or password",
							statusCode: 400,
						};
					}
				} else {
					throw {
						message: "Invalid email or password",
						statusCode: 400,
					};
				}
			})
			.catch((err) => {
				console.log(err, " <<<<<<<<<< ini eror login ya");
				return next(err);
			});
	}

	static register(req, res, next) {
		const params = {
			email: req.body.email,
			password: req.body.password,
		};
		console.log(params,'<<<<<<<<<<<<<<<<<<<< cini params gan')
		User.create(params)
			.then((userData) => {
				res.status(201).json({
					email: userData.email,
					msg: "behasil register",
				});
			})
			.catch((err) => {
				res.status(500).json(err);
			});
	}
}

module.exports = UserController;
