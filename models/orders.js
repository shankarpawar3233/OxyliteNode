const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({

    
});

const orders = mongoose.model("ordersData",OrdersSchema,"orders");
module.exports=orders;