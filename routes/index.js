const router = require("express").Router()
const UserController =require('../controllers/UserController')
const ProductController = require("../controllers/ProductController");
const CartController = require("../controllers/CartController")
const { authentication, authorization, } = require("../middlewares/auth");


//login 
router.post("/login", UserController.login);
//register
router.post("/register", UserController.register);

//get product
router.get("/products",  ProductController.show);

//------------------------CART-------------------------------------
router.get("/carts", authentication, CartController.showCart);

router.post("/carts/:id", authentication, CartController.addCart);

router.delete("/carts/:id", authentication, CartController.deleteCart);

router.post("/checkout", authentication, CartController.checkout);

router.get('/carts/:id', authentication, CartController.find)
router.put('/carts/:id', authentication, CartController.update)

// <--------------------------------------------------------------------------------->
// <--------------------ADMIN--------------------------------------------------------->

//add (admin)
router.post("/products", authentication, authorization, ProductController.add);
//edit (admin)
router.put("/products/:id", authentication, authorization, ProductController.edit);
router.get("/products/:id", authentication, authorization, ProductController.find);
//delete product(admin)
router.delete("/products/:id", authentication, authorization, ProductController.delete);





module.exports = router;