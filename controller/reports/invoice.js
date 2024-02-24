const Invoice = require('../../models/reports/invoice');
const Customer=require('../../models/customer')

const getAllcustList = async (req, res) => {
    try {
        const invoices = await Invoice.find().populate('customer');
        res.json({ invoices });
    } catch (error) {
        console.error("Error occurred fetching the invoices", error);
        res.status(500).json({ error: 'Internal server error' });
    }

}

module.exports = {
    getAllcustList
}
