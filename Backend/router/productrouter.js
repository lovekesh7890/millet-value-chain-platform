const express = require("express");
const router = express.Router();

const { addProduct, getProducts } = require("../controllers/productController");
// const authMiddleware = require("../middleware/authMiddleware");
const verifytoken = require("../middleware/authMiddleware");


router.post("/", verifytoken,addProduct);  
router.get("/", verifytoken, getProducts);


module.exports = router;