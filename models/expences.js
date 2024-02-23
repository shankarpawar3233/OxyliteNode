const mongoose = require('mongoose');

const expencesSchema = new mongoose.Schema({
    expences_Id: {
        type: Number,
        unique: true,
        required: true
    },
    paymentMode: {
        type: String,
        required: true,
        enum: ['Cash', 'Cheque', 'Online']
    },
    category: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    message: {
        type: String
    }
});

const Expences = mongoose.model('expences', expencesSchema, 'expences');
module.exports = Expences;

async function initializeExpencesId() {
    const highestExpencesId = await Expences.findOne({}, {}, { sort: { 'expences_Id': -1 } });
    expences_Id = highestExpencesId ? highestExpencesId.expences_Id : 0;
}

initializeExpencesId().then(() => {
    console.log('Expences ID initialized successfully.');
}).catch(error => {
    console.error('Error initializing Expences ID:', error);
});
