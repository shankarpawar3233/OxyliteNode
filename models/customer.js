const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    customer_Id: {
        type: Number,
        unique: true,
        required: true,
        default:generateCustomerId
    },
    user_Id: {
        type:String
        // type:mongoose.Schema.Types.ObjectId,
        // unique: true,
        // required: true,
        // ref: 'signUp'
    },
    fullName: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,                                                                
        required: true
    },
    address: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    shiftTiming: {
        type: String 
    },
    customerType: {
        type: String
    },
    plantOwner_Id: {
        type:Number
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'plant' 
    },
    subscribeProduct: { 
        type: String,
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    plant_Id: {
        type:Number
        // type: mongoose.Schema.Types.ObjectId,
        // ref:'signUp'
    },
    password: {
        type: String,
        required: true
    },
    profileImg:{
        type:String,
        required:true
    }
}, { timestamps: true });

function generateCustomerId() {
    
}

const Customer = mongoose.model('customer', customerSchema,'customer');

module.exports = Customer;
