const mongoose = require('mongoose');

const signUpSchema = new mongoose.Schema({
    user_Id: {
        type: Number,
        unique: true,
        required: true,
        default: generateUserId
    },
        name: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    mobile_number: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 3,
        max: 10
    },
    plant_Id:{
        type: String,
        required: true,
    },
    userType:{
        type: String,
        required: true,

    },
    customer_Id:{
        type: Number,
        unique: true,
        required: true,
        default: generatecustomer
    }

}, {
    timestamps: true
});

function generateUserId() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

let userIdCounter = 0; 
function generatecustomer() {
    userIdCounter++; 
    return userIdCounter.toString(); 
}

const signUp = mongoose.model("signUp", signUpSchema, "signUp");
module.exports = signUp;
