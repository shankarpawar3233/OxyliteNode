const mongoose = require('mongoose');
const Customer = require('./customer');

let deliveryId = 0;

function generateDeliveryId() {
    deliveryId++;
    return deliveryId.toString();
}

function calculateRemainingAmount() {
    return this.payableAmount - this.paidAmount;
}

const deliverySchema = new mongoose.Schema({
    deliveryId: {
        type: String,
        unique: true,
        required: true,
        default: generateDeliveryId
    },
    customerId: {
        type: String, // Assuming customerId is stored as String
        required: true
    },
    orderId: { type: String, required: true },
    plantId: { type: String, required: true },
    orderStatusCode: { type: String, required: true },
    deliveryAddress: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    orderDate: { type: Date, default: Date.now },
    orderDatePlaced: { type: Date, required: true },
    deliveryBoyId: { type: String, required: true },
    orderPaid: { type: Boolean, default: false },
    productId: { type: String, required: true },
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
