
const Product = require("../models/Product");

const addProduct = async (req, res) => {
  try {
    const product = new Product({
      ...req.body,
      userId:req.user.id,
    });
    
    await product.save();

    res.status(201).json({ message: "Product added" });
  } catch (err) {
    res.status(500).json({message:"Try again to add prouduct"});
  }
};

const getProducts = async (req, res) => {
  try {
    const productlist = await Product.find({ userId: req.user.id });

    res.status(200).json(productlist);
  } catch (error) {
    res.status(500).json({ message: "Internal Error" });
  }
};

module.exports = { addProduct, getProducts };