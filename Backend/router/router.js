const express = require("express");
const router = express.Router();

const {
  signup,
  getUsers,
  login,
  getProducts,
} = require("../controllers/userController");

router.post("/signup",signup);
router.post('/login',login);
const { addProduct, getProducts } = require("../controllers/productController");

router.post("/addproduct", addProduct);
router.get("/product", getProducts);
router.get("/", getUsers);


module.exports = router;