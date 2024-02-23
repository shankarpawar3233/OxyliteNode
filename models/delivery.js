const mongoose = require('mongoose');
const Customer = require('./customer');

let delivery_Id = 0;

function generateDeliveryId() {
    delivery_Id++;
    return delivery_Id.toString();
}

function calculateRemainingAmount() {
    return this.payableAmount - this.paidAmount;
}

const deliverySchema = new mongoose.Schema({
    delivery_Id: {
        type: Number,
        unique: true,
        required: true,
        default: generateDeliveryId
    },
    customer_Id: {
        type: String, 
        required: true
    },
    order_Id: { type: String, required: true },
    plant_Id: { type: String, required: true },
    orderStatusCode: { type: String, required: true },
    deliveryAddress: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    orderDate: { type: Date, default: Date.now },
    orderDatePlaced: { type: Date, required: true },
    deliveryBoyId: { type: String, required: true },
    orderPaid: { type: Boolean, default: false },
    product_Id: { type: String, required: true },
    productQty: { type: Number, required: true },
    totalOrderCost: { type: Number, required: true },
    payableAmount: { type: Number, required: true },
    paidAmount: { type: Number, default: 0, required: true },
    remainingAmount: {
        type: Number,
        default: calculateRemainingAmount 
    }
});

const Delivery = mongoose.model('Delivery', deliverySchema, 'delivery');
module.exports = Delivery;
