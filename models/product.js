const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    product_Id: {
      type: String,
      required: true,
      unique: true,
      default: generateProductId,
    },
    plant_Id: {
		type:String,
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'plant',
      required: true,
    },
    product_Name: { type: String, required: true },
    product_Brand_Name: { type: String, required: true },
    product_Size_Ltr: { type: Number, required: true,   default: 0.0, },
    product_Unit_Price: { type: Number, required: true },
    product_Qty: { type: Number, required: true },
  },
  { timestamps: true }
);

function generateProductId() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
const Product = mongoose.model("productData", ProductSchema, "product");
module.exports = Product;
