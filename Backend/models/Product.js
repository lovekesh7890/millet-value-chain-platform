const mongoose=require('mongoose');
const productSchema = new mongoose.Schema({
  ProductName: { type: String, required: true },
  MilletType: { type: String, required: true },
  Variety: { type: String, required: true },
  Price: { type: Number, required: true },
  Stock: { type: String, required: true },
  Description: { type: String, required: true },

});

module.exports=mongoose.model('Product',productSchema);