
const mongoose = require('mongoose');

let invoice_Id = 0;

function generateInvoiceId() {
    invoice_Id++;
    return invoice_Id
}

const invoiceSchema = new mongoose.Schema({
    invoice_Id:{
      type:Number,
      default:generateInvoiceId()
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    }
});

const Invoice = mongoose.model('Invoice', invoiceSchema,'invoiceReport');

module.exports = Invoice;
