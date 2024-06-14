const userlog = require("../controllers/UserController")
const express = require("express")
const ProductData = require("../controllers/ProductsController")
const orders = require("../controllers/PaymentController")

const Router = express.Router();

Router.post("/signup",userlog.Signup);

Router.post("/login",userlog.Login);

Router.get("/products",ProductData.getProducts);

Router.get("/product/:id",ProductData.getProductById);

Router.post("/payment/gen-order",orders.getOrderID);

Router.post("/payment/verify",orders.verifyPayment);

module.exports = Router
