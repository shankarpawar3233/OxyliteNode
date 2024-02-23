const mongoose=require('mongoose');

let payment_Id = 0;

function generatePaymentId() {
    payment_Id++;
    return payment_Id;
}

const paymentSchema=new mongoose.Schema({

    payment_Id: {
        type: Number,
        unique: true,
        required: true,
        default: generatePaymentId
    },

    paymentMode:{
        type:String,
        required:true, 
        enum: ['Cash', 'Cheque', 'Online']

    },
    customerName:{
        type:String,
        required: true
    },
    receiverName:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        require:true,

    },

    date:{
        type: Date, default: Date.now ,required:true
    },

    remark:{
        type:String
    }

})

const Payment=mongoose.model('payment',paymentSchema,'payment');
module.exports=Payment;