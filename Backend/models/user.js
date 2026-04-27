const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);

const productSchema = new mongoose.Schema({
  ProductName: { type: String, required: true },
  MilletType: { type: String, required: true },
  Variety: { type: String, required: true },
  Price: { type: Number, required: true },
  Stock: { type: String, required: true },
  Description: { type: String, required: true },

});

module.exports=mongoose.model('Product',productSchema);