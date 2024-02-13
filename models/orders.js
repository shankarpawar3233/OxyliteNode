const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({

	full_Name:{type: String,required: true},
	delevry_Address:{type: String,required: true},
	// customer_id: {type:mongoose.Schema.Types.String, ref:'customer',required:true},
	customer_id:{type:String,required:true},
	order_id: {type: String,required: true,unique: true,default: generateOrderId},
	order_Status_Code: {type: String,required: true},
	payment_Method: {type: String,required: true},
	order_Date_place: {type:String ,required: true},
	order_Date_paid:{type: String,required: true},
	product_Id:{type: String,required: true},	
	product_Qty:{type: Number,required: true},
	total_Order_Cost:{type: String,required: true},
	plantId:{type:mongoose.Schema.Types.String, ref:'plant', required: true},
    plantOwnerID:{type: Number,required: true}
    
},{ timestamps: true });

function  generateOrderId() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
const orders = mongoose.model("ordersData",OrdersSchema,"orders");
module.exports=orders;