const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema(
  {
    full_Name: { type: String, required: true },
    delivery_Address: { type: String, required: true },
    customer_Id: {
       type:String,
      // type: mongoose.Schema.Types.ObjectId,
      // ref: "customer",
      required: true,
    },
    order_Id: {
      type: Number,
      required: true,
      unique: true,
      default: generateOrderId,
    },
    order_Status_Code: { type:Boolean, required: true,default:false },
    payment_Method: { type: String, required: true },
    order_Date_place: { type: String, required: true },
    order_Date_paid: { type: String, required: true },
    product_Id: {
      type:Number,
      // type: mongoose.Schema.Types.ObjectId,
      // ref: "product",
      required: true,
    },
    product_Qty: { type: Number, required: true },
    total_Order_Cost: { type: Number, required: true,defult:0.0 },
    plant_Id: {
      type:Number,
      // type: mongoose.Schema.Types.ObjectId,
      // ref: "plant",
      required: true,
    },
    plantOwnerID: { type: Number, required: true },
  },
  { timestamps: true }
);

function generateOrderId() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

const Order = mongoose.model("Order", OrdersSchema, "orders");

module.exports = Order;
