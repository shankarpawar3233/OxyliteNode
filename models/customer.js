const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    customerId: {
        type: Number,
        unique: true,
        required: true,
        default:generatecustomer
    },
    userId: {
        type: Number,
        unique: true,
        required: true,
        ref: 'signUp'
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
        type: String,
        enum: ['Morning', 'Afternoon', 'Evening']
    },
    customerType: {
        type: String,
        enum: ['Distributor', 'Customer']
    },
    plantOwnerId: {
        type:String
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Plant' 
    },
    subscribeProduct: { 
        type: [String],
        enum: ['Jaar', 'Bislery', 'Pouch']
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    plantId: {
        type: mongoose.Schema.Types.String,
        ref: 'signUp'
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

let customerId = 0; 
function generatecustomer() {
    customerId++;
    return customerId;
}

const Customer = mongoose.model('customer', customerSchema,'customer');

module.exports = Customer;
