const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    product_Id: {type: Number, required: true,unique: true,default: generateProductId },
	plant_Id: {type: Number, required: true },
	product_Name: {type: String, required: true },
	product_Brand_Name: {type:String , required: true },
	product_Size_Ltr: {type:Number, required: true },
	product_Unit_Price: {type: Number, required: true },
	product_Qty:{type: Number,required: true }	
}, { timestamps: true });
function  generateProductId() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
const Product = mongoose.model("productData", ProductSchema,"product");
module.exports = Product;
