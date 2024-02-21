const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    customerId: {
        type: String,
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
    },
    profileImg:{
        type:String,
        required:true
    }
}, { timestamps: true });

function generateCustomerId() {
    const randomPart = Math.floor(1000 + Math.random() * 9000).toString();
    return randomPart;
}

const Customer = mongoose.model('customer', customerSchema,'customer');

module.exports = Customer;
